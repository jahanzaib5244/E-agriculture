import {View, Image, ImageBackground} from 'react-native';
import React, {useState, useEffect, useCallback} from 'react';
import {GiftedChat, Send} from 'react-native-gifted-chat';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {useSelector} from 'react-redux';
import {styles} from './styles';

import ImagePath from '../../constants/ImgPath';
import ChatScreenHeader from '../../component/ChatScreenHeader';
import moment from 'moment';

export default function Giftedha({route}) {
  const {item} = route.params;

  const sender = useSelector(state => state.AuthReducer.userData);
  const senderuid = auth().currentUser.uid;
  const [message, setmessage] = useState([]);
  const chatroomid =
    item.uid > senderuid
      ? item.uid + '-' + senderuid
      : senderuid + '-' + item.uid;

  useEffect(() => {
    // load old messages
    const chatroom = firestore()
      .collection('chatrooms')
      .doc(chatroomid)
      .onSnapshot(snapshot => {
        if (snapshot.exists) {
          setmessage(renderMessages(snapshot.data()?.messages));
        }
      });

    return () => chatroom();
  }, []);

  const renderMessages = useCallback(
    msgs => {
      //structure for chat library:

      return msgs
        ? msgs.reverse().map((msg, index) => ({
            ...msg,
            _id: index,
            createdAt: msg.messageTime,
            user: {
              _id: msg.sender === senderuid ? senderuid : item.uid,
              avatar:
                msg.sender === senderuid ? sender.ProfilePic : item.ProfilePic,
              name:
                msg.sender === senderuid ? sender.FirstName : item.FirstName,
            },
          }))
        : [];
    },
    [sender.ProfilePic, sender.fullname, item.ProfilePic, item.fullname],
  );

  const onSend = useCallback(async (msg = []) => {
    const TimeStamp = moment.now();
    await firestore()
      .collection('chatrooms')
      .doc(chatroomid)
      .update({
        lastMessages: msg[0].text,
        lastMessageTime: `${TimeStamp}`,
        firstuid: sender.uid,
        seconduid: item.uid,
        messages: firestore.FieldValue.arrayUnion({
          messageTime: `${TimeStamp}`,
          text: msg[0].text,
          sender: senderuid,
        }),
      });
  }, []);

  return (
    <View style={styles.root}>
      <ChatScreenHeader
        name={`${item?.FirstName} ${item?.LastName}`}
        image={item?.ProfilePic}
      />
      <GiftedChat
        textInputStyle={styles.textInput}
        showAvatarForEveryMessage={true}
        renderAvatar={null}
        alwaysShowSend={true}
        renderSend={props => {
          return (
            <Send {...props} containerStyle={styles.btnContainer}>
              <Image source={ImagePath.send} style={styles.btnImage} />
            </Send>
          );
        }}
        messages={message}
        onSend={text => onSend(text)}
        user={{
          _id: senderuid,
        }}
      />
    </View>
  );
}
