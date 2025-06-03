import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { getDatabase, push, ref } from "firebase/database";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebaseConfig'

const createclub = () => {
  const [clubname,setClubName] = React.useState<string>()
  const [clubdesc,setClubDesc] = React.useState<string>()
  const [memberLimit,setMemberLimit] = React.useState<string>()
  const [school,setSchool] = React.useState<string>()
  const [pub,setPub] = React.useState<string>()

  const app=initializeApp(firebaseConfig)
  const db=getDatabase(app)


  const addToWaitlist =()=>{
    const waitlistRef=ref(db,"club-waitlist")
    push(waitlistRef,{
      name:clubname,
      desc:clubdesc,
      memberLimit:memberLimit,
      school:school,
      pub:pub,
    })
    
  }


  return (
    <View>
      <TextInput
        placeholder="Club Name"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        value={clubname}
        onChange={(event)=>{
        const { text} = event.nativeEvent;
        setClubName(text)
        }}
        />
      <TextInput
        placeholder="Club Description"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}

        value={clubdesc}
        onChange={(event)=>{
          const {text} = event.nativeEvent
          setClubDesc(text)
        }}
        
        />
      <TextInput
        placeholder="Member Limit"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        value={memberLimit}
        onChange={(event)=>{
          const {text} = event.nativeEvent
          setMemberLimit(text)
        }}
        
        />
      <TextInput
        placeholder="School"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        value={school}
        onChange={(event)=>{
          const {text} = event.nativeEvent
          setSchool(text)
        }}
        />
        <TextInput
        placeholder="Open To All or Invite Only? "
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}
        value={pub}
        onChange={(event)=>{
          const {text} = event.nativeEvent
          setPub(text)
        }}
        />
        <TouchableOpacity onPress={()=>{addToWaitlist()}}style={{backgroundColor:Colors.primaryMuted,borderRadius:5,width:40,height:30,alignItems:"center",marginLeft:350}}>
          <Ionicons name="navigate-sharp" size={24} color={Colors.primary} style={{paddingTop:5}} />
        </TouchableOpacity>
    </View>
  )
}

export default createclub