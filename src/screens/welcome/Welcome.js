import React from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native'

import { WelcomeStyle } from './WelcomeStyle'
import { mainHeading, bulletText1, bulletText2, subHeading } from '../../component/Repeat'


export default function Welcome({ navigation }) {
    return (
       
            <ScrollView contentContainerStyle={WelcomeStyle.root}>
                <View style={WelcomeStyle.logo}>
                    <Image style={WelcomeStyle.image} source={require('../../assets/logo.png')} />
                    <Text style={WelcomeStyle.logoText}>E Agriculture</Text>
                </View>
                <View style={WelcomeStyle.btnContainer}>
                    
                    <Text style={WelcomeStyle.welcomeText}>
                    Agriculture is another word for farming.
                    </Text>
                    <Text style={WelcomeStyle.detailText}>Fertilizers replace the nutrients that crops remove from the soil.</Text>
                    <Text style={WelcomeStyle.detailText}>Thus, in order to meet human nutritional needs in the crops and meat we eat, we need to replace what we take out.</Text>
                    <Text style={WelcomeStyle.detailText}>Each crop draws down from these reserves and we need to replace them with fertilizers, every year and after every crop.</Text>
                    <Text style={WelcomeStyle.detailText}>Custom Designed Video Platform to Share Meaningful Stories.</Text>
                    <View style={WelcomeStyle.rowBtnContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login')} style={WelcomeStyle.loginBtn}>
                            <Text style={WelcomeStyle.loginBtnTxt}>Log In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Singup')} style={[WelcomeStyle.loginBtn, { backgroundColor: 'white', elevation: 2, borderWidth: 0.2 }]}>
                            <Text style={WelcomeStyle.SingupBtnTxt}>Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </ScrollView>
     
    )
}
