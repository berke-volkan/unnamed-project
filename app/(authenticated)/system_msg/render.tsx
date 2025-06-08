import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebaseConfig'
import { DataSnapshot, getDatabase, ref } from 'firebase/database'
import { onValue } from 'firebase/database'
const mock_sys=[
  {
    title:"You got a warning!",
    desc:"HSconnect is a safe community for teenagers.For keeping our community safe we have strict moderation rules and you broke one of them but everyone deserves a second chance.Please be carreful next time!",
    type:"moderation_warning"
  },
    {
        title:"Your club got approved!",
        desc:"After our team's review your club got approved! Congrulations :) Club Name:{Name}",
        type:"club_approved"
    },
    {
        title:"We got your club submission!",
        desc:"Hey! We got your club submission.Thank for joining our family!",
        type:"club_submission"
    },
]


const system = () => {
  const app=initializeApp(firebaseConfig)
  const db=getDatabase(app)
  let sys: string[] = [];
  function loadSysMessages(){
      const reff=ref(db,"system_msg")
      onValue(reff, (snapshot: DataSnapshot) => {
        const data=snapshot.val();
        if (data){
          console.log(data)
          sys.push(data)
          console.log(sys)
        }
      })
    }
  useEffect(()=>{
    loadSysMessages()
  },[])
  return (
    <View>
        {sys.map((item:any)=>(
          <View>
            <View style={{backgroundColor:Colors.primaryMuted}}>
                <View style={{flexDirection:"row",marginTop:5}}>
                  {item.type==="club_approved" && <Ionicons style={{marginLeft:15}}name='shield-checkmark-outline' size={50}/>}
                  {item.type==="club_submission" && <Ionicons style={{marginLeft:15}}name='heart' size={50} color={"red"}/>}
                  {item.type==="moderation_warning" && <Ionicons style={{marginLeft:15}}name='shield-half-outline' size={50} />}
                  <Text style={{fontWeight:"bold",fontSize:23,textAlign:"center",width:"90%",verticalAlign:"middle",marginRight:5}}>{item.title}</Text>

                </View>
                <Text style={{marginLeft:15,fontSize:18,marginBottom:10}}>{item.desc}</Text>
            </View>
            <View style={{height:11,backgroundColor:Colors.background}}/>
          </View>
        ))}
    </View>
  )
}

export default system