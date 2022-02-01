import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native'

export default function LandCArd({ title,futilizer,fruitName,LandType,water,Area }) {
    const [show, setshow] = useState(false)
    return (
        <View style={{ backgroundColor: 'white', marginTop: 8 }}>
            <TouchableOpacity activeOpacity={0.6} style={[styles.container, { borderBottomRightRadius: show ? 0 : 10, borderBottomLeftRadius: show ? 0 : 10, }]} onPress={() => setshow(!show)}>
                <Text style={{ color: 'black', fontSize: 18, paddingLeft: 10, flex: 1, textTransform: 'capitalize',fontWeight:'900' }}>{title}</Text>
                <Image style={{ height: 30, width: 30, tintColor: 'black', transform: [{ rotate: show ? '180deg' : '360deg' }] }} source={require('../assets/expand.png')} />
            </TouchableOpacity>
            {show ?
                <View style={{paddingLeft:15, paddingTop: 5, paddingBottom: 20, backgroundColor: 'rgba(239,245,248,1)', marginHorizontal: '4%', borderBottomLeftRadius: 10, borderBottomRightRadius: 10,}}>
                    <View style={{ flexDirection: 'row',justifyContent:'space-evenly',alignItems:'center' }}>
                        <Text style={{ color: 'black',flex:1,fontSize:16,fontWeight:'700' }}>Fruits/Vegetable Name</Text>
                        <Text style={{color:'black',flex:1}}>{fruitName}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent:'space-evenly',alignItems:'center' }}>
                        <Text style={{ color: 'black',flex:1,fontSize:16,fontWeight:'700' }}>Land Type</Text>
                    <Text style={{color:'black',flex:1}}>{LandType}</Text>
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent:'space-evenly' }}>
                        <Text style={{ color: 'black',flex:1,fontSize:16,fontWeight:'700' }}>Water</Text>
                    <Text style={{color:'black',flex:1}}>{water} liter/day</Text>
                    </View>
                    <View style={{ flexDirection: 'row',justifyContent:'space-evenly',alignItems:'center' }}>
                        <Text style={{ color: 'black',flex:1,fontSize:16,fontWeight:'700' }}>Area</Text>
                    <Text style={{color:'black',flex:1}}>{Area}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent:'space-evenly',alignItems:'center'}}>
                        <Text style={{ color: 'black',flex:1,fontSize:16,fontWeight:'700' }}>Furtilizer</Text>
                    <Text style={{color:'black',flex:1}}>{futilizer}kg</Text>
                    </View>
                </View>
                :
                null
            }
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 8,
        backgroundColor: 'rgba(239,245,248,1)',
        marginHorizontal: '4%',
        marginTop: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
    }
})

