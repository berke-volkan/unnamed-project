import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import { firebaseConfig } from '@/firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getDatabase,ref,onValue } from 'firebase/database'

{/*
const perk_details = {
  name: "Notion Pro Plan",
  by: "Notion",
  img: "https://example?.com/notion-logo?.png",
  desc: "Get Notion's Pro plan free for personal use — ideal for organizing projects, taking notes, and collaborating?.",
  suitablefor: "Organizers, students",
  loc: "online",
  used: "32",
  total: "150",
  web: "www?.notion?.com",
  limitations: [
    "Available only to students",
    "Requires verification with a valid educational email address",
    "Free for 1 year",
    "Intended for personal use only"
  ],
  plan_details: [
    "Unlimited pages and blocks",
    "30-day version history",
    "Shared workspaces",
    "Up to 10 guest collaborators",
    "Advanced access and sharing controls"
  ]
};
*/}


const perk = () => {
  const {perk}=useLocalSearchParams<{perk:string}>()
  const router=useRouter()
  const app=initializeApp(firebaseConfig)
  const db=getDatabase(app)
  
  const [perk_details,setPerks]=React?.useState<{name:string,by:string,desc:string,suitableFor:string,loc:string,used:string,total:string,web:string,limitations:any,plan_details:any}>()

  const getPerkInfo= () => {
    const perkRef = ref(db, 'campaigns/'+perk);
    onValue(perkRef,(snapshot)=>{
      const data=snapshot?.val()
      if (data) {
      setPerks({
        name: data?.name || "",
        by: data?.by || "",
        desc: data?.desc || "",
        suitableFor: data?.suitableFor || "",
        loc: data?.loc || "",
        used: data?.used || "",
        total: data?.supply || "", 
        web: data?.web || "",
        limitations: data?.limitations || [],
        plan_details: data?.plan_details || [],
      });
    }
    })
  }
  useEffect(()=>(
    getPerkInfo()
  ),[])
  return (
    <ScrollView >
      <Text style={{textAlign:"center",fontSize:26}}>{perk_details?.name} | {perk_details?.used}/{perk_details?.total}</Text>
      <Text style={{textAlign:"center",fontSize:20,fontStyle:"italic",marginBottom:5}}>Powered by {perk_details?.by}</Text>
      <View style={{flexDirection:"row"}}>
       <View style={{backgroundColor:Colors?.primary,borderRadius:5,width:"25%",marginLeft:60,paddingTop:10}}> 
        <Text style={{textAlign:'center',color:"white",marginBottom:15}}><Ionicons name='location-outline' color={Colors?.primaryMuted} size={24} style={{marginTop:5}}/> {perk_details?.loc}</Text>
      </View>
      <View style={{backgroundColor:Colors?.primary,borderRadius:5,width:"50%",marginLeft:10,paddingTop:10}}> 
        <Text style={{textAlign:'center',color:"white",marginBottom:15}}><Ionicons name='person-outline' color={Colors?.primaryMuted} style={{paddingTop:10}} size={24}/> {perk_details?.suitablefor}</Text>
      </View>   
      </View>
        <Text style={{margin:10,fontSize:20}}>{perk_details?.desc}</Text> 
        <Text style={{margin:10,fontSize:18,fontWeight:"bold"}}>Limitations:</Text>
          {perk_details?.limitations?.map((detail:any)=>(
            <View key={detail} > 
              <Text style={{marginLeft:15,marginBottom:5,fontSize:16}}>- {detail}</Text>
            </View>
          ))}
          <Text style={{margin:10,fontSize:18,fontWeight:"bold"}}>Plan details:</Text>
          {perk_details?.plan_details?.map((detail:any)=>(
            <View key={detail} > 
              <Text style={{marginLeft:15,marginBottom:5,fontSize:16}}>- {detail}</Text>
            </View>
          ))}
          <View style={{flexDirection:"row",height:"100%"}}>
          <TouchableOpacity style={{backgroundColor:Colors?.primary,width:"40%",marginLeft:"5%",height:"5%",borderRadius:5,marginTop:"5%"}} onPress={()=>(router?.push({pathname:"/(authenticated)/perks/claim/[perk]",params:{perk:perk_details?.name}}))}>
            <Text style={{textAlign:"center",marginTop:"3%",color:"white"}}>Claim</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:"red",width:"40%",marginLeft:"10%",height:"5%",borderRadius:5,marginTop:"5%"}} onPress={()=>(
            router?.back()
          )}>
            <Text style={{textAlign:"center",marginTop:"3%",color:"white"}}>Go back</Text>
          </TouchableOpacity>
          </View>
        </ScrollView>
  )
}

export default perk