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

  const sender = useSelector(state => state.MainReducer.userData);
  const userUid = auth().currentUser.uid;
  const [message, setmessage] = useState([]);

  useEffect(() => {
    // load old messages
    const chatroomid =
      item.uid > userUid ? item.uid + '-' + userUid : userUid + '-' + item.uid;
    const loadData = async () => {
      await firestore().collection('chatrooms').doc(chatroomid).get();
      await db()
        .ref(`chatrooms/${chatroomid}`)
        .once('value', snapshot => {
          if (snapshot.exists()) {
            if (!!snapshot.val().messages) {
              setmessage(renderMessages(snapshot.val().messages));
            } else {
              setmessage([]);
            }
          } else {
            setmessage([]);
          }
        });
    };
    loadData();

    const onValueChange = db()
      .ref(`chatrooms/${chatroomid}`)
      .on('value', snapshot => {
        if (snapshot.exists()) {
          if (snapshot.child('messages').exists()) {
            setmessage(renderMessages(snapshot.val().messages));
          } else {
            setmessage([]);
          }
        } else {
          setmessage([]);
        }
      });
    return () =>
      db().ref(`chatrooms/${chatroomid}`).off('value', onValueChange);
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
              _id: msg.sender === userUid ? userUid : item.uid,
              avatar:
                msg.sender === userUid ? userData.ImagePath : item.ImagePath,
              name: msg.sender === userUid ? userData.fullname : item.fullname,
            },
          }))
        : [];
    },
    [userData.ImagePath, userData.fullname, item.ImagePath, item.fullname],
  );

  const onSend = useCallback(async (msg = []) => {
    // fetch messages from server

    const chatroomid =
      item.uid > userUid ? item.uid + '-' + userUid : userUid + '-' + item.uid;

    await db()
      .ref(`chatrooms/${chatroomid}`)
      .once('value', async snapshot => {
        const lastMessages = snapshot.child('messages').exists()
          ? snapshot.val().messages
          : [];
        const TimeStamp = moment.now();

        const res = await db()
          .ref(`chatrooms/${chatroomid}`)
          .update({
            lastMessages: msg[0].text,
            lastMessageTime: `${TimeStamp}`,
            firstUser: userData.fullname,
            item,
            userData,
            seconduser: item.fullname,
            senderCheckTime: `${TimeStamp}`,
            receiverCheckTIme: `${TimeStamp}`,
            receiverstatus: item.online,
            senderstatus: userData.online,
            messages: [
              ...lastMessages,
              {
                messageTime: `${TimeStamp}`,
                text: msg[0].text,
                sender: userUid,
              },
            ],
          });
      });
  }, []);

  return (
    <ImageBackground source={ImagePath.background} style={styles.root}>
      <ChatScreenHeader name={item?.fullname} image={item?.ImagePath} />
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
          _id: userUid,
        }}
      />
    </ImageBackground>
  );
}
