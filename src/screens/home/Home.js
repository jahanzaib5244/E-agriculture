import { View, Text, ImageBackground } from 'react-native';
import React from 'react';
import Header from '../../component/Header';
import { Colors, size } from '../../config/Utils';
import WeatherCard from '../../component/WeatherCard';
import HomeButton from '../../component/HomeButton';

export default function Home({navigation}) {
  return (
    <View style={{flex:1,alignItems:'center',backgroundColor:Colors.white}}>
      <Header />
      <View style={{borderRadius:15,overflow:'hidden',marginTop:18}}>
    <WeatherCard />
    </View>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:'100%',marginTop:20}}>

     <HomeButton image={require('../../assets/add.png')}  onPress={()=>navigation.navigate('Add')}  text='Add'/>
     <HomeButton image={require('../../assets/furtilizer.png')}  onPress={()=>navigation.navigate('Furtilizer')}  text='Furtilizer'/>
    </View>

    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:'100%',marginTop:20}}>

     <HomeButton image={require('../../assets/search.png')}  onPress={()=>navigation.navigate('Search')}  text='Seacrch'/>
     <HomeButton image={require('../../assets/feedback.png')}  onPress={()=>navigation.navigate('FeedBack')}  text='Feed Back'/>
    </View>

    </View>
  );
}
