import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: 'white',
  },
  AddNewContainer: {
    height: moderateVerticalScale(100),
    justifyContent: 'center',
  },
  addBtnContainer: {
    alignItems: 'center',
    width: moderateScale(60),
    marginHorizontal: moderateScale(10),
  },
  addBtn: {
    height: moderateScale(60),
    backgroundColor: 'green',
    width: moderateScale(60),
    borderRadius: moderateScale(60 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  AddNewText: {
    fontSize: FONTS.des,
    fontWeight: '600',
    color: COLORS.black,
  },
  AddImg: {
    height: moderateScale(30),
    width: moderateScale(30),
    tintColor: COLORS.black,
    resizeMode: 'contain',
  },
  promotionImage: {
    height: moderateVerticalScale(160),
    marginHorizontal: moderateScale(20),
    backgroundColor: 'red',
    marginTop: moderateVerticalScale(25),
    borderRadius: moderateScale(20),
    overflow: 'hidden',
  },
  ImgBanner: {
    flex: 1,
    height: null,
    width: null,
  },
});
