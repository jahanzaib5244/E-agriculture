import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  searchContainer: {
    height: moderateVerticalScale(70),
    marginTop: moderateScale(15),
    width: '100%',

    marginHorizontal: moderateScale(20),
    flexDirection: 'row',
    marginBottom: moderateVerticalScale(10),
  },
  searchInput: {
    flex: 1,
    fontSize: FONTS.des,
    padding: 0,
    color: COLORS.black,
  },
  searchicon: {
    height: moderateScale(15),
    width: moderateScale(15),
    resizeMode: 'contain',
    paddingRight: moderateScale(15),
    paddingLeft: moderateScale(20),
  },
  searchInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: moderateScale(1),
    borderRadius: moderateScale(15),
    flex: 1,
    marginTop: moderateVerticalScale(5),
  },
  searchBtn: {
    backgroundColor: COLORS.success,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: moderateScale(10),
    borderRadius: moderateScale(15),
  },
  searchBtnTxt: {
    color: COLORS.white,
    paddingHorizontal: moderateScale(15),
    fontSize: FONTS.des,
  },
  priceCard: {
    marginHorizontal: moderateScale(25),
    height: moderateVerticalScale(100),
    // backgroundColor: 'red',
    marginTop: moderateVerticalScale(15),
    borderRadius: moderateScale(15),
    flexDirection: 'row',
    borderWidth: 1,
  },
  txtContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingLeft: moderateScale(12),
    // backgroundColor: 'green',
  },
  priceTxt: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: 'blue',
  },
  marketName: {
    color: COLORS.black,
    fontSize: FONTS.des,
    fontWeight: '700',
    marginTop: moderateVerticalScale(8),
  },
  vegName: {
    color: COLORS.lightBlack,
    fontSize: FONTS.des,
    marginTop: moderateScale(4),
  },
  date: {
    color: COLORS.lightBlack,
    fontSize: FONTS.des,
    marginBottom: moderateVerticalScale(8),
  },
  price: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: FONTS.heading,
    paddingRight: moderateScale(10),
  },
});
