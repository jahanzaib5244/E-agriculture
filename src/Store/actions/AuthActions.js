import AsyncStorage from '@react-native-async-storage/async-storage';
import {LOGOUT, USERDATA} from '../States';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import moment from 'moment';

export const dologin =
  (email, password, setisinvalid, setloading) => async dispatch => {
    setloading(true);
    setisinvalid('');

    try {
      await auth().signInWithEmailAndPassword(email, password);
      setloading(false);
    } catch (error) {
      setloading(false);
      setisinvalid(`${error.message}`);
      console.error(error);
    } finally {
      setloading(false);
    }
  };
export const UpdateProfileApi =
  (
    setinvalid,
    setalertShow,
    setloading,
    firstName,
    lastName,
    Phone,
    Address,
    uploadImage,
    userImage,
  ) =>
  async dispatch => {
    try {
      setloading(true);
      setinvalid('');
      let ImageUrl = '';
      const uid = auth().currentUser.uid;
      if (uploadImage) {
        const reference = storage().ref(`/userProfiles/${uid}.png`);
        await reference.putFile(userImage);
        ImageUrl = await reference.getDownloadURL();
      }
      let res = await firestore()
        .collection('Users')
        .doc(uid)
        .update({
          FirstName: firstName,
          LastName: lastName,
          Phone: Phone,
          Address: Address,
          ProfilePic: uploadImage ? ImageUrl : userImage,
        });
      setalertShow(true);
    } catch (error) {
      console.log(error);
      setinvalid(error.meaasge);
    } finally {
      setloading(false);
    }
  };

export const dologout = () => async dispatch => {
  try {
    const logout = await auth().signOut();
    console.log(logout);
    dispatch({
      type: LOGOUT,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getUserData = setloading => async dispatch => {
  try {
    const uid = auth().currentUser.uid;
    firestore()
      .collection('Users')
      .doc(uid)
      .onSnapshot(snapshot => {
        if (snapshot.exists) {
          console.log(snapshot.data());
          dispatch({
            type: USERDATA,
            payload: {data: snapshot.data(), role: snapshot.data().role},
          });
        }
      });
  } catch (error) {
  } finally {
    setloading(false);
  }
};

export const ForgetPasswordApi =
  (email, setisinvalid, setloading, setalertMsg, setshow) => async dispatch => {
    try {
      setisinvalid(null);
      console.log('api call');
      setloading(true);
      const res = await auth().sendPasswordResetEmail(email);
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

export const RegisterApi =
  (
    setinvalid,
    setloading,
    ConfirmPassword,
    Email,
    firstName,
    lastName,
    userName,
  ) =>
  async dispatch => {
    try {
      setinvalid('');
      setloading(true);
      const res = await auth().createUserWithEmailAndPassword(
        Email,
        ConfirmPassword,
      );
      console.log(res.user.uid);
      const add = await firestore().collection('Users').doc(res.user.uid).set({
        FirstName: firstName,
        LastName: lastName,
        Email: Email,
        UserName: userName,
        role: 'user',
        ProfilePic:
          'https://firebasestorage.googleapis.com/v0/b/e-agriculture-ca3f3.appspot.com/o/userProfiles%2Fdefault.png?alt=media&token=c1abb2b4-436e-4c19-94f4-6c741e3f73ef',
        uid: res.user.uid,
        createdAt: firestore.FieldValue.serverTimestamp(),
      });
      console.log(add);
      const adminUid = 'DGUpLyUSaKeYmu8x7gXDqprcbLr2';
      let time = moment.now();
      res.user.uid;
      const chatroomid =
        adminUid > res.user.uid
          ? adminUid + '-' + res.user.uid
          : res.user.uid + '-' + adminUid;
      await firestore()
        .collection('chatrooms')
        .doc(chatroomid)
        .set({
          lastMessageTime: time,
          lastMessages: `Welcome to E-Agricultur ${'\n'} if you have any question feel free to contact us respone will be under 3 to 4 hours`,
          firstuid: adminUid,
          seconduid: res.user.uid,
          messages: [
            {
              messageTime: time,
              text: `Welcome to E-Agricultur ${'\n'} if you have any question feel free to contact us respone will be under 3 to 4 hours`,
              sender: adminUid,
            },
          ],
        });
    } catch (error) {
      console.log(error, 'register');
      setinvalid(error.message);
    } finally {
      setloading(false);
    }
  };

export const updatePasswordFirebase =
  (setloading, setinvalid, oldPassword, newPassword) => async dispatch => {
    try {
      setloading(true);
      setinvalid('');
      var user = auth().currentUser;
      const credential = auth.EmailAuthProvider.credential(
        user.email,
        oldPassword,
      );
      await auth().currentUser.reauthenticateWithCredential(credential);
      const updated = await user.updatePassword(newPassword);
      console.log(updated);
    } catch (error) {
      console.log(error);
      setinvalid(error.message);
    } finally {
      setloading(false);
    }
  };
