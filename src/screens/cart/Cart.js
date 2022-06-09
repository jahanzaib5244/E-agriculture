import {View, Text, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';

import firestore from '@react-native-firebase/firestore';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
import CartItem from '../../component/CartItem';
export default function Cart() {
  const [items, setitems] = useState([]);

  useEffect(() => {
    const snapshotsData = firestore()
      .collection('cart')
      .onSnapshot(snapshot => {
        if (!snapshot.empty) {
          const uid = auth().currentUser.uid;
          const userItems = [];
          snapshot.docs.forEach((item, index) => {
            if (item.id.indexOf(uid) > -1)
              userItems.push({...item.data(), id: item.id});
          });
          setitems(userItems);
        } else {
          setitems([]);
        }
      });

    return () => snapshotsData();
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={items}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({item, index}) => {
          return (
            <View key={index} style={styles.item}>
              <CartItem item={item} index={index} />
            </View>
          );
        }}
      />
    </View>
  );
}
