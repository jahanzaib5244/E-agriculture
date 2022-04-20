import {View, Text} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {GiftedChat as GiftedChatLibrary} from 'react-native-gifted-chat';

export default function GiftedChat() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: `Welcome To AgriApp🙏  \nLet us know how can we help today? \nLets us know if you have any issues related to your farm or crop. You can share here with writings, Images of the crop as per your convenience. AgriApp Agri expert happy to help you. \nTeam AgriApp`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChatLibrary.append(previousMessages, messages),
    );
  }, []);

  return (
    <GiftedChatLibrary
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
}
