import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
<<<<<<< HEAD
import { Link, useRouter } from 'expo-router'
=======
import { Link } from 'expo-router'
import { setParams } from 'expo-router/build/global-state/routing'
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
import React from 'react'
import { StyleSheet, View, Text,StatusBar, TouchableOpacity} from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
<<<<<<< HEAD
import { getDatabase } from "firebase/database";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebaseConfig'
import { ref, onValue } from "firebase/database";
import { useEffect } from 'react'

=======
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043

const mock_data = {
  "category": {
    "name": "Neighborhood Chats",
    "channel": [
      {
        "name": "Announcements",
        "unread": true,
        "public": "public",
        "desc": "Important community announcements",
        "lastMessage": "Meeting this Saturday at 10am",
        "timestamp": "10:45 AM"
      },
      {
        "name": "Events",
        "unread": true,
        "public": "public",
        "desc": "Upcoming neighborhood events",
        "lastMessage": "Garage sale this weekend!",
        "timestamp": "Yesterday"
      },
      {
        "name": "Security",
        "unread": true,
        "public": "public",
        "desc": "Neighborhood watch updates",
        "lastMessage": "Suspicious activity on Oak St",
        "timestamp": "12:30 PM"
      },
      {
        "name": "Buy & Sell",
        "unread": false,
        "public": "public",
        "desc": "Marketplace for neighbors",
        "lastMessage": "Selling garden tools, barely used",
        "timestamp": "2 days ago"
      },
      {
        "name": "Help Wanted",
        "unread": false,
        "public": "public",
        "desc": "Request assistance from neighbors",
        "lastMessage": "Need help moving furniture",
        "timestamp": "3 days ago"
      },
      {
        "name": "Book Club",
        "unread": false,
        "public": "private",
        "desc": "Monthly book discussions",
        "lastMessage": "Next book: 'The Midnight Library'",
        "timestamp": "Monday"
      },
      {
        "name": "Running Group",
        "unread": false,
        "public": "invitation",
        "desc": "For neighborhood runners",
        "lastMessage": "Morning run tomorrow at 7am",
        "timestamp": "Tuesday"
      },
      {
        "name": "Gardening Tips",
        "unread": false,
        "public": "public",
        "desc": "Share your gardening knowledge",
        "lastMessage": "Best plants for shade?",
        "timestamp": "Last week"
      }
    ]
  }
}
<<<<<<< HEAD

