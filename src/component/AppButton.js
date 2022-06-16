import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';
import {moderateVerticalScale} from 'react-native-size-matters';

import {Colors, font, size} from '../config/Utils';
import COLORS from '../style/COLORS';
import FONTS from '../style/FONTS';

export default function AppButton({
  name = '',
  onPress = () => {},
  BTstyle = {},
  loading = false,
}) {
  return (
    <TouchableOpacity
      disabled={loading}
      onPress={onPress}
      style={[BTstyle, styles.btn]}>
      {loading ? (
        <ActivityIndicator size={'small'} color={COLORS.white} />
      ) : (
        <Text style={styles.btntxt}>{name}</Text>
      )}
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    backgroundColor: COLORS.primary,
    height: 45,
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntxt: {
    color: Colors.white,
    fontSize: FONTS.heading,
    fontWeight: '700',
    textAlign: 'left',
  },
});
