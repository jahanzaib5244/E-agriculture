import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  ImgaeContainer: {
    height: moderateVerticalScale(170),
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  CropImage: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
  },
  imgTxt: {
    fontSize: FONTS.heading,
    color: COLORS.lightBlack,
  },
  addImg: {
    height: moderateScale(30),
    width: moderateScale(30),
  },
  input: {
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(20),
    height: moderateVerticalScale(50),
  },
  moreFields: {
    marginHorizontal: moderateScale(25),
    marginVertical: moderateVerticalScale(20),
  },
  moreFielsTxt: {
    color: COLORS.white,
    fontSize: FONTS.heading,
    fontWeight: '700',
  },
  multipleTextInput: {
    marginTop: moderateScale(10),
    marginHorizontal: moderateScale(20),
    height: moderateVerticalScale(95),
  },
  multiline: {
    maxHeight: moderateScale(70),
  },
});
