import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import COLORS from '../style/COLORS';
import FONTS from '../style/FONTS';
import ImgPath from '../constants/ImgPath';

const DetailDropDown = ({detail = '', title = '', index = 1}) => {
  const [show, setshow] = useState(false);
  return (
    <View style={{paddingHorizontal: moderateScale(20)}}>
      <TouchableOpacity
        onPress={() => setshow(!show)}
        activeOpacity={0.9}
        numberOfLines={1}
        style={styles.headerContainer}>
        <Text style={styles.headerTxt}>
          {index}. {title}
        </Text>
        <Image
          source={ImgPath.forwardArrow}
          style={[
            styles.forwardImage,
            {transform: [{rotate: show ? '90deg' : '0deg'}]},
          ]}
        />
      </TouchableOpacity>
      {show && (
        <>
          <View>
            <Text style={styles.detailtxt}>{detail}</Text>
          </View>
        </>
      )}
    </View>
  );
};

export default DetailDropDown;

const styles = StyleSheet.create({
  headerContainer: {
    height: moderateVerticalScale(50),
    marginBottom: moderateScale(3),
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerTxt: {
    fontSize: FONTS.dec,
    paddingHorizontal: moderateScale(10),
    color: COLORS.black,
    fontWeight: '700',
  },
  forwardImage: {
    height: moderateScale(15),
    width: moderateScale(15),
    marginHorizontal: moderateScale(10),
  },
  detailtxt: {
    fontSize: FONTS.dec,
    color: COLORS.black,
    paddingHorizontal: moderateScale(20),
    marginBottom: moderateScale(20),
  },
});
