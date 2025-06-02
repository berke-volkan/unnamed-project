
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { 
  Text, 
  View, 
  Image,
  TouchableOpacity,
<<<<<<< HEAD
=======
  StyleSheet,
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
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
    imageUrl: "https://cdn.teknofest.org/media/upload/userFormUpload/2_89KY0.jpg",
    link: "https://teknofest.org"
  },
  {
    id: 2,
    name: "Robotics Challenge",
    desc: "International robotics competition for university students",
    when: "2023-11-15",
    where: "Tokyo/Japan",
    category: ["Robotics", "AI"],
<<<<<<< HEAD
    teams: ["Team C", "Team D"],
=======
    teams: ["Team C", "Team D", "Team E"],
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
    imageUrl: "https://cdn.teknofest.org/media/upload/userFormUpload/2_89KY0.jpg",
    link: "https://roboticschallenge.org"
  },
  {
    id: 3,
    name: "Hackathon 2023",
    desc: "48-hour coding competition to solve real-world problems",
    when: "2023-12-05",
    where: "San Francisco/USA",
    category: ["Software", "Hardware"],
    teams: ["Coders United", "Debug Masters"],
    imageUrl: "https://cdn.teknofest.org/media/upload/userFormUpload/2_89KY0.jpg",
    link: "https://hackathon2023.dev"
  },
  {
    id: 4,
    name: "AI Innovation Cup",
    desc: "Competition focused on artificial intelligence innovations",
    when: "2024-01-20",
    where: "Berlin/Germany",
    category: ["AI", "Machine Learning"],
    teams: ["Neural Networks", "Deep Thinkers"],
    imageUrl: "https://images.unsplash.com/photo-1591453089816-0fbb971b454c?q=80&w=1000&auto=format&fit=crop",
    link: "https://aiinnovationcup.com"
  },
  {
    id: 5,
    name: "GreenTech Challenge",
    desc: "Environmental technology solutions competition",
    when: "2024-02-15",
    where: "Stockholm/Sweden",
    category: ["Sustainability", "CleanTech"],
    teams: ["EcoSolvers", "Green Innovators"],
    imageUrl: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop",
    link: "https://greentechcomp.org"
  }
]

