import {StyleSheet} from 'react-native';
import {moderateVerticalScale, moderateScale} from 'react-native-size-matters';

import FONTS from '../../style/FONTS';
import COLORS from '../../style/COLORS';

export const styles = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  shopHeader: {
    marginTop: moderateVerticalScale(20),
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
  category: {
    paddingHorizontal: moderateScale(25),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: moderateVerticalScale(10),
  },
  categoryBtn: {
    height: moderateScale(60),
    minWidth: moderateScale(120),
    borderRadius: moderateScale(10),
    paddingHorizontal: moderateScale(15),
    backgroundColor: COLORS.primary,
    marginVertical: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: moderateScale(15),
  },
  categoryBtnImg: {
    height: moderateScale(25),
    width: moderateScale(25),
    marginRight: moderateScale(5),
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  CategoryTxt: {
    color: COLORS.white,
    fontSize: FONTS.des,
    fontWeight: '700',
  },
  item: {
    marginHorizontal: moderateScale(10),
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start', // if you want to fill rows left to right
  },
  rowItem: {
    width: '50%', // is 50% of container
    justifyContent: 'center',
    alignItems: 'center',
  },
});
