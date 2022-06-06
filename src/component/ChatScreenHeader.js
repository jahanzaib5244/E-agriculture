import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

import COLORS from '../style/COLORS';
import ImgPath from '../constants/ImgPath';
import {useNavigation} from '@react-navigation/native';

export default function ChatScreenHeader({image = '', name = ''}) {
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.goBack()}
        style={styles.Backbtn}>
        <Image style={styles.BackImage} source={ImgPath.icBakc} />
      </TouchableOpacity>
      <View style={styles.userImageontainer}>
        <Image style={styles.userPic} source={{uri: image}} />
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    height: moderateVerticalScale(50),
    backgroundColor: COLORS.white,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: scale(20),
    fontWeight: '600',
    color: COLORS.black,
    paddingLeft: moderateScale(12),
    paddingRight: moderateScale(20),
  },
  Backbtn: {
    height: '100%',
    width: moderateScale(30),
    alignItems: 'center',
    justifyContent: 'center',
  },
  BackImage: {
    height: moderateScale(25),
    width: moderateScale(25),
    resizeMode: 'contain',
  },
  userImageontainer: {
    height: moderateVerticalScale(40),
    width: moderateScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(40 / 2),
    overflow: 'hidden',
  },
  userPic: {
    height: moderateScale(40),
    width: moderateScale(40),
    resizeMode: 'cover',
  },
});
