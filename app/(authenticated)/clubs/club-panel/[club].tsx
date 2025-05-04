import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useLocalSearchParams } from 'expo-router'

const mock_data = [
  {
    id: '1',
    name:"Verified",
    logo:"",
    desc:"Verified Users | You cant leave",
    school:"Staff Team",
    notMember:false,
    memberCount:10,
    memberLimit:20,
    howToJoin:"default",
    admin:false,
  },
  {
    id: "2",
    name:"mangoClub",
    desc:"Club of mango lovers",
    school:"X School",
    notMember:true,
    memberCount:20,
    memberLimit:22,
    howToJoin:"Open to all",
    admin:false
  },
  {
    id: '3',
    name:"hackX",
    logo:"",
    desc:"Join us to hack!",
    school:"online",
    notMember:true,
    memberCount:10,
    memberLimit:20,
    howToJoin:"Invite Only"
  },
  {
    id: "4",
    name:"bananaClub",
    desc:"Club of banana lovers",
    school:"Z School",
    notMember:false,
    memberCount:20,
    memberLimit:21,
    howToJoin:"Open to all"
  },

];

  
const clubpanel = () => {
  const { club } = useLocalSearchParams<{ club: string }>()
  return (
    <View>
      <Text style={{textAlign:"center",fontWeight:"bold",fontSize:36}}>{club}</Text>
      <Text style={{textAlign:"center",fontSize:20}}>{mock_data.find((item) => item.name === club)?.desc}</Text>
      <Text style={{textAlign:"center",fontSize:16,fontStyle:"italic"}}>Powered by {mock_data.find((item) => item.name === club)?.school}</Text>
      {mock_data.find((item) => item.name === club)?.admin===true && <TouchableOpacity><Text>Manage Members</Text></TouchableOpacity>}
    </View>
  )
}

export default clubpanel