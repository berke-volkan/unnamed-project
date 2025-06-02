import { View, Text, Alert, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams,useRouter } from 'expo-router'
import { StyleSheet,TouchableOpacity } from 'react-native'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { getDatabase, push, ref, set, onValue, DataSnapshot } from "firebase/database";
import {firebaseConfig} from "@/firebaseConfig"
import { initializeApp } from 'firebase/app'





const chatroom = () => {
  const [msgList,setMsgList]=React.useState<any[]>([])
  const app = initializeApp(firebaseConfig);
  const db=getDatabase(app);
  const room= useLocalSearchParams<{room:string}>()
  const router=useRouter()
  const [msg,setMsg]=React.useState<string>("")
  const [desc,setDesc]=React.useState<string>("")

  useEffect(()=>{
    loadMessages()
    channelDesc()
  },[])


  function sendMessage(message:string){
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const sender="Me"
    const avatarUrl="https://tse3.mm.bing.net/th/id/OIP.uZNaclDlVylNL-bP4iQmSAHaH5?r=0&rs=1&pid=ImgDetMain"
  push(ref(db,"chat/"+room.room+"/messages/"), {
    sender: sender,
    message: message,
    time: time,
    pp:avatarUrl

  });
loadMessages()}


  function loadMessages(){
    const msgRef=ref(db,"chat/"+room.room+"/messages/")
    onValue(msgRef, (snapshot: DataSnapshot) => {
      const data=snapshot.val();
      if (data){
        const messages=Object.values(data);
        setMsgList(messages)
      }
    })
  }
  function channelDesc(){
    const channelRef=ref(db,"chat/"+room.room+"/desc/")
    onValue(channelRef, (snapshot: DataSnapshot) => {
      const data=snapshot.val();
      if (data){
        setDesc(data)
      }
    })
  }
  
  return (
    <SafeAreaView>
    <ScrollView>
      <View style={styles.topbar}> {/* Fix Size*/}
          <TouchableOpacity onPress={()=>{router.push("/(authenticated)/(tabs)/chat")}}>
              <Ionicons name="arrow-back" size={34} color={Colors.dark} />
          </TouchableOpacity>
        <View style={{flexDirection:"column"}}>
         <Text style={styles.topbarText}>{room.room}</Text>
         <Text>{desc}</Text>
        </View>

        </View>
        <View style={{flexDirection:"column",alignItems:"center"}}>
        {msgList.length!==0 && msgList.map((item,index)=>(
          <View key={index} style={{marginTop:10,paddingTop:10,backgroundColor:Colors.primaryMuted,borderRadius:5,width:"90%",flexDirection:"row",alignItems:"center"}}>

            <View style={{flexDirection:"row"}}>
            <Image source={{uri: item.pp}} style={{width:40,height:40,borderRadius:20,marginLeft:10,marginBottom:10}} />
            <Text style={{fontWeight:"bold",marginLeft:10,marginBottom:10}}>{item.sender}</Text>
            </View>
            <Text style={{marginBottom:10,marginLeft:5,textAlign:"left"}}>{item.message}</Text>
            <Text style={{marginLeft:"auto",paddingRight:10,marginBottom:10}}>{item.time}</Text>
          </View>
        ))}
        </View>
        <View style={styles.bottombar}>
          <TextInput 
          placeholder='Write your message'
          style={{backgroundColor:Colors.lightGray,width:"60%",height:40,marginLeft:10,borderRadius:10,textAlign:"center"}}
          onChange={(e)=>{setMsg(e.nativeEvent.text)}}
          value={msg}
          /> 
          <View style={{width:1}}/>
          <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:"30%",height:40,width:40,alignItems:"center",marginLeft:5}}>
            <Ionicons name='document-attach-outline'  color={Colors.primary} style={{margin:10}} size={22}/>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:"30%",height:40,width:40,alignItems:"center",marginLeft:5}} onPress={()=>(sendMessage(msg),setMsg(""))}>
            <Ionicons name='send'  color={Colors.primary} style={{margin:10}} size={22}/>
          </TouchableOpacity>
        </View>
    </ScrollView>
    </SafeAreaView>
  )
}
export default chatroom


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
