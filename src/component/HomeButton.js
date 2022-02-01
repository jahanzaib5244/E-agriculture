import { View, Text ,StyleSheet,TouchableOpacity,Image} from 'react-native';
import React from 'react';


export default function HomeButton({image,onPress,text,imageStyle}) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
         <Image source={image} style={styles.imageStyle}/>
         <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root:{
    height:150,
    width:150,
    borderWidth:1,
    borderColor:'gray',
    borderRadius:20,
    alignItems:'center',
    justifyContent:'center',
  },
  imageStyle:{
      height:50,
      resizeMode:'contain',
      tintColor:'black'
  },
  text:{
  color:'gray',
  fontSize:16,
  fontWeight:'700',
  top:10
  }
});
