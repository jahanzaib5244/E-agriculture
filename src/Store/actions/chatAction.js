import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import {CHATROOMS} from '../States';

export const getAllChatrooms = () => async dispatch => {
  try {
    const uid = auth().currentUser.uid;
    firestore()
      .collection('chatrooms')
      .onSnapshot(snapshot => {
        if (!snapshot.empty) {
          let chatrooms = [];
          snapshot.docs.forEach(item => {
            const uids = item.id.split('-');
            const exist = uids.includes(uid);
            if (exist) {
              chatrooms.push(item.data());
            }
          });
          dispatch({
            type: CHATROOMS,
            payload: chatrooms,
          });
        }
      });
  } catch (error) {
    console.log(error);
  }
};
