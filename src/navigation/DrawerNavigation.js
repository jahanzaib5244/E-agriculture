import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';



import Drawercontent from './DrawerContent';
import { Colors } from '../config/Utils';
import StackNavigation from './StackNavigation';

import UpdatePassword from '../screens/updatePassword/UpdatePassword';
import AccountSetting from '../screens/account setting/AccountSetting';
import { Image } from 'react-native';
import Home from '../screens/home/Home';

const Drawer = createDrawerNavigator();
export default function DrawerNavigation() {
  return (
    <Drawer.Navigator
      drawerContent={props => <Drawercontent {...props}
      />}

      screenOptions={{
        swipeEnabled:false,
        gestureEnabled:false,
        drawerLockMode: 'locked-open',
        drawerActiveBackgroundColor: Colors.drawer,
        drawerActiveTintColor: Colors.white,
        drawerInactiveTintColor: Colors.black,
        headerStyle: {
          backgroundColor: Colors.primary,
          elevation:0
        },
        headerTintColor: Colors.white,
        headerTitleAlign: 'center',

        drawerLabelStyle: {
          fontWeight: '600',
          marginLeft: -15,
          fontFamily: 'Roboto-Medium',
          fontSize: 15,
        },
      }}

    >

      <Drawer.Screen options={{
        headerShown: false,
        drawerLabel: 'Home',
        headerTitle: 'Home',
        drawerIcon: ({ color, size }) => (
          <Image style={{ width: size, height: size, tintColor: color }} source={require('../assets/home.png')}
          />
        ),
      }} name="Home1" component={StackNavigation}
      />
      <Drawer.Screen options={{
        drawerLabel: 'Change Password',
        headerTitle: 'Change Password',
        drawerIcon: ({ color, size }) => (
          <Image style={{ width: size, height: size, tintColor: color }} source={require('../assets/password.png')} />
        ),
      }} name="UpdatePassword" component={UpdatePassword}
      />
      <Drawer.Screen options={{
        drawerLabel: 'Account Setting',
        headerTitle: 'Account Setting',
        drawerIcon: ({ color, size }) => (
          <Image style={{ width: size, height: size, tintColor: color }} source={require('../assets/updateProfile.png')} />
        ),
      }} name="AccountSetting" component={AccountSetting}
      />


    </Drawer.Navigator>
  );
}