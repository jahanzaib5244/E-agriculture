import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home/Home';
import Search from '../screens/search/Search';
import Furtilizer from '../screens/furtilizer/Furtilizer';
import FeedBack from '../screens/feedBack/FeedBack';
import Add from '../screens/add/Add';
import TabNavigation from './TabNavigation';
import {useDispatch, useSelector} from 'react-redux';
import {
  AddCrop,
  AddPrice,
  AddProduct,
  AllCrops,
  AllPrices,
  AllProducts,
  Cart,
  CropDetail,
  CropPractices,
  GiftedChat,
  MarketPrice,
  PurchaseHistory,
  SaleHistory,
  SelectLanguage,
  SoilTesting,
  Videos,
} from '../screens';
import NavStrings from '../constants/NavStrings';
import {getUserData} from '../Store/actions/AuthActions';
import {
  getAllCrops,
  getAllPrices,
  getAllProducts,
} from '../Store/actions/AddProduct';
import {getAllChatrooms} from '../Store/actions/chatAction';

export default function StackNavigation() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.AuthReducer.userData);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    dispatch(getUserData(setloading));
    dispatch(getAllCrops());
    dispatch(getAllProducts());
    dispatch(getAllPrices());
    dispatch(getAllChatrooms());
    return () => {};
  }, []);

  const Stack = createStackNavigator();
  return loading && !!user?.role ? (
    <View style={{flex: 1, backgroundColor: 'green'}}></View>
  ) : (
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
        name={NavStrings.AddPrice}
        component={AddPrice}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.AddProduct}
        component={AddProduct}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.AllProducts}
        component={AllProducts}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.AllPrices}
        component={AllPrices}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.AllCrops}
        component={AllCrops}
      />

      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.MarketPrice}
        component={MarketPrice}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          animationEnabled: false,
        }}
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
          headerShown: false,
          headerTitleAlign: 'center',
          title: 'Admin',
        }}
        name={NavStrings.GiftedChat}
        component={GiftedChat}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Add Crop Advisory',
        }}
        name={NavStrings.AddCrop}
        component={AddCrop}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Purchase History',
        }}
        name={NavStrings.PurchaseHistory}
        component={PurchaseHistory}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Sale History',
        }}
        name={NavStrings.SaleHistory}
        component={SaleHistory}
      />
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Cart',
        }}
        name={NavStrings.Cart}
        component={Cart}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name="FeedBack"
        component={FeedBack}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.SelectLanguage}
        component={SelectLanguage}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name="Add"
        component={Add}
      />
      <Stack.Screen
        options={{headerShown: true, headerTitleAlign: 'center'}}
        name={NavStrings.CropDetail}
        component={CropDetail}
      />
    </Stack.Navigator>
  );
}
