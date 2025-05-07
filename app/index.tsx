import { 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity 
} from 'react-native'

import { ResizeMode, Video } from 'expo-av'
import { useAssets } from 'expo-asset'
import React from 'react'
import { Link } from 'expo-router'
import { defaultStyles } from '@/constants/Styles'
import '@/constants/Colors' 
import Colors from '@/constants/Colors'

const Page = () => {
  const [assets] = useAssets([
    require('@/assets/video/intro.mp4')
  ])
  return (
    <View style={styles.container}>
      {assets && <Video source={{uri: assets[0].uri}} style={styles.video} isMuted isLooping shouldPlay resizeMode={ResizeMode.COVER}/>}
      <View style={{padding:20,marginTop:80}}>
        <Text style={styles.header}>Ready to change the way you money?</Text>
      </View>
      <View style={styles.buttons}>
       <Link href="/login" asChild style={[defaultStyles.pillButton,{flex:1,backgroundColor:Colors.dark,borderRadius:50}]}>
          <TouchableOpacity >
            <Text style={{fontSize:22,fontWeight:"500",color:"white"}}>Login</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/signup" asChild style={[defaultStyles.pillButton,{flex:1,backgroundColor:"#fff",borderRadius:50}]}>
          <TouchableOpacity >
            <Text style={{fontSize:22,fontWeight:"500"}}>Sign Up</Text>
          </TouchableOpacity>
        </Link>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create(
  {
    container: {
      flex: 1,
      justifyContent: 'space-between',
    },
    video: {
      width: '100%',
      height: '100%',
      position: 'absolute',
    },
    header:{
      fontSize:36,
      fontWeight:"900",
      textTransform:"uppercase",
      color:"#fff",
    },
    buttons:{
      flexDirection:"row",
      justifyContent:"center",
      gap:20,
      marginBottom: 60,
      paddingHorizontal:20,
    }
  }
)

export default Page