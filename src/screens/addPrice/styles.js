import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  inputs: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateScale(10),
  },
  marketTxt: {
    fontSize: FONTS.des,
    fontWeight: '700',
    color: COLORS.black,
    marginTop: moderateVerticalScale(20),
    paddingHorizontal: moderateScale(23),
  },
  addBtn: {
    marginVertical: moderateVerticalScale(20),
    marginHorizontal: moderateScale(23),
  },
});
