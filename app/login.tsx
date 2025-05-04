import Colors from '@/constants/Colors';
import { defaultStyles } from '@/constants/Styles';
import { isClerkAPIResponseError, useSignIn } from '@clerk/clerk-expo';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

enum SignInType {
  email,
  Email,
  Google,
  Apple,
}

enum SIgnInType {
  email,Email,Google,Apple
}
const login = () => {
  const router = useRouter()
  const {signIn} = useSignIn()

  const [countrycode,setCountryCode]=useState("+90")
  const [email,setemail]=useState("")
  const KeyboardOffset= Platform.OS === 'ios' ? 80 : 70

  const onlogin=async(type:SIgnInType)=>{
    if(type=SIgnInType.email){
      try{
        const fullemail = `${countrycode}${email}`;

        const { supportedFirstFactors } = await signIn!.create({
          identifier: fullemail,
        });
        const firstemailFactor: any = supportedFirstFactors?.find((factor: any) => {
          return factor.strategy === 'email_code';
        });

        const { emailId } = firstemailFactor;
        await signIn!.prepareFirstFactor({ 
          strategy: 'email_code',
          emailAddressId: emailId,

         });
      }
      catch (err) {
        console.log("Error signing up",err)
        console.log('error', JSON.stringify(err, null, 2));
        if (isClerkAPIResponseError(err)) {
          if (err.errors[0].code === 'form_identifier_not_found') {
            Alert.alert('Error', err.errors[0].message);
          }
        }

      }
    }
  }

  return (
    <KeyboardAvoidingView style={{flex:1}} behavior='padding' keyboardVerticalOffset={KeyboardOffset}>
    <View style={defaultStyles.container}>
      <Text style={defaultStyles.header}>Welcome Back!</Text>
      <Text style={defaultStyles.descriptionText}>Enter the email associated with your account
      </Text>
      <View style={Styles.inputContainer}>
        <TextInput 
          placeholder='Email'
          keyboardType='email-address'
          style={[Styles.input,{flex:1}]}
          value={email}
          onChangeText={setemail}
          placeholderTextColor={Colors.gray}
        />
      </View>
      
      <TouchableOpacity 
          style={[
            defaultStyles.pillButton,
            email !== '' ? Styles.enabled : Styles.disabled,
            { marginBottom: 20},
          ]}
          onPress={()=>onlogin(SIgnInType.email)}>
          <Text style={defaultStyles.buttonText}>Continue</Text>
        </TouchableOpacity>
                {/*
        <View style={{flexDirection:"row",alignItems:"center",gap:10}}>
          <View style={{height:StyleSheet.hairlineWidth,flex:1,backgroundColor:Colors.gray}}/>
          <Text style={[{color:Colors.gray},{fontSize:20}]}>or</Text>
          <View style={{height:StyleSheet.hairlineWidth,flex:1,backgroundColor:Colors.gray}}/>
        </View>
         <TouchableOpacity style={[defaultStyles.pillButton,{flexDirection:"row",gap:16,marginTop:20,backgroundColor:Colors.lightGray}]} onPress={()=>onlogin(SIgnInType.Email)}>
          <Ionicons name="mail" size={24} color="black" />
          <Text style={[defaultStyles.buttonText,{color:"black"}] }>Continue with Email</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[defaultStyles.pillButton,{flexDirection:"row",gap:16,marginTop:20,backgroundColor:Colors.lightGray}]} onPress={()=>onlogin(SIgnInType.Google)}>
          <Ionicons name="logo-google" size={24} color="black" />
          <Text style={[defaultStyles.buttonText,{color:"black"}] }>Continue with Googlel</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={[defaultStyles.pillButton,{flexDirection:"row",gap:16,marginTop:20,backgroundColor:Colors.lightGray}]} onPress={()=>onlogin(SIgnInType.Apple)}>
          <Ionicons name="logo-apple" size={24} color="black" />
          <Text style={[defaultStyles.buttonText,{color:"black"}] }>Continue with Apple</Text>
        </TouchableOpacity>
        */}
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

export default login