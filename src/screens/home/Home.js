import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Permission,
} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {SliderBox} from 'react-native-image-slider-box';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import GetLocation from 'react-native-get-location';

import HomeButton from '../../component/HomeButton';
import {Colors, size} from '../../config/Utils';
import WeatherCard from '../../component/WeatherCard';
import Header from '../../component/Header';
import {styles} from './styles';
import ImgPath from '../../constants/ImgPath';
import ProductCard from '../../component/ProductCard';
import NavStrings from '../../constants/NavStrings';
import {useDispatch, useSelector} from 'react-redux';
import {check, PERMISSIONS, RESULTS, request} from 'react-native-permissions';
import {getweatherData} from '../../Store/actions/weatherAction';

export default function Home({navigation}) {
  const user = useSelector(state => state.AuthReducer.userData);
  const role = useSelector(state => state.AuthReducer.role);
  const weather = useSelector(state => state.AuthReducer.weather);
  const [admin, setadmin] = useState(role == 'admin' ? true : false);

  const [lat, setlat] = useState('');
  const [lon, setlon] = useState('');
  useEffect(() => {
    setadmin(role == 'admin' ? true : false);
  }, [role, user]);

  const getLocationPermission = async () => {
    try {
      console.log('first');
      const status = await check(PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION);
      console.log(status);
      if (status === RESULTS.GRANTED) {
        getDeviceLocation();
      } else {
        const requestPermission = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
        );
        if (requestPermission === RESULTS.GRANTED) {
          getDeviceLocation();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  const dispatch = useDispatch();
  const getDeviceLocation = async () => {
    console.log('getting location');
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
      .then(location => {
        console.log(location);
        setlat(location.latitude);
        setlon(location.longitude);
      })
      .catch(error => {
        const {code, message} = error;
        console.warn(code, message);
      });
  };

  useEffect(() => {
    getLocationPermission();
  }, []);

  useEffect(() => {
    console.log('getting weather data');
    dispatch(getweatherData(lat, lon));
  }, [lat !== '', lon !== '']);

  const images = [
    ImgPath.banner5,
    ImgPath.banner4,
    ImgPath.banner3,
    ImgPath.banner2,
    ImgPath.banner1,
  ];
  return (
    <ScrollView contentContainerStyle={styles.root}>
      <Header />
      {/* <View style={styles.AddNewContainer}>
        <View style={styles.addBtnContainer}>
          <View style={styles.addBtn}>
            <Image source={ImgPath.Add} style={styles.AddImg} />
          </View>
          <Text style={styles.AddNewText}>Add New</Text>
        </View>
      </View> */}
      <View
        style={{
          borderRadius: 15,
          overflow: 'hidden',
          alignItems: 'center',
          backgroundColor: 'red',
          marginHorizontal: moderateScale(20),
          marginTop: moderateVerticalScale(15),
        }}>
        <WeatherCard data={weather} />
      </View>

      <View style={styles.btnContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <HomeButton
            image={admin ? ImgPath.Add : ImgPath.cart}
            onPress={() =>
              navigation.navigate(
                admin ? NavStrings.AllProducts : NavStrings.Shop,
              )
            }
            text={admin ? 'Products' : 'Shop'}
          />
          <HomeButton
            image={admin ? ImgPath.Add : ImgPath.book}
            onPress={() =>
              navigation.navigate(
                admin ? NavStrings.AllCrops : NavStrings.CropPractices,
              )
            }
            text={admin ? 'Crops' : 'Crop Practices'}
          />
          <HomeButton
            image={ImgPath.support}
            onPress={() => navigation.navigate(NavStrings.Chat)}
            text={admin ? 'Chats' : 'Crop Advisory'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <HomeButton
            image={ImgPath.testing}
            onPress={() => navigation.navigate(NavStrings.SoilTesting)}
            text="Soil Testing"
          />
          <HomeButton
            image={ImgPath.video}
            onPress={() => navigation.navigate(NavStrings.Videos)}
            text="Videos"
          />
          <HomeButton
            image={admin ? ImgPath.Add : ImgPath.dollar}
            onPress={() =>
              navigation.navigate(
                admin ? NavStrings.AllPrices : NavStrings.MarketPrice,
              )
            }
            text={admin ? 'Market Price' : 'Market Price'}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 10,
          }}>
          <HomeButton
            image={ImgPath.weather}
            onPress={() => navigation.navigate(NavStrings)}
            text="Weather"
          />
        </View>
      </View>
      <View style={styles.coursol}>
        <SliderBox
          images={images}
          sliderBoxHeight={moderateVerticalScale(180)}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
        />
        <Image source={ImgPath.banner1} style={styles.coursolImg} />
      </View>
      <View style={styles.shopingCardContainer}>
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
        <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
          <ProductCard />
          <ProductCard />
        </View>
      </View>
      <Image source={ImgPath.farmerCall} style={styles.footerImage} />
    </ScrollView>
  );
}
