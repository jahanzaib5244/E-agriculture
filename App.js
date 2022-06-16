import React, {useEffect} from 'react';
import {View, StatusBar, I18nManager, Text, LogBox} from 'react-native';
import Navigation from './src/navigation/Navigation';
import {Provider} from 'react-redux';
import Store from './src/config/Store';
import COLORS from './src/style/COLORS';
import {getLng, setLng} from './src/helper/ChangeLn';
import strings from './src/constants/language/LocalizedString';

export default function App() {
  // on change language
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
      console.log('selected Language data==>>>', lngData);

      strings.setLanguage(lngData);
      console.log(strings.getLanguage());
    }
  };
  // get langage mathad
  useEffect(() => {
    selectedLng();
  }, []);

  return (
    <Provider store={Store}>
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
      <Navigation />
    </Provider>
  );
}
