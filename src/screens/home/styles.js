import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale} from 'react-native-size-matters';

import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  AddNewContainer: {
    height: moderateVerticalScale(100),
    justifyContent: 'center',
  },
  coursol: {
    height: moderateVerticalScale(180),
  },
  btnContainer: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(20),
  },
  addBtn: {
    height: moderateScale(60),
    backgroundColor: 'green',
    width: moderateScale(60),
    borderRadius: moderateScale(60 / 2),
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtnContainer: {
    alignItems: 'center',
    width: moderateScale(60),
    marginHorizontal: moderateScale(10),
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
  coursolImg: {
    flex: 1,
    height: null,
    width: null,
  },
  shopHeader: {
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
  footerImage: {
    height: moderateVerticalScale(130),
    width: '100%',
    marginTop: moderateVerticalScale(10),
    marginBottom: moderateVerticalScale(30),
  },
});
