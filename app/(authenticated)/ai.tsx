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
import { useUser } from '@clerk/clerk-expo'
import { GoogleGenerativeAI } from "@google/generative-ai";
import Config from "react-native-config";
import Markdown from 'react-native-markdown-display'
type Message = {
    message: any;
    sender: string;
};

const API_KEY = "AIzaSyCWNu4SM_Kha2oyP1SnN3gdvl7DHwoefrQ"

const chatroom = () => {
  const [msgList, setMsgList] = React.useState<Message[]>([]);
  const app = initializeApp(firebaseConfig);
  const db=getDatabase(app);
  const room= useLocalSearchParams<{room:string}>()
  const router=useRouter()
  const [msg,setMsg]=React.useState<string>("")
  const [desc,setDesc]=React.useState<string>("")
  const genAı=new GoogleGenerativeAI(API_KEY)
  const [aiResp,setAiResp]=React.useState<any>("")

const aiResponse = async (prompt: string): Promise<string> => {
  const model = genAı.getGenerativeModel({ model: "gemini-2.0-flash-lite" });
  const result = await model.generateContent(prompt);
  const text = result.response.candidates?.[0]?.content?.parts?.[0]?.text || "AI couldn't respond.";
  return text;
};

const sendMessage = async (msg: string) => {
  setMsgList(prev => [
    ...prev,
    {
      message: msg,
      sender: "Me"
    }
  ]);

  const ai = await aiResponse(msg);

  setMsgList(prev => [
    ...prev,
    {
      message: ai,
      sender: "Ai"
    }
  ]);
};



  const {user} = useUser()
  return (
    <SafeAreaView>
    <ScrollView>
        <View style={{flexDirection:"column",alignItems:"center"}}>
        {msgList.length!==0 && msgList.map((item:any,index:any)=>(
<View
  key={index}
  style={{
    marginTop: 10,
    paddingTop: 10,
    backgroundColor: Colors.primaryMuted,
    borderRadius: 5,
    width: "90%",
    flexDirection: "row",
    alignItems: "flex-start", 
    paddingBottom: 10
  }}
>
  <Image
      source={{
    uri: item.sender === "Ai"
  ? "https://cdn-icons-png.flaticon.com/512/4712/4712100.png"
  : user?.imageUrl ?? "https://cdn-icons-png.flaticon.com/512/847/847969.png"

  }}
    style={{ width: 40, height: 40, borderRadius: 20, marginLeft: 10 }}
  />

  <View style={{ marginLeft: 10, flexShrink: 1 }}>
    <Text style={{ fontWeight: "bold", marginBottom: 4 }}>{item.sender}</Text>
    <View style={{marginRight:15}}><Markdown >{item.message}</Markdown></View>
    <Text style={{ fontSize: 12, color: "gray",marginTop:5}}>{item.time}</Text>
  </View>
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
<TouchableOpacity
  style={{ backgroundColor: Colors.primaryMuted, borderRadius: 30, height: 40, width: 40, alignItems: "center", marginLeft: 5 }}
  onPress={async () => {
    if (typeof msg === 'string' && msg.trim() !== "") {
      await sendMessage(msg.trim());
      setMsg("");
    }
  }}
>
  <Ionicons name='send' color={Colors.primary} style={{ margin: 10 }} size={22} />
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
