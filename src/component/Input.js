import React from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

import {Colors, font} from '../config/Utils';
import COLORS from '../style/COLORS';
import FONTS from '../style/FONTS';

export default function Input({
  name,
  placeholder,
  inputstyle,
  onchange,
  blur = () => {},
  textinputstyle = {},
  error = false,
  ...otherProps
}) {
  return (
    <View style={[styles.Input, inputstyle]}>
      <Text
        style={[styles.text, {color: error ? COLORS.danger : COLORS.black}]}>
        {name}
      </Text>
      <TextInput
        {...otherProps}
        style={[
          styles.textinput,
          textinputstyle,
          {color: error ? COLORS.danger : COLORS.black},
        ]}
        placeholder={placeholder}
        onChangeText={e => onchange(e)}
        onBlur={e => blur(e)}
        autoCapitalize="none"
        numberOfLines={1}
        placeholderTextColor="gray"
      />
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
    textAlign: 'left',
  },
  textinput: {
    color: Colors.black,
    marginHorizontal: 5,
    fontSize: FONTS.des,
    padding: 0,
    paddingHorizontal: 10,
  },
});
