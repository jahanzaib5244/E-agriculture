import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  input: {
    marginHorizontal: moderateScale(25),
    marginTop: moderateVerticalScale(15),
  },
  btn: {
    marginHorizontal: moderateScale(25),
    marginTop: moderateVerticalScale(20),
  },
  modalstyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerModel: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contentContainer: {
    height: '80%',
    width: '90%',
    backgroundColor: COLORS.white,
    justifyContent: 'space-between',
    borderRadius: moderateScale(20),
  },
  closeBtn: {
    height: moderateScale(40),
    width: moderateScale(100),
    backgroundColor: COLORS.primary,
    borderRadius: moderateScale(10),
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: moderateVerticalScale(20),
  },
  closeTxt: {
    color: COLORS.white,
    fontSize: FONTS.heading,
    fontWeight: '700',
  },
  modelHeading: {
    color: COLORS.primary,
    fontSize: FONTS.heading,
    fontWeight: '800',
    alignSelf: 'center',
    marginTop: moderateVerticalScale(20),
  },
  infoTextContainer: {
    flexWrap: 'wrap',
    marginHorizontal: moderateScale(10),
    marginTop: moderateVerticalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  info: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: FONTS.des,
  },
  des: {
    color: COLORS.black,
    fontSize: FONTS.heading,
    letterSpacing: 1,
    marginTop: moderateScale(10),
  },
});
