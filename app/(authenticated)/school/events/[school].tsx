import { View, Text } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';
import { Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
const schoolEvents = [
  {
    id: "event-001",
    title: "Science Fair 2025",
    description: "Students showcase their innovative science projects. Open to public and parents.",
    date: "2025-10-12",
    time: "10:00 AM - 2:00 PM",
    location: "School Gymnasium",
    organizer: "Science Department",
    tags: ["science", "exhibition", "students"],
    imageUrl: "https://images.unsplash.com/photo-1581091870622-1d94d53aef12?auto=format&fit=crop&w=800&q=80",
    isMandatory: false
  },
  {
    id: "event-002",
    title: "Graduation Ceremony",
    description: "Formal ceremony celebrating the graduating class of 2025.",
    date: "2025-06-20",
    time: "6:00 PM - 8:00 PM",
    location: "Auditorium",
    organizer: "Admin Office",
    tags: ["graduation", "formal", "seniors"],
    imageUrl: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238?auto=format&fit=crop&w=800&q=80",
    isMandatory: true
  },
  {
    id: "event-003",
    title: "Parent-Teacher Conferences",
    description: "One-on-one meetings to discuss student progress.",
    date: "2025-11-05",
    time: "4:00 PM - 7:00 PM",
    location: "Classrooms",
    organizer: "Academic Affairs",
    tags: ["parents", "teachers", "progress"],
    imageUrl: "https://images.unsplash.com/photo-1605546482529-6e75d8d3f202?auto=format&fit=crop&w=800&q=80",
    isMandatory: true
  },
  {
    id: "event-004",
    title: "Club Expo",
    description: "All student clubs will present their activities and recruit new members.",
    date: "2025-09-15",
    time: "12:00 PM - 3:00 PM",
    location: "Main Hall",
    organizer: "Student Council",
    tags: ["clubs", "recruitment", "extracurricular"],
    imageUrl: "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80",
    isMandatory: false
  }
];


const event = () => {
  return (
    <ScrollView>
      <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold",marginBottom:10}}>Important School Events</Text>
      {schoolEvents.map((event)=>(
        <View style={{backgroundColor:Colors.lightGray,borderRadius:10,width:"90%",alignSelf:"center",marginBottom:10}}>
          <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold",marginBottom:10}}>{event.title}</Text>
          <View style={{flexDirection:"row",alignSelf:"center"}}>
          {event.tags.map((tag,index)=>(
            <View key={index} style={{backgroundColor:Colors.primaryMuted,borderRadius:10,width:"19%",marginRight:5,marginBottom:10,marginTop:5
            }}>
              <Text style={{textAlign:"center"}}>{tag}</Text>
            </View>          
          ))}
          </View>
          <Image src={event.imageUrl} width={370}height={200} borderRadius={10}/>
          <Text style={{marginRight:10,marginLeft:10,fontSize:16}}>{event.description}</Text>
          <Text style={{marginRight:10,marginLeft:10,fontSize:16}}>Location: {event.location}</Text>
          <Text style={{marginRight:10,marginLeft:10,fontSize:16,fontStyle:"italic"}}>Organized by {event.organizer}</Text>
          {event.isMandatory===true && 
          <View style={{backgroundColor:"red",width:"50%",borderRadius:10,marginLeft:10}}>
            <Text style={{color:"white",textAlign:'center'}}>Event is mandatory</Text>
          </View>
          }
          {event.isMandatory===false && 
          <View style={{backgroundColor:"green",width:"50%",borderRadius:10,marginLeft:10}}>
            <Text style={{color:"white",textAlign:'center'}}>Event is not-mandatory</Text>
          </View>
          }
          <Text style={{marginRight:10,marginLeft:10,fontSize:16,marginBottom:10}}>Date: {event.date} / {event.time}</Text>
        </View>
      ))}
    </ScrollView>
  )
}

export default event