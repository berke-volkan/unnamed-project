import { View, Text, Alert } from 'react-native'
import React from 'react'
import { useLocalSearchParams,useRouter } from 'expo-router'
import { StyleSheet,TouchableOpacity } from 'react-native'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const mock_data=[
  {"sender":"Ali","message":"Hello","time":"12:00"},
  {"sender":"Mehmet","message":"Hi","time":"12:01"},
  {"sender":"Ayse","message":"How are you?","time":"12:02"},
  {"sender":"Fatma","message":"I'm fine, thanks!","time":"12:03"},
  {"sender":"Ali","message":"What about you?","time":"12:04"},
  {"sender":"Mehmet","message":"I'm good too!","time":"12:05"},
  {"sender":"Ayse","message":"Great to hear!","time":"12:06"},
  {"sender":"Fatma","message":"Yes, indeed!","time":"12:07"},
  {"sender":"Ali","message":"Let's meet up later.","time":"12:08"},
  {"sender":"Mehmet","message":"Sounds good!","time":"12:09"}
]

const chatroom = () => {
  const room= useLocalSearchParams<{room:string}>()
  const router=useRouter()
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.topbar}> {/* Fix Size*/}
          <TouchableOpacity onPress={()=>{router.push("/(authenticated)/(tabs)/chat")}}>
              <Ionicons name="arrow-back" size={34} color={Colors.dark} />
          </TouchableOpacity>
        <View style={{flexDirection:"column"}}>
         <Text style={styles.topbarText}>{room.room}</Text>
         <Text>Desc</Text>
        </View>

        </View>
        <View style={{flexDirection:"column",alignItems:"center"}}>
        {mock_data.map((item,index)=>(
          /* TODO: Fix Styling & Better message Display */
          <View key={index} style={{marginTop:10,paddingTop:10,backgroundColor:Colors.primaryMuted,borderRadius:5,width:"90%",flexDirection:"row",alignItems:"center"}}>
            <Ionicons style={{marginBottom:10,marginLeft:10}} name="person-circle-outline" size={24} color={Colors.dark} onPress={()=>{alert(`Sender of this msg: ${item.sender}`)}}/>
            <Text style={{marginBottom:10,marginLeft:10}}>{item.message}</Text>
            <Text style={{marginLeft:"auto",paddingRight:10,marginBottom:10}}>{item.time}</Text>
          </View>
        ))}
        </View>
        <View style={styles.bottombar}>
          <TextInput 
          placeholder='Write your message'
          style={{backgroundColor:Colors.lightGray,width:"60%",height:40,marginLeft:10,borderRadius:10,textAlign:"center"}}
          /> 
          <View style={{width:1}}/>
          <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:"30%",height:40,width:40,alignItems:"center",marginLeft:5}}>
            <Ionicons name='document-attach-outline'  color={Colors.primary} style={{margin:10}} size={22}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:"30%",height:40,width:40,alignItems:"center",marginLeft:5}}>
            <Ionicons name='send'  color={Colors.primary} style={{margin:10}} size={22}/>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}
const styles= StyleSheet.create({
  topbar:{
    height:50,
    backgroundColor:Colors.background,
    justifyContent:"flex-start",
    flexDirection:"row",
    marginTop:15,
  },
  bottombar:{
    paddingTop:20,
    alignItems:"center",
    flexDirection:"row",
    marginLeft:10
  },
  topbarText:{
    paddingTop:2,
    fontWeight:"bold"
  }

})
export default chatroom

