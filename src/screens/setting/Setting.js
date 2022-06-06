import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import Header from '../../component/Header';
import {styles} from './styles';
import ImgPath from '../../constants/ImgPath';
import {useDispatch, useSelector} from 'react-redux';
import NavStrings from '../../constants/NavStrings';
import {dologout} from '../../Store/actions/AuthActions';

export default function Setting({navigation}) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.AuthReducer.userData);
  const ctaLogout = () => {
    dispatch(dologout());
  };
  return (
    <View style={styles.root}>
      <Header />
      <View style={styles.header}>
        <View style={styles.pic}>
          <Image source={{uri: user?.ProfilePic}} style={styles.Image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.username}>
            {user?.FirstName}
            {'\n'}
            {user?.LastName}
          </Text>
          <Text style={styles.email}>{user?.Email}</Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('AccountSetting')}
            style={styles.btn}>
            <Text style={styles.btnTxt}>Update Profile</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('UpdatePassword')}
            style={styles.btn}>
            <Text style={styles.btnTxt}>Update Password</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => ctaLogout()}
          style={[styles.btn, {borderTopWidth: 0.6}]}>
          <Text style={styles.btnTxt}>Sing Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
