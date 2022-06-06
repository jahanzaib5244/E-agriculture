import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  addBtnContainer: {
    backgroundColor: COLORS.primary,
    marginHorizontal: moderateScale(25),
    height: moderateVerticalScale(80),
    borderRadius: moderateScale(15),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  addTxt: {
    fontSize: FONTS.heading,
    color: COLORS.white,
    fontWeight: '600',
  },
  addIcon: {
    tintColor: COLORS.white,
    height: moderateScale(20),
    width: moderateScale(20),
    marginHorizontal: moderateScale(5),
    resizeMode: 'contain',
  },
  cardImg: {
    margin: moderateScale(10),
    height: moderateScale(90),
    width: moderateScale(90),
    borderRadius: moderateScale(10),
  },
  itemCard: {
    backgroundColor: COLORS.white,
    marginTop: moderateVerticalScale(10),
    marginHorizontal: moderateScale(15),
    borderRadius: moderateScale(10),
    elevation: 8,
  },
  vegname: {
    fontSize: FONTS.heading,
    color: COLORS.black,
    fontWeight: '700',
    textTransform: 'capitalize',
    marginTop: moderateVerticalScale(10),
  },
  detailContainer: {
    marginLeft: moderateScale(10),
    justifyContent: 'space-between',
  },
  cradBtnContainer: {
    // backgroundColor: 'green',
    flexDirection: 'row',

    bottom: 10,
    justifyContent: 'space-between',
  },
  cardBtn: {
    paddingHorizontal: moderateScale(25),
    paddingVertical: moderateScale(10),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(8),
    backgroundColor: COLORS.primary,
    elevation: 7,
  },
  actionImg: {
    height: moderateScale(15),
    width: moderateScale(15),
    marginHorizontal: moderateScale(5),
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
  actionTxt: {
    color: COLORS.white,
  },
  emptyContainer: {
    width: '100%',
    marginTop: moderateVerticalScale(10),
  },
  emptyTxt: {
    color: COLORS.black,
    alignSelf: 'center',
  },
  productDes: {
    fontSize: FONTS.des,
    color: COLORS.lightBlack,
  },
});
