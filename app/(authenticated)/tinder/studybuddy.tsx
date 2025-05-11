import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
const mock_student_data = [
  {
    id: 1,
    name: "John Doe",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "https://i.pinimg.com/736x/d4/d8/56/d4d85653caeceae8acfb54aaffed3a70.jpg",
    hobbies: ["Reading", "Gaming", "Coding"],
    location: "New York, USA",
    grade: "9",
    joinedDate: "2023-01-15",
  },
  {
    id: 2,
    name: "Emma Wilson",
    desc: "Enthusiastic science student with a passion for chemistry experiments and astronomy.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    hobbies: ["Science", "Drawing", "Hiking"],
    location: "Boston, USA",
    grade: "10",
    joinedDate: "2023-02-20"
  },
  {
    id: 3,
    name: "Michael Chen",
    desc: "Math enthusiast and basketball team captain. Loves solving complex problems.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
    hobbies: ["Basketball", "Math", "Video games"],
    location: "Chicago, USA",
    grade: "9",
    joinedDate: "2022-11-05"
  },
  {
    id: 4,
    name: "Sophia Garcia",
    desc: "Aspiring writer and debate team member with interest in current events.",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    hobbies: ["Writing", "Debating", "Photography"],
    location: "Miami, USA",
    grade: "11",
    joinedDate: "2023-03-10"
  },
  {
    id: 5,
    name: "David Johnson",
    desc: "Tech-savvy student who enjoys building robots and playing the guitar.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    hobbies: ["Robotics", "Music", "Cycling"],
    location: "Seattle, USA",
    grade: "10",
    joinedDate: "2022-12-18"
  }
]

const mock_invitation_data = [
  {
    id: 1,
    name: "John Doe",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    img: "https://i.pinimg.com/736x/d4/d8/56/d4d85653caeceae8acfb54aaffed3a70.jpg",
    hobbies: ["Reading", "Gaming", "Coding"],
    location: "New York, USA",
    grade: "9",
    status: "pending"
  },
  {
    id: 2,
    name: "Emma Wilson",
    desc: "Enthusiastic science student with a passion for chemistry.",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    hobbies: ["Science", "Drawing", "Hiking"],
    location: "Boston, USA",
    grade: "10",
    status: "pending"
  },
]


const social = () => {
  let choosen: any[]=[]
  let [choosenNow, setChoosen] = React.useState(0)
  let selectRandom = function (arr: any[]) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    if (choosen.includes(arr[randomIndex])) {
      return selectRandom(arr);
    }else{
      choosen.push(arr[randomIndex])
      setChoosen(randomIndex)
      return arr[randomIndex];
    }
  }

  return (
    <View style={{alignItems:"center"}}>
      <View style={{backgroundColor:Colors.primaryMuted,width:"90%",alignSelf:"center",borderRadius:5}}> 
        <Image source={{uri:mock_student_data[choosenNow].img}} style={{width:"100%",height:200,borderTopLeftRadius:5,borderTopRightRadius:5}}/>
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:25}}>{mock_student_data[choosenNow].name} ({mock_student_data[choosenNow].grade}th grade)</Text>
        <View style={{flexDirection:"row",width:"100%",alignSelf:"center",marginLeft:200}}>
          <Ionicons name="location-outline" size={24} color="black" />
          <Text style={{fontSize:18,textAlign:"center"}}>{mock_student_data[choosenNow].location}</Text>
        </View>
        <Text style={{fontSize:18,paddingLeft:10,paddingRight:10}}>{mock_student_data[choosenNow].desc}</Text>
        <View style={{flexDirection:"row",alignItems:"center",paddingLeft:70,paddingBottom:50}}>
            {mock_student_data[choosenNow].hobbies.map((hobby, index) => (
              <View key={index} style={{backgroundColor:Colors.primary,borderRadius:5,width:"auto",marginRight:5,paddingRight:5,paddingLeft:5}}>
                <Text style={{color:"white"}}>{hobby} </Text>
              </View>
            ))}
      </View>
      <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"100%",paddingLeft:20,paddingRight:20}}>
        <TouchableOpacity style={{backgroundColor:"red",width:"50%", alignItems:"center"}}>
          <Ionicons name="heart-outline" size={24} color={Colors.primaryMuted} />
        </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:"blue",width:"50%",alignItems:"center"}} onPress={() => selectRandom(mock_student_data)}>
          <Ionicons name='refresh-outline' size={24} color={Colors.primaryMuted}/>
        </TouchableOpacity>
      </View>
      </View>
      <Text style={{fontSize:20,fontWeight:"bold",marginTop:10}}>Invitatios</Text>
      <View>
        {mock_invitation_data.map((item, index) => (
          <View key={index} style={{flexDirection:"row"}}>
            <Image source={{uri:item.img}} style={{width:50,height:50,borderRadius:25,marginTop:10}}/>
            <View style={{flexDirection:"row"}}>
              <Text style={{fontSize:18,fontWeight:"bold",textAlignVertical:"center"}}>{item.name} ({item.grade}th grade)</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  )
}

export default social