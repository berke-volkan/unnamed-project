import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'


const Page4 = () => {
  const router=useRouter()
  return (
    <SafeAreaView>
      <Text style={{fontWeight:"bold",fontSize:46,textAlign:"center"}}>💎 Ayarlar</Text>

        <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,height:60,alignItems:"center",marginTop:24}} onPress={()=>{
          router.push("/(authenticated)/perks/main")
        }}>
          <Ionicons name="pizza-outline" size={40} color={Colors.primary} style={{alignSelf:"center",marginTop:10}}/>
        </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,height:60,alignItems:"center",marginTop:175}} onPress={()=>{
                  router.push("/(authenticated)/tinder/select")
                }}>
                  <Ionicons name="people-circle-outline" size={40} color={Colors.primary} style={{alignSelf:"center",marginTop:10}}/>
                </TouchableOpacity>
        <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,height:60,alignItems:"center",marginTop:24}} onPress={()=>{
          router.push("/(authenticated)/system_msg/render")
        }}>
          <Ionicons  name="chatbubble-ellipses" size={40} color={Colors.primary} style={{alignSelf:"center",marginTop:10}}/> 
        </TouchableOpacity>
    </SafeAreaView>
  )
}

export default Page4