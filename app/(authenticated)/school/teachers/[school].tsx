import { View, Text, Image,Linking, TouchableOpacity } from 'react-native'
import React from 'react'
import { useUser } from '@clerk/clerk-expo';
import Colors from '@/constants/Colors';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

export const mock_teachers = [
  {
    name: "Ms. Ayşe Yılmaz",
    subject: "Mathematics",
    email: "ayse.yilmaz@school.edu.tr",
    phone: "+90 532 123 4567",
    imgUrl:"https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Mr. Ahmet Demir",
    subject: "History",
    email: "ahmet.demir@school.edu.tr",
    phone: "+90 532 987 6543",
    imgUrl:"https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Mrs. Elif Kara",
    subject: "English",
    email: "elif.kara@school.edu.tr",
    phone: "+90 545 222 3344",
    imgUrl:"https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    name: "Mr. Mehmet Öztürk",
    subject: "Physics",
    email: "mehmet.ozturk@school.edu.tr",
    phone: "+90 530 111 2233",
  },
  {
    name: "Ms. Zeynep Çelik",
    subject: "Literature",
    email: "zeynep.celik@school.edu.tr",
    phone: "+90 533 888 9988",
  },
];


const teachers = () => {
  const {user}=useUser()
  const school:any=user?.publicMetadata["school"]
  return (
    <ScrollView>
      <Text style={{fontSize:25,fontWeight:'bold',marginLeft:10,marginBottom:10}}>Teachers in {school}</Text>
      {mock_teachers.map((teacher)=>(
        <View key={teacher.email} style={{backgroundColor:Colors.primaryMuted,borderRadius:10,width:"90%",alignSelf:"center",marginBottom:10}}>
          {teacher.imgUrl && <Image style={{marginLeft:"40%",marginTop:10}} src={teacher.imgUrl} width={90} height={90} borderRadius={15} />}
          {!teacher.imgUrl && <Image style={{marginLeft:"40%",marginTop:10}} src={"https://tse2.mm.bing.net/th/id/OIP.2VQtcY0NBwbSwTOfge_NtAHaHa?r=0&rs=1&pid=ImgDetMain"} width={90} height={90} borderRadius={15} /> }
          <Text style={{fontSize:23,fontWeight:"bold",textAlign:"center"}}>{teacher.name}</Text>
          <View style={{backgroundColor:"red",alignSelf:"center",width:"26%",borderRadius:10}}><Text style={{textAlign:"center",color:"white"}}>{teacher.subject}</Text></View>
          <TouchableOpacity onPress={()=>{Linking.openURL(`tel:${teacher.phone}`)}}>
            <View style={{flexDirection:"row",marginLeft:10,marginTop:10}}>
             <Ionicons name='call-outline' size={20} color={Colors.primary}/>
             <Text style={{marginLeft:10,fontSize:18}}>{teacher.phone}</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>{Linking.openURL(`mailto:${teacher.email}`)}}>
            <View style={{flexDirection:"row",marginLeft:10,marginTop:10,marginBottom:10}}>
             <Ionicons name='mail-outline' size={20} color={Colors.primary} style={{marginTop:5}}/>
             <Text style={{marginLeft:10,fontSize:18}}>{teacher.email}</Text>
            </View>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  )
}

export default teachers