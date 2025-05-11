import { 
  View, 
  Text,
  TouchableOpacity
 } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

const mock_data = [
  {
    name: "X competition Y step",
    desc: "This is a description of the step",
    deadline: "2023-10-01",
    status: "past",
  },
  {
    name: "Project submission",
    desc: "Submit the final project documentation",
    deadline: "2023-10-15",
    status: "pending",
  },
  {
    name: "Team evaluation",
    desc: "Complete the team performance review",
    deadline: "2023-10-20",
    status: "open",
  },
  {
    name: "Final presentation",
    desc: "Prepare and deliver the final presentation",
    deadline: "2023-11-05",
    status: "upcoming",
  }
]
const teamsdeadline = () => {
  const {team} = useLocalSearchParams<{team:string}>()
  const router = useRouter()
  const totalPastCount = mock_data.filter(item => item.status === "past").length
  return (
    <SafeAreaView>
      <View style={{flexDirection:"row"}}>
      <TouchableOpacity onPress={()=>{router.push("/(authenticated)/(tabs)/chat")}}>
        <Ionicons name="arrow-back" size={34} color={Colors.dark} />
      </TouchableOpacity>
      <Text style={{fontWeight:"bold",fontSize:26}}>{team}'s Deadlines</Text>
      </View>
      <View>
      <View style={{borderBottomWidth:1,marginTop:10}}/>
        {mock_data.map((item, index) => (
          <View key={index}>
          <View  style={{marginVertical:10}}>
            <Text style={{fontWeight:"bold",textAlign:"center"}}>{item.name}</Text>
            <Text style={{textAlign:"center"}}>{item.desc}</Text>
            <Text style={{textAlign:"center"}}>{item.deadline}</Text>
            {item.status === "open" && <View style={{backgroundColor:"green",width:"60%",borderRadius:10,padding:5,marginLeft:100}}> 
              <Text style={{textAlign:"center",color:"white"}}>Open</Text>
              </View>

            }
            {item.status === "pending" && <View style={{backgroundColor:Colors.lightGray,width:"60%",borderRadius:10,padding:5,marginLeft:100}}> 
              <Text style={{textAlign:"center",color:"black"}}>Pending</Text>
              </View>

            }
            {item.status === "upcoming" && <View style={{backgroundColor:"blue",width:"60%",borderRadius:10,padding:5,marginLeft:100}}> 
              <Text style={{textAlign:"center",color:"white"}}>Upcoming</Text>
              </View>

            }
            {item.status === "past" && <View style={{backgroundColor:"red",width:"60%",borderRadius:10,padding:5,marginLeft:100}}> 
              <Text style={{textAlign:"center",color:"white"}}>Past</Text>
              </View>

            }
          </View>
          <View style={{borderBottomWidth:1}}/>
          </View>
        ))}
      </View>
      <Text style={{fontWeight:"bold",fontSize:26,marginTop:40}}>Past Deadlines</Text>
      <View>
      <View style={{borderBottomWidth:1,marginTop:10}}/>
        {mock_data.map((item, index) => (
          <View key={index} style={{marginVertical:10}}>

            {item.status === "past" && <View>
              
              <Text style={{fontWeight:"bold",textAlign:"center"}}>{item.name}</Text>
            <Text style={{textAlign:"center"}}>{item.desc}</Text>
            <Text style={{textAlign:"center"}}>{item.deadline}</Text>
              <View style={{backgroundColor:"red",width:"60%",borderRadius:10,padding:5,marginLeft:100}}>

              <Text style={{textAlign:"center",color:"white"}}>Past</Text>
              </View>
              <View style={{borderBottomWidth:1,marginTop:10}}/>
              </View>

            }

          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}

export default teamsdeadline