import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet, Image, FlatList } from 'react-native'
import { Fruits } from '../assets/VegFruitName'

import { size, Colors, font } from '../config/Utils'

export default function Dropdown({ name, select, customstyle }) {
    const [show, setshow] = useState(false)
    const [selected, setselected] = useState('')

    const vegetable = [

    ]


    const SelectedOption = (item) => {
        setselected(item)
        setshow(false)
    }
    const item = ({ item, index }) => {
        return (
            <TouchableOpacity key={index} style={[styles.options, { backgroundColor: item.id == selected.id ? '#3EC301' : 'white' }]} onPress={() => SelectedOption(item)}>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    {item.id == selected.id ?
                        <Image style={[styles.pic, { tintColor: 'white',height:15,width:20 }]} source={require('../assets/selected.png')} /> :
                        <Image style={styles.pic} source={require('../assets/dot.png')} />
                    }

                    <Text style={[styles.optionText, { paddingLeft: 8, color: item.id == selected.id ? 'white' : 'black' }]}>{item.eng}</Text>
                </View>

                <Text style={[styles.optionText, { color: item.id == selected.id ? 'white' : 'black' }]}>{item.urdu}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View>
            <TouchableOpacity style={[styles.Input, customstyle]} onPress={() => setshow(true)} >

                <Text style={styles.text}>{name}</Text>
                <View style={styles.textinput} >
                    {selected == '' ?
                        <Text style={{ color: 'black', fontSize: 16 }}>{selected == '' ? `${name}` : selected.eng}</Text>
                        :
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

                            <Text style={{ color: 'black', fontSize: 16 ,fontWeight:'700'}}>{selected.eng}</Text>
                            <Text style={{ color: 'black', fontSize: 16 ,fontWeight:'700'}}>{selected.urdu}</Text>
                        </View>
                    }
                </View>

            </TouchableOpacity>
            <Modal
                style={styles.modalstyle}
                animationType='fade'
                transparent={true}
                visible={show}
                onRequestClose={() => {

                    setshow(!show);
                }}
            >
                <TouchableOpacity style={styles.ModalView} onPress={() => setshow(!show)}>
                    <View style={styles.inner}>
                        <FlatList
                            data={Fruits}
                            renderItem={item}
                            keyExtractor={(item) => (item.id).toString()}
                        />

                    </View>
                </TouchableOpacity>
            </Modal>
        </View>

    )

}

const styles = StyleSheet.create({
    pic: {
        resizeMode: 'contain',
        height: 5,
        width: 15
    },
    modalstyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ModalView: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.3)',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inner: {
        paddingHorizontal: 10,
        paddingVertical: 10,
        width: "85%",
        maxHeight: size.height70,
        borderRadius: 20,
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'rgba(100,100,100,0.3)'
    },
    options: {
        borderRadius: 10,
        width: '100%',
        padding: 5,
        paddingVertical: 15,
        // elevation: 0.3,
        borderBottomWidth: 0.7,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        borderColor: 'rgba(100,100,100,0.5)',
        // backgroundColor:'red'
    },
    dropdownSelector: {

        height: 80,
        // backgroundColor:'green',
        marginVertical: 5,
        marginHorizontal: 30,
        borderRadius: 10,
        elevation: 1,

    },
    Input: {


        backgroundColor: Colors.white,
        elevation: 3,

        borderRadius: 10,
        padding: 10,
    },
    text: {
        paddingLeft: 15,
        color: Colors.black,
        fontSize: font.h3,
        fontWeight: '700',
        letterSpacing: 1
    },
    textinput: {

        marginVertical: 5,
        marginHorizontal: 5,
        fontSize: font.h3,
        padding: 5,
        paddingHorizontal: 10,
        marginTop: 5
    },
    optionText: {
        color: Colors.black,
        fontSize: font.h3
    }
})
