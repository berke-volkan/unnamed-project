import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { getDatabase } from "firebase/database";
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebaseConfig'
import { ref, onValue } from "firebase/database";


const mock_data = [
  {
    id: 1,
    name: "Dinleme sınavı yapılacak",
    desc: "15  Mayıs Perşembe 2. Ders saati İngilizce  dinleme sınavını yapacağız.  Katılım zorunludur. Girmeyenlerin rapor getirmesi gerekmektedir.",
    author: "Ali",
    date: "2023-05-10",
  },
  {
    id: 2,
    name: "Okul Gezisi",
    desc: "20 Mayıs Pazartesi günü Bilim Müzesi'ne gezi düzenlenecektir. İzin formlarının en geç 18 Mayıs'a kadar teslim edilmesi gerekmektedir.",
    author: "Mehmet",
    date: "2023-05-12",
  },
  {
    id: 3,
    name: "Veli Toplantısı",
    desc: "Değerli velilerimiz, 25 Mayıs Cumartesi saat 14:00'te yıl sonu değerlendirme toplantısı yapılacaktır. Katılımınız önemle rica olunur.",
    author: "Ayşe",
    date: "2023-05-15",
  },
  {
    id: 4,
    name: "Spor Şenliği",
    desc: "1-5 Haziran tarihleri arasında okulumuzda spor şenliği düzenlenecektir. Katılmak isteyen öğrencilerin beden eğitimi öğretmenine başvurmaları gerekmektedir.",
    author: "Hakan",
    date: "2023-05-18",
  }
]
const mock_data1 = {
  "category": {
    "name": "Neighborhood Chats",
    "announcement": [
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
const announcements = () => {
  const isteacher=true
  const app = initializeApp(firebaseConfig);
  const db=getDatabase(app);;
  const [announcements, setannouncements] = React.useState<{id:string,name:string,desc:string,author:string,date:string}[]>([]);
  let announcementNames: string[] = [];
  const getannouncements = () => {
    const announcementsRef = ref(db, 'chat');

    onValue(announcementsRef, (snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            announcementNames.push(childSnapshot.key as string);
          });
          
          announcementNames.forEach((announcementName) => {
            const announcementRef = ref(db, `chat/${announcementName}`);
            onValue(announcementRef, (childSnapshot) => {
              const data = childSnapshot.val();
              if (data) {
                setannouncements((prevannouncements)=>[
                  ...prevannouncements,
                  {
                    id: announcementName,
                    name: data.name || "No title available",
                    desc: data.desc || "No description available",
                    author: data.author || "Unknown",
                    date: data.date || "Unknown"
                  }
                ])
              }
            });
          });


          } else {
          console.log("No data available at /chat");
}
    }
  
  );
  }
  React.useEffect(() => {
    getannouncements();
  }, []);

  return (
    <ScrollView >
      {announcements.map((announcement)=>(
        <View key={announcement.id} style={{backgroundColor:"#90EE90",borderRadius:5,width:"85%",alignSelf:"center",marginBottom:5}}>
          <Text style={{textAlign:"center",fontSize:26,fontWeight:"bold"}}>{announcement.name}</Text>
          <Text style={{marginRight:5,marginLeft:5,fontSize:18}}>{announcement.desc}</Text>
          <Text style={{textAlign:"right"}}>{announcement.author}</Text>
          <Text style={{textAlign:"right"}}>{announcement.date}</Text>
        </View>
      ))}
                {isteacher &&          <View style={styles.bottombar}>
                          <TextInput 
                          placeholder='Write your message'
                          style={{backgroundColor:Colors.lightGray,width:"60%",height:40,marginLeft:10,borderRadius:10,textAlign:"center"}}
                          /> 
                          <View style={{width:1}}/>
                          <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:"30%",height:40,width:40,alignItems:"center",marginLeft:5}}>
                            <Ionicons name='send'  color={Colors.primary} style={{margin:10}} size={22}/>
                          </TouchableOpacity>
                        </View>}
    </ScrollView >
  )
}



const styles= StyleSheet.create({
    bottombar:{
    paddingTop:20,
    alignItems:"center",
    flexDirection:"row",
    marginLeft:10
  },
})
export default announcements