import { View, Text, Image } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons';

const mockPostData = [
  {
    op: "Alexandar Joseph",
    likeCount: 10,
    postTitle: "Debugging Tips for JavaScript Developers",
    desc: "Here’s what finally worked for me after hours of frustration.",
    hasImage: false,
  },
  {
    op: "Joseph A.",
    likeCount: 10,
    postTitle: "When Stack Overflow Doesn’t Help...",
    desc: "Sometimes you just have to stare at the screen until it makes sense.",
    hasImage: true,
    imgUrl: "https://tse1.mm.bing.net/th/id/OIP.mriCZdnWLwTzBIZ67IeCGQHaHa?r=0&rs=1&pid=ImgDetMain",
  }
];


const social = () => {
  return (
    <View>
      <Text style={{textAlign:'center',fontSize:30,fontWeight:"bold"}}>Social Media</Text>
      {mockPostData.map((post,index)=>(
        <View key={index} style={{backgroundColor:Colors.primaryMuted,alignSelf:"center",borderRadius:10,width:"95%",marginBottom:10}}>
            {post.hasImage===true && <Text style={{marginLeft:10,fontWeight:"bold",fontSize:18,textAlign:"center",marginTop:10}}>{post.postTitle}</Text>}
            {post.hasImage===true && <Image  src={post.imgUrl} width={200} height={200} borderRadius={10} style={{marginBottom:10,marginTop:10,marginLeft:10,alignSelf:"center"}}/>}
            {post.hasImage===true && <Text style={{marginLeft:10,marginBottom:10,marginRight:10,fontSize:16}}>{post.desc}</Text>}
            <View style={{flexDirection:"row"}}>
              <Ionicons name='heart-outline' size={40} style={{marginLeft:10,marginBottom:10}}/>
              <Text style={{marginTop:10}}>{post.likeCount}</Text>
              <Text style={{textAlign:"right",marginRight:10,width:"80%",marginTop:10,fontSize:19}}>{post.op}</Text>
            </View>
        </View>
      ))}
    </View>
  )
}

export default social