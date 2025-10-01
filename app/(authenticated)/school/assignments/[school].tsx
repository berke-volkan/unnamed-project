import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { initializeApp } from 'firebase/app'
import { firebaseConfig } from '@/firebaseConfig'
import { DataSnapshot, getDatabase, onValue, push, ref, remove } from 'firebase/database'
import Colors from '@/constants/Colors'
import { useUser } from '@clerk/clerk-expo'

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
  const [data,set]=React.useState<any>()
  const {user} = useUser()
  let l;

  React.useEffect(() => {
    console.log(user?.id)
    const addAssignments = async () => {
      const assigmentRef=ref(db,'assignments/user_2yuuGJXJf9KNS7f0yvhGsbsWjLf')
      onValue(assigmentRef, (snapshot: DataSnapshot) => {
        const data=snapshot.val();
          if (data){
              const assignments=Object.values(data);
              set(assignments)
              l=assignments.length;
            }
          })
    }
    addAssignments();
  },[])

  const removeAssignment = async (id:string) => {
    const assignmentRef = ref(db, `assignments/user_2yuuGJXJf9KNS7f0yvhGsbsWjLf/${id}`);
    remove(assignmentRef)
    }
  return (
    <View>
      {data && data.map((item:any)=>(
        <TouchableOpacity key={item.id} onPress={()=>{
          let id=item.id
          let mock1=data.filter((item:any) => item.id !==id );
          set(mock1)
        const assigmentRef=ref(db,'assignments/user_2yuuGJXJf9KNS7f0yvhGsbsWjLf')
      onValue(assigmentRef, (snapshot: DataSnapshot) => {
        const data=snapshot.val();
        if (data) {
          const assignments = Object.entries(data);
          const assignmentToRemove = assignments.find(([key, value]: [string, any]) => value.id === id);
          if (assignmentToRemove) {
            removeAssignment(assignmentToRemove[0]);
          }
        }
        })}}>
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