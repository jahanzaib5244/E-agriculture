import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  Modal,
  Dimensions,
  FlatList,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {useSelector} from 'react-redux';

import ImgPath from '../constants/ImgPath';
import COLORS from '../style/COLORS';
import FONTS from '../style/FONTS';
const {height} = Dimensions.get('window');

function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, idx) => start + idx);
}

export default function Dropdown({
  label = '',
  icon = '',
  Onblur = () => {},
  placeholderText = '',
  TextSubmit = () => {},
  valErrors = false,
  passwordField = false,
  textInputStyleContainer = {},
  textInputStyle = {},
  rowcontainer = {},
  handel = () => {},
  value = '',
  select = () => {},
  ...props
}) {
  const [showCities, setshowCities] = useState(false);
  const [selected, setselected] = useState('');
  const [selectedindex, setselectedindex] = useState(null);

  const Cities = [
    {
      soilType: 'Clayey and silty',
      crops: 'Sugarcane,rice,pulses',
      pestisides: `Nitrogen(60 to 100 pounds)
      Per acre`,
    },
    {
      soilType: 'Calcareous,loamy,s andy,silty',
      crops: 'Cotton,wheat,rice',
      pestisides: 'Nitrogen,Phosphor ous',
    },
    {
      soilType: 'Sandy,clayey and loamy',
      crops: 'Guar,millet,wheat,castor',
      pestisides: `Nitrogen(80 to 100 pounds)
      Per acre`,
    },
    {
      soilType: 'Calcareous,',
      crops: 'Gram,Millet,wheat,Gwer',
      pestisides: 'Daimmonium phosphate',
    },
    {
      soilType: 'sandy,loamy',
      crops: 'Gram,Millet,wheat,Gwer',
      pestisides: 'Daimmonium phosphate',
    },
    {
      soilType: 'Sandy',
      crops: 'Wheat,cotton,millet,sugarcane,citrus,',
      pestisides: 'Combine phosphorus, Potassium,',
    },
    {
      soilType: 'clayey,silt-loam',
      crops: 'Mango',
      pestisides: 'nitrogen,Zinc and iron',
    },
    {
      soilType: 'Moderately calcareous',
      crops: 'Maize,Gram,Tobacco,wheat,sugar beet,pears',
      pestisides: `150 kg ha^-1 NPK 14-23-14 50Kg ha^-1 Urea`,
    },
    {
      soilType: 'Silt loam,Silt clay,Clay loam',
      crops: 'Oil seeds,pulses,fodder crops,rice',
      pestisides: `40-60 kg P205 20-40 kg s/ha DAP or Urea`,
    },
    {
      soilType: 'Silt loam,Silt clays',
      crops: 'Maize,rice,wheat,apples',
      pestisides: `Nitrogen
      NPK 12-12-12`,
    },
    {
      soilType: 'Clayey,Non- calcareous and Acidic',
      crops: 'Maize,wheat,rice',
      pestisides: `Nitrogen (105 Pounds) Per acre`,
    },
    {
      soilType: 'Calcareous-loamy',
      crops: 'Wheat,Maize,apples,peaches,plums,Appicot s,Grapes',
      pestisides: `Nitrogen,Phosphor us
      Potassium,
      Zinc or Iron`,
    },
  ];
  const [searchCompanies, setsearchCompanies] = useState(Cities);

  const SelectedOption = (item, index) => {
    setselectedindex(index);
    setselected(item?.soilType);
    setshowCities(false);
    handel(item);
    select(item);
    setsearchCompanies(Cities);
  };

  const Search = text => {
    const newData = Cities.filter(item => {
      const search = item?.soilType.toUpperCase();
      const receive = text.toUpperCase();
      return search.indexOf(receive) > -1;
    });
    setsearchCompanies(newData);
  };

  useEffect(() => {
    Cities.map((item, index) => {
      if (item == value) {
        setselected(item);
        setselectedindex(index);
      }
    });
    return () => {};
  }, [value]);

  return (
    <TouchableOpacity
      onPress={() => setshowCities(true)}
      style={[{...styles.inputContainerStyle, ...textInputStyleContainer}]}>
      <Text
        style={[
          styles.title,
          {color: valErrors ? COLORS.danger : COLORS.black},
        ]}>
        {label}
      </Text>
      <View style={[rowcontainer, styles.inputrowContainer]}>
        <TextInput
          {...props}
          style={[
            textInputStyle,
            styles.input,
            {color: valErrors ? COLORS.danger : COLORS.black},
          ]}
          placeholder={placeholderText}
          editable={false}
          placeholderTextColor={valErrors ? COLORS.danger : COLORS.black}
          value={selected}
          onChangeText={e => TextSubmit(e)}
          onBlur={e => Onblur(e)}
        />
        <Image source={ImgPath.forwardArrow} style={styles.dropdownPic} />
      </View>
      <Modal
        style={styles.modalstyle}
        animationType="fade"
        transparent={true}
        visible={showCities}
        onRequestClose={() => {
          setshowCities(!showCities);
        }}>
        <View style={styles.ModalView}>
          <View style={styles.inner}>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 1}}>
                <Text
                  style={{
                    color: 'black',
                    alignSelf: 'center',
                    fontWeight: '700',
                    paddingLeft: 10,
                    fontSize: FONTS.heading,
                  }}>
                  Select Age
                </Text>
              </View>
              <TouchableOpacity
                style={{flex: 0, alignSelf: 'flex-end', paddingHorizontal: 10}}
                onPress={() => {
                  setshowCities(false);
                  setsearchCompanies(Cities);
                }}>
                <Image
                  style={{height: 15, width: 15, resizeMode: 'contain'}}
                  source={ImgPath.close}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.search}>
              <Image
                style={{width: 30, height: 20, resizeMode: 'contain'}}
                source={ImgPath.search}
              />
              <TextInput
                style={{
                  padding: 0,
                  flex: 1,
                  color: 'black',
                }}
                onChangeText={e => Search(e)}
                placeholder={'Search...'}
                placeholderTextColor={'rgba(130,120,120,1)'}
              />
            </View>
            <FlatList
              data={searchCompanies}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item, index}) => {
                return (
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      borderBottomWidth: 1,
                      borderColor: 'rgba(100,100,100,0.3)',
                    }}>
                    {selected == item && selectedindex == index ? (
                      <Image
                        style={{
                          height: 13,
                          width: 13,
                          resizeMode: 'contain',
                          tintColor: 'rgba(100,100,100,0.9)',
                        }}
                        source={ImgPath.check}
                      />
                    ) : null}
                    <TouchableOpacity
                      style={styles.options}
                      onPress={() => SelectedOption(item, index)}>
                      <Text style={styles.optionText}>{item?.soilType}</Text>
                    </TouchableOpacity>
                  </View>
                );
              }}
              ListEmptyComponent={() => (
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'gray', paddingTop: 10, fontSize: 16}}>
                    No data found!
                  </Text>
                </View>
              )}
            />
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  inputContainerStyle: {
    borderRadius: moderateScale(8),
    marginHorizontal: moderateScale(25),
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    marginTop: moderateVerticalScale(10),
    padding: 2,
    paddingBottom: moderateVerticalScale(4),
    elevation: 4,
  },
  title: {
    color: COLORS.black,
    fontSize: FONTS.des,
    paddingHorizontal: moderateScale(20),
    fontWeight: '700',
    paddingTop: moderateVerticalScale(2),
  },
  inputrowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  search: {
    marginTop: 10,
    borderWidth: 1,
    padding: 3,
    paddingHorizontal: 10,
    color: 'black',
    borderRadius: 30,
    borderColor: 'rgba(100,100,100,0.3)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    padding: 0,
    color: COLORS.black,
    fontSize: FONTS.des,
    fontWeight: '600',
    flex: 1,
    paddingLeft: moderateScale(20),
  },
  eyeBtn: {
    paddingLeft: moderateScale(10),
    paddingRight: moderateScale(10),
  },
  eyeImage: {
    resizeMode: 'contain',
    height: moderateScale(20),
    width: moderateScale(20),
  },
  dropdownPic: {
    marginRight: moderateScale(10),
    resizeMode: 'contain',
    height: moderateScale(15),
    width: moderateScale(15),
    transform: [{rotate: '90deg'}],
  },
  iconStyle: {
    height: moderateScale(18),
    width: moderateScale(18),
    resizeMode: 'contain',
  },
  iconContainerStyle: {
    paddingRight: moderateScale(7),
    paddingLeft: moderateScale(10),
  },
  modalstyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ModalView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner: {
    padding: 10,
    width: '90%',
    height: '80%',
    borderRadius: 20,
    marginHorizontal: 30,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'rgba(100,100,100,0.3)',
  },
  options: {
    width: '100%',
    padding: 5,
    paddingVertical: 15,
  },
  dropdownSelector: {
    height: 80,
    // backgroundColor:'green',
    marginVertical: 5,
    marginHorizontal: 30,
    borderRadius: 10,
    elevation: 1,
  },
  Input: {
    marginHorizontal: 30,
    // marginBottom: 28,
    backgroundColor: COLORS.white,
    elevation: 3,

    borderRadius: 10,
    padding: 10,
  },
  text: {
    paddingLeft: 15,
    color: COLORS.black,
    fontSize: FONTS.des,
    fontWeight: '700',
    letterSpacing: 1,
  },
  textinput: {
    marginVertical: 5,
    marginHorizontal: 5,
    fontSize: FONTS.des,
    padding: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  optionText: {
    color: COLORS.black,
    fontSize: FONTS.des,
    fontWeight: '700',
    paddingHorizontal: moderateScale(10),
  },
});
