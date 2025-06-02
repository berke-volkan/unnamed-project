import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
<<<<<<< HEAD
import { useRouter } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import AntDesign from '@expo/vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler'

=======
import { Link, useRouter } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
const mock_data = [
  {
    id:1,
    name:"Find Study Buddy",
    url:"/tinder/studybuddy",
    desc:"Find a study buddy in your area",
    icon:<Ionicons name="people" size={36} color="black" />,
  },
  {
    id:2,
    name:"Find a Project Partner",
    url:"/tinder/project",
    desc:"Find a project partner in your area",
    icon:<Ionicons name="people" size={36} color="black" />,
  },
  {
    id:3,
    name:"Find a Tutor",
<<<<<<< HEAD
    url:"/tinder/tutor",
    desc:"Find a tutor in your area",
    icon:<FontAwesome6 name="graduation-cap" size={36} color="black" />
=======
    url:"/tinder/tutors",
    desc:"Find a tutor in your area",
    icon:<Ionicons name="people" size={36} color="black" />,
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
  },

  {
    id:4,
    name:"Find a Internship",
    url:"/tinder/internship",
    desc:"Find a internship in your area",
<<<<<<< HEAD
    icon:<AntDesign name="star" size={36} color="black" />
=======
    icon:<Ionicons name="people" size={36} color="black" />,
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
  },
  {
    id:5,
    name:"Find a Summer Program",
    url:"/tinder/summer",
    desc:"Find a summer program in your area",
<<<<<<< HEAD
    icon:<Ionicons name="sunny-outline" size={36} color="black" />,
=======
    icon:<Ionicons name="people" size={36} color="black" />,
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
  },
  {
    id:6,
    name:"Confession",
    url:"/tinder/confession",
    desc:"Confession your secrets - anonymously",
    icon:<Ionicons name="people" size={36} color="black" />,
  }
]
const page = () => {
  const router=useRouter()
  return (
<<<<<<< HEAD
    <ScrollView>
=======
    <View>
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
      <View>
        {mock_data.map((select) => (
          <TouchableOpacity key={select.id} onPress={()=>router.push(select.url as any)} style={{alignItems:"center",padding:10,backgroundColor:Colors.lightGray,marginRight:10,marginLeft:10,borderRadius:5,marginTop:10}}  >
              {select.icon}
              <View style={{flexDirection:"column"}}>
              <Text style={{fontSize:26,paddingLeft:10}}>{select.name}</Text>
              <Text style={{fontSize:14,paddingLeft:10}}>{select.desc}</Text>
              </View>
          </TouchableOpacity>
        ))}
        </View>
<<<<<<< HEAD
    </ScrollView>
=======
    </View>
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
  )
}

export default page