const Page1 = () => {
  const router=useRouter()
  const name="John Doe"
  const length = mock_data.category.channel.filter((channel)=>channel.unread).length
  const length2 = mock_data.category.channel.length-length
  const app = initializeApp(firebaseConfig);
  const db=getDatabase(app);;
  const [channels, setchannels] = React.useState<{name:string,desc:string,public:string,unread:string}[]>([]);
  let channelNames: string[] = [];
  
  const getChannels = () => {
    const channelsRef = ref(db, 'chat');

    onValue(channelsRef, (snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            channelNames.push(childSnapshot.key as string);
          });
          
          channelNames.forEach((channelName) => {
            const channelRef = ref(db, `chat/${channelName}`);
            onValue(channelRef, (childSnapshot) => {
              const data = childSnapshot.val();
              if (data) {
                setchannels((prevchannels) => [
                  ...prevchannels,
                  {
                    name: channelName,
                    desc: data.desc || "No description available",
                    public: data.public || "public",
                    unread: data.unread || "false",
                  }
                ]);
              }
            });
          });


          } else {
          console.log("No data available at /chat");
}
    }
  
  );
  }

  useEffect(()=>{
    getChannels()
    console.log(channels)
  },[])

  return (
      <SafeAreaView style={{backgroundColor:Colors.background}}>

        <Text style={{fontWeight:"bold",fontSize:24,marginLeft:5,marginTop:3,marginBottom:2}}>My School</Text>
        <TouchableOpacity  style={{backgroundColor:Colors.primaryMuted,width:"90%",marginLeft:"5%",borderRadius:15,marginBottom:"5%"}}  onPress={()=>(router.push({pathname:"/(authenticated)/school/[school]",params:{school:"XYZ"}}))} >


         <View style={{flexDirection:"row"}}>
              <Ionicons name='home-outline' size={60} color={"black"} style={{padding:8,alignSelf:"center"}} />
              <Text style={{textAlign:"center",width:"55%",fontWeight:"bold",fontSize:25,textAlignVertical:"center"}}>XYZ</Text>
          </View>

        </TouchableOpacity>

        <ScrollView>
        <Text style={{fontWeight:"bold",fontSize:24,marginLeft:5}}>{length} Unread Channel</Text>
        <View>
        {channels!=null && channels.filter((channel) => channel.unread==="true").map((channel) => (
=======
const Page1 = () => {
  
  const name="John Doe"
  const length = mock_data.category.channel.filter((channel)=>channel.unread).length
  const length2 = mock_data.category.channel.length-length
  return (
      <SafeAreaView style={{backgroundColor:Colors.background}}>
        <ScrollView>
        <Text style={{fontWeight:"bold",fontSize:24,marginLeft:5}}>{length} Unread Channel</Text>
        <View>
        {mock_data.category.channel.filter((channel) => channel.unread).map((channel) => (
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
          <Link href={{pathname:"/chat/[room]",params:{room:channel.name}}}  key={channel.name} style={{alignItems:"center",padding:10,backgroundColor:Colors.lightGray,marginRight:10,marginLeft:10,borderRadius:5,marginTop:10}}  >
              {channel.public==="public" && <Ionicons name='earth-outline' size={60} color={Colors.primary} style={{paddingTop:5,alignSelf:"center"}} />}
              {channel.public==="invitation" && <Ionicons name='link-outline' size={60} color={Colors.primary} style={{paddingTop:5,alignSelf:"center"}} />}
              {channel.public==="private" && <Ionicons name='lock-closed-outline' size={60} color={Colors.primary} style={{paddingTop:5,alignSelf:"center"}} />}
              <View style={{flexDirection:"column"}}>
              <Text style={{fontSize:26,paddingLeft:10}}>{channel.name}</Text>
              <Text style={{fontSize:14,paddingLeft:10}}>{channel.desc}</Text>
              </View>
          </Link>
        ))}
        </View>
<<<<<<< HEAD

        <Text style={{fontWeight:"bold",fontSize:24,marginLeft:5,marginTop:5}}>{length2} Other Channels</Text>
        <View>
        {channels!=null && channels.filter((channel) => channel.unread==="false").map((channel) => (
=======
        <Text style={{fontWeight:"bold",fontSize:24,marginLeft:5,marginTop:5}}>{length2} Other Channels</Text>
        <View>
        {mock_data.category.channel.filter((channel) => channel.unread===false).map((channel) => (
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
          <Link href={{pathname:"/chat/[room]",params:{room:channel.name}}}  key={channel.name} style={{alignItems:"center",padding:10,backgroundColor:Colors.lightGray,marginRight:10,marginLeft:10,borderRadius:5,marginTop:10}}  >

              {channel.public==="public" && <Ionicons name='earth-outline' size={60} color={Colors.primary} style={{paddingTop:5,alignSelf:"center"}} />}
              {channel.public==="invitation" && <Ionicons name='link-outline' size={60} color={Colors.primary} style={{paddingTop:5,alignSelf:"center"}} />}
              {channel.public==="private" && <Ionicons name='lock-closed-outline' size={60} color={Colors.primary} style={{paddingTop:5,alignSelf:"center"}} />}
              <View style={{flexDirection:"column"}}>
              <Text style={{fontSize:26,paddingLeft:10}}>{channel.name}</Text>
              <Text style={{fontSize:14,paddingLeft:10}}>{channel.desc}</Text>
              </View>
          </Link>
        ))}
        </View>
<<<<<<< HEAD

=======
>>>>>>> 37aa45639aab9fd2fd2e72e301ab301e768bc043
        </ScrollView>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  welcome:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  works:{
    backgroundColor:Colors.lightGray,
    width:130,
    height:130,
    marginLeft:"20%",
    marginTop:"10%",
    borderRadius:"7%"
  },
  workText:{
    textAlign:"center",
    paddingTop:"10%"
  },
  todo:{
    paddingTop:"5%"
  },
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
})
export default Page1