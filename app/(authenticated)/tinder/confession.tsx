import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { ScrollView } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
const mock_confession_data = [
  {
    id: 1,
    title: "I hate my roommate",
    desc: "My roommate never cleans up, plays loud music at night, and brings people over without asking. It's driving me crazy.",
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 2,
    title: "I cheated on my exam",
    desc: "I looked up answers during a midterm. I regret it every day but I was so stressed I panicked.",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 3,
    title: "I have a crush on my teacher",
    desc: "They're kind, smart, and funny. I know it's not appropriate, but I can't help how I feel.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 4,
    title: "I'm pretending to like my major",
    desc: "I told my parents I love computer science, but I actually want to be a writer.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=60"
  },
  {
    id: 5,
    title: "I'm scared of graduating",
    desc: "Everyone seems so ready, but I feel totally unprepared and unsure about my future.",
    image: "https://images.unsplash.com/photo-1549921296-3a6b2da21581?auto=format&fit=crop&w=800&q=60"
  }
];


const confession = () => {
    const router=useRouter()
  return (
    <View style={{alignItems:"center"}}>
        <ScrollView >
            {mock_confession_data.map((confession)=>(
                <View key={confession.id} style={{backgroundColor:Colors.primaryMuted,alignItems:"center",borderRadius:5,width:"90%",margin:10}}>
                    <Image source={{uri:confession.image}} style={{width:300,height:150,borderRadius:5}} />
                    <Text style={{fontSize:26,paddingLeft:10,fontWeight:"bold",textAlign:"center"}}>{confession.title}</Text>
                    <Text style={{fontSize:14,paddingLeft:10,paddingBottom:10}}>{confession.desc}</Text>
                </View>
            ))}
        </ScrollView>
    </View>
  )
}

export default confession