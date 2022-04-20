import {ScrollView, Text, View, Image} from 'react-native';
import React from 'react';

import {styles} from './styles';
import LandCArd from '../../component/LandCard';
import ImgPath from '../../constants/ImgPath';
import Header from '../../component/Header';

export default function Furtilizer() {
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Header />
      <View style={styles.AddNewContainer}>
        <View style={styles.addBtnContainer}>
          <View style={styles.addBtn}>
            <Image source={ImgPath.Add} style={styles.AddImg} />
          </View>
          <Text style={styles.AddNewText}>Add New</Text>
        </View>
      </View>
      <View style={styles.promotionImage}>
        <Image source={ImgPath.banner5} style={styles.ImgBanner} />
      </View>
    </ScrollView>
  );
}
