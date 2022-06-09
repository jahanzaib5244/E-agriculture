import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  textInput: {
    flexDirection: 'row',
    elevation: 10,
    backgroundColor: COLORS.white,
    borderRadius: moderateScale(30),
    paddingHorizontal: moderateScale(20),
    color: COLORS.black,
    fontSize: FONTS.des,
    height: moderateScale(45),
  },
  root: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  btnContainer: {
    height: moderateScale(45),
    width: moderateScale(45),
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnImage: {
    width: moderateScale(25),
    height: moderateScale(25),
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
});
