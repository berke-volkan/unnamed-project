{
  /*
  TODO: Implement "studybuddy.tsx" page's features
  */
}




import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { getDatabase, onValue, ref,push } from 'firebase/database'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebaseConfig'
const ProjectData=[
  {
    title:"EcoTrack",
    desc:"A mobile application that helps users track and reduce their carbon footprint through daily activity monitoring and personalized recommendations.",
    image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags:["React Native","Firebase","Redux"],
    roles:["Mobile Developer","UI/UX Designer","Data Analyst"],
  },
  {
    title:"CodeMentor",
    desc:"An online platform connecting coding students with experienced mentors for personalized learning sessions and career guidance.",
    image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags:["Vue.js","MongoDB","WebRTC"],
    roles:["Full Stack Developer","Project Manager"],
  },
  {
    title:"UrbanGarden",
    desc:"A community-based application helping urban dwellers create and maintain sustainable gardens in limited spaces.",
    image:"https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags:["Angular","Python","Django"],
    roles:["Backend Developer","Content Creator","UX Researcher"],
  }
]

const project = () => {
  let choosen: any[]=[]
  let [choosenNow, setChoosen] = React.useState(0)
  const [ProjectData1,setProjectData]=React.useState<any>()
  const app=initializeApp(firebaseConfig)
  const db=getDatabase(app)
  const getProjectData = () => {
    const ProjectDataRef = ref(db, 'projects');
      onValue(ProjectDataRef, (snapshot) => {
      if (snapshot.exists()) {
        const ProjectDataDataa: any[] = [];
          snapshot.forEach((childSnapshot) => {
              const data = childSnapshot.val();
              console.log(data)
                ProjectDataDataa.push({
                  title:data.title,
                  desc:data.desc,
                  image:data.image,
                  tags:data.tags,
                  roles:data.roles
                  });
                  });
                  setProjectData(ProjectDataDataa);
                  console.log(ProjectDataDataa)
                  console.log(ProjectData1)
              } else {
                  console.log("No data available");
              }
          });
      }

  useEffect(()=>{
    getProjectData()
    console.log(ProjectData1)
  },[])

  let selectRandom = function (arr: any[]) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    if (choosen.includes(arr[randomIndex])) {
      return selectRandom(arr);
    }else{
      choosen.push(arr[randomIndex])
      setChoosen(randomIndex)
      return arr[randomIndex];
    }
  }

  return (
    <View style={{alignItems:"center"}}>
      <View style={{backgroundColor:Colors.primaryMuted,width:"90%",alignSelf:"center",borderRadius:5,height:650}}> 
        <Image source={{uri:ProjectData[choosenNow].image}} style={{width:"100%",height:200,borderTopLeftRadius:5,borderTopRightRadius:5}}/>
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:25}}>{ProjectData[choosenNow].title} </Text>
        <View>
          <Text style={{textAlign:"center",paddingLeft:5,paddingRight:5}}>{ProjectData[choosenNow].desc}</Text>
        </View>
        <Text style={{fontWeight:"bold",marginLeft:5,marginTop:5,marginBottom:5}}>Tags</Text>
        <View style={{flexDirection:"row",paddingBottom:5}}>
        {ProjectData[choosenNow].tags.map((tag:any, index:any) => (
          <View key={index} style={{backgroundColor:Colors.primary,borderRadius:5,width:"30%",marginLeft:5}}>
            <Text style={{color:"white"}}>{tag}</Text>
          </View>
        ))}
        </View>     
        <Text style={{fontWeight:"bold",marginLeft:5,marginTop:5,marginBottom:5}}>Roles</Text>
        {ProjectData[choosenNow].roles.map((role:any, index:any) => (
          <TouchableOpacity key={index} style={{backgroundColor:Colors.primary,borderRadius:5,width:"60%",marginLeft:65,marginRight:5,marginBottom:15}}>
            <Text style={{textAlign:"center",color:"white"}}>Apply for {role}</Text>
          </TouchableOpacity>
        )
        )}
          <TouchableOpacity style={{backgroundColor:Colors.primary,borderRadius:5,width:"60%",marginLeft:65,marginRight:5,marginBottom:15,alignItems:"center"}} onPress={()=>selectRandom(ProjectData)}>
            <Ionicons name='refresh-outline' size={24} color={"white"} />
            <Text style={{textAlign:"center",color:"white",textAlignVertical:"center"}}>Pass this project</Text>
          </TouchableOpacity>
    </View>
    </View>
  )
}

export default project