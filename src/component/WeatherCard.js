import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';

import {Colors, size} from '../config/Utils';
import moment from 'moment';

export default function WeatherCard({style, data = {}}) {
  const empty = Object.keys(data).length === 0;

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('../assets/bg1.jpeg')}
        style={[styles.root, style]}>
        <View style={{flex: 1, flexDirection: 'row', borderRadius: 20}}>
          <View style={{flex: 3}}>
            <View style={{flexDirection: 'row', marginTop: 10, marginLeft: 10}}>
              <View style={styles.locationcontainer}>
                <Image
                  source={
                    empty
                      ? require('../assets/locationOff.png')
                      : require('../assets/location.png')
                  }
                  style={styles.location}
                />
                <Text style={{color: 'white'}}>{data?.city?.name}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', flex: 1}}>
              <View
                style={{
                  flex: 1.5,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={
                    empty
                      ? require('../assets/sun.png')
                      : {
                          uri: `https://openweathermap.org/img/wn/${data?.list[0]?.weather[0]?.icon}.png`,
                        }
                  }
                  style={styles.sun}
                />
                <Text style={{color: 'white', fontSize: 20}}>
                  {empty ? 'no' : data?.list[0]?.weather[0]?.main}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 60, marginBottom: 10, color: 'white'}}>
                  {empty
                    ? 'no provided'
                    : data?.list[0]?.main?.temp.toString().substring(0, 2)}
                </Text>
                <Text style={{color: 'white'}}>max/min</Text>
                <Text style={{color: 'white'}}>
                  {empty ? 'no' : data?.list[0]?.main?.temp_min}/
                  {empty ? 'no' : data?.list[0]?.main?.temp_max}
                </Text>
              </View>
              <View
                style={{
                  flex: 1.3,
                  alignItems: 'center',
                  // justifyContent: 'center',
                }}>
                {/* <View style={[styles.condition]}>
                  <Text style={{color: 'white'}}>26 Good</Text>
                </View> */}
                <View style={{marginTop: 20}}>
                  <Text style={{color: 'white'}}>Humedity</Text>
                  <Text style={{color: 'white', textAlign: 'center'}}>
                    {empty ? 'no' : data?.list[0]?.main?.humidity} %
                  </Text>
                </View>
                <View style={{marginTop: 20}}>
                  <Text style={{color: 'white'}}>Wind Speed</Text>
                  <Text style={{color: 'white'}}>
                    {empty ? 'no' : data?.list[0]?.wind?.speed} km/h
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              borderLeftWidth: 2,
              paddingLeft: 10,
              borderColor: 'white',
            }}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                top: 10,
              }}>
              <Text style={{color: 'white'}}>
                {/* {moment(data?.list[0]?.dt).format('h:m A')} */}
              </Text>
            </View>
            <Image
              style={{
                height: 90,
                width: 90,
                resizeMode: 'contain',
                alignSelf: 'center',
                top: 20,
              }}
              source={
                empty
                  ? require('../assets/rain.png')
                  : {
                      uri: `https://openweathermap.org/img/wn/${data?.list[1]?.weather[0]?.icon}.png`,
                    }
              }
            />
            <Text style={{color: 'white', alignSelf: 'center', top: 29}}>
              max/min
            </Text>
            <Text style={{color: 'white', alignSelf: 'center', top: 29}}>
              {empty ? 'no' : data?.list[1]?.main?.temp_min}/
              {empty ? 'no' : data?.list[1]?.main?.temp_max}
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  root: {
    height: 180,
    width: size.width90,
    borderRadius: 20,
  },
  location: {
    height: 12,
    width: 12,
    marginRight: 5,
    resizeMode: 'contain',
    tintColor: Colors.white,
  },
  locationcontainer: {
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 10,
    borderRadius: 26,
    paddingVertical: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  condition: {
    marginBottom: 20,
    flexDirection: 'row',
    backgroundColor: 'rgba(37,217,19,0.9)',
    paddingHorizontal: 13,
    borderRadius: 26,
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sun: {
    height: 80,
    width: 80,
    resizeMode: 'contain',
  },
});
