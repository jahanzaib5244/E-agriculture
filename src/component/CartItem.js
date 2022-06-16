import {
  StyleSheet,
  Text,
  Image,
  View,
  TouchableOpacity,
  Modal,
  ActivityIndicator,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import ImgPath from '../constants/ImgPath';
import FONTS from '../style/FONTS';
import COLORS from '../style/COLORS';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import moment from 'moment';
import Input from './Input';

const CartItem = ({item = {}, index = 0}) => {
  const [loading, setloading] = useState(false);
  const [quanity, setquanity] = useState(1);
  const [modal, setmodal] = useState(false);
  const [mathad, setmathad] = useState('card');
  const [address, setaddress] = useState('');
  const [paymentNumber, setpaymentNumber] = useState('');
  console.log(modal);
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
      setmodal(false);
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
          address,
          paymentNumber: mathad == 'hand' ? '' : paymentNumber,
        });
      await firestore()
        .collection('sale')
        .add({
          ...item,
          quanity,
          tottalPrice: quanity * item?.dicountPrice,
          purchaseAt: timeStamp,
          paymentNumber: mathad == 'hand' ? '' : paymentNumber,
          address,
        });
      setloading(false);
      ToastAndroid.showWithGravity(
        'Item puchase successfully you will receive it soon',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
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
            <Text style={styles.likesText}>{item?.percentage} Likes</Text>
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
        <View style={styles.QuanityBtn}>
          <TouchableOpacity
            onPress={() => quanityReduce()}
            style={styles.addBtn}>
            <Image source={ImgPath.minus} style={styles.quanityBtnImg} />
          </TouchableOpacity>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.quanityTxt}>{quanity}</Text>
          </View>
          <TouchableOpacity onPress={() => quanityAdd()} style={styles.addBtn}>
            <Image source={ImgPath.Add} style={styles.quanityBtnImg} />
          </TouchableOpacity>
        </View>
        <View style={styles.actionBtn}>
          <TouchableOpacity onPress={() => deleteItem()} style={styles.delBtn}>
            <Text style={styles.btnTxt}>Remove</Text>
            <Image source={ImgPath.delete} style={styles.actionImg} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setmodal(true)}
            style={styles.delBtn}>
            <Text style={styles.btnTxt}>Buy</Text>
            {loading ? (
              <ActivityIndicator size={14} color={COLORS.white} />
            ) : (
              <Image source={ImgPath.buy} style={styles.actionImg} />
            )}
          </TouchableOpacity>
        </View>
      </View>
      <Modal
        style={styles.modalStyle}
        onRequestClose={() => setmodal(false)}
        transparent={true}
        animationType="slide"
        visible={modal}>
        <View style={styles.modelContainer}>
          <View style={styles.modelInnerContainer}>
            <View>
              <Text style={styles.paymentoptionTxt}>Payment Options</Text>
              <View style={styles.ptmentBtnContainer}>
                <TouchableOpacity
                  onPress={() => setmathad('card')}
                  style={[
                    styles.paymentBtn,
                    {
                      backgroundColor:
                        mathad == 'card' ? COLORS.primary : COLORS.white,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.paymentBtnTxt,
                      {color: mathad == 'card' ? COLORS.white : COLORS.primary},
                    ]}>
                    Credit card
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setmathad('jazz')}
                  style={[
                    styles.paymentBtn,
                    {
                      backgroundColor:
                        mathad == 'jazz' ? COLORS.primary : COLORS.white,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.paymentBtnTxt,
                      {color: mathad == 'jazz' ? COLORS.white : COLORS.primary},
                    ]}>
                    Jazz Cash
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setmathad('hand')}
                  style={[
                    styles.paymentBtn,
                    {
                      backgroundColor:
                        mathad == 'hand' ? COLORS.primary : COLORS.white,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.paymentBtnTxt,
                      {color: mathad == 'hand' ? COLORS.white : COLORS.primary},
                    ]}>
                    By Hand
                  </Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={styles.inputHeading}>
                  {mathad == 'card'
                    ? 'Enter Your Credit Card Number'
                    : mathad == 'jazz'
                    ? 'Enter Your Jazz cash Number'
                    : 'Payment will be receive on delivery time'}
                </Text>

                {mathad !== 'hand' && (
                  <Input
                    keyboardType="numeric"
                    name={
                      mathad == 'card'
                        ? 'Card Number'
                        : mathad == 'jazz'
                        ? 'Jazz cash Number'
                        : ''
                    }
                    placeholder={
                      mathad == 'card'
                        ? 'Enter Card Number...'
                        : mathad == 'jazz'
                        ? 'Enter Jazz cash Number...'
                        : ''
                    }
                    inputstyle={styles.inputField}
                    onchange={v => setpaymentNumber(v)}
                  />
                )}
                <Text style={styles.inputHeading}>
                  Please Insert Your delivrery address
                </Text>
                <Input
                  name={'Adress'}
                  placeholder={'Enter Your delivery address'}
                  inputstyle={styles.inputField}
                  onchange={v => setaddress(v)}
                />
              </View>
            </View>
            <View style={styles.actionBtnContainer}>
              <TouchableOpacity
                style={styles.paymentBtn}
                onPress={() => setmodal(false)}>
                <Text style={styles.paymentBtnTxt}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => buy()} style={styles.paymentBtn}>
                <Text style={styles.paymentBtnTxt}>Buy</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  quanityTxt: {
    color: COLORS.black,
    fontSize: FONTS.heading,
    fontWeight: '700',
  },
  inputHeading: {
    color: COLORS.primary,
    marginHorizontal: moderateScale(25),
    fontSize: FONTS.des,
    marginTop: moderateVerticalScale(10),
  },
  actionBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginBottom: moderateVerticalScale(15),
  },
  inputField: {
    marginHorizontal: moderateScale(20),
    marginTop: moderateVerticalScale(15),
  },
  paymentBtn: {
    backgroundColor: COLORS.primary,
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateVerticalScale(10),
    borderRadius: moderateScale(10),
    borderWidth: 1,
    borderColor: COLORS.primary,
  },
  paymentBtnTxt: {
    color: COLORS.white,
    fontSize: FONTS.heading,
    fontWeight: '700',
  },
  ptmentBtnContainer: {
    marginHorizontal: moderateScale(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  paymentoptionTxt: {
    color: COLORS.black,
    fontSize: FONTS.medium,
    alignSelf: 'center',
    fontWeight: '700',
    paddingVertical: moderateVerticalScale(15),
  },
  modalStyle: {
    flex: 1,
  },
  modelContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modelInnerContainer: {
    backgroundColor: COLORS.white,
    height: moderateVerticalScale(400),
    width: '90%',
    borderRadius: moderateScale(15),
    justifyContent: 'space-between',
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
