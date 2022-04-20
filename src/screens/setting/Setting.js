import {View, Text, Image} from 'react-native';
import React from 'react';

import Header from '../../component/Header';
import {styles} from './styles';
import ImgPath from '../../constants/ImgPath';

export default function Setting() {
  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.header}>
        <View style={styles.pic}>
          <Image source={ImgPath.Admin} style={styles.Image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.username}>jahanzaib zaib</Text>
          <Text style={styles.email}>zaibmsf333@gmail.com</Text>
        </View>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnTxt}>Update Profile</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnTxt}>Update Password</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnTxt}>Share App</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnTxt}>Rate App</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnTxt}>Privacy Policy</Text>
      </View>
      <View style={styles.btn}>
        <Text style={styles.btnTxt}>Refund Policy Profile</Text>
      </View>
    </View>
  );
}
