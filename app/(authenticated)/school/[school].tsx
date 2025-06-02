import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import { useLocalSearchParams, useRouter } from 'expo-router'
import Colors from '@/constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { Link } from 'expo-router'
import { StyleSheet, ViewStyle, StyleProp } from 'react-native';

const mock_data=[
  {
    name:"Announcements",
    desc:"Important Announcements",
    icon:"alert-circle-outline" as const,
    link:"/school/announcements/[school]"
  },
  {
    name:"Events",
    desc:"Upcoming Events",
    icon:"calendar-outline" as const,
    link:"/school/events/[school]"
  },
  {
    name:"Clubs",
    desc:"Join Clubs",
    icon:"people-outline" as const,
    link:"/school/clubs/[school]"
  },
  {
    name:"Assignments",
    desc:"Your Assignments",
    icon:"checkmark-done-circle-outline" as const,
    link:"/school/assignments/[school]"
  },
  {
    name:"Grades",
    desc:"Your Grades",
    icon:"bar-chart-outline" as const,
    link:"/school/grades/[school]"
  },
  {
    name:"Attendance",
    desc:"Your Attendance",
    icon:"checkmark-done-circle-outline" as const,
    link:"/school/attendance/[school]"
  },
  {
    name:"Library",
    desc:"Borrow Books",
    icon:"book-outline" as const,
    link:"/school/library/[school]"
  },
  {
    name:"Schedule",
    desc:"Class Timetable",
    icon:"time-outline" as const,
    link:"/school/schedule/[school]"
  },
  {
    name:"Resources",
    desc:"Learning Materials",
    icon:"folder-outline" as const,
    link:"/school/resources/[school]"
  },
  {
    name:"Teachers",
    desc:"Contact Information",
    icon:"person-outline" as const,
    link:"/school/teachers/[school]"
  },
]

  
const schoolpanel = () => {
  const { school } = useLocalSearchParams<{ school: string }>()
  const [classname, setClass] = React.useState<StyleProp<ViewStyle> | undefined>(undefined)
  const router = useRouter()
  return (
    <ScrollView>
      <Link href={{pathname:"/chat/[room]",params:{room:school}}} style={{alignSelf:"center"}}><Ionicons name='chatbubble-ellipses-outline' size={60} color={Colors.primary} style={{paddingTop:5,alignSelf:"center"}} /></Link>
      <Link href={{pathname:"/(authenticated)/adminstration/school",params:{school:school}}} >
       <Text style={{textAlign:"center",fontWeight:"bold",fontSize:36}}>{school}</Text>
      </Link>
      <Text style={{textAlign:"center",fontSize:20}}>Your place to track everything about school!</Text>
              {mock_data.map((channel) => (
                <TouchableOpacity onPress={()=>(router.push(channel.link as any))} key={channel.name} style={{alignItems:"center",padding:10,backgroundColor:Colors.lightGray,marginRight:10,marginLeft:10,borderRadius:5,marginTop:10}}  >
                    <Ionicons name={channel.icon} size={40} color={Colors.primary} style={{paddingTop:5}} />
                    <View style={{flexDirection:"column"}}>
                    <Text style={{fontSize:26,paddingLeft:10}}>{channel.name}</Text>
                    <Text style={{fontSize:14,paddingLeft:10}}>{channel.desc}</Text>
                    </View>
                </TouchableOpacity>
              ))}
    </ScrollView>
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
export default schoolpanel