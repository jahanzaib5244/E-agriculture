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
import {useSelector} from 'react-redux';

export default function CropPractices({navigation}) {
  const [searchTxt, setsearchTxt] = useState('');
  const Crops = useSelector(state => state.AuthReducer.AllCrops);
  const [filtered, setfiltered] = useState(Crops);

  const filter = () => {
    const filtredItems = Crops.filter(item => {
      const text = searchTxt.toUpperCase();
      const name = (item?.name).toUpperCase();
      return name.indexOf(text) > -1;
    });
    setfiltered(filtredItems);
  };

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
        <TouchableOpacity style={styles.searchBtn} onPress={() => filter()}>
          <Text style={styles.searchBtnTxt}>FIlter</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filtered}
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
              onPress={() =>
                navigation.navigate(NavStrings.CropDetail, {crop: item})
              }>
              <Image source={{uri: item?.image}} style={styles.cardImgae} />
              <Text style={styles.cardTxt}>{item?.name}</Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}
