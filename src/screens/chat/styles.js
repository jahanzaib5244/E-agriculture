import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale} from 'react-native-size-matters';

import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  chatCard: {
    height: moderateVerticalScale(70),
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.7,
    borderColor: '#dedede',
  },
  ImageContainer: {
    width: moderateScale(70),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: moderateScale(55),
    width: moderateScale(55),
  },
  name: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 18,
  },
  sms: {
    color: 'grey',
    fontSize: 14,
  },
});
