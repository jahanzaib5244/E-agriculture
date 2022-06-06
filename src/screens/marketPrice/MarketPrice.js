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

import ImgPath from '../../constants/ImgPath';
import {styles} from './styles';

export default function MarketPrice() {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [searchTxt, setsearchTxt] = useState('');

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setsearchTxt(moment(date).format('D-M-Y'));

    hideDatePicker();
  };
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  return (
    <View style={styles.root}>
      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <Image source={ImgPath.search} style={styles.searchicon} />
          <TouchableOpacity onPress={() => showDatePicker()} style={{flex: 1}}>
            <TextInput
              onChangeText={v => setsearchTxt(v)}
              style={styles.searchInput}
              editable={false}
              value={searchTxt}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Text style={styles.searchBtnTxt}>FIlter</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={Array.from(Array(10).keys())}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => (
          <View style={styles.priceCard}>
            <View style={styles.txtContainer}>
              <View>
                <Text style={styles.marketName}>sabz mandi faisalabad</Text>
                <Text style={styles.vegName}>allo</Text>
              </View>
              <Text style={styles.date}>25-2-2022</Text>
            </View>
            <View style={styles.priceTxt}>
              <Text style={styles.price}>220 PKR</Text>
            </View>
          </View>
        )}
      />
      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
}
