import {View, Text, TouchableOpacity, Image, I18nManager} from 'react-native';
import React, {useState, useEffect} from 'react';

import {styles} from './styles';
import strings from '../../constants/language/LocalizedString';
import ImgPath from '../../constants/ImgPath';
import {setLng, getLng} from '../../helper/ChangeLn';
import RNRestart from 'react-native-restart';

export default function SelectLanguage() {
  const [lang, setlang] = useState('en');

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
  const selectedLng = async () => {
    const lngData = await getLng();
    if (!!lngData) {
      setlang(lngData);
    }
  };

  useEffect(() => {
    selectedLng();
  }, []);

  return (
    <View style={styles.root}>
      <TouchableOpacity onPress={() => onChangeLng('en')} style={styles.btn}>
        <Text style={styles.btnTxt}>English</Text>
        <Image
          source={lang == 'en' ? ImgPath.activeRadio : ImgPath.inactiveRadio}
          style={styles.radioImg}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChangeLng('ar')} style={styles.btn}>
        <Text style={styles.btnTxt}>Urdu</Text>
        <Image
          source={lang == 'ar' ? ImgPath.activeRadio : ImgPath.inactiveRadio}
          style={styles.radioImg}
        />
      </TouchableOpacity>
    </View>
  );
}
