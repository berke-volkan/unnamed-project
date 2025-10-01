import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { ScrollView } from 'react-native-gesture-handler'
import { useRouter } from 'expo-router'
import { firebaseConfig } from '@/firebaseConfig'
import { initializeApp } from 'firebase/app'
import { getDatabase, onValue, ref } from 'firebase/database'
const perks_mock = [
  {
    id: 1,
    name: "GitHub Pro for Students",
    desc: "Get free access to GitHub Pro tools during your education.",
    supply: 100,
    used: 55,
    by: "GitHub",
    icon: "logo-github",
    loc: "Online"
  },
  {
    id: 2,
    name: "Notion Pro Plan",
    desc: "Access Notion's Pro features free for students and educators.",
    supply: 150,
    used: 89,
    by: "Notion",
    icon: "document-text-outline",
    loc: "Online"
  },
  {
    id: 3,
    name: "Replit Hacker Plan",
    desc: "Enjoy the Hacker plan on Replit for faster compute and private repls.",
    supply: 80,
    used: 41,
    by: "Replit",
    icon: 'code-slash-outline',
    loc: "Online"
  },
  {
    id: 4,
    name: "1Password for Students",
    desc: "Stay secure with a free 1Password subscription during your studies.",
    supply: 200,
    used: 123,
    by: "1Password",
    icon: 'lock-closed-outline',
    loc: "Online"
  },
  {
    id: 5,
    name: "Figma Professional Plan",
    desc: "Free access to Figma's professional features for students and educators.",
    supply: 120,
    used: 67,
    by: "Figma",
    icon: "color-palette-outline",
    loc: "Online"
  },
  {
    id: 6,
    name: "Canva Pro Subscription",
    desc: "Unlock Canva Pro tools to create stunning designs effortlessly.",
    supply: 90,
    used: 48,
    by: "Canva",
    icon: "brush-outline",
    loc: "Online"
  }
];
const raffle_perks_mock = [
  {
    id: 1,
    name: "Win a GitHub Hoodie",
    desc: "Enter the raffle to win exclusive GitHub swag!",
    by: "GitHub",
    icon: "shirt-outline",
    loc: "Online",
    prize: "GitHub Hoodie + Stickers",
    entryDeadline: "2025-05-20",
    entries: 342,
    winners: 5
  },
  {
    id: 2,
    name: "Notion Desk Set Giveaway",
    desc: "Win a full Notion-branded desk setup — limited edition!",
    by: "Notion",
    icon: "desktop-outline",
    loc: "Online",
    prize: "Notion Desk Set (Keyboard mat, notebook, pens)",
    entryDeadline: "2025-06-01",
    entries: 210,
    winners: 3
  },
  {
    id: 3,
    name: "Replit Swag Pack Raffle",
    desc: "Stand a chance to win a Replit swag pack with t-shirt, stickers, and more.",
    by: "Replit",
    icon: "gift-outline",
    loc: "Online",
    prize: "T-shirt, stickers, and a mystery gift",
    entryDeadline: "2025-05-25",
    entries: 178,
    winners: 10
  },
  {
    id: 4,
    name: "1Password Pro Account Raffle",
    desc: "Win a free 1-year Pro account from 1Password.",
    by: "1Password",
    icon: "key-outline",
    loc: "Online",
    prize: "1Password Pro subscription (1 year)",
    entryDeadline: "2025-06-05",
    entries: 97,
    winners: 8
  },
  {
    id: 5,
    name: "Figma Swag Box",
    desc: "Win exclusive Figma merchandise — shipped worldwide!",
    by: "Figma",
    icon: "cube-outline",
    loc: "Online",
    prize: "Figma T-shirt, socks, and sticker pack",
    entryDeadline: "2025-06-10",
    entries: 198,
    winners: 6
  },
  {
    id: 6,
    name: "Canva Artist Kit Giveaway",
    desc: "Win a Canva-branded art and creativity kit!",
    by: "Canva",
    icon: "easel-outline",
    loc: "Online",
    prize: "Art supplies, Canva merch, and notebook",
    entryDeadline: "2025-06-12",
    entries: 156,
    winners: 4
  }
];



const main = () => {
  const router=useRouter()
  const app=initializeApp(firebaseConfig)
  const db=getDatabase(app)
  let perkName:string[]=[]
  const [perks,setPerks]=React.useState<{name:string,by:string,desc:string,icon:string,loc:string,used:string,supply:string}[]>([])
  const getPerks= () => {
    const campaignsRef = ref(db, 'campaigns');

    onValue(campaignsRef, (snapshot) => {
        if (snapshot.exists()) {
          snapshot.forEach((childSnapshot) => {
            perkName.push(childSnapshot.key as string);
          });
          
          perkName.forEach((perk:any) => {
            const campaignlRef = ref(db, `campaigns/${perk}`);
            onValue(campaignlRef, (childSnapshot) => {
              const data = childSnapshot.val();
              console.log(data)
              if (data) {
                setPerks((prevPerks)=>[
                  ...prevPerks,{
                    name:data.name,
                    by:data.by,
                    desc:data.desc,
                    icon:data.icon,
                    loc:data.loc,
                    used:data.used,
                    supply:data.supply
                  }
                ])

              }
            });

          });


          } else {
          console.log("No data available ");
}
    }
  
  );
  }
  useEffect(()=>{
    getPerks()
  },[])

  useEffect(()=>{
    console.log(perks)
  },[perks])
  return (
    <ScrollView>
           <Text style={{fontWeight:"bold",fontSize:18,marginBottom:"3%",textAlign:"center"}}>Raffle's</Text>
        <ScrollView  horizontal showsHorizontalScrollIndicator={false} >
        {raffle_perks_mock.map((perk)=>(
            <View key={perk.id} style={{backgroundColor:Colors.primaryMuted,width:"13%",borderRadius:15,marginBottom:20,alignItems:"center",marginLeft:5}}>
                <Ionicons name={perk.icon as any} size={48} style={{backgroundColor:Colors.primaryMuted,marginTop:15}}/>
                <Text style={{textAlign:"center",marginTop:5,fontSize:20,fontWeight:"bold",paddingRight:5,paddingLeft:5}}>{perk.name} | {perk.winners} Winners!</Text>
                <Text style={{marginTop:5,fontSize:18,marginLeft:10,marginBottom:10,width:"80%"}}>{perk.desc}</Text>
                <View style={{flexDirection:"row"}}>
                 <View style={{backgroundColor:Colors.primary,marginBottom:"1%",borderRadius:5,padding:"2%",marginRight:"3%"}}>
                    <Text style={{color:"white"}}>By {perk.by}</Text>
                 </View>
                 <View style={{backgroundColor:Colors.primary,marginBottom:"1%",borderRadius:5,padding:"2%"}}>
                    <Text style={{color:"white"}}><Ionicons name='calendar-outline' style={{width:40,height:40}}/>Deadline:{perk.entryDeadline}</Text>
                 </View>
                </View>
                <TouchableOpacity  style={{backgroundColor:"blue",marginBottom:5,width:300,height:20,borderRadius:5}} onPress={()=>{router.push({pathname:"/(authenticated)/perks/info/[perk]",params:{perk:perk.name}})}}>
                    <Text style={{textAlign:"center",color:"white"}}>More Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"red",marginBottom:15,width:300,height:20,borderRadius:5}} onPress={()=>(router.push({pathname:"/(authenticated)/perks/claim/[perk]",params:{perk:perk.name}}))}>
                    <Text style={{textAlign:"center",color:"white"}}>Claim</Text>
                </TouchableOpacity>
            </View>
        ))}
        </ScrollView>
        <View >
           <Text style={{fontWeight:"bold",fontSize:18,marginBottom:"3%",textAlign:"center"}}>Campaign's</Text>
        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
{perks.map((perk)=>(
            <View key={perk.name} style={{backgroundColor:Colors.primaryMuted,width:"25%",borderRadius:15,marginBottom:20,alignItems:"center",marginLeft:5}}>
              <Ionicons name={perk.icon as any} size={48} style={{backgroundColor:Colors.primaryMuted,marginTop:15}}/>
                <Text style={{textAlign:"center",marginTop:5,fontSize:20,fontWeight:"bold",paddingRight:5,paddingLeft:5}}>{perk.name} | ({perk.used}/{perk.supply})</Text>
                <Text style={{marginTop:5,fontSize:18,marginLeft:10,marginBottom:10,width:"80%"}}>{perk.desc}</Text>
                <View style={{flexDirection:"row"}}><View style={{backgroundColor:Colors.primary,marginBottom:"1%",borderRadius:5,padding:"2%",marginRight:"3%"}}>
                    <Text style={{color:"white"}}>By {perk.by}</Text>
                 </View>
                 <View style={{backgroundColor:Colors.primary,marginBottom:"1%",borderRadius:5,padding:"2%"}}>
                    {perk.loc==="online" && <Text style={{color:"white"}}><Ionicons name='location-outline' style={{width:40,height:40}}/>Location: {perk.loc}</Text>}
                 </View>
                </View>
                <TouchableOpacity  style={{backgroundColor:"blue",marginBottom:5,width:200,height:20,borderRadius:5}} onPress={()=>{router.push({pathname:"/(authenticated)/perks/info/[perk]",params:{perk:perk.name}})}}>
                    <Text style={{textAlign:"center",color:"white"}}>More Info</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"red",marginBottom:15,width:200,height:20,borderRadius:5}} onPress={()=>(router.push({pathname:"/(authenticated)/perks/claim/[perk]",params:{perk:perk.name}}))}>
                    <Text style={{textAlign:"center",color:"white"}}>Claim</Text>
                </TouchableOpacity>
            </View>
        ))}
        </ScrollView>
        </View>
    </ScrollView>
  )
}

export default main


