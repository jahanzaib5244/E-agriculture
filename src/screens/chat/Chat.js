import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {styles} from './styles';
import Header from '../../component/Header';
import ImgPath from '../../constants/ImgPath';
import NavStrings from '../../constants/NavStrings';

export default function Chat({navigation}) {
  return (
    <View style={styles.root}>
      <Header />
      <TouchableOpacity
        onPress={() => navigation.navigate(NavStrings.GiftedChat)}
        style={styles.chatCard}>
        <View style={styles.ImageContainer}>
          <Image source={ImgPath.Admin} style={styles.img} />
        </View>
        <View style={{marginLeft: 10}}>
          <Text style={styles.name}>Admin</Text>
          <Text style={styles.sms}>Dear Custmor ...</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
