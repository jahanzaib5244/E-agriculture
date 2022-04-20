import {StyleSheet, Text, Image, View} from 'react-native';
import React from 'react';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import ImgPath from '../constants/ImgPath';
import FONTS from '../style/FONTS';
import COLORS from '../style/COLORS';

const ProductCard = () => {
  return (
    <View style={styles.card}>
      <View style={styles.inner}>
        <View style={styles.ImageContainer}>
          <Image source={ImgPath.p1} style={styles.productImg} />
          <View style={styles.percentageContainer}>
            <Text style={styles.percentText}>33%</Text>
          </View>
          <View style={styles.likeContainer}>
            <Image source={ImgPath.heart} style={styles.heartImg} />
            <Text style={styles.likesText}>79 Likes</Text>
          </View>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.unit}>Criyagen 00-00-50</Text>
        </View>
        <View style={styles.btnContainer}>
          <View style={styles.priceTextContainer}>
            <Text style={styles.actualPrice}>RS 140.00</Text>
            <Text style={styles.discount}>RS 270</Text>
          </View>
          <View style={styles.rightbtnContainer}>
            <Text style={styles.youSaveTxt}>You save RS 130.00</Text>
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
              <View style={styles.productBtn}>
                <Image source={ImgPath.Add} style={styles.addImage} />
              </View>
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
