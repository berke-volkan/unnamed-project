import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Link } from 'expo-router'
import { StyleSheet, ViewStyle, StyleProp } from 'react-native';
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
    howToJoin:"Invite Only",
    admin:true,
  },
  {
    id: "4",
    name:"bananaClub",
    desc:"Club of banana lovers",
    school:"Z School",
    notMember:false,
    memberCount:20,
    memberLimit:21,
    howToJoin:"Open to all",
    admin:true,
  },

];

const mock_event_data=[
  {
    name:"HackX",
    desc:"Lets hack together",
    date:"2025-05-05",
    time:"10:00 AM",
    location:"https://maps.google.com/maps",
  },
  {
    name:"HackX",
    desc:"Lets hack together",
    date:"2025-05-05",
    time:"10:00 AM",
    location:"https://maps.google.com/maps",
  },
  {
    name:"HackX",
    desc:"Lets hack together",
    date:"2025-05-05",
    time:"10:00 AM",
    location:"https://maps.google.com/maps",
  },
  {
    name:"HackX",
    desc:"Lets hack together",
    date:"2025-05-05",
    time:"10:00 AM",
    location:"https://maps.google.com/maps",
  },
  {
    name:"HackX",
    desc:"Lets hack together",
    date:"2025-05-05",
    time:"10:00 AM",
    location:"https://maps.google.com/maps",
  },
  {
    name:"HackX",
    desc:"Lets hack together",
    date:"2025-05-05",
    time:"10:00 AM",
    location:"https://maps.google.com/maps",
  },
  {
    name:"HackX",
    desc:"Lets hack together",
    date:"2025-05-05",
    time:"10:00 AM",
    location:"https://maps.google.com/maps",
  },
  {
    name:"HackX",
    desc:"Lets hack together",
    date:"2025-05-05",
    time:"10:00 AM",
    location:"https://maps.google.com/maps",
  },

]

  
const clubpanel = () => {
  const { club } = useLocalSearchParams<{ club: string }>()
  const [classname, setClass] = React.useState<StyleProp<ViewStyle> | undefined>(undefined)

  useEffect(()=>{
    console.log("r")
    mock_data.map(item=>{
      if(item.name===club && item.admin===true){
        setClass(styles.class1)
      }else{
        setClass(styles.class2)
      }
    });
  }, []);
  return (
    <View>
      <Ionicons name='chatbubble-ellipses-outline' size={60} color={Colors.primary} style={{paddingTop:5,alignSelf:"center"}} />
      <Text style={{textAlign:"center",fontWeight:"bold",fontSize:36}}>{club} | {mock_data.find((item) => item.name === club)?.memberCount}/{mock_data.find((item) => item.name === club)?.memberLimit}</Text>
      <Text style={{textAlign:"center",fontSize:20}}>{mock_data.find((item) => item.name === club)?.desc}</Text>
      <Text style={{textAlign:"center",fontSize:16,fontStyle:"italic"}}>Powered by {mock_data.find((item) => item.name === club)?.school}</Text>
      <Text style={{fontSize:30,fontWeight:"bold"}}>Club Calendar</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom:10}}>
      {mock_event_data.map((item,index)=>(
        <View key={index} style={{alignItems:"center",padding:10,backgroundColor:Colors.lightGray,marginRight:10,marginLeft:10,borderRadius:5}}>
          <Text style={{fontSize:26}}>{item.name}</Text>
          <Text style={{fontSize:20}}>{item.desc}</Text>
          <Text style={{fontSize:16}}>{item.date}/{item.time}</Text>
          <TouchableOpacity style={{backgroundColor:"red",marginTop:5,borderRadius:5,width:120}}><Text style={{textAlign:"center",color:"white"}}>Register</Text></TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:"blue",marginTop:5,borderRadius:5,width:120}}><Text style={{textAlign:"center",color:"white"}}>View Location</Text></TouchableOpacity>
        </View>
      ))}
      </ScrollView>
      <Text style={{fontSize:30,fontWeight:"bold"}}>Club Only Private Chat</Text>
            <Link  href={{pathname:"/chat/[room]",params:{room:club}}}  replace style={{flexDirection:"row",backgroundColor:Colors.lightGray,marginBottom:"1%",height:25,alignItems:"center"}}>
                <View  style={{flexDirection:"row",backgroundColor:Colors.lightGray,marginBottom:"1%",height:25,alignItems:"center"}} >
                  <Ionicons name='lock-closed-sharp' size={20} color={Colors.gray} style={{marginLeft:"5%"}}/>
                    <Text style={{marginLeft:"5%"}}>{club}</Text>
                    <Text style={{marginLeft:"auto"}}>{club}'s Special Private Channel</Text>
                </View>
            </Link>
            <Text style={{fontSize:30,fontWeight:"bold"}}>History</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom:10}}>
      {mock_event_data.map((item,index)=>(
        <View key={index} style={{alignItems:"center",padding:10,backgroundColor:Colors.lightGray,marginRight:10,marginLeft:10,borderRadius:5}}>
          <Ionicons name='lock-closed-sharp' size={20} color={Colors.gray} style={{marginLeft:"5%"}}/>
          <Text style={{fontSize:26}}>{item.name}</Text>
          <Text style={{fontSize:20}}>{item.desc}</Text>
          <Text style={{fontSize:16}}>{item.date}/{item.time}</Text>
        </View>
      ))}
      </ScrollView>
      <View style={{width:"100%", height:500}}>
        <View style={{flexDirection: "row", justifyContent: "center", gap: 10}}>
          <TouchableOpacity style={classname}>
        <Ionicons name='images-outline' size={24} color={Colors.primary} style={{alignSelf:"center", marginTop:"10%", paddingBottom:25}}/>
          </TouchableOpacity>
          {mock_data.find((item) => item.name === club)?.admin===true && (
        <TouchableOpacity style={classname}>
          <Ionicons name='settings-outline' size={24} color={Colors.primary} style={{alignSelf:"center", marginTop:"10%", paddingBottom:25}}/>
        </TouchableOpacity>
          )}
        </View>
        </View>
         </View>
  )
}

const styles = StyleSheet.create({
  class1:{
    backgroundColor:Colors.primaryMuted,width:"50%",marginTop:105,alignItems:"flex-start",paddingBottom:5
  },
  class2:{
    backgroundColor:Colors.primaryMuted,width:"100%",marginTop:105,alignItems:"center",paddingBottom:5
  }
})
export default clubpanel