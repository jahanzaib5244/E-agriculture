import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Search from '../screens/search/Search';
import Furtilizer from '../screens/furtilizer/Furtilizer';
import FeedBack from '../screens/feedBack/FeedBack';
import Add from '../screens/add/Add';
import TabNavigation from './TabNavigation';
import {
  CropPractices,
  GiftedChat,
  MarketPrice,
  SoilTesting,
  Videos,
} from '../screens';
import NavStrings from '../constants/NavStrings';

export default function StackNavigation() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={TabNavigation}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name="Search"
        component={Search}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name="Furtilizer"
        component={Furtilizer}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.CropPractices}
        component={CropPractices}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.MarketPrice}
        component={MarketPrice}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.Videos}
        component={Videos}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.SoilTesting}
        component={SoilTesting}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Admin',
        }}
        name={NavStrings.GiftedChat}
        component={GiftedChat}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name="FeedBack"
        component={FeedBack}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name="Add"
        component={Add}
      />
    </Stack.Navigator>
  );
}
