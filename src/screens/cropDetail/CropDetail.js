import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import ImgPath from '../../constants/ImgPath';
import DetailDropDown from '../../component/DetailDropDown';

export default function CropDetail() {
  return (
    <View style={styles.root}>
      <Image style={styles.backgroundImage} source={ImgPath.banner3} />
      <View style={styles.emptyContainer} />
      <View style={styles.detailContainer}>
        <FlatList
          data={Array.from(Array(10).keys())}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => (
            <View style={styles.flatlistHeader}>
              <Text style={styles.headerTxt}>crop name</Text>
            </View>
          )}
          renderItem={({item, index}) => {
            return <DetailDropDown index={index + 1} />;
          }}
        />
      </View>
    </View>
  );
}
