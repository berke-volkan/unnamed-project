import { View, Text } from 'react-native'
import React from 'react'
import PomodoroTimer from '../../../components/pomodoro/PomodoroTimer'
import { StyleSheet } from 'react-native'
const test = () => {
  return (
    <View style={styles.container}>
        <PomodoroTimer />
        <Text style={{fontStyle:"italic",fontSize:16,textAlign:"center",marginBottom:10,color:"white"}}>Credits to @mohaned2014/Pomodoro-Timer-React-Native</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E84C3D"
    // alignItems: "center",
    // justifyContent: "center"
  }
});
export default test


{/*
  
  https://github.com/mohaned2014/Pomodoro-Timer-React-Native

*/}