import {View, Text, ImageBackground, StyleSheet, Image} from 'react-native';
import React from 'react';

import {Colors, size} from '../config/Utils';

export default function WeatherCard({style}) {
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
                  source={require('../assets/location.png')}
                  style={styles.location}
                />
                <Text style={{color: 'white'}}>Faisalabad</Text>
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
                  source={require('../assets/sun.png')}
                  style={styles.sun}
                />
                <Text style={{color: 'white'}}>Sunny</Text>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text style={{fontSize: 60, marginBottom: 10, color: 'white'}}>
                  18'
                </Text>
                <Text style={{color: 'white'}}>12/24'</Text>
              </View>
              <View
                style={{
                  flex: 1.3,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View style={[styles.condition]}>
                  <Text style={{color: 'white'}}>26 Good</Text>
                </View>
                <Text style={{color: 'white', top: 13}}>S 1.3mph</Text>
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
              <Text style={{color: 'white'}}>Mon</Text>
              <Text style={{color: 'white', paddingRight: 5}}>More</Text>
            </View>
            <Image
              style={{
                tintColor: 'white',
                height: 90,
                width: 90,
                resizeMode: 'contain',
                alignSelf: 'center',
                top: 20,
              }}
              source={require('../assets/rain.png')}
            />
            <Text style={{color: 'white', alignSelf: 'center', top: 29}}>
              10/17
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
    tintColor: 'white',
  },
});
