import { View, Text } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

import { SearchStyle } from './SearchStyle';

export default function Search() {
  return (
    <View style={SearchStyle.root}>
    <WebView source={{ uri: 'https://www.google.com/' }} />
    </View>
  );
}
