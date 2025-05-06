import Colors from '@/constants/Colors'
import React from 'react'
import { Text, View, Image,TouchableOpacity
 } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
const mock_data_competitions = [
  {
    id: 1,
    name: "Teknofest",
    desc: "A competition for technology and innovation",
    when: "2023-10-01",
    where: "Istanbul/Turkey",
    category: ["Aerospace", "Robotics"],
    teams: ["Team A", "Team B"],
    imageUrl: "https://cdn.teknofest.org/media/upload/userFormUpload/2_89KY0.jpg"
  },
  {
    id: 2,
    name: "Robotics Challenge",
    desc: "International robotics competition for university students",
    when: "2023-11-15",
    where: "Tokyo/Japan",
    category: ["Robotics", "AI"],
    teams: ["Team C", "Team D", "Team E"],
    imageUrl: "https://cdn.teknofest.org/media/upload/userFormUpload/2_89KY0.jpg"
  },
  {
    id: 3,
    name: "Hackathon 2023",
    desc: "48-hour coding competition to solve real-world problems",
    when: "2023-12-05",
    where: "San Francisco/USA",
    category: ["Software", "Hardware"],
    teams: ["Coders United", "Debug Masters"],
    imageUrl: "https://cdn.teknofest.org/media/upload/userFormUpload/2_89KY0.jpg"
  }
]
const Events = () => {
  return (
    <SafeAreaView>
      <Text style={{fontWeight:"bold",fontSize:36,textAlign:"center"}}>💎 Etkinlikler</Text>
      <Text style={{marginLeft:10,fontWeight:"bold",fontSize:20,marginTop:10}}>Yarışmalar</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:10}}>
      {mock_data_competitions.map((item, index) => (
        <View key={index} style={{marginVertical:10,backgroundColor:Colors.primaryMuted,marginLeft:10,borderRadius:10,width:300}}>
          <Image source={{uri:item.imageUrl}} style={{width:200,height:200,borderRadius:10,alignSelf:"center",marginTop:10,marginBottom:10}}/>
          <Text style={{fontWeight:"bold",textAlign:"center",fontSize:18}}>{item.name}</Text>
          <Text style={{textAlign:"center",marginRight:10,marginLeft:10}}>{item.desc}</Text>
          <View style={{backgroundColor:"blue",marginTop:10,marginBottom:5}}><Text style={{textAlign:"center",color:"white"}}>{item.when}</Text> </View>
          <View style={{backgroundColor:"red",marginTop:5,marginBottom:10}}> <Text style={{textAlign:"center",color:"white"}}>{item.where}</Text> </View>
          <View style={{flexDirection:"row",marginLeft:40}}> 
          {item.category.map((cat, index) => (
            <View key={index} style={{backgroundColor:Colors.primary,width:"30%",borderRadius:10,padding:5,marginTop:10,marginLeft:5}}>
              <Text style={{textAlign:"center",color:"white"}}>{cat}</Text>
            </View>
          ))}
          </View>
          <View style={{flexDirection:"row",marginLeft:40}}> 
          {item.teams.map((team, index) => (
            <View key={index} style={{backgroundColor:Colors.gray,width:"30%",borderRadius:10,padding:5,marginTop:10,marginLeft:5,marginBottom:10}}>
              <Text style={{textAlign:"center",color:"white"}}>{team}</Text>
            </View>
          ))}
          </View>
          <TouchableOpacity style={{backgroundColor:Colors.primary,width:"80%",borderRadius:10,padding:5,marginLeft:30,marginBottom:10}}>
            <Text style={{textAlign:"center",color:"white"}}>Bireysel Katıl</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:Colors.primary,width:"80%",borderRadius:10,padding:5,marginLeft:30,marginBottom:10}}>
            <Text style={{textAlign:"center",color:"white"}}>Takıma Katıl</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:Colors.primary,width:"80%",borderRadius:10,padding:5,marginLeft:30,marginBottom:3}}>
            <Text style={{textAlign:"center",color:"white"}}>Takım Oluştur</Text>
          </TouchableOpacity>
        </View>
      ))}
      </ScrollView>
      </SafeAreaView>
  )
}

export default Events