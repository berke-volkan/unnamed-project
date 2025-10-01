import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity
 } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '../../../constants/Colors'
import { useRouter } from 'expo-router'
import { StarRatingDisplay } from 'react-native-star-rating-widget';
import { Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
const tutordata=[
  {
    id:1,
    name:"John Doe",
    subject:"Math",
    rating:4.5,
    img:"https://avatars.slack-edge.com/2024-10-23/7924599981906_8ee733a99e0d052ab678_192.png",
    description:"John is a math tutor with over 5 years of experience. He has a passion for helping students understand complex concepts in a simple way.",
    price:20,
    location:"New York",
    availability:"Weekdays 5pm - 8pm",
    reviews:[
      "Great tutor! Helped me with my math homework.",
      "Very patient and understanding.",
      "John is a great tutor! He helped me improve my grades.",
      "I highly recommend him for math tutoring.",
    ],
  },
  {
    id:2,
    name:"Jane Smith",
    subject:"Science",
    rating:4.8,
    img:"https://avatars.slack-edge.com/2024-10-23/7924599981906_8ee733a99e0d052ab678_192.png",
    description:"Jane is a science tutor with a background in biology and chemistry. She loves to make science fun and engaging for her students.",
    price:25,
    location:"Los Angeles",
    availability:"Weekends 10am - 2pm",
    reviews:[
      "Jane is an amazing tutor! She made science so much easier to understand.",
      "I loved her teaching style. Very interactive and fun.",
      "She helped me with my science project and I got an A!",
      "Highly recommend Jane for science tutoring.",
    ],
  },
]

const tutor = () => {
  const router = useRouter()
  return (
    <ScrollView>
      {tutordata.map((tutor) => (
        <TouchableOpacity key={tutor.id} onPress={() => router.push(`/(authenticated)/(tabs)/home`)} style={{marginBottom:5}}>
          <View style={{ flexDirection: 'row', padding:20, borderBottomColor: Colors.lightGray }}>
            <Image source={{ uri: tutor.img }} style={{ width: 100, height: 100, borderRadius: 25 }} />
            <View style={{ marginLeft: 10 }}>
              <Text style={{ fontSize: 30, fontWeight: 'bold' }}>{tutor.name}</Text>
              <Text style={{ fontSize: 25}}><Ionicons name='location-outline' size={25}/>{tutor.location}</Text>
              <Text style={{ color: Colors.gray,fontSize:23 }}>{tutor.subject}</Text>
              <Text style={{ color: Colors.gray,fontSize:20,width:"15%" }}>{tutor.description}</Text>
              <StarRatingDisplay rating={tutor.rating} starSize={25} />
              {tutor.reviews.map((review, index) => (
                <Text key={index} style={{ color: Colors.gray, fontSize:18,marginLeft:0 }}>{review}</Text>
              ))}
              </View>
          </View>
            <TouchableOpacity onPress={() => router.push(`/`)} style={{ backgroundColor: Colors.primary, padding: 10, borderRadius: 5, marginTop: 10,width:"70%",alignSelf:"center"}}>
             <Text style={{ color:  "white", textAlign: 'center', fontSize: 18 }}>Starts from {tutor.price}$/h</Text>
            </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

export default tutor