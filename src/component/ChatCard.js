import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import ImgPath from '../constants/ImgPath';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import COLORS from '../style/COLORS';
import FONTS from '../style/FONTS';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import NavStrings from '../constants/NavStrings';

const ChatCard = ({item = {}, index = 0}) => {
  const navigation = useNavigation();
  console.log({first: item?.firstuid, second: item?.seconduid});
  const [receiver, setreceiver] = useState({});
  const user = auth().currentUser.uid;

  const getReceiver = async () => {
    const docId = item?.firstuid == user ? item?.seconduid : item?.firstuid;
    const receiver = await firestore().collection('Users').doc(docId).get();
    setreceiver(receiver.data());
  };

  useEffect(() => {
    getReceiver();

    return () => {};
  }, []);

  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(NavStrings.GiftedChat, {item: receiver})
      }
      style={styles.chatCard}>
      <View style={styles.ImageContainer}>
        <Image source={{uri: receiver?.ProfilePic}} style={styles.img} />
      </View>
      <View style={{marginLeft: 10}}>
        <Text style={styles.name}>
          {receiver?.FirstName} {receiver?.LastName}
        </Text>
        <Text style={styles.sms} numberOfLines={1}>
          {item?.lastMessages}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatCard;

const styles = StyleSheet.create({
  chatCard: {
    height: moderateVerticalScale(70),
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 0.7,
    borderColor: '#dedede',
  },
  ImageContainer: {
    width: moderateScale(70),
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    height: moderateScale(55),
    width: moderateScale(55),
  },
  name: {
    color: COLORS.black,
    fontWeight: '700',
    fontSize: 18,
  },
  sms: {
    color: 'grey',
    fontSize: 14,
  },
});
