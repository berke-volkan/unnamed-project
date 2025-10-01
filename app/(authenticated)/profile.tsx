import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect } from 'react'
import { useUser } from '@clerk/clerk-expo'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'
import { useRouter } from 'expo-router'
import { TextInput } from 'react-native-gesture-handler'

const profile = () => {
    const {user}=useUser()
    const email=user?.primaryEmailAddress?.emailAddress
    const router=useRouter()
    const [isNickNameEdit,setNedit]=React.useState(false)
    const [newNick,setNick]=React.useState("")

    const [isName,setNameE]=React.useState(false)
    const [newfirstName,setfirstName] = React.useState<any>("")
    const [newlastName,setlastName] = React.useState<any>("")

    const school:any =user?.unsafeMetadata["school"]
    const role:any=user?.unsafeMetadata["isTeacher"]
    const libScore:any =user?.unsafeMetadata["libScore"]
    const libId:any =user?.unsafeMetadata["libid"]

    const changemail=()=>{
      router.push("/(authenticated)/(tabs)/home")
    }

    const editedNick=()=>{
       user?.update({
        username:newNick
      })
      setNedit(false)
    }
    useEffect(()=>{
      setfirstName(user?.firstName)
      setlastName(user?.lastName)
    },[])

    const updateName=()=>{
      user?.update({
        firstName:newfirstName
      })
      user?.update({
        lastName:newlastName
      })
      setNameE(false)
    }
  return (
    <View>
      <TouchableOpacity onPress={async ()=>{
      }}>
        <Image style={{marginLeft:"40%",marginTop:12}} src={user?.imageUrl} width={90} height={90} borderRadius={15} blurRadius={25}/>
      </TouchableOpacity>
      {isName===false && 
      <View style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
        <Text style={{fontSize:25,textAlign:"center",fontWeight:"bold"}}>{user?.fullName}</Text>
        <TouchableOpacity onPress={()=>{setNameE(true)}}>
          <Ionicons name='pencil-outline' size={20} color={Colors.primary}/> 
        </TouchableOpacity>
      </View>}
      {isName===true && 
      <View style={{flexDirection:"row",alignSelf:"center",marginTop:10}}>
        <TextInput
          placeholder='First Name'
          style={{backgroundColor:Colors.lightGray,borderRadius:10,paddingRight:10,paddingLeft:10}}
          onChange={(e)=>{setfirstName(e.nativeEvent.text)}}
          value={newfirstName}
        />   
        <TextInput
          placeholder='Last Name'
          style={{backgroundColor:Colors.lightGray,borderRadius:10,marginLeft:10,paddingRight:10,paddingLeft:10}}
          onChange={(e)=>{setlastName(e.nativeEvent.text)}}
          value={newlastName}
        />   
        <TouchableOpacity onPress={()=>{updateName()}} style={{marginTop:10,marginLeft:10}}>
          <Ionicons name='send-outline' size={20} color={Colors.primary}/> 
        </TouchableOpacity>
      </View>}
       
       {email&&
        <View style={{flexDirection:"row",alignSelf:"center"}}>
          <Text style={{textAlign:"center",fontSize:18,fontStyle:"italic"}}>{email.substring(0,3)}*******{email.substring(email.length-3)}</Text>
          <TouchableOpacity onPress={()=>{
            changemail()
          }}>
           <Ionicons name='pencil-outline' size={20} color={Colors.primary}/> 
          </TouchableOpacity>

        </View>
       }
        {isNickNameEdit===false && 
          <TouchableOpacity onPress={()=>{setNedit(true)}}>
            <View style={{flexDirection:"row",marginTop:10}}>
              <Text style={{marginLeft:19,fontSize:23}}>User Name: {user?.username}</Text>
              <Ionicons name='pencil-outline' size={20} color={Colors.primary}/>             
            </View>            
          </TouchableOpacity>
        }
        {isNickNameEdit===true && 
            <View style={{flexDirection:"row",marginTop:10}}>
              <Text style={{marginLeft:19,fontSize:23}}>User Name: </Text> 
              <TextInput
              placeholder='Enter your new user name'
              style={{backgroundColor:Colors.lightGray,borderRadius:10}}
              onChange={(e)=>{setNick(e.nativeEvent.text)}}
              />    
              <TouchableOpacity onPress={()=>{
                editedNick()
              }}>
                <Ionicons name='send' size={30} style={{marginLeft:10}} color={Colors.primary}/>
              </TouchableOpacity>      
            </View>            
        }
        <Text style={{marginLeft:19,fontSize:23}}>School: {school} </Text> 
        <Text style={{marginLeft:19,fontSize:23}}>Role:{role === true ? "Teacher" : "Student"} </Text> 
        <Text style={{marginLeft:19,fontSize:23}}>LibId: {libId}</Text>
        <Text style={{marginLeft:19,fontSize:23}}>LibScore: {libScore}</Text>
    </View>
  )
}

export default profile