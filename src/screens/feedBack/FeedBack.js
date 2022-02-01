import { View, Text } from 'react-native';
import React,{useState} from 'react';
import Textarea from 'react-native-textarea';
import { FeedbackStyle } from './FeedbackStyle';

import AppButton from '../../component/AppButton'


export default function FeedBack() {

const [feedText, setfeedText] = useState('');
const [invalid, setinvalid] = useState(null);
  
  const feedback=()=>{
    setinvalid(null)
     if (feedText !== '') {
       
     }else{
         setinvalid("Feedback Text should't be empty")
     }
  }

  return (
    <View style={{flex:1,backgroundColor:'white',paddingHorizontal:25}}>
      <Text style={{color:'black',fontSize:16,top:15,paddingLeft:7,fontWeight:'700'}}>FeedBack or Suggestion</Text>
      <Textarea
    containerStyle={FeedbackStyle.textareaContainer}
    style={FeedbackStyle.textarea}
    onChangeText={(e)=>setfeedText(e)}
    maxLength={300}
    placeholder={"FeedBack or Suggestion..."}
    placeholderTextColor={'#c7c7c7'}
    underlineColorAndroid={'transparent'}
  />
  {invalid && <Text style={FeedbackStyle.invalid}>{invalid}</Text> } 
  <AppButton name='Submit' onPress={feedback} BTstyle={FeedbackStyle.btn}/>
    </View>
  );
}
