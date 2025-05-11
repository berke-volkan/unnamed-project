import { View, Text, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'


const mock_data_students = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@school.edu",
        grade: "10th",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        attendance: 92,
        gpa: 3.7,
        status: "active"
    },
    {
        id: 2,
        name: "Sarah Johnson",
        email: "sarah.j@school.edu",
        grade: "11th",
        avatar: "https://randomuser.me/api/portraits/women/2.jpg",
        attendance: 95,
        gpa: 4.0,
        status: "inactive"
    },
    {
        id: 3,
        name: "Michael Rodriguez",
        email: "m.rodriguez@school.edu",
        grade: "9th",
        avatar: "https://randomuser.me/api/portraits/men/3.jpg",
        attendance: 85,
        gpa: 3.2,
        status: "suspended"
    },
    {
        id: 4,
        name: "Emily Chen",
        email: "e.chen@school.edu",
        grade: "12th",
        avatar: "https://randomuser.me/api/portraits/women/4.jpg",
        attendance: 98,
        gpa: 3.9,
        status: "active"
    },
    {
        id: 5,
        name: "James Wilson",
        email: "j.wilson@school.edu",
        grade: "10th",
        avatar: "https://randomuser.me/api/portraits/men/5.jpg",
        attendance: 78,
        gpa: 2.8,
        status: "probation"
    }
]
const school = () => {
  const router=useRouter()
  return (
    <SafeAreaView>
        <View style={{alignItems:"center"}}> 
            <Text style={{fontSize:19,marginLeft:10,fontWeight:"bold"}}>Generate a verification key</Text>
            <Text style={{fontSize:15,color:"red",marginLeft:10,fontStyle:"italic"}}>Please dont share this code with 3rd peoples!</Text>
            <TouchableOpacity style={{borderRadius:10,width:"60%",backgroundColor:Colors.primaryMuted}} onPress={()=>(router.push({pathname:"/(authenticated)/adminstration/verify"}))}>
                <Text style={{fontSize:16,marginLeft:10,marginTop:10,fontWeight:"bold",textAlign:"center"}}>Generate</Text>
            </TouchableOpacity>
        </View>
        <Text style={{fontSize:19,marginLeft:10,fontWeight:"bold"}}> Students</Text>
        {mock_data_students.map((student) => (
            <View key={student.id} style={{marginLeft:10}}>
                <View style={{flexDirection:"row"}}>
                <Image source={{uri: student.avatar}} style={{width: 50, height: 50, borderRadius: 25,marginBottom:5}} />
                <Text style={{textAlignVertical:"center",marginLeft:10}}>{student.name}</Text>
                {student.status==="active" && <View style={{width:8,height:8,borderRadius:44/2,backgroundColor:"green",marginTop:20,marginLeft:2}}></View>}
                {student.status==="probation" && <View style={{width:8,height:8,borderRadius:44/2,backgroundColor:"blue",marginTop:20,marginLeft:2}}></View>}
                {student.status==="suspended" && <View style={{width:8,height:8,borderRadius:44/2,backgroundColor:"red",marginTop:20,marginLeft:2}}></View>}
                {student.status==="inactive" && <View style={{width:8,height:8,borderRadius:44/2,backgroundColor:"orange",marginTop:20,marginLeft:2}}></View>}
                <Text style={{marginTop:15,marginLeft:5}}> | ({student.grade})</Text>
                {
                /* TODO: FIX
                {student.attendance<=50 &&
                    <View style={{width:10,height:10,borderRadius:44/2,backgroundColor:"red"}}>
                        <Text>
                            %{student.attendance}
                        </Text>
                    </View>
                }
                {75>=student.attendance && student.attendance>50 &&
                    <View style={{width:5,height:5,borderRadius:44/2,backgroundColor:"orange"}}>
                        <Text>
                            %{student.attendance}
                        </Text>
                    </View>
                }
                {100>=student.attendance && student.attendance>75 &&
                    <View style={{width:5,height:5,borderRadius:44/2,backgroundColor:"greem"}}>
                        <Text>
                            %{student.attendance}
                        </Text>
                    </View>
                }
                */
                }
                <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:15,height:25,width:150,marginTop:15,marginLeft:15}}>
                    <Text style={{textAlign:"center",fontSize:12,marginTop:5}}>{student.email}</Text>
                </TouchableOpacity>
                </View>

            </View>
        ))}
        <Text style={{fontWeight:"bold",fontSize:19,marginLeft:10,textAlign:"center"}}>Analytics</Text>
        <Text style={{fontSize:16,marginLeft:10}}>- The total events organized is 1</Text>
        <Text style={{fontSize:16,marginLeft:10}}>- The total events participated is 1</Text>
        <Text style={{fontSize:16,marginLeft:10}}>- The total club count is 1</Text>
        <Text style={{fontSize:16,marginLeft:10}}>- The total message count is 1909494</Text>  
        <Text style={{fontSize:16,marginLeft:10}}>- The new member count (past week): 5</Text>       
        <Text style={{fontSize:16,marginLeft:10}}>- The total pomodoro: 1010</Text>    
        <Text style={{fontSize:16,marginLeft:10}}>- The pomodoro(past week): 1010</Text>          
    </SafeAreaView>
  )
}

export default school