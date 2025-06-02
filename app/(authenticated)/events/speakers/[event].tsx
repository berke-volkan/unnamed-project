import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React, { useCallback, useEffect, useState } from 'react'
import { 
  Image,
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native'

import { useLocalSearchParams } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'
const mock_speaker_data = [
    {
        id: "1",
        name: "Dr. Emily Chen",
        desc: "Climate Scientist and Policy Advisor",
        imageUrl: "https://images.unsplash.com/photo-1615608178738-37f9e80546db?q=80&w=1000&auto=format&fit=crop",
        importantTitles: ["CEO of GreenFuture", "Author of 'Climate Change: A Global Perspective'"],
        socialMedia: [
            { platform: "LinkedIn", url: "https://www.linkedin.com/in/emilychen" },
            { platform: "Twitter", url: "https://twitter.com/DrEmilyChen" }
        ],
        bio: "Leading researcher on climate adaptation strategies with 15+ years of experience advising governments and corporations.",
        topics: ["Climate Policy", "Sustainability", "Environmental Justice"],
        nameOfTalk: "The Future of Climate Action",
        date: "2023-10-15",
        time: "10:00 AM - 11:00 AM",
        age: "42",
    },
    {
        id: "2",
        name: "Marcus Johnson",
        desc: "Tech Entrepreneur & AI Ethicist",
        imageUrl: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1000&auto=format&fit=crop",
        importantTitles: ["Founder of EthicalAI", "Former CTO at TechGiant"],
        socialMedia: [
            { platform: "LinkedIn", url: "https://www.linkedin.com/in/marcusjohnson" },
            { platform: "Twitter", url: "https://twitter.com/MarcusJohnsonAI" },
            { platform: "GitHub", url: "https://github.com/marcusjohnson" }
        ],
        bio: "Pioneer in responsible AI development focusing on eliminating algorithmic bias in critical systems.",
        topics: ["AI Ethics", "Tech Innovation", "Digital Inclusion"],
        nameOfTalk: "Ethical AI Development in Practice",
        date: "2023-10-15",
        time: "11:30 AM - 12:30 PM",
        age: "38",
    },
    {
        id: "3",
        name: "Dr. Sophia Patel",
        desc: "Neuroscientist & Medical Innovator",
        imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1000&auto=format&fit=crop",
        importantTitles: ["Research Director at BrainTech Institute", "Winner of the 2022 Medical Innovation Award"],
        socialMedia: [
            { platform: "LinkedIn", url: "https://www.linkedin.com/in/sophiapatel" },
            { platform: "ResearchGate", url: "https://researchgate.net/profile/SophiaPatel" }
        ],
        bio: "Leading researcher combining neuroscience and AI to develop treatments for neurological disorders.",
        topics: ["Neurotechnology", "Medical Research", "Brain-Computer Interfaces"],
        nameOfTalk: "Breakthroughs in Neurotechnology",
        date: "2023-10-16",
        time: "9:00 AM - 10:30 AM",
        age: "45",
    },
    {
        id: "4",
        name: "James Wilson",
        desc: "Sustainable Architecture Expert",
        imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop",
        importantTitles: ["Principal at EcoDesign Architects", "Professor of Sustainable Design"],
        socialMedia: [
            { platform: "LinkedIn", url: "https://www.linkedin.com/in/jameswilson" },
            { platform: "Instagram", url: "https://instagram.com/sustainablearchitect" }
        ],
        bio: "Award-winning architect specializing in zero-carbon buildings and urban regeneration projects.",
        topics: ["Sustainable Architecture", "Urban Planning", "Green Building Materials"],
        nameOfTalk: "Designing the Zero-Carbon Cities of Tomorrow",
        date: "2023-10-16",
        time: "1:00 PM - 2:30 PM",
        age: "51",
    }
]
const speakerlist = () => {
    const router = useRouter()
    const {event} = useLocalSearchParams<{event:string}>()
  return (
    <SafeAreaView>
        <TouchableOpacity onPress={()=>{router.push("/(authenticated)/(tabs)/events")}} style={{flexDirection:"row"}}>
            <Ionicons name="arrow-back" size={34} color={Colors.dark} />
            <Text style={{marginTop:5}}>{event}'s Speakers</Text>
        </TouchableOpacity>
        <ScrollView>

  
        
        {mock_speaker_data.map((speaker) => (
            <View key={speaker.id} style={{ margin: 10, padding: 10, borderWidth: 1, borderColor: '#ccc', borderRadius: 5 }}>
                <View style={{ flexDirection: 'row'}}>
                    
                 <Image source={{ uri: speaker.imageUrl }} style={{ width: 90, height: 90, marginLeft: 5,borderRadius:10 }} />
                 <View style={{flexDirection:"column"}}>
                  <Text style={{fontSize:20,fontWeight:"bold",marginLeft:5}}>{speaker.name} ({speaker.age})</Text>
                  <Text style={{marginLeft:5}}>{speaker.desc} </Text>
                   
                   <Text style={{fontStyle:"italic",marginLeft:5,fontSize:14}}> <Ionicons name='diamond-outline' size={14} color={Colors.primary}/> {speaker.nameOfTalk} </Text>

                   <Text style={{fontStyle:"italic",marginLeft:5,fontSize:14}}> <Ionicons name='calendar-outline' size={14} color={Colors.primary}/> {speaker.date} | {speaker.time}</Text>
                  </View>
                </View>
                <Text style={{marginBottom:13}}>{speaker.bio}</Text>
                <Text style={{fontWeight:"bold"}}>Important Titles:</Text>
                {speaker.importantTitles.map((title, index) => (
                    <View key={index} style={{backgroundColor:Colors.primaryMuted,borderRadius:5,padding:5,marginTop:5}}>
                        <Text style={{marginLeft:5}}>{title}</Text>
                    </View>

                ))}
                <Text style={{fontWeight:"bold"}}>Topics:</Text>
                    <View style={{flexDirection:"column"}}>
                    {speaker.topics.map((topic, index) => (
                            <View key={index} style={{backgroundColor:Colors.primaryMuted,borderRadius:5,padding:5,marginTop:5,marginLeft:5,width:"60%"}}>
                            <Text style={{marginLeft:5}}>{topic}</Text>
                        </View>
                    ))}
                </View>
                <Text style={{fontWeight:"bold"}}>Social Media:</Text>
                <View style={{flexDirection:"row"}}>
                {speaker.socialMedia.map((social, index) => (
                    <TouchableOpacity key={index} onPress={() => console.log(`Open ${social.platform} link`)}>
                        {social.platform=="Instagram" && <Ionicons name="logo-instagram" size={20} color={Colors.primary} style={{marginLeft:5}}/>}
                        {social.platform=="Twitter" && <Ionicons name="logo-twitter" size={20} color={Colors.primary} style={{marginLeft:5}}/>}
                        {social.platform=="Github" && <Ionicons name="logo-github" size={20} color={Colors.primary} style={{marginLeft:5}}/>}
                        {social.platform=="LinkedIn" && <Ionicons name="logo-linkedin" size={20} color={Colors.primary} style={{marginLeft:5}}/>}
                    </TouchableOpacity>
                ))}
                </View>
            </View>
        ))}
              </ScrollView>
</SafeAreaView>
  )
}

export default speakerlist