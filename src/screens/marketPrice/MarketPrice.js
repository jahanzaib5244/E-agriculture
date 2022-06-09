import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useSelector} from 'react-redux';

import ImgPath from '../../constants/ImgPath';
import {styles} from './styles';
import COLORS from '../../style/COLORS';

export default function MarketPrice() {
  const [searchLocation, setsearchLocation] = useState('');
  const prices = useSelector(state => state.AuthReducer.AllPrices);
  const [filter, setfilter] = useState(prices);
  const [searchName, setsearchName] = useState('');

  const search = () => {
    const search = prices.filter(item => {
      let location = searchLocation.toUpperCase();
      let VegName = searchName.toUpperCase();
      let capitalLocation = (item?.location).toUpperCase();
      let capitalName = item.name.toUpperCase();
      console.log(
        capitalLocation.indexOf(location) > -1 &&
          capitalName.indexOf(VegName) > -1,
      );
      return (
        capitalLocation.includes(location) && capitalName.includes(VegName)
      );
    });
    setfilter(search);
  };

  return (
    <View style={styles.root}>
      <View style={styles.searchContainer}>
        <View style={{flex: 0.9}}>
          <View style={styles.searchInputContainer}>
            <Image source={ImgPath.search} style={styles.searchicon} />
            <View style={{flex: 1}}>
              <TextInput
                onChangeText={v => setsearchLocation(v)}
                style={styles.searchInput}
                value={searchLocation}
                placeholder="Location..."
                placeholderTextColor={COLORS.lightBlack}
              />
            </View>
          </View>
          <View style={styles.searchInputContainer}>
            <Image source={ImgPath.search} style={styles.searchicon} />
            <View style={{flex: 1}}>
              <TextInput
                onChangeText={v => setsearchName(v)}
                style={styles.searchInput}
                value={searchName}
                placeholder="Name..."
                placeholderTextColor={COLORS.lightBlack}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => search()} style={styles.searchBtn}>
          <Text style={styles.searchBtnTxt}>FIlter</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={filter}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.priceCard}>
            <View style={styles.txtContainer}>
              <View>
                <Text style={styles.marketName}>{item?.location}</Text>
                <Text style={styles.vegName}>{item?.name}</Text>
              </View>
              <Text style={styles.date}>
                {moment(item?.timestamp).format('DD-MM-YYYY')}
              </Text>
            </View>
            <View style={styles.priceTxt}>
              <Text style={styles.price}>{item?.price} PKR</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
