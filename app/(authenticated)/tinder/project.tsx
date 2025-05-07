{
  /*
  TODO: Implement "studybuddy.tsx" page's features
  */
}




import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
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
  return (
    <ScrollView>
      <View>
        {mock_project_data.map((project) => (
          <TouchableOpacity key={project.id} style={{alignItems:"center",padding:10,backgroundColor:Colors.lightGray,marginRight:10,marginLeft:10,borderRadius:5,marginTop:10}}  >
          <Image source={{uri:project.image}} style={{width:"100%",height:200,borderRadius:5}} />
          <View style={{flexDirection:"column"}}>
          <Text style={{fontSize:26,paddingLeft:10,fontWeight:"bold",textAlign:"center"}}>{project.title}</Text>
          <Text style={{fontSize:14,paddingLeft:10}}>{project.desc}</Text>
          <Text style={{fontSize:14,paddingLeft:10,fontWeight:"bold"}}>Tags:</Text>
          <View style={{flexDirection:"row"}}> 
            {project.tags.map((tag,index)=>(
              <View key={index} style={{backgroundColor:Colors.primary,width:"30%",borderRadius:5,marginRight:5}}>
              <Text style={{fontSize:14,paddingLeft:10,color:Colors.primaryMuted}}>{tag}</Text>
              </View>
            ))}
          </View>
          <Text style={{fontSize:14,paddingLeft:10,fontWeight:"bold"}}>Roles:</Text>
            {project.roles.map((role,index)=>(
              <View key={index} >
              <Text style={{fontSize:14,paddingLeft:10,color:"black"}}>- {role}</Text>
              </View>
            ))}
          </View>
          </TouchableOpacity>
        ))}

      </View>
    </ScrollView>
  )
}

export default project