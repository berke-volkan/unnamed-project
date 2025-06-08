import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebaseConfig'
import { getDatabase, ref } from 'firebase/database'
import Colors from '@/constants/Colors'


const mock=[
  {
    id:1,
    name:"Math Page 96-97",
    detail:"noooo",
    date:"10.05.2026",
    tags:[
      "math","book","easy"
    ]
  },
    {
    id:2,
    name:"t Page 96-97",
    detail:"noooo",
    date:"10.05.2026",
        tags:[
      "math","book","easy"
    ]
  }
]


const announcements = () => {
  const app=initializeApp(firebaseConfig)
  const db=getDatabase(app)
  const assigmentRef=ref(db,"assigments")
  const [mockdata,set]=React.useState<any>()

  React.useEffect(()=>(
    set(mock)
  ),[])

  return (
    <View>
      {mockdata && mockdata.map((item:any)=>(
        <TouchableOpacity key={item.id} onPress={()=>{
          let id=item.id
          let mock1=mockdata.filter((item:any) => item.id !==id );
          set(mock1)
        }}>
        <View  style={{backgroundColor:Colors.lightGray,borderRadius:"10%",margin:5}}>
          <Text style={{fontSize:22,textAlign:"center"}}>{item.name}</Text>
          <View style={{flexDirection:"row",marginLeft:5}}>
          {item.tags.map((tag:any)=>(
            <View key={tag} style={{backgroundColor:Colors.primaryMuted,width:"14%",borderRadius:"10%",marginLeft:5}}>
              <Text style={{textAlign:"center",marginRight:5,marginLeft:5}}>{tag}</Text>
            </View>
          ))

          }
          </View>

          {item.detail!=="no" && <Text style={{marginLeft:10}}>{item.detail}</Text>}
          <Text style={{textAlign:"right",marginRight:10,marginBottom:10}}>{item.date}</Text>
        </View>
        </TouchableOpacity>

      ))}
    </View>
  )
}

export default announcements