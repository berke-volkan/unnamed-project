import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { Ionicons } from '@expo/vector-icons'
import Colors from '@/constants/Colors'

const createclub = () => {
  return (
    <View>
      <TextInput
        placeholder="Club Name"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}/>
      <TextInput
        placeholder="Club Description"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}/>
      <TextInput
        placeholder="Member Limit"
        keyboardType="numeric"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}/>
      <TextInput
        placeholder="School"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}/>
            <TextInput
        placeholder="Open To All or Invite Only? "
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          margin: 10,
          borderRadius: 5,
        }}/>
        <TouchableOpacity style={{backgroundColor:Colors.primaryMuted,borderRadius:5,width:40,height:30,alignItems:"center",marginLeft:350}}>
          <Ionicons name="navigate-sharp" size={24} color={Colors.primary} style={{paddingTop:5}} />
        </TouchableOpacity>
    </View>
  )
}

export default createclub