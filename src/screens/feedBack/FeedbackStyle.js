import { StyleSheet } from "react-native"
import { Colors } from "../../config/Utils";


export const FeedbackStyle = StyleSheet.create({
    textareaContainer:{
        height: 180,
        padding: 5,
        backgroundColor: '#f5f5f5',
        marginTop:23,
        borderRadius:10
    },
    textarea:{
        textAlignVertical: 'top',  // hack android
        height: 170,
        fontSize: 14,
        color: '#111'
    },
    btn:{
        marginTop:50,
    },
    invalid:{
        color:Colors.danger,
        paddingLeft:4,
        marginTop:4
    }

});
