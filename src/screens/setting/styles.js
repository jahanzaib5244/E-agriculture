import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale} from 'react-native-size-matters';

import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    flexDirection: 'row',
    height: moderateVerticalScale(180),
  },
  pic: {
    flex: 1.2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
  },
  Image: {
    height: moderateVerticalScale(100),
    width: moderateVerticalScale(100),
    borderRadius: moderateScale(50),
  },
  username: {
    fontSize: 23,
    color: COLORS.black,
    textTransform: 'capitalize',
  },
  email: {
    fontSize: 18,
    color: 'grey',
  },
  btn: {
    height: moderateVerticalScale(50),
    borderBottomWidth: 0.6,
    borderColor: '#dedede',
    justifyContent: 'center',
    paddingLeft: moderateScale(30),
  },
  btnTxt: {
    color: COLORS.black,
    fontSize: FONTS.des,
    fontWeight: '600',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
});
