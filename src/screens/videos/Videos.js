import {View, Text, FlatList} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';
import VideoComponent from '../../component/VideoComponent';

export default function Videos() {
  const videosId = [
    '5Uk7HRpvmIo',
    'tdB3YPQOKgg',
    'q-ZVUOM9zhM',
    'u9aw9AmrsBU',
    'l0bpy857deM',
    'N9hiUKBYcKk',
  ];
  return (
    <View style={styles.root}>
      <FlatList
        data={videosId}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return <VideoComponent id={item} />;
        }}
      />
    </View>
  );
}
