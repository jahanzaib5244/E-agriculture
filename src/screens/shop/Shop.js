import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';

import {styles} from './styles';
import Header from '../../component/Header';
import ProductCard from '../../component/ProductCard';
import ImgPath from '../../constants/ImgPath';
import {useSelector} from 'react-redux';
import NavStrings from '../../constants/NavStrings';
import strings from '../../constants/language/LocalizedString';
export default function Shop({navigation}) {
  const AllProcuts = useSelector(state => state.AuthReducer.AllProducts);
  const user = useSelector(state => state.AuthReducer.userData);

  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Header />
      <View style={styles.category}>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() => navigation.navigate(NavStrings.Cart)}>
          <Image source={ImgPath.cart} style={styles.categoryBtnImg} />
          <Text style={styles.CategoryTxt}>{strings.cart}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.categoryBtn}
          onPress={() =>
            navigation.navigate(
              user?.role == 'admin'
                ? NavStrings.SaleHistory
                : NavStrings.PurchaseHistory,
            )
          }>
          <Image source={ImgPath.buy} style={styles.categoryBtnImg} />
          <Text style={styles.CategoryTxt}>
            {user?.role == 'admin'
              ? strings.saleHistory
              : strings.purchaseHistory}
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <View style={styles.shopHeader}>
          <Text style={styles.recomemdedTxt}>{strings.topSelling}</Text>
        </View>
        <ScrollView horizontal>
          {AllProcuts.map((item, index) => {
            if (!(index >= 4)) {
              return (
                <View key={index} style={styles.item}>
                  <ProductCard item={item} index={index} />
                </View>
              );
            }
          })}
        </ScrollView>
      </View>
      <View>
        <View style={styles.shopHeader}>
          <Text style={styles.recomemdedTxt}>{strings.allProducts}</Text>
        </View>
        <View style={styles.container}>
          {AllProcuts.map((item, index) => {
            return (
              <View key={index} style={styles.rowItem}>
                <ProductCard item={item} index={index} />
              </View>
            );
          })}
        </View>
      </View>
    </ScrollView>
  );
}
