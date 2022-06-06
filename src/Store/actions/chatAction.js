import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

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
          });
        }
      });
  } catch (error) {
    console.log(error);
  }
};
