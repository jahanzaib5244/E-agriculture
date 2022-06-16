import {StyleSheet} from 'react-native';

import {Colors, font, size} from '../../config/Utils';
import COLORS from '../../style/COLORS';

export const WelcomeStyle = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
  },
  logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  picButtonContaier: {
    flex: 1,
  },
  welcomePic: {
    marginTop: 40,
    height: '40%',
    width: '100%',
    resizeMode: 'contain',
  },
  image: {
    height: '70%',
    width: '70%',
    resizeMode: 'contain',
  },
  logoText: {
    color: Colors.white,
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: '700',
  },
  btnContainer: {
    elevation: 4,
    flex: 2,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 80,
    justifyContent: 'space-between',
  },
  welcomeText: {
    marginTop: 70,
    marginHorizontal: 30,
    fontSize: font.h1,
    fontWeight: '800',
    color: Colors.black,
    textAlign: 'left',
  },
  detailText: {
    marginTop: 10,
    marginHorizontal: 30,
    fontSize: font.h3,
    fontWeight: '700',
    color: Colors.black,
    marginBottom: 5,
    textAlign: 'left',
  },
  loginBtn: {
    width: '30%',
    backgroundColor: COLORS.primary,
    marginHorizontal: 20,
    height: 45,
    borderRadius: 30,

    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
  loginBtnTxt: {
    color: Colors.white,
    fontSize: font.h3,
    fontWeight: '700',
    textAlign: 'left',
  },
  SingupBtnTxt: {
    color: COLORS.primary,
    fontSize: font.h3,
    fontWeight: '700',
    textAlign: 'left',
  },
  rowBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 30,
  },
  bullet: {
    flexDirection: 'row',
    marginTop: 3,
    width: '100%',
    paddingLeft: 35,
    paddingRight: 30,
  },
  BulletImage: {
    height: 6,
    width: 6,
    marginTop: 6,
    marginRight: 8,
  },
  BulletText: {
    fontSize: font.h4,
    fontWeight: 'bold',
    color: Colors.black,
    marginHorizontal: 35,
    lineHeight: 18,
  },
});
