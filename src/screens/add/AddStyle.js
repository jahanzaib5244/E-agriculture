import { StyleSheet } from "react-native";
import { Colors } from "../../config/Utils";

export const AddStyle = StyleSheet.create({
  root:{
      flex:1,
      backgroundColor:'#f5f5f5',
      paddingHorizontal:25
  },
  input:{
      marginTop:15
  },
  radio:{
      width:'100%',
      justifyContent:'space-evenly',
      marginTop:15,
  },
  radioHeading:{
      color:'black',
      marginTop:15,
      fontSize:15,
      fontWeight:'700',
      textAlign:'center',
      

  },
  Dropdown:{
      marginTop:15,
  },
  btn:{
      marginTop:25
  },
  radiolabelText:{
      fontWeight:'700'
  }
});
