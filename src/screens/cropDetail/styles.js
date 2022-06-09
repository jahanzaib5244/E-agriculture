import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  emptyContainer: {
    height: moderateVerticalScale(130),
  },
  backgroundImage: {
    position: 'absolute',
    height: moderateVerticalScale(150),
    width: '100%',
    resizeMode: 'cover',
  },
  detailContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderTopRightRadius: moderateScale(30),
    borderTopLeftRadius: moderateScale(30),
  },
  flatlistHeader: {
    marginTop: moderateVerticalScale(20),
    alignItems: 'center',
    marginBottom: moderateVerticalScale(10),
  },
  headerTxt: {
    fontSize: FONTS.heading,
    fontWeight: '700',
    textTransform: 'capitalize',
    color: COLORS.black,
  },
});
