import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import ImgPath from '../constants/ImgPath';
import FONTS from '../style/FONTS';
import COLORS from '../style/COLORS';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import moment from 'moment';

const HistoryItem = ({item = {}, index = 0}) => {
  console.log(item);
  const [loading, setloading] = useState(false);
  const [quanity, setquanity] = useState(1);

  const quanityAdd = () => {
    setquanity(quanity + 1);
  };
  const quanityReduce = () => {
    if (quanity <= 1) {
      return null;
    } else {
      setquanity(quanity - 1);
    }
  };

  const deleteItem = async () => {
    try {
      await firestore().collection('cart').doc(item?.id).delete();
    } catch (error) {
      console.log(error);
    }
  };

  const buy = async () => {
    try {
      setloading(true);
      const uid = auth().currentUser.uid;
      setloading(true);
      const random = Math.random()
        .toString(36)
        .substring(2, 8 + 2);
      const timeStamp = moment.now();
      await firestore()
        .collection('purchase')
        .doc(`${uid}-${random}`)
        .set({
          ...item,
          quanity,
          tottalPrice: quanity * item?.dicountPrice,
          purchaseAt: timeStamp,
          id: `${uid}-${random}`,
        });
      await firestore()
        .collection('sale')
        .add({
          ...item,
          quanity,
          tottalPrice: quanity * item?.dicountPrice,
          purchaseAt: timeStamp,
        });
      setloading(false);
      deleteItem();
    } catch (error) {
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <View style={styles.ImageContainer}>
          <Image source={{uri: item?.image}} style={styles.productImg} />
          <View style={styles.percentageContainer}>
            <Text style={styles.percentText}>
              {100 - Math.floor(item?.percentage)}%
            </Text>
          </View>
          <View style={styles.likeContainer}>
            <Image source={ImgPath.heart} style={styles.heartImg} />
            <Text style={styles.likesText}>
              {Math.floor(item?.percentage)} Likes
            </Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.unit}>{item?.name}</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.priceTextContainer}>
            <Text style={styles.actualPrice}>RS {item?.dicountPrice}.00</Text>
            <Text style={styles.discount}>RS {item?.price}</Text>
          </View>
          <View style={styles.rightbtnContainer}>
            <Text style={styles.youSaveTxt}>
              You save RS {item?.savePrice}.00
            </Text>
          </View>
        </View>
        <View style={{marginBottom: moderateVerticalScale(10)}}>
          <Text style={styles.actualPrice}>Quanity: {item?.quanity}</Text>
          <Text style={styles.actualPrice}>Total: {item?.tottalPrice}</Text>
          <Text style={styles.actualPrice}>
            Date: {moment(item?.purchaseAt).format('DD-MM-YYYY')}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default HistoryItem;

const styles = StyleSheet.create({
  quanityTxt: {
    color: COLORS.black,
    fontSize: FONTS.heading,
    fontWeight: '700',
  },
  addBtn: {
    backgroundColor: COLORS.primary,
    height: moderateScale(25),
    width: moderateScale(25),
    borderRadius: moderateScale(12.5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  QuanityBtn: {
    flexDirection: 'row',
    marginBottom: moderateVerticalScale(10),
    justifyContent: 'space-between',
    width: '60%',
    alignSelf: 'center',
  },
  quanityBtnImg: {
    height: moderateScale(15),
    width: moderateScale(15),
    tintColor: COLORS.white,
    resizeMode: 'contain',
  },
  actionBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  delBtn: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: moderateScale(5),
    flexDirection: 'row',
    backgroundColor: COLORS.primary,
    marginHorizontal: moderateScale(8),
    marginBottom: moderateVerticalScale(10),
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnTxt: {
    color: COLORS.white,
    fontSize: FONTS.des,
  },
  actionImg: {
    height: moderateScale(15),
    width: moderateScale(15),
    resizeMode: 'contain',
    marginHorizontal: moderateScale(3),
    tintColor: COLORS.white,
  },
  card: {
    height: moderateVerticalScale(240),
    width: moderateScale(170),
    marginBottom: moderateVerticalScale(15),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  inner: {
    backgroundColor: '#EFF3F6',
    height: moderateVerticalScale(188),
    width: moderateScale(160),
    borderRadius: moderateScale(20),
  },
  ImageContainer: {
    flex: 1.4,
  },
  rightbtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceContainer: {
    flex: 0.5,
  },
  btnContainer: {
    flex: 0.7,
  },
  productImg: {
    height: moderateScale(130),
    width: moderateScale(70),
    position: 'absolute',
    resizeMode: 'contain',
    left: 30,
    top: -60,
  },
  heartImg: {
    height: moderateScale(20),
    width: moderateScale(20),
    tintColor: 'grey',
  },
  likeContainer: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: moderateScale(8),
    paddingTop: moderateVerticalScale(5),
  },
  likesText: {
    fontSize: 10,
    color: 'grey',
  },
  unit: {
    fontSize: 10,
    paddingLeft: moderateScale(20),
    color: 'grey',
  },
  priceTextContainer: {
    flexDirection: 'row',
  },
  actualPrice: {
    fontSize: FONTS.des,
    color: COLORS.black,
    fontWeight: '700',
    paddingLeft: moderateScale(10),
  },
  discount: {
    fontSize: FONTS.des,
    color: 'grey',
    fontWeight: '700',
    paddingLeft: moderateScale(10),
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  youSaveTxt: {
    color: 'red',
    fontSize: 10,
    paddingLeft: moderateScale(10),
  },
  addImage: {
    height: moderateScale(14),
    width: moderateScale(14),
    tintColor: COLORS.white,
  },
  productBtn: {
    height: moderateScale(20),
    width: moderateScale(20),
    backgroundColor: 'green',
    borderRadius: moderateScale(5),
    alignItems: 'center',
    justifyContent: 'center',
  },
  percentageContainer: {
    position: 'absolute',
    height: moderateScale(30),
    width: moderateScale(30),
    backgroundColor: 'red',
    borderRadius: moderateScale(30 / 2),
    alignItems: 'center',
    justifyContent: 'center',
    left: -10,
    top: -10,
  },
  percentText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: '700',
  },
});
