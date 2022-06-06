import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import storage from '@react-native-firebase/storage';
import moment from 'moment';
import {ALLCROPS, ALLPRICE, ALLPRODUCTS} from '../States';

export const addProductFirestore =
  (
    setloading,
    imgPath,
    saved,
    percentage,
    discount,
    price,
    productName,
    item,
    uploadImg,
  ) =>
  async dispatch => {
    try {
      setloading(true);
      const uid = auth().currentUser.uid;
      let timestamp = moment.now();
      const ref = Math.random()
        .toString(36)
        .substring(2, 10 + 2);
      let imageurl = '';
      if (uploadImg) {
        const reference = storage().ref(
          `/product/${item ? item.imageRef : ref}.png`,
        );
        await reference.putFile(imgPath);
        imageurl = await reference.getDownloadURL();
      }
      if (item) {
        await firestore()
          .collection('products')
          .doc(item?.id)
          .update({
            image: uploadImg ? imageurl : imgPath,
            name: productName,
            price: price,
            dicountPrice: discount,
            percentage: percentage,
            savePrice: saved,
          });
      } else {
        await firestore().collection('products').add({
          image: imageurl,
          name: productName,
          price: price,
          dicountPrice: discount,
          percentage: percentage,
          uid,
          savePrice: saved,
          imageRef: ref,
          timestamp,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
export const addCropFirestore =
  (setloading, imgPath, productname, inputsFiels, uploadImage, item) =>
  async dispatch => {
    try {
      setloading(true);
      let ImageUrl = '';
      const uid = auth().currentUser.uid;
      let timestamp = moment.now();
      const ref = Math.random()
        .toString(36)
        .substring(2, 15 + 2);
      if (uploadImage) {
        const reference = storage().ref(
          `/crops/${item ? item.imageRef : ref}.png`,
        );
        await reference.putFile(imgPath);
        ImageUrl = await reference.getDownloadURL();
      }
      if (item) {
        await firestore()
          .collection('crops')
          .doc(item?.id)
          .update({
            image: uploadImage ? ImageUrl : imgPath,
            name: productname,
            description: inputsFiels,
          });
      } else {
        await firestore().collection('crops').add({
          image: ImageUrl,
          name: productname,
          uid,
          imageRef: ref,
          description: inputsFiels,
          timestamp,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };
export const addPriceFirestore =
  (setloading, name, location, price, item) => async dispatch => {
    try {
      setloading(true);
      let timestamp = moment.now();
      const uid = auth().currentUser.uid;
      if (item) {
        await firestore().collection('price').doc(item?.id).update({
          name,
          location,
          price,
          timestamp,
        });
      } else {
        await firestore().collection('price').add({
          name,
          uid,
          location,
          price,
          timestamp,
        });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

export const getAllProducts = () => async dispatch => {
  try {
    firestore()
      .collection('products')
      .onSnapshot(snapshot => {
        if (!snapshot.empty) {
          const Products = [];
          snapshot.docs.forEach(item => {
            Products.push({...item.data(), id: item.id});
          });
          dispatch({
            type: ALLPRODUCTS,
            payload: Products,
          });
        }
      });
  } catch (error) {
    console.log(error);
  }
};
export const getAllCrops = () => async dispatch => {
  try {
    firestore()
      .collection('crops')
      .onSnapshot(snapshot => {
        if (!snapshot.empty) {
          const crops = [];
          snapshot.docs.forEach(item => {
            crops.push({...item.data(), id: item.id});
          });
          console.log(crops, 'crops');
          dispatch({
            type: ALLCROPS,
            payload: crops,
          });
        }
      });
  } catch (error) {
    console.log(error);
  }
};
export const getAllPrices = () => async dispatch => {
  try {
    firestore()
      .collection('price')
      .onSnapshot(snapshot => {
        if (!snapshot.empty) {
          const prices = [];
          snapshot.docs.forEach(item => {
            prices.push({...item.data(), id: item.id});
          });
          dispatch({
            type: ALLPRICE,
            payload: prices,
          });
        }
      });
  } catch (error) {
    console.log(error);
  }
};
