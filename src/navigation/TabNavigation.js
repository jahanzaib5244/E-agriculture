import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {Image} from 'react-native';
import {useSelector} from 'react-redux';

import NavStrings from '../constants/NavStrings';
import {Home, Chat, Furtilizer, Shop, Setting} from '../screens';
import COLORS from '../style/COLORS';
import ImgPath from '../constants/ImgPath';

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: 'green',
        tabBarInactiveTintColor: 'grey',
        headerTitleAlign: 'center',
        tabBarHideOnKeyboard: true,
      }}>
      <Tab.Screen
        options={{
          headerTitle: 'Home',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={ImgPath.home}
              style={{
                height: size,
                width: size,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
        }}
        name={NavStrings.TabHome}
        component={Home}
      />

      <Tab.Screen
        options={{
          tabBarBadge: null,
          headerTitle: 'Shop',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={ImgPath.cart}
              style={{
                height: size,
                width: size,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
        }}
        name={NavStrings.Shop}
        component={Shop}
      />
      {/* <Tab.Screen
        options={{
          tabBarBadge: null,
          headerTitle: 'Furtilizer',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={ImgPath.plant}
              style={{
                height: size,
                width: size,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
        }}
        name={NavStrings.Furtilizer}
        component={Furtilizer}
      /> */}
      <Tab.Screen
        options={{
          tabBarBadge: null,
          headerTitle: 'Chats',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={ImgPath.sms}
              style={{
                height: size,
                width: size,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
        }}
        name={NavStrings.Chat}
        component={Chat}
      />

      <Tab.Screen
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={ImgPath.settings}
              style={{
                height: size,
                width: size,
                resizeMode: 'contain',
                tintColor: color,
              }}
            />
          ),
        }}
        name={NavStrings.Setting}
        component={Setting}
      />
    </Tab.Navigator>
  );
}
