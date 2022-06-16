import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  I18nManager,
  ScrollView,
} from 'react-native';

import RNRestart from 'react-native-restart';
import {setLng} from '../../helper/ChangeLn';
import {WelcomeStyle} from './WelcomeStyle';
import strings from '../../constants/language/LocalizedString';
import COLORS from '../../style/COLORS';

export default function Welcome({navigation}) {
  const onChangeLng = async lng => {
    if (lng === 'en') {
      await I18nManager.forceRTL(false);
      setLng('en');
      RNRestart.Restart();
      return;
    }

    if (lng === 'ar') {
      await I18nManager.forceRTL(true);
      setLng('ar');
      RNRestart.Restart();
      return;
    }
  };
  return (
    <ScrollView contentContainerStyle={WelcomeStyle.root}>
      <View style={WelcomeStyle.logo}>
        <Image
          style={WelcomeStyle.image}
          source={require('../../assets/logo.png')}
        />
        <Text style={WelcomeStyle.logoText}>E Agriculture</Text>
      </View>
      <View style={WelcomeStyle.btnContainer}>
        <View>
          <Text style={WelcomeStyle.welcomeText}>{strings.welcomeHeadig}</Text>
          <Text style={WelcomeStyle.detailText}>{strings.des1}</Text>
          <Text style={WelcomeStyle.detailText}>{strings.des2}</Text>
        </View>
        <View style={WelcomeStyle.rowBtnContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={WelcomeStyle.loginBtn}>
            <Text style={WelcomeStyle.loginBtnTxt}>{strings.Login}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Singup')}
            style={[
              WelcomeStyle.loginBtn,
              {
                backgroundColor: 'white',
                elevation: 2,
                borderWidth: 0.2,
                borderColor: COLORS.primary,
              },
            ]}>
            <Text style={WelcomeStyle.SingupBtnTxt}>{strings.Singup}</Text>
          </TouchableOpacity>
        </View>
        {/* <View style={WelcomeStyle.rowBtnContainer}>
          <TouchableOpacity
            onPress={() => onChangeLng('ar')}
            style={WelcomeStyle.loginBtn}>
            <Text style={WelcomeStyle.loginBtnTxt}>urdu</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onChangeLng('en')}
            style={[
              WelcomeStyle.loginBtn,
              {
                backgroundColor: 'white',
                elevation: 2,
                borderWidth: 0.2,
                borderColor: COLORS.primary,
              },
            ]}>
            <Text style={WelcomeStyle.SingupBtnTxt}>english</Text>
          </TouchableOpacity>
        </View> */}
      </View>
    </ScrollView>
  );
}
