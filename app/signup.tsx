import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { useSignUp } from '@clerk/clerk-expo'
import { 
  Link, 
  useRouter 
} from 'expo-router'
import React from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native' 
import { useSignIn } from '@clerk/clerk-expo'
const signup = () => {
    console.log("signup")

  const [countrycode,setCountryCode]=React.useState("+49")
  const [email,setEmail]=React.useState("")
  const {signUp} = useSignUp()
  const router= useRouter()
  const KeyboardOffset= Platform.OS === 'ios' ? 80 : 70
  const {signIn} = useSignIn()

  const onSignup = async () => {
    console.log("email",email)
    try {
      if (!signUp) return;

      router.push({
        pathname: '/verify/signup/[email]',
        params: { email: email }
      });
  
    } catch (error) {
      console.log("Error signing up", error);
    }
  };

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={KeyboardOffset}>
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Lets get started!</Text>
      <Text style={defaultStyles.descriptionText}>Enter your Email. We will send you a confirmation code there
      </Text>
      <View style={Styles.inputContainer}>
        <TextInput 
          placeholder='Email'
          style={[Styles.input,{flex:1}]}
          value={email}
          onChangeText={setEmail}
          placeholderTextColor={Colors.gray}
          keyboardType="email-address"
        />
      </View>
      <Link href="/login" asChild replace>
      <TouchableOpacity >
        
      <Text style={defaultStyles.textLink} >Already have an account? Log in</Text>
      </TouchableOpacity>

      </Link>
      <View style={{flex:1}}/>
      <TouchableOpacity
          style={[
            defaultStyles.pillButton,
            email !== '' ? Styles.enabled : Styles.disabled,
            { marginBottom: 20 },
          ]}
          onPress={onSignup}>
          <Text style={defaultStyles.buttonText}>Sign up</Text>
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

export default signup