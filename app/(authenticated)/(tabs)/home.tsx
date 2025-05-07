import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import React from 'react'
import { StyleSheet, View, Text,StatusBar, TouchableOpacity} from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'

const DATA = [
  {
    id: '1',
    title: 'First Task',
  },
  {
    id: '2',
    title: 'Second Task',
  },
  {
    id: '3',
    title: 'Third Task',
  },
];

type ItemProps = {title: string};
const Item = ({title}: ItemProps) => (
  
  <View style={styles.item}>
    {/*TODO: Add checkbox here */}
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Page = () => {
  const router = useRouter()
  const name="John Doe"
  return (
      <SafeAreaView style={{backgroundColor:Colors.background}}>
        <Text style={styles.welcome}>
          Hoşgeldin {name}!

        </Text>
        <Text style={styles.welcome}>
         Bugün ne yapacaksın?
        </Text>
        {/* Maybe a calendar or graph can be added here */}

        <View style={styles.todo}>
          <Text style={{fontWeight:700,fontSize:15}}>Yapman Gereken Görevler (Son 3): </Text>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
        </View>
        <View style={{
          flexDirection:"column",
          paddingRight:"50%"
        }
        }>
          <View style={{flexDirection:"row"}}>
          <View style={styles.works}>
           <Ionicons name="chatbubble-ellipses-outline" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>
           <Text style={styles.workText}>Diğer liselilerle sohbet et!</Text>
          </View>
          <View style={styles.works}>
           <Ionicons name="tennisball" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>
           <Text style={styles.workText}>Etkinlikleri kontrol et!</Text>
         </View>
          </View>

         <View style={{
          flexDirection:"row",
         }
         }>
         <View style={styles.works}>
           <Ionicons name="compass" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>
           <Text style={styles.workText}>Kulüpleri kontrol et!</Text>
         </View>
         <View style={styles.works}>
           <Ionicons name="diamond" size={50} color={Colors.primary} style={{alignSelf:"center",marginTop:"10%"}}/>
           <Text style={styles.workText}>Avantajları Kontrol et!</Text>
         </View>
         </View>
        </View>
        <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,height:60,alignItems:"center",marginTop:175}} onPress={()=>{
          router.push("/(authenticated)/tinder/select")
        }}>
          <Ionicons name="people-circle-outline" size={40} color={Colors.primary} style={{alignSelf:"center",marginTop:10}}/>
        </TouchableOpacity>

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
    padding: 10,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 10,
  },
})
export default Page