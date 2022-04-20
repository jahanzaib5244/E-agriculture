import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {SliderBox} from 'react-native-image-slider-box';
import React from 'react';

import HomeButton from '../../component/HomeButton';
import {Colors, size} from '../../config/Utils';
import WeatherCard from '../../component/WeatherCard';
import Header from '../../component/Header';
import {styles} from './styles';
import ImgPath from '../../constants/ImgPath';
import ProductCard from '../../component/ProductCard';
import NavStrings from '../../constants/NavStrings';

export default function Home({navigation}) {
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
      <View style={styles.AddNewContainer}>
        <View style={styles.addBtnContainer}>
          <View style={styles.addBtn}>
            <Image source={ImgPath.Add} style={styles.AddImg} />
          </View>
          <Text style={styles.AddNewText}>Add New</Text>
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
      <View style={styles.btnContainer}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <HomeButton
            image={ImgPath.cart}
            onPress={() => navigation.navigate(NavStrings.Shop)}
            text="Shop"
          />
          <HomeButton
            image={ImgPath.book}
            onPress={() => navigation.navigate(NavStrings.CropPractices)}
            text="Crop Practices"
          />
          <HomeButton
            image={ImgPath.support}
            onPress={() => navigation.navigate(NavStrings.GiftedChat)}
            text="Crop Advisory"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <HomeButton
            image={ImgPath.plant}
            onPress={() => navigation.navigate(NavStrings.Furtilizer)}
            text="Crop Care"
          />
          <HomeButton
            image={ImgPath.testing}
            onPress={() => navigation.navigate(NavStrings.SoilTesting)}
            text="Soil Testing"
          />
          <HomeButton
            image={ImgPath.dollar}
            onPress={() => navigation.navigate(NavStrings.MarketPrice)}
            text="MarketPrice"
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 10,
          }}>
          <HomeButton
            image={ImgPath.video}
            onPress={() => navigation.navigate(NavStrings.Videos)}
            text="Videos"
          />
          <HomeButton
            image={ImgPath.weather}
            onPress={() => navigation.navigate(NavStrings.Videos)}
            text="Weather"
          />
          <HomeButton
            image={ImgPath.faq}
            onPress={() => navigation.navigate(NavStrings.FAQ)}
            text="FAQ"
          />
        </View>
      </View>
      <View
        style={{
          borderRadius: 15,
          overflow: 'hidden',
          alignItems: 'center',
          backgroundColor: 'red',
          marginHorizontal: moderateScale(20),
          marginTop: moderateVerticalScale(15),
        }}>
        <WeatherCard />
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
