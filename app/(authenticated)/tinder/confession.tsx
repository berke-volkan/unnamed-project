import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'

const mock_confession_data=[
    {
        id:1,
        title:"I hate my roommate",
        desc:"I can't stand my roommate. They are so messy and loud.",
        image:"https://images.unsplash.com/photo-1560807707-8cc77767d783?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    {
        id:2,
        title:"I cheated on my exam",
        desc:"I cheated on my exam and I feel guilty about it.",
        image:"https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    },
    {
        id:3,
        title:"I have a crush on my teacher",
        desc:"I have a crush on my teacher and I don't know what to do about it.",
        image:"https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60",
    }
]

const confession = () => {
  return (
    <View>
        <View style={{alignItems:"center"}}>
            {mock_confession_data.map((confession)=>(
                <View key={confession.id} style={{backgroundColor:Colors.lightGray,alignItems:"center",borderRadius:5,width:"70%",marginTop:5}}>
                    <Image source={{uri:confession.image}} style={{width:100,height:100,borderRadius:5}} />
                    <Text style={{fontSize:26,paddingLeft:10,fontWeight:"bold",textAlign:"center"}}>{confession.title}</Text>
                    <Text style={{fontSize:14,paddingLeft:10}}>{confession.desc}</Text>
                </View>
            ))}
        </View>
    </View>
  )
}

export default confession