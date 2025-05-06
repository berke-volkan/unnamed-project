import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, View, Text,StatusBar, TouchableOpacity} from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'
const mock_data = [
  {
    id: '1',
    name: "Verified",
    logo: "",
    desc: "Verified Users | You cant leave",
    school: "Staff Team",
    notMember: false,
    memberCount: 10,
    memberLimit: 20,
    howToJoin: "default"
  },
  {
    id: "2",
    name: "mangoClub",
    desc: "Club of mango lovers",
    school: "X School",
    notMember: true,
    memberCount: 20,
    memberLimit: 22,
    howToJoin: "Open to all",
  },
  {
    id: '3',
    name: "hackX",
    logo: "",
    desc: "Join us to hack!",
    school: "online",
    notMember: true,
    memberCount: 10,
    memberLimit: 20,
    howToJoin: "Invite Only",
  },
  {
    id: "4",
    name: "bananaClub",
    desc: "Club of banana lovers",
    school: "Z School",
    notMember: false,
    memberCount: 20,
    memberLimit: 21,
    howToJoin: "Open to all",
  },
  {
    id: "5",
    name: "codingNinjas",
    desc: "Competitive programming",
    school: "Tech University",
    notMember: true,
    memberCount: 15,
    memberLimit: 25,
    howToJoin: "Open to all",
  },
  {
    id: "6",
    name: "bookLovers",
    desc: "For passionate readers",
    school: "online",
    notMember: false,
    memberCount: 12,
    memberLimit: 30,
    howToJoin: "Open to all",
  },
  {
    id: "7",
    name: "chessClub",
    desc: "Strategic minds welcome",
    school: "Y Academy",
    notMember: true,
    memberCount: 8,
    memberLimit: 10,
    howToJoin: "Invite Only",
  }
];

const mock_teams_Data = [
  {
    id: "1",
    name: "Robo Warriors",
    desc: "Competitive robotics team",
    events: [
      "National Robotics League",
      "RoboCup 2023",
      "Tech Expo"
    ],
    category: "robotics",
    notMember: true,
    memberCount: 8,
    memberLimit: 10,
    howToJoin: "Invite Only",
  },
  {
    id: "2",
    name: "Code Crusaders",
    desc: "Hackathon specialists",
    events: [
      "HackX 2023",
      "CodeFest",
      "DevJam"
    ],
    category: "programming",
    notMember: false,
    memberCount: 5,
    memberLimit: 7,
    howToJoin: "Open to all",
  },
  {
    id: "3",
    name: "Debate Masters",
    desc: "Championship debate team",
    events: [
      "National Debate Tournament",
      "Public Speaking Contest",
      "Model UN"
    ],
    category: "academic",
    notMember: true,
    memberCount: 12,
    memberLimit: 15,
    howToJoin: "Open to all",
  },
  {
    id: "4",
    name: "Science Squad",
    desc: "Science competition team",
    events: [
      "Science Olympiad",
      "Chemistry Challenge",
      "Research Showcase"
    ],
    category: "academic",
    notMember: false,
    memberCount: 6,
    memberLimit: 8,
    howToJoin: "Open to all",
  },
  {
    id: "5",
    name: "Eco Warriors",
    desc: "Environmental activism team",
    events: [
      "Climate Summit",
      "Conservation Challenge",
      "Recycling Drive"
    ],
    category: "environment",
    notMember: true,
    memberCount: 9,
    memberLimit: 12,
    howToJoin: "Open to all",
  },
  {
    id: "6",
    name: "Basketball Titans",
    desc: "School basketball team",
    events: [
      "Regional Championship",
      "3-on-3 Tournament",
      "All-Stars Match"
    ],
    category: "sports",
    notMember: true,
    memberCount: 10,
    memberLimit: 15,
    howToJoin: "Invite Only",
  },
  {
    id: "7",
    name: "Symphony Crew",
    desc: "Orchestra ensemble",
    events: [
      "Spring Concert",
      "Music Festival",
      "Holiday Performance"
    ],
    category: "music",
    notMember: false,
    memberCount: 14,
    memberLimit: 20,
    howToJoin: "Open to all",
  },
  {
    id: "8",
    name: "Art Collective",
    desc: "Visual arts exhibition team",
    events: [
      "Annual Showcase",
      "Street Art Festival",
      "Digital Art Competition"
    ],
    category: "art",
    notMember: true,
    memberCount: 7,
    memberLimit: 12,
    howToJoin: "Open to all",
  },
  {
    id: "9",
    name: "Chess Champions",
    desc: "Strategic chess players",
    events: [
      "District Tournament",
      "Speed Chess Battle",
      "International Competition"
    ],
    category: "academic",
    notMember: true,
    memberCount: 5,
    memberLimit: 8,
    howToJoin: "Open to all",
  }
]

const Page = () => {
  const router = useRouter()
  let clubCount = mock_data.filter((item) => !item.notMember).length;


  const joinClub = (clubName:string) => {
    console.log(`Joining ${clubName}...`);
    if (clubCount===5) {
      alert("You can only join 5 clubs at a time")
      return
    }else{
      mock_data.map((item) => {
        if (item.name === clubName) {
          item.notMember = false;
          item.memberCount += 1;
          clubCount += 1;
        }
      });
      alert(`You have joined ${clubName},${clubCount}`)
    }

    // TODO: Integrate with Clerk Orgamizations
  }
  const leaveFromClub = (clubName:string) => {
    console.log(`Leaving ${clubName}...`);
    if (clubCount===0) {
      alert("You are not a member of any club")
      return
    }else{
      mock_data.map((item) => {
        if (item.name === clubName) {
          item.notMember = true;
          item.memberCount -= 1;
          clubCount -= 1;
        }
      });
      alert(`You have joined ${clubName},${clubCount}`)
    }
  
  }
  


  return (
      <SafeAreaView style={{backgroundColor:Colors.background}}>
        <ScrollView>
        <Text style={styles.topText}>
          Yeni bir gün,Yeni bir kulüp :)

        </Text>
        <Text style={styles.cautionText}>⚠️ Maalesef şuanlık sadece 5 kulübe katılabilirsin</Text>
        <Text style={{fontWeight:700,fontSize:25,width:"100%",marginLeft:5}}>
          İçinde bulunduğun kulüpler ({clubCount}/5):
        </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom:10,width:"100%"}}>
        {mock_data.map((item,index)=>(
            <View key={index}>
            {(!item.notMember) && (item.howToJoin!=="default") && <View style={styles.clubs} key={index}>
              <Ionicons name="chatbubble-ellipses-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>
              <Text style={styles.clubText}>{item.name}</Text>
              <Text style={styles.clubDescText}>{item.desc}</Text>
              {item.school!=="online" &&<Text style={[styles.clubDescText,{fontStyle:"italic"}]}>Powered by {item.school}</Text>}
              {item.school==="online" &&<Text style={{fontSize:12,textAlign:"center",fontStyle:"italic"}}>This club is running by our community</Text>}
              <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:10,width:125,alignSelf:"center",marginTop:5}} onPress={()=>{router.push({pathname:"/(authenticated)/clubs/club-panel/[club]",params:{club:item.name}})}}><Text style={{textAlign:"center"}}>See Club Panel</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"red",borderRadius:10,width:125,alignSelf:"center",marginTop:5}} onPress={()=>{leaveFromClub(item.name)}}><Text style={{textAlign:"center",color:"white"}}>Leave from Club</Text></TouchableOpacity>            
            </View>
            }
            {(item.howToJoin==="default")&& <View style={styles.clubs} key={index}>
              <Ionicons name="shield-half-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>
              <Text style={styles.clubText}>{item.name}</Text>
              <Text style={styles.clubDescText}>{item.desc}</Text>
              <Text style={[styles.clubDescText,{fontStyle:"italic",paddingTop:12}]}>Created by {item.school}</Text>
            </View>}
            </View>
         ))}
        </ScrollView>
          
          
          <Text style={{fontWeight:700,fontSize:25,width:"100%",marginLeft:5}}>Katılacak bir kulüp bul ({5-clubCount}/5):</Text>

          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom:10,width:"100%"}}>
          {mock_data.map((item,index)=>(
            <View key={index}>
              {(item.notMember) && (
              <View style={styles.clubs} >
                <Ionicons name="chatbubble-ellipses-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>
                <Text style={styles.clubText}>{item.name}</Text>
                <Text style={styles.clubDescText}>{item.desc}</Text>
                {item.school!=="online" &&<Text style={[styles.clubDescText,{fontStyle:"italic"}]}>Powered by {item.school}</Text>}
                {item.school==="online" &&<Text style={{fontSize:12,textAlign:"center",fontStyle:"italic"}}>This club is running by our community</Text>}
                {(item.notMember) && (item.memberCount<item.memberLimit) && (item.howToJoin==="Open to all") && <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:10,width:125,alignSelf:"center",marginTop:5}} onPress={()=>{joinClub(item.name)}}><Text style={{textAlign:"center"}}>Join This Club ({item.memberCount}/{item.memberLimit})</Text></TouchableOpacity>}
                {(item.notMember) && (item.memberCount>=item.memberLimit)  && <Text style={[styles.cautionText,{textAlign:"center",fontSize:12,marginTop:5}]}>⚠️ Sorry, this club is full</Text>}
                {(item.notMember) && (item.memberCount<=item.memberLimit) && (item.howToJoin==="Invite Only")  && <Text style={[styles.cautionText,{textAlign:"center",fontSize:12,marginTop:5}]}>⚠️ Sorry, You need a invitation for joining this club</Text>}
              </View>
              )}
              </View>

           ))}
           </ScrollView>

         <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:10,width:50,alignSelf:"flex-end",marginTop:5,marginRight:8}} onPress={()=>{router.push({pathname:"/clubs/create-new/page"})}}>
          <Ionicons name="add-circle-outline" size={24} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%",paddingBottom:5}}/>
         </TouchableOpacity>
         <Text style={{fontWeight:700,fontSize:25,width:"100%",marginLeft:5}}>İçinde bulunduğun takımlar:</Text>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom:20,width:"100%"}}>
        {mock_teams_Data.map((item,index)=>(
            <View key={index}>
            {(!item.notMember) && (item.howToJoin!=="default") && <View style={styles.teams} key={index}>
              {item.category==="robotics" && <Ionicons name="game-controller-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="programming" && <Ionicons name="code-slash-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="academic" && <Ionicons name="school-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="environment" && <Ionicons name="leaf-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="sports" && <Ionicons name="football-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="music" && <Ionicons name="musical-notes-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="art" && <Ionicons name="color-palette-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="debate" && <Ionicons name="chatbubble-ellipses-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              <Text style={styles.clubText}>{item.name}</Text>
              <View style={{backgroundColor:"pink",borderRadius:5,width:100,alignSelf:"center",marginTop:5,marginBottom:5}}>
                <Text style={{textAlign:"center"}}>{item.category}</Text>
              </View>
              <Text style={styles.clubDescText}>{item.desc}</Text>
              <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:10,width:125,alignSelf:"center",marginTop:10}} onPress={()=>{router.push({pathname:"/(authenticated)/teams/deadlines/[team]",params:{team:item.name}})}}><Text style={{textAlign:"center"}}>See Deadlines</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:10,width:125,alignSelf:"center",marginTop:10}} onPress={()=>{router.push({pathname:"/(authenticated)/clubs/club-panel/[club]",params:{club:item.name}})}}><Text style={{textAlign:"center"}}>See Team Panel</Text></TouchableOpacity>
              <TouchableOpacity style={{backgroundColor:"red",borderRadius:10,width:125,alignSelf:"center",marginTop:5}} onPress={()=>{leaveFromClub(item.name)}}><Text style={{textAlign:"center",color:"white"}}>Leave from Team</Text></TouchableOpacity>            
            </View>
            }
            </View>
         ))}
        </ScrollView> 
        <Text style={{fontWeight:700,fontSize:25,width:"100%",marginLeft:5}}>Katılacak bir takım bul:</Text>
         <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom:20,width:"100%"}}>
        {mock_teams_Data.map((item,index)=>(
            <View key={index}>
            {(item.notMember) && (item.howToJoin!=="default") && <View style={styles.teams} key={index}>
              {item.category==="robotics" && <Ionicons name="game-controller-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="programming" && <Ionicons name="code-slash-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="academic" && <Ionicons name="school-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="environment" && <Ionicons name="leaf-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="sports" && <Ionicons name="football-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="music" && <Ionicons name="musical-notes-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="art" && <Ionicons name="color-palette-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              {item.category==="debate" && <Ionicons name="chatbubble-ellipses-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>}
              <Text style={styles.clubText}>{item.name}</Text>
              <View style={{backgroundColor:"pink",borderRadius:5,width:100,alignSelf:"center",marginTop:5,marginBottom:5}}>
                <Text style={{textAlign:"center"}}>{item.category}</Text>
              </View>
              {item.events.map((eventItem, eventIndex) => (
                <View key={eventIndex} style={{backgroundColor:Colors.primary,width:"60%",marginLeft:"20%",borderRadius:5,marginTop:5,marginBottom:5}}>
                  <Text style={{fontSize:12, textAlign:"center",color:"white"}}>{eventItem}</Text>
                </View> 
              ))}
              <Text style={styles.clubDescText}>{item.desc}</Text>
              {(item.notMember) && (item.memberCount<item.memberLimit) && (item.howToJoin==="Open to all") && <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:10,width:125,alignSelf:"center",marginTop:5}} onPress={()=>{joinClub(item.name)}}><Text style={{textAlign:"center"}}>Join This Team ({item.memberCount}/{item.memberLimit})</Text></TouchableOpacity>}
              {(item.notMember) && (item.memberCount>=item.memberLimit)  && <Text style={[styles.cautionText,{textAlign:"center",fontSize:12,marginTop:5}]}>⚠️ Sorry, this team is full</Text>}
              {(item.notMember) && (item.memberCount<=item.memberLimit) && (item.howToJoin==="Invite Only")  && <Text style={[styles.cautionText,{textAlign:"center",fontSize:12,marginTop:5}]}>⚠️ Sorry, You need a invitation for joining this Team</Text>}
             
            </View>
            }
            </View>
         ))}
        </ScrollView>         
        </ScrollView>
      </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  topText:{
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20,
  },
  cautionText:{
    fontSize: 15,
    textAlign: 'center',
    marginTop: 10,
    color:"red"
  },
  clubs:{
    backgroundColor:Colors.lightGray,
    width:130,
    height:200,
    marginLeft:"5%",
    marginTop:"5%",
    borderRadius:"7%"
  },
  teams:{
    backgroundColor:Colors.lightGray,
    width:220,
    height:300,
    marginLeft:"5%",
    marginTop:"5%",
    borderRadius:"7%"
  },
  clubText:{
    textAlign:"center",
    paddingTop:"10%",
  },
  clubDescText:{
    fontSize:12,
    textAlign:"center",
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
export default Page