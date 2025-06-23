import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors';

let mockPolls = [
  {
    id: '1',
    subject: 'Do we need a new component library?',
    description: 'A detailed exploration of whether adopting a new component library would streamline development and improve UI consistency.',
    options: [
      { text: 'Yes, we should use Material UI', votes: 150 },
      {text: 'Yes, we should use Ant Design', votes: 95 },
      {text: 'No, we should stick with our current system', votes: 120 },
      { text: 'I am not sure', votes: 10 }
    ],
    isClosed: false,
    totalVotes: 375
  },
  {
    id: '2',
    subject: 'What should be our top priority for the next quarter?',
    description: 'Please select the strategic initiative that you believe will have the most significant impact on our goals.',
    options: [
      { text: 'Performance Optimization', votes: 210 },
      {text: 'New Feature Development', votes: 180 },
      {text: 'Technical Debt Reduction', votes: 155 },
      {text: 'Improving Documentation', votes: 190 }
    ],
    isClosed: true,
    totalVotes: 605
  }
];

const polls = () => {
  return (
    <View>
      <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20}}>Voice Of You</Text>
      {mockPolls.map((poll)=>(
        <View style={{backgroundColor:Colors.lightGray,borderRadius:10,margin:10}}>
          <Text style={{textAlign:"center",fontSize:18}}>{poll.subject}</Text>
          <Text style={{fontSize:14,marginBottom:10,marginLeft:10}}>{poll.description}</Text>
                      {poll.isClosed===true && (
                        <>
                <Text style={{fontStyle:"italic",textAlign:"center"}}>Top option:{Math.max(...poll.options.map(o => o.votes))} votes | {poll.options.find(o => o.votes === Math.max(...poll.options.map(o => o.votes)))?.text}</Text>
</>
            )}

          {poll.options.map((option, index) => (
            <>
            {poll.isClosed===false && (
<TouchableOpacity key={index} style={{flexDirection:"row",justifyContent:"space-between",padding:10}}
            onPress={()=>(
              option.votes++
            )}>
              <Text style={{fontSize:16}}>{option.text}</Text>
              <Text style={{fontSize:16}}>{option.votes} votes</Text>
            </TouchableOpacity>
            )}
                

            {poll.isClosed===true && (

              <View style={{padding:10}}>
                {option.votes > 0 ? (
                  
                  <Text style={{fontSize:16}}>{option.text}: {option.votes} votes</Text>
                ) : (
                  <Text style={{fontSize:16}}>{option.text}: No votes yet</Text>
                )}
              </View>
            )}
            <View style={{height:1,backgroundColor:Colors.gray}} />
            
            </>
            
          ))}
          {poll.isClosed===true && <Text style={{textAlign:"right",color:"red",margin:5}}>This poll is ended</Text>}
        </View>

      ))}
    </View>
  )
}

export default polls