import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, View, Text,StatusBar, TouchableOpacity, Image} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const home_data=[
  {
    id:1,
    icon:<Ionicons name="chatbubble-ellipses-outline" size={50} color={Colors.primary} style={{alignSelf:"center",paddingTop:"5%",paddingLeft:25 }}/>,
    text:"Diğer liselilerle sohbet et!",
    url:"/(authenticated)/chat"
  },
    {
    id:2,
    icon:<Ionicons name="tennisball-outline" size={50} color={Colors.primary} style={{alignSelf:"center",paddingTop:"5%",paddingLeft:25 }}/>,
    text:"Etkinlikleri kontrol et!",
    url:"/(authenticated)/events"
  },
  {
    id:3,
    icon:<Ionicons name="gift-outline" size={50} color={Colors.primary} style={{alignSelf:"center",paddingTop:"5%",paddingLeft:25 }}/>,
    text:"Kampanyaları kontrol et!",
    url:"/(authenticated)/perks/main"
  },
  {
    id:4,
    icon:<Ionicons name="bicycle-outline" size={50} color={Colors.primary} style={{alignSelf:"center",paddingTop:"5%",paddingLeft:25 }}/>,
    text:"Yeni bir kulübe katıl!",
    url:"/(authenticated)/(tabs)/clubs"
  },

]
const Page = () => {
  const router = useRouter()
  const name="John Doe"
  return (
      <SafeAreaView style={{backgroundColor:Colors.background}}>
        <TouchableOpacity onPress={()=>(router.push("/(authenticated)/(tabs)/setting"))}>
        <Image style={{marginLeft:"40%"}} src='https://i.pinimg.com/736x/27/2c/3c/272c3c10cbe4dce87e86c20bf4d4cffa.jpg' width={90} height={90} borderRadius={15} blurRadius={25}/>
        </TouchableOpacity>

        <Text style={styles.welcome}>
          Hoşgeldin {name}!
        </Text>
        <Text style={styles.welcome}>
         Bugün ne yapacaksın?
        </Text>
        {home_data.map((data)=>(
          <TouchableOpacity key={data.id} style={styles.works} onPress={()=>(router.push(data.url as any))} >
            <View style={{flexDirection:"row"}}>
              {data.icon}
              <Text style={styles.workText}>{data.text}</Text>
            </View>
          </TouchableOpacity>
        ))}
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
    backgroundColor:Colors.primaryMuted,
    width:"90%",
    height:"auto",
    marginLeft:"5%",
    marginTop:"1%",
    marginBottom:"3%",
    borderRadius:10,
    paddingBottom:"5%"
  },
  workText:{
    textAlign:"center",
    marginLeft:"2%",
    marginTop:"8%",
    fontSize:20,
    fontWeight:"bold"
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
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
})
export default Page