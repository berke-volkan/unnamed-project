import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { getClerkInstance, useUser } from '@clerk/clerk-expo'
import { useRouter } from 'expo-router'
import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native' 


const Onboard = () => {
    console.log("signup")
  const [username,setusername]=React.useState("")
  const [firstname,setFirstname]=React.useState("")
  const [lastname,setlastname]=React.useState("")
  const router=useRouter()
  const KeyboardOffset= Platform.OS === 'ios' ? 80 : 70
  const {user}=useUser()
  const handleUserName=async ()=>{
    console.log(user)
    console.log(username,firstname,lastname)
    user?.update({
      username:username
    })
    user?.update({
      firstName:firstname
    }
    )
    user?.update({
      lastName:lastname
    })
    user?.update({
      unsafeMetadata:{
        libid:"lib_!234",
        school:"Hack School",
        libScore:"52",
        isTeacher:true
      }
    })

    router.push("/(authenticated)/(tabs)/home")

  }
  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={KeyboardOffset}>
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Lets set your profile!</Text>
      <Text style={defaultStyles.descriptionText}>Enter Informations below!
      </Text>
      <View style={Styles.inputContainer}>
        <TextInput 
          placeholder='First Name'
          style={[Styles.input,{flex:1}]}
          value={firstname}
          onChangeText={setFirstname}
          placeholderTextColor={Colors.gray}
        />
        <TextInput 
          placeholder='Last Name'
          style={[Styles.input,{flex:1}]}
          value={lastname}
          onChangeText={setlastname}
          placeholderTextColor={Colors.gray}
        />

      </View>
                      <TextInput 
          placeholder='User Name'
          style={Styles.input}
          value={username}
          onChangeText={setusername}
          placeholderTextColor={Colors.gray}
        />
        
        <View>

        </View>
      <View style={{flex:1}}/>
      <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            username !== '' ? Styles.enabled : Styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={()=>(
            handleUserName()
          )}>
          <Text style={defaultStyles.buttonText}>Welcome to app!</Text>
        </TouchableOpacity>

    </View>
    </KeyboardAvoidingView>
  )
}
const  Styles = StyleSheet.create({
  inputContainer:{
    marginVertical:40,
    flexDirection:"row"
  },
  input:{
    backgroundColor:Colors.lightGray,
    padding:20,
    borderRadius:16,
    fontSize:20,
    marginRight:10,
  },
  enabled:{
    backgroundColor:Colors.primary,
  },
  disabled:{
    backgroundColor:Colors.primaryMuted,
  }
})

export default Onboard