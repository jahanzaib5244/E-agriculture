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
    height: moderateVerticalScale(35),
    marginTop: moderateScale(15),

    marginHorizontal: moderateScale(20),
    flexDirection: 'row',
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
  card: {
    height: moderateVerticalScale(140),
    flex: 1,
    marginHorizontal: moderateScale(10),
    marginVertical: moderateScale(8),
  },
  cardImgae: {
    height: moderateScale(110),
    borderRadius: moderateScale(20),
    resizeMode: 'cover',
    width: '100%',
  },
  cardTxt: {
    color: COLORS.black,
    fontSize: FONTS.des,
    paddingHorizontal: moderateScale(10),
    marginTop: moderateScale(3),
    fontSize: FONTS.des,
    textTransform: 'capitalize',
  },
});
