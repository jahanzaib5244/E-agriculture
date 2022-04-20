import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigation from './StackNavigation';
import RootStack from './RootStack';
import {useSelector, useDispatch} from 'react-redux';
import auth from '@react-native-firebase/auth';

import Splash from '../screens/splash/Splash';
import {GetUser} from '../Store/actions/AuthActions';
import DrawerNavigation from './DrawerNavigation';
import OfflineScreen from '../component/OfflineScreen';

export default function Navigation() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  async function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) {
    return (
      <View style={{flex: 1}}>
        <Splash />
      </View>
    );
  } else {
    if (!user) {
      return (
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <DrawerNavigation />
        </NavigationContainer>
      );
    }
  }
}
