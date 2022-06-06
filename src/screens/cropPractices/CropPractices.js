import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';

import {styles} from './styles';
import ImgPath from '../../constants/ImgPath';
import NavStrings from '../../constants/NavStrings';

export default function CropPractices({navigation}) {
  const [searchTxt, setsearchTxt] = useState('');

  return (
    <View style={styles.root}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Image source={ImgPath.search} style={styles.searchicon} />
          <TextInput
            onChangeText={v => setsearchTxt(v)}
            style={styles.searchInput}
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Text style={styles.searchBtnTxt}>FIlter</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Array.from(Array(10).keys())}
        numColumns={2}
        contentContainerStyle={{
          flexGrow: 1,
          // marginHorizontal: moderateScale(20),
        }}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate(NavStrings.CropDetail)}>
              <Image source={ImgPath.banner1} style={styles.cardImgae} />
              <Text style={styles.cardTxt}>donate</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
