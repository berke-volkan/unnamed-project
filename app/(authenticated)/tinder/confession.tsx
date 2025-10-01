import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '@/constants/Colors'
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { useRouter } from 'expo-router';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '@/firebaseConfig';
import { getDatabase, onValue, push, ref } from 'firebase/database';

{/*
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

*/}
const confession = () => {
    const router = useRouter()
    const [confessions, setConfession] = React.useState<any[]>([])
    const [title, setTitle] = React.useState('')
    const [desc, setDesc] = React.useState('')
    const [imageUrl, setImageUrl] = React.useState('')

    const app = initializeApp(firebaseConfig)
    const db = getDatabase(app)
  
    const getConfessions = () => {
        const confessionsRef = ref(db, 'confessions');
        
        onValue(confessionsRef, (snapshot) => {
            if (snapshot.exists()) {
                const confessionsData: any[] = [];
                snapshot.forEach((childSnapshot) => {
                    const data = childSnapshot.val();
                    confessionsData.push({
                        title: data.title,
                        desc: data.desc,
                        image: data.image
                    });
                });
                setConfession(confessionsData);
            } else {
                console.log("No data available");
                setConfession([]);
            }
        });
    }

    useEffect(() => {
        getConfessions();
    }, []);
    
    const pushConf=()=>{
        const confessionsRef = ref(db, 'confessions')
        push(confessionsRef,{
            title:title,
            desc:desc,
            image:imageUrl,
        })
    }

    return (
        <View style={{alignItems:"center"}}>
            <Text style={{textAlign:"center",fontWeight:"bold",fontSize:36}}>Confessions</Text>
            <ScrollView showsVerticalScrollIndicator={false} style={{height:"100%"}}>
                <Text style={{textAlign:"left",alignSelf:"stretch",fontSize:29,marginLeft:10}}>Share Confession</Text>
                <View style={{alignSelf:"stretch"}}>
                    <Text style={{fontSize:20,marginLeft:20}}>Title:</Text>
                    <TextInput 
                        style={{backgroundColor:Colors.lightGray,width:"90%",marginLeft:10,borderRadius:10}}
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Text style={{fontSize:20,marginLeft:20}}>Confession:</Text>
                    <TextInput 
                        style={{backgroundColor:Colors.lightGray,width:"90%",marginLeft:10,borderRadius:10}}
                        value={desc}
                        onChangeText={setDesc}
                    />
                    <Text style={{fontSize:20,marginLeft:20}}>Add a image url:</Text>
                    <TextInput 
                        style={{backgroundColor:Colors.lightGray,width:"90%",marginLeft:10,borderRadius:10}}
                        value={imageUrl}
                        onChangeText={setImageUrl}
                    />               
                    <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,marginTop:5,width:"40%",borderRadius:5,alignSelf:"flex-end",marginRight:5}} onPress={()=>{pushConf()}}>
                        <Text style={{textAlign:"center"}}>Share!</Text>
                    </TouchableOpacity>
                </View>
                {confessions && confessions.map((confession,index) => (
                    <View key={index} style={{backgroundColor:Colors.primaryMuted,alignItems:"center",borderRadius:5,width:"90%",margin:15}}>
                        <Image source={{uri:confession.image}} style={{width:300,height:150,borderRadius:5,margin:15}} />
                        <Text style={{fontSize:26,paddingLeft:10,fontWeight:"bold",textAlign:"center"}}>{confession.title}</Text>
                        <Text style={{fontSize:14,paddingLeft:10,paddingBottom:10}}>{confession.desc}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

export default confession