import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Permission,
  FlatList,
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
import strings from '../../constants/language/LocalizedString';

export default function Home({navigation}) {
  const user = useSelector(state => state.AuthReducer.userData);
  const role = useSelector(state => state.AuthReducer.role);
  const weather = useSelector(state => state.AuthReducer.weather);
  const [admin, setadmin] = useState(role == 'admin' ? true : false);
  const products = useSelector(state => state.AuthReducer.AllProducts);

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

  const images = [ImgPath.banner4, ImgPath.banner3, ImgPath.banner2];
  return (
    <ScrollView contentContainerStyle={styles.root} nestedScrollEnabled={true}>
      <Header />
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
            text={admin ? 'Products' : strings.shop}
          />
          <HomeButton
            image={admin ? ImgPath.Add : ImgPath.book}
            onPress={() =>
              navigation.navigate(
                admin ? NavStrings.AllCrops : NavStrings.CropPractices,
              )
            }
            text={admin ? 'Crops' : strings.cropPractices}
          />
          <HomeButton
            image={ImgPath.support}
            onPress={() => navigation.navigate(NavStrings.Chat)}
            text={admin ? 'Chats' : strings.cropAdvisory}
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
            text={strings.soilTesting}
          />
          <HomeButton
            image={ImgPath.video}
            onPress={() => navigation.navigate(NavStrings.Videos)}
            text={strings.videos}
          />
          <HomeButton
            image={admin ? ImgPath.Add : ImgPath.dollar}
            onPress={() =>
              navigation.navigate(
                admin ? NavStrings.AllPrices : NavStrings.MarketPrice,
              )
            }
            text={admin ? 'Market Price' : strings.marketPrice}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-evenly',
            marginBottom: 10,
          }}>
          <HomeButton
            image={ImgPath.buy}
            onPress={() =>
              navigation.navigate(
                admin ? NavStrings.SaleHistory : NavStrings.PurchaseHistory,
              )
            }
            text={admin ? 'sale' : strings.purchase}
          />

          <HomeButton
            image={ImgPath.cart}
            onPress={() => navigation.navigate(NavStrings.Cart)}
            text={strings.cart}
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
          <Text style={styles.recomemdedTxt}>
            {strings.recommendedProducts}
          </Text>
          <TouchableOpacity>
            <Text style={styles.viewAllTxt}>{strings.viewAll}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container}>
          {products.map((item, index) => {
            if (!(index >= 4)) {
              return (
                <View key={index} style={styles.item}>
                  <ProductCard item={item} index={index} />
                </View>
              );
            }
          })}
        </View>
      </View>
      <Image source={ImgPath.farmerCall} style={styles.footerImage} />
    </ScrollView>
  );
}
