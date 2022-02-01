import React from 'react'

import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Search from '../screens/search/Search';
import Furtilizer from '../screens/furtilizer/Furtilizer';
import FeedBack from '../screens/feedBack/FeedBack';
import Add from '../screens/add/Add'



export default function StackNavigation() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Home" component={Home} />
        <Stack.Screen options={{ headerShown: true ,headerTitleAlign:'center'}} name="Search" component={Search} />
        <Stack.Screen options={{ headerShown: true,headerTitleAlign:'center' }} name="Furtilizer" component={Furtilizer} />
        <Stack.Screen options={{ headerShown: true,headerTitleAlign:'center' }} name="FeedBack" component={FeedBack} />
        <Stack.Screen options={{ headerShown: true,headerTitleAlign:'center' }} name="Add" component={Add} />

        
      </Stack.Navigator>
    )
}
