import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { setParams } from 'expo-router/build/global-state/routing'
import React from 'react'
import { StyleSheet, View, Text,StatusBar} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

let mock_data={
  "category":{
    "name":"Genel",
    "channel":[
      {
        "name":"test0",
        "unread":true,
        "public":"public",
        "desc":"where all magic happens"
      },
      {
        "name":"test1",
        "unread":false,
        "public":"private",
        "desc":"where all magic happens"
      },
      {
          "name":"test2",
          "unread":false,
          "public":"invitation",
          "desc":"where all magic happens"
      }
    ]
}}
const Page1 = () => {
  
  const name="John Doe"
  return (
      <SafeAreaView style={{backgroundColor:Colors.background}}>
        <View>

          <View style={styles.todo}>
            {mock_data.category.channel.map((item,index)=>(
            <Link key={index} href={{pathname:"/chat/[room]",params:{room:item.name}}}  replace style={{flexDirection:"row",backgroundColor:Colors.lightGray,marginBottom:"1%",height:25,alignItems:"center"}}>
              <View  style={{flexDirection:"row",backgroundColor:Colors.lightGray,marginBottom:"1%",height:25,alignItems:"center"}} >
 
                  {item.unread && <Ionicons name='chatbubble-ellipses-sharp' size={20} color={Colors.gray} style={{marginLeft:"5%"}}/>}
                  {item.unread===false && <Ionicons name='chatbubble-sharp' size={20} color={Colors.gray} style={{marginLeft:"5%"}}/>}
                  {item.public==="public" && <Ionicons name='planet-sharp' size={20} color={Colors.gray} style={{marginLeft:"5%"}}/>}
                  {item.public==="private" && <Ionicons name='lock-closed-sharp' size={20} color={Colors.gray} style={{marginLeft:"5%"}}/>}
                  {item.public==="invitation" && <Ionicons name='link-sharp' size={20} color={Colors.gray} style={{marginLeft:"5%"}}/>}
                <Text style={{marginLeft:"5%",color:"white"}}>{item.name}</Text>
                <Text style={{marginLeft:"15%",color:"white"}}>({item.desc})</Text>
              </View>
              </Link>
            ))}
          </View>
        </View>
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