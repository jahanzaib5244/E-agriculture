import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  btn: {
    height: moderateVerticalScale(50),
    borderBottomWidth: 0.6,
    borderColor: '#dedede',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: moderateScale(30),
    flexDirection: 'row',
  },
  btnTxt: {
    color: COLORS.black,
    fontSize: FONTS.des,
    fontWeight: '600',
    textAlign: 'left',
  },
  radioImg: {
    height: moderateScale(15),
    width: moderateScale(15),
  },
});
