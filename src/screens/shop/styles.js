import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale} from 'react-native-size-matters';

import FONTS from '../../style/FONTS';
import COLORS from '../../style/COLORS';

export const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  shopHeader: {
    marginTop: moderateVerticalScale(20),
    height: moderateVerticalScale(50),
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: moderateScale(20),
  },
  recomemdedTxt: {
    fontSize: FONTS.heading,
    color: COLORS.black,
    fontWeight: '700',
  },
  viewAllTxt: {
    fontSize: 14,
    color: COLORS.danger,
    fontWeight: '700',
    paddingVertical: moderateVerticalScale(5),
  },
  category: {
    paddingLeft: moderateScale(20),
    marginTop: moderateVerticalScale(10),
  },
  categoryBtn: {
    height: moderateScale(70),
    width: moderateScale(70),
    marginVertical: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: moderateScale(15),
  },
  categoryBtnImg: {
    height: moderateScale(40),
    width: moderateScale(40),
    resizeMode: 'contain',
  },
  CategoryTxt: {
    top: 3,
    color: COLORS.black,
    fontSize: 14,
  },
});
