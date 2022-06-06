import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';

import {Colors, font} from '../config/Utils';
import FONTS from '../style/FONTS';

export default function Passwordinput({
  name = '',
  placeholder = '',
  inputstyle = {},
  onchange,
  blur = () => {},
}) {
  const [show, setshow] = useState(true);
  return (
    <View style={[inputstyle, styles.Input]}>
      <Text style={styles.text}>{name}</Text>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TextInput
          style={styles.textinput}
          secureTextEntry={show}
          placeholder={placeholder}
          onChangeText={e => onchange(e)}
          onBlur={e => blur(e)}
          autoCapitalize="none"
          numberOfLines={1}
          placeholderTextColor="gray"
        />
        <TouchableOpacity onPress={() => setshow(!show)}>
          {show ? (
            <Image
              style={{height: 15, width: 20}}
              source={require('../assets/eyeoff.png')}
            />
          ) : (
            <Image
              style={{height: 15, width: 20}}
              source={require('../assets/eye.png')}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Input: {
    backgroundColor: Colors.white,
    elevation: 10,
    borderRadius: 10,
    padding: 5,
  },
  text: {
    paddingHorizontal: 15,
    color: Colors.black,
    fontSize: FONTS.des,
    fontWeight: '700',
    letterSpacing: 1,
  },
  textinput: {
    color: Colors.black,
    marginHorizontal: 5,
    fontSize: FONTS.des,
    padding: 0,
    flex: 1,
    paddingHorizontal: 10,
  },
});
