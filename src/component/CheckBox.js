import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

import ImgPath from '../constants/ImgPath';
import COLORS from '../style/COLORS';
import FONTS from '../style/FONTS';
import strings from '../constants/language/LocalizedString';

const CheckBox = ({selectedValue = () => {}, value = []}) => {
  const [CheckBoxselection, setCheckBoxselection] = useState([]);

  const disable = false;
  const removeAddDays = str => {
    if (CheckBoxselection.includes(str)) {
      const filtered = CheckBoxselection.filter(item => {
        return item !== str;
      });
      selectedValue(filtered);
      setCheckBoxselection(filtered);
    } else {
      let newArray = [...CheckBoxselection, str];
      setCheckBoxselection(newArray);
      selectedValue(newArray);
    }
  };

  return (
    <View style={styles.root}>
      <Text style={[styles.heading]}>{strings.selectParameter}</Text>

      <View
        style={{
          width: '90%',
          flexWrap: 'wrap',

          marginHorizontal: moderateScale(25),
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={{flexDirection: 'row', flex: 1}}
            onPress={() => {
              removeAddDays(`Electrical Conductivity(EC)`);
            }}>
            <Image
              style={{
                tintColor: disable
                  ? COLORS.black
                  : CheckBoxselection.includes(`Electrical Conductivity(EC)`)
                  ? COLORS.primary
                  : COLORS.black,
                height: 20,
                marginRight: moderateScale(5),
                width: 20,
              }}
              source={
                disable
                  ? ImgPath.activeCheck
                  : CheckBoxselection.includes(`Electrical Conductivity(EC)`)
                  ? ImgPath.activeCheck
                  : ImgPath.inactiveCheck
              }
              // source={ImgPath}
            />
            <Text style={{color: COLORS.black}}>
              Electrical Conductivity(EC)
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{flexDirection: 'row', flex: 0.7}}
            onPress={() => {
              removeAddDays(`Nitrogen(N)`);
            }}>
            <Image
              style={{
                tintColor: disable
                  ? COLORS.black
                  : CheckBoxselection.includes(`Nitrogen(N)`)
                  ? COLORS.primary
                  : COLORS.black,
                height: 20,
                width: 20,
                marginRight: moderateScale(5),
              }}
              source={
                disable
                  ? ImgPath.activeCheck
                  : CheckBoxselection.includes(`Nitrogen(N)`)
                  ? ImgPath.activeCheck
                  : ImgPath.inactiveCheck
              }
              // source={ImgPath}
            />
            <Text style={{color: COLORS.black}}>Nitrogen(N)</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: moderateVerticalScale(10),
          }}>
          <TouchableOpacity
            style={{flexDirection: 'row', flex: 1}}
            onPress={() => {
              removeAddDays(`Organnic Carbon(Organnic)`);
            }}>
            <Image
              style={{
                tintColor: disable
                  ? COLORS.black
                  : CheckBoxselection.includes(`Organnic Carbon(Organnic)`)
                  ? COLORS.primary
                  : COLORS.black,
                height: 20,
                width: 20,
                marginRight: moderateScale(5),
              }}
              source={
                disable
                  ? ImgPath.activeCheck
                  : CheckBoxselection.includes(`Organnic Carbon(Organnic)`)
                  ? ImgPath.activeCheck
                  : ImgPath.inactiveCheck
              }
              // source={ImgPath.activecheck}
            />
            <Text style={{color: COLORS.black}}>Organnic Carbon(Organnic)</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flexDirection: 'row',
              flex: 0.7,
            }}
            onPress={() => {
              removeAddDays(`Potassium(K)`);
            }}>
            <Image
              style={{
                tintColor: disable
                  ? COLORS.black
                  : CheckBoxselection.includes(`Potassium(K)`)
                  ? COLORS.primary
                  : COLORS.black,
                height: 20,
                width: 20,
                marginRight: moderateScale(5),
              }}
              source={
                disable
                  ? ImgPath.activeCheck
                  : CheckBoxselection.includes(`Potassium(K)`)
                  ? ImgPath.activeCheck
                  : ImgPath.inactiveCheck
              }
              // source={ImgPath.activecheck}
            />
            <Text style={{color: COLORS.black}}>Potassium(K)</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  rowBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: moderateVerticalScale(8),
  },
  categoryBtn: {
    backgroundColor: 'red',
    paddingVertical: moderateVerticalScale(8),
    width: moderateScale(130),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    borderColor: COLORS.themeColor,
    borderWidth: 1,
  },
  heading: {
    paddingVertical: moderateVerticalScale(8),
    color: COLORS.black,
    fontSize: FONTS.heading,
    fontWeight: '700',
    paddingHorizontal: moderateScale(25),
  },
  root: {marginHorizontal: moderateScale(25)},
});
