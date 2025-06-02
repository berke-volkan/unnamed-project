import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'

const perk_claim = [
  {
    id: 1,
    what: "Click the 'Reveal Code' button to get your unique promo code."
  },
  {
    id: 2,
    what: "Go to https://notion.com/students and sign in or create an account."
  },
  {
    id: 3,
    what: "Verify your student status using a school email or student ID."
  },
  {
    id: 4,
    what: "Enter the promo code during the verification process or in account settings."
  },
  {
    id: 5,
    what: "Enjoy 1 year of Notion Pro for free!"
  }
];

const perkClaim = () => {
    const {perk} = useLocalSearchParams<{perk:string}>()
    const [revealStatus, setStatus] = useState(false)
  return (
    <View>
      <Text style={{textAlign:"center",fontSize:26}}>Claiming {perk}</Text>
      <Text style={{marginLeft:15,fontWeight:"bold",fontSize:20,marginBottom:8,marginTop:15}}>Steps for claim:</Text>
      {perk_claim.map((perk)=>(
        <View key={perk.id} style={{marginBottom:5}}>
            <Text style={{marginLeft:25,fontSize:18}}>{perk.id}) {perk.what}</Text>
        </View>
      ))}
      <Text style={{marginLeft:15,fontWeight:"bold",fontSize:20,marginBottom:8}}>Reveal Code</Text>
      {revealStatus===false && <TouchableOpacity style={{marginLeft:10,width:"85%",backgroundColor:"red",borderRadius:15}} onPress={()=>(setStatus(true))}>
        <Text style={{color:"white",textAlign:"center",fontSize:28}}>Reveal The Code</Text>
      </TouchableOpacity>
      }{revealStatus===true && <Text style={{width:"100%",textAlign:"center",fontSize:35,fontWeight:"bold"}}>11111</Text>
      }
    </View>
  )
}

export default perkClaim