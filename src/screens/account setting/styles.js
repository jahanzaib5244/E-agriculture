import {StyleSheet} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {Colors, font, size} from '../../config/Utils';
import COLORS from '../../style/COLORS';
import FONTS from '../../style/FONTS';

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  uppercontainer: {
    flex: 0.2,

    alignItems: 'center',
    justifyContent: 'center',
  },
  InputFieldContainer: {
    flex: 0.8,
    elevation: 4,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 80,
  },
  image: {
    backgroundColor: COLORS.white,
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    resizeMode: 'cover',
  },
  imageBtn: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
    elevation: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  btn: {
    marginHorizontal: 30,
    marginVertical: 20,
  },
  error: {
    color: Colors.danger,
    paddingLeft: 30,
    marginTop: 0,
  },
  commandButton: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#FF6347',
    alignItems: 'center',
    marginTop: 10,
  },
  panel: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 0},
    shadowRadius: 5,
    shadowOpacity: 0.4,
    elevation: 3,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 27,
    height: 35,
    color: 'gray',
  },
  panelSubtitle: {
    fontSize: 14,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
  panelButton: {
    padding: 13,
    borderRadius: 10,
    backgroundColor: '#000',
    alignItems: 'center',
    marginVertical: 7,
  },
  panelButtonTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white',
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#FF0000',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  fname: {
    marginHorizontal: 20,
    marginTop: 50,
  },
  inputfields: {
    marginHorizontal: 20,
    marginTop: 10,
  },
  bottomSheet: {
    position: 'absolute',
    width: '100%',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: moderateScale(20),
    borderTopRightRadius: moderateScale(20),
    paddingTop: moderateVerticalScale(20),
  },
  sheetBtn: {
    height: moderateVerticalScale(40),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '90%',
    backgroundColor: 'black',
    marginTop: moderateVerticalScale(5),
    borderRadius: moderateScale(15),
  },
  sheetText: {
    fontSize: FONTS.heading,
    color: COLORS.white,
    textAlign: 'center',
  },
  bottomPic: {
    tintColor: COLORS.white,
    marginHorizontal: moderateScale(10),
    height: moderateScale(20),
    width: moderateScale(20),
  },
  sheetImgWrapper: {
    width: '40%',
    alignItems: 'flex-end',
  },
  bottomTitle: {
    fontSize: FONTS.medium,
    color: COLORS.black,
    marginBottom: moderateVerticalScale(5),
  },
  bottomDes: {
    fontSize: FONTS.heading,
    marginBottom: moderateVerticalScale(4),
    color: COLORS.black,
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});
