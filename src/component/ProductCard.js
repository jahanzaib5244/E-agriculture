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

const ProductCard = ({item = {}, index = 0}) => {
  const [loading, setloading] = useState(false);

  const AddToCart = async () => {
    try {
      const uid = auth().currentUser.uid;
      setloading(true);
      const alreadyExists = await firestore()
        .collection('cart')
        .doc(`${uid}-${item?.id}`)
        .get();
      if (!alreadyExists.exists) {
        await firestore()
          .collection('cart')
          .doc(`${uid}-${item?.id}`)
          .set(item);
      } else {
        return null;
      }
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
              {Math.floor(Math.random() * 100) + 1} Likes
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
            <View
              style={{
                flexDirection: 'row',
                paddingHorizontal: moderateScale(6),
              }}>
              <View
                style={[
                  styles.productBtn,
                  {
                    marginRight: moderateScale(5),
                    backgroundColor: 'transparent',
                  },
                ]}>
                <Image
                  source={ImgPath.wishlist}
                  style={[styles.addImage, {tintColor: 'black', flex: 1}]}
                />
              </View>
              <TouchableOpacity
                onPress={() => AddToCart()}
                style={styles.productBtn}>
                {loading ? (
                  <ActivityIndicator color={COLORS.white} size={14} />
                ) : (
                  <Image source={ImgPath.Add} style={styles.addImage} />
                )}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  card: {
    height: moderateVerticalScale(210),
    width: moderateScale(170),
    marginBottom: moderateVerticalScale(15),
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  inner: {
    backgroundColor: '#EFF3F6',
    height: moderateVerticalScale(158),
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
    flex: 0.4,
  },
  btnContainer: {
    flex: 1.1,
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
