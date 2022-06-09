import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';

import {styles} from './styles';
import Header from '../../component/Header';
import ImgPath from '../../constants/ImgPath';
import NavStrings from '../../constants/NavStrings';
import {useSelector} from 'react-redux';
import ChatCard from '../../component/ChatCard';

export default function Chat({navigation}) {
  const ChatsRooms = useSelector(state => state.AuthReducer.chatRooms);
  console.log({ChatsRooms});

  return (
    <View style={styles.root}>
      <Header />
      <FlatList
        data={ChatsRooms}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return <ChatCard item={item} index={index} />;
        }}
      />
    </View>
  );
}
