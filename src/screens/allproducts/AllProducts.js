import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import {styles} from './styles';
import {useSelector} from 'react-redux';
import ImgPath from '../../constants/ImgPath';
import {moderateScale} from 'react-native-size-matters';
import NavStrings from '../../constants/NavStrings';
import firestore from '@react-native-firebase/firestore';
import COLORS from '../../style/COLORS';

export default function AllProducts({navigation}) {
  const products = useSelector(state => state.AuthReducer.AllProducts);
  const [deleting, setdeleting] = useState(false);

  const deleteCrop = async item => {
    try {
      setdeleting(true);
      const res = await firestore()
        .collection('products')
        .doc(item?.id)
        .delete();
      console.log(res);
      setdeleting(false);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.root}>
      <TouchableOpacity
        onPress={() => navigation.navigate(NavStrings.AddProduct)}
        activeOpacity={0.8}
        style={styles.addBtnContainer}>
        <Image source={ImgPath.Add} style={styles.addIcon} />
        <Text style={styles.addTxt}>Add new Crop</Text>
      </TouchableOpacity>
      <FlatList
        data={products}
        ListEmptyComponent={() => (
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTxt}>No Crop Available</Text>
          </View>
        )}
        contentContainerStyle={{flexGrow: 1}}
        keyExtractor={(itwm, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <View style={styles.itemCard}>
              <View
                style={{
                  flexDirection: 'row',
                }}>
                <Image source={{uri: item?.image}} style={styles.cardImg} />
                <View style={styles.detailContainer}>
                  <View>
                    <Text style={styles.vegname}>{item?.name}</Text>
                    <Text style={styles.productDes}>{item?.dicountPrice}</Text>
                  </View>
                  <View style={styles.cradBtnContainer}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate(NavStrings.AddProduct, {item})
                      }
                      style={styles.cardBtn}>
                      <Image source={ImgPath.edit} style={styles.actionImg} />
                      <Text style={styles.actionTxt}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => deleteCrop(item)}
                      style={[styles.cardBtn, {marginLeft: moderateScale(6)}]}>
                      {deleting ? (
                        <ActivityIndicator size={15} color={COLORS.white} />
                      ) : (
                        <Image
                          source={ImgPath.delete}
                          style={styles.actionImg}
                        />
                      )}
                      <Text style={styles.actionTxt}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}
