import {StyleSheet} from 'react-native';
import {Colors, font, size} from '../../config/Utils';
import COLORS from '../../style/COLORS';

export const LoginStyle = StyleSheet.create({
  root: {
    flexGrow: 1,
    backgroundColor: COLORS.primary,
  },
  logo: {
    flex: 1,
    minHeight: size.height30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 2,
    minHeight: size.height70,
    backgroundColor: Colors.white,
    borderTopLeftRadius: 80,
    elevation: 4,
  },
  logoText: {
    color: '#fff',
    fontSize: 18,
    letterSpacing: 1,
    fontWeight: '700',
  },
  image: {
    height: '70%',
    width: '70%',
    resizeMode: 'contain',
  },
  loginText: {
    fontSize: font.h1,
    alignSelf: 'center',
    color: Colors.black,
    fontWeight: '600',
    paddingTop: '10%',
    textAlign: 'left',
  },
  inputfield: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  btn: {
    marginHorizontal: 30,
    marginTop: '10%',
  },
  forget: {
    width: '100%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
    paddingRight: 30,
  },
  forgetBtn: {
    padding: 8,
  },
  forgettext: {
    color: Colors.black,
    elevation: 2,
    textAlign: 'left',
  },
  error: {
    color: Colors.danger,
    paddingHorizontal: 40,
    marginTop: 5,
  },
});
