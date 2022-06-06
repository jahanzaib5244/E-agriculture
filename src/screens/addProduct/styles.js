import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  imageContainer: {
    height: moderateVerticalScale(150),
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
    marginTop: moderateScale(10),
  },
  emptyImageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  imageWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  addImage: {
    height: moderateVerticalScale(30),
    width: moderateScale(30),
    tintColor: COLORS.lightBlack,
  },
  uploadImgaetxt: {
    fontSize: FONTS.heading,
    fontWeight: '700',
    color: COLORS.lightBlack,
    paddingLeft: moderateScale(5),
  },
  productimage: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(10),
  },
  detailTxt: {
    marginTop: moderateVerticalScale(10),
    color: COLORS.black,
    fontSize: FONTS.des,
    paddingHorizontal: moderateScale(25),
  },
  addBtn: {
    marginVertical: moderateVerticalScale(30),
    marginHorizontal: moderateScale(25),
  },
});
