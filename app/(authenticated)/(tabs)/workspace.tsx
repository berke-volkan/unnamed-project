import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import { ScrollView } from 'react-native-gesture-handler'
import {Calendar} from 'react-native-calendars';
import { useState } from 'react'
import CheckBox from '@react-native-community/checkbox';

const mock_task_data=[
  { id: 1, name: 'Task 1', description: 'Description 1' },
  { id: 2, name: 'Task 2', description: 'Description 2' },
  { id: 3, name: 'Task 3', description: 'Description 3' },
  { id: 4, name: 'Task 4', description: 'Description 4' },
  { id: 5, name: 'Task 5', description: 'Description 5' },
]

const mock_data=[
  { id: 1, name: 'Note 1', description: 'Description 1' },
  { id: 2, name: 'Note 2', description: 'Description 2' },
  { id: 3, name: 'Note 3', description: 'Description 3' },
  { id: 4, name: 'Note 4', description: 'Description 4' },
  { id: 5, name: 'Note 5', description: 'Description 5' },
]

const workspace = () => {
  const [selected, setSelected] = useState('');
  const [agree, setAgree] = useState(false);
  return (
    <SafeAreaView>
      <ScrollView>
      <Text style={{fontWeight:"bold",fontSize:46,textAlign:"center"}}>🧰 Workspace</Text>
      <Text style={{fontWeight:"bold",fontSize:24,marginLeft:5,marginTop:10}}>Calendar</Text>
      <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedColor: Colors.primaryMuted},
      }}
      style={{marginTop:5,marginBottom:10}}
    />
      <Text style={{fontWeight:"bold",fontSize:24,marginLeft:5}}>Tasks (Latest 3)</Text>
      {mock_task_data.map((task) => (
        task.id <= 3 ? (
        <View key={task.id} style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
         <CheckBox value={agree} onChange={() => setAgree(!agree)} /> {/* TODO: FİX */}
          <Text style={{ fontSize: 18 }}>{task.name}</Text>
          <Text style={{ color: '#666' }}>{task.description}</Text>
        </View>
        ) : null
      ))}
      <View>
      <TouchableOpacity style={{backgroundColor:"red",width:"25%",borderRadius:5,marginTop:19,marginLeft:290}}>
        <Text style={{color:"white",textAlign:"center"}} >See All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={{backgroundColor:"blue",width:"25%",borderRadius:5,marginTop:19,marginLeft:290}}>
        <Text style={{color:"white",textAlign:"center"}} >Create New</Text>
      </TouchableOpacity>
      </View>
      <Text style={{fontWeight:"bold",fontSize:24,marginLeft:5}}>Notes</Text>
       <View>
        {mock_data.map((note) => (
          <View key={note.id} style={{ padding: 10,backgroundColor:"yellow",width:"60%",marginLeft:10,marginTop:10,borderRadius:10}}>
            <Text style={{width:"100%",alignItems:"flex-start",fontSize:18,fontWeight:"bold"}}>{note.name}</Text>
            <Text style={{width:"100%",alignItems:"flex-end"}}>{note.description}</Text>
          </View>
        ))}
       </View>
       <View >
          <TouchableOpacity style={{backgroundColor:"red",width:"25%",borderRadius:5,marginTop:19,marginLeft:290}}>
            <Text style={{color:"white",textAlign:"center"}} >See All</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor:"blue",width:"25%",borderRadius:5,marginTop:19,marginLeft:290}}>
            <Text style={{color:"white",textAlign:"center"}} >Create New</Text>
          </TouchableOpacity>
       </View>

      </ScrollView>
    </SafeAreaView>
  )
}

export default workspace