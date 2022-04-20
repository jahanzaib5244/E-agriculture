import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React from 'react';

import {styles} from './styles';
import Header from '../../component/Header';
import ProductCard from '../../component/ProductCard';
import ImgPath from '../../constants/ImgPath';

export default function Shop() {
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Header />
      <View style={styles.category}>
        <Text style={styles.recomemdedTxt}>Categories</Text>
        <ScrollView horizontal>
          <View style={styles.categoryBtn}>
            <Image source={ImgPath.group} style={styles.categoryBtnImg} />
            <Text style={styles.CategoryTxt}>All</Text>
          </View>
          <View style={styles.categoryBtn}>
            <Image source={ImgPath.group} style={styles.categoryBtnImg} />
            <Text style={styles.CategoryTxt}>Other</Text>
          </View>
          <View style={styles.categoryBtn}>
            <Image source={ImgPath.group} style={styles.categoryBtnImg} />
            <Text style={styles.CategoryTxt}>Crop Tonics</Text>
          </View>
          <View style={styles.categoryBtn}>
            <Image source={ImgPath.group} style={styles.categoryBtnImg} />
            <Text style={styles.CategoryTxt}>Fertilizer</Text>
          </View>
          <View style={styles.categoryBtn}>
            <Image source={ImgPath.group} style={styles.categoryBtnImg} />
            <Text style={styles.CategoryTxt}>Pesticide</Text>
          </View>
          <View style={styles.categoryBtn}>
            <Image source={ImgPath.group} style={styles.categoryBtnImg} />
            <Text style={styles.CategoryTxt}>Traps</Text>
          </View>
        </ScrollView>
      </View>
      <View>
        <View style={styles.shopHeader}>
          <Text style={styles.recomemdedTxt}>Top Selling Products</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <ProductCard />
          <ProductCard />
        </View>
      </View>
      <View>
        <View style={styles.shopHeader}>
          <Text style={styles.recomemdedTxt}>Recommended Products</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllTxt}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <ProductCard />
          <ProductCard />
        </View>
      </View>
    </ScrollView>
  );
}
