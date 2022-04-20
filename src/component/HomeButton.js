import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../style/COLORS';
import FONTS from '../style/FONTS';

export default function HomeButton({image, onPress, text, imageStyle}) {
  return (
    <TouchableOpacity style={styles.root} onPress={onPress}>
      <Image source={image} style={styles.imageStyle} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  root: {
    height: moderateScale(70),
    width: moderateScale(107),
    elevation: 10,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.white,
  },
  imageStyle: {
    height: moderateScale(30),
    width: moderateScale(30),
    resizeMode: 'contain',
  },
  text: {
    color: COLORS.black,
    fontSize: 12,
    top: 5,
  },
});