const mock_data_sidetalks = [
  {
    id: 1,
    name: "Climate Change Dialogue",
    desc: "Discussing solutions for global warming and sustainability",
    when: "2023-10-15",
    where: "New York/USA",
    category: ["Environment", "Policy"],
    speakers: ["Dr. Emily Chen", "Prof. James Wilson"],
    speakerPhotos: [
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
    ],
    imageUrl: "https://images.unsplash.com/photo-1615608178738-37f9e80546db?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Future of AI Ethics",
    desc: "Exploring ethical implications of artificial intelligence",
    when: "2023-11-05",
    where: "Berlin/Germany",
    category: ["Technology", "Ethics"],
    speakers: ["Sarah Johnson", "Dr. Michael Lee", "Prof. Ana Garcia"],
    speakerPhotos: [
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1000&auto=format&fit=crop"
    ],
    imageUrl: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Economic Forum 2023",
    desc: "Debating current economic challenges and opportunities",
    when: "2023-12-10",
    where: "Singapore",
    category: ["Economics", "Global Affairs"],
    speakers: ["Dr. Robert Kim", "Prof. Lisa Chen"],
    speakerPhotos: [
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?q=80&w=1000&auto=format&fit=crop"
    ],
    imageUrl: "https://images.unsplash.com/photo-1591115765373-5207764f72e7?q=80&w=1000&auto=format&fit=crop"
  }
]
const Events = () => {
  const router =useRouter()
  return (
    <SafeAreaView>
      <ScrollView>
      <Text style={{fontWeight:"bold",fontSize:36,textAlign:"center"}}>💎 Etkinlikler</Text>
      <Text style={{marginLeft:10,fontWeight:"bold",fontSize:20,marginTop:10}}>Yarışmalar</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:10}}>
      {mock_data_competitions.map((item, index) => (
        <View key={index} style={{marginVertical:10,backgroundColor:Colors.primaryMuted,marginLeft:10,borderRadius:10,width:300}}>
          <Image source={{uri:item.imageUrl}} style={{width:200,height:200,borderRadius:10,alignSelf:"center",marginTop:10,marginBottom:10}}/>
          <Text style={{fontWeight:"bold",textAlign:"center",fontSize:18}}>{item.name}</Text>
          <Text style={{textAlign:"center",marginRight:10,marginLeft:10}}>{item.desc}</Text>
          <Text style={{width:"100%",textAlign:"center",marginTop:5}}>
            <Ionicons name="calendar-outline" size={20} color="black" style={{alignSelf:"center"}}/>
            <Text style={{textAlign:"center"}}>{item.when}</Text>
          </Text>
          <Text style={{width:"100%",textAlign:"center",marginTop:5}}>
            <Ionicons name="location-outline" size={20} color="black" style={{alignSelf:"center"}}/>
            <Text style={{textAlign:"center",marginBottom:1}}>{item.where}</Text>
          </Text>
          <View style={{flexDirection:"row",marginLeft:40}}> 
          {item.category.map((cat, index) => (
<<<<<<< HEAD
            <View key={index} style={{backgroundColor:Colors.primary,width:"40%",borderRadius:10,padding:5,marginTop:10,marginLeft:5}}>
=======
            <View key={index} style={{backgroundColor:Colors.primary,width:"30%",borderRadius:10,padding:5,marginTop:10,marginLeft:5}}>
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
              <Text style={{textAlign:"center",color:"white"}}>{cat}</Text>
            </View>
          ))}
          </View>
          <View style={{flexDirection:"row",marginLeft:40}}> 
          {item.teams.map((team, index) => (
<<<<<<< HEAD
            <View key={index} style={{backgroundColor:Colors.gray,width:"40%",borderRadius:10,padding:5,marginTop:10,marginLeft:5,marginBottom:10}}>
=======
            <View key={index} style={{backgroundColor:Colors.gray,width:"30%",borderRadius:10,padding:5,marginTop:10,marginLeft:5,marginBottom:10}}>
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
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
      <Text style={{marginLeft:10,fontWeight:"bold",fontSize:20,marginTop:10}}>Sohbet / Forumlar</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{marginTop:10}}>
      {mock_data_sidetalks.map((item, index) => (
        <View key={index} style={{marginVertical:10,backgroundColor:Colors.primaryMuted,marginLeft:10,borderRadius:10,width:300}}>
          <View style={{flexDirection:"row",alignSelf:"center"}}> 
          <Ionicons name="chatbubble-ellipses-outline" size={50} color="black" style={{alignSelf:"center",marginTop:10}}/>
          <View style={{flexDirection:"column"}}>
          <Text style={{fontWeight:"bold",textAlign:"center",fontSize:18,textAlignVertical:"center",marginTop:10}}>{item.name}</Text>
          <View style={{flexDirection:"row"}}> 
          {item.category.map((cat, index) => (
            <View key={index} style={{backgroundColor:Colors.primary,width:"auto",borderRadius:10,padding:5,marginTop:5,marginLeft:3}}>
              <Text style={{textAlign:"center",color:"white"}}>{cat}</Text>
            </View>
          ))}
          </View>
  
          </View>
          </View>
          <View style={{flexDirection:"row",marginLeft:40}}> 
          {item.speakers.map((team, index) => (
            <Image key={index} source={{uri:item.speakerPhotos[index]}} style={{width:70,height:70,borderRadius:10,marginLeft:5,marginTop:10}}/>
          ))}

          </View>
          <Text style={{textAlign:"center",marginRight:10,marginLeft:10}}>{item.desc}</Text>
          <Text style={{width:"100%",textAlign:"center",marginTop:5}}>
            <Ionicons name="calendar-outline" size={20} color="black" style={{alignSelf:"center"}}/>
            <Text style={{textAlign:"center"}}>{item.when}</Text>
          </Text>
          <Text style={{width:"100%",textAlign:"center",marginTop:5}}>
            <Ionicons name="location-outline" size={20} color="black" style={{alignSelf:"center"}}/>
            <Text style={{textAlign:"center",marginBottom:1}}>{item.where}</Text>
          </Text>





          <TouchableOpacity style={{backgroundColor:Colors.primary,width:"80%",borderRadius:10,marginLeft:35,marginTop:10,marginBottom:5}} >
            <Text style={{textAlign:"center",color:"white",verticalAlign:"middle"}}>Katıl</Text>
          </TouchableOpacity>
            <TouchableOpacity onPress={()=>{router.push({pathname:"/(authenticated)/events/speakers/[event]",params:{event:item.name}})}} style={{backgroundColor:Colors.primary,width:"80%",borderRadius:10,marginLeft:35,marginTop:5,marginBottom:15}}>
             <Text style={{textAlign:"center",color:"white",verticalAlign:"middle"}}>See more about speakers</Text>
            </TouchableOpacity>
        </View>
      ))}
      </ScrollView>
      </ScrollView>
      </SafeAreaView>
  )
}

export default Events
