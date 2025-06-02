{
  /*
  TODO: Implement "studybuddy.tsx" page's features
  */
}




import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
const mock_project_data=[
  {
    id:1,
    title:"WhalePro",
    desc:"WhalePro is a platform that connects whale watchers with local guides, providing a unique and immersive experience for nature enthusiasts.",
    image:"https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags:["React","Node.js","Express.js"],
    roles:["Frontend Developer","Backend Developer"],
  },
  {
    id:2,
    title:"EcoTrack",
    desc:"A mobile application that helps users track and reduce their carbon footprint through daily activity monitoring and personalized recommendations.",
    image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags:["React Native","Firebase","Redux"],
    roles:["Mobile Developer","UI/UX Designer","Data Analyst"],
  },
  {
    id:3,
    title:"CodeMentor",
    desc:"An online platform connecting coding students with experienced mentors for personalized learning sessions and career guidance.",
    image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    tags:["Vue.js","MongoDB","WebRTC"],
    roles:["Full Stack Developer","Project Manager"],
  },
  {
    id:4,
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
        <Image source={{uri:mock_project_data[choosenNow].image}} style={{width:"100%",height:200,borderTopLeftRadius:5,borderTopRightRadius:5}}/>
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:25}}>{mock_project_data[choosenNow].title} </Text>
        <View>
          <Text style={{textAlign:"center",paddingLeft:5,paddingRight:5}}>{mock_project_data[choosenNow].desc}</Text>
        </View>
        <Text style={{fontWeight:"bold",marginLeft:5,marginTop:5,marginBottom:5}}>Tags</Text>
        <View style={{flexDirection:"row",paddingBottom:5}}>
        {mock_project_data[choosenNow].tags.map((tag, index) => (
          <View key={index} style={{backgroundColor:Colors.primary,borderRadius:5,width:"30%",marginLeft:5}}>
            <Text style={{color:"white"}}>{tag}</Text>
          </View>
        ))}
        </View>     
        <Text style={{fontWeight:"bold",marginLeft:5,marginTop:5,marginBottom:5}}>Roles</Text>
        {mock_project_data[choosenNow].roles.map((role, index) => (
          <TouchableOpacity key={index} style={{backgroundColor:Colors.primary,borderRadius:5,width:"60%",marginLeft:65,marginRight:5,marginBottom:15}}>
            <Text style={{textAlign:"center",color:"white"}}>Apply for {role}</Text>
          </TouchableOpacity>
        )
        )}
          <TouchableOpacity style={{backgroundColor:Colors.primary,borderRadius:5,width:"60%",marginLeft:65,marginRight:5,marginBottom:15,alignItems:"center"}} onPress={()=>selectRandom(mock_project_data)}>
            <Ionicons name='refresh-outline' size={24} color={"white"} />
            <Text style={{textAlign:"center",color:"white",textAlignVertical:"center"}}>Pass this project</Text>
          </TouchableOpacity>
    </View>
    </View>
  )
}

export default project