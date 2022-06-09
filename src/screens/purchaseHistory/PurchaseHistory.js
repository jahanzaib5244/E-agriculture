import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import firestore from '@react-native-firebase/firestore';
import {styles} from './styles';
import auth from '@react-native-firebase/auth';
import HistoryItem from '../../component/HistoryItem';

export default function PurchaseHistory() {
  const [purchased, setpurchased] = useState([]);
  useEffect(() => {
    const purchaseItems = firestore()
      .collection('purchase')
      .onSnapshot(snapshots => {
        if (!snapshots.empty) {
          let uid = auth().currentUser.uid;
          let itemData = [];
          snapshots.docs.forEach((item, index) => {
            if (item.id.indexOf(uid) > -1) {
              itemData.push(item.data());
            }
          });
          setpurchased(itemData);
        } else {
          setpurchased([]);
        }
      });

    return () => purchaseItems();
  }, []);

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <FlatList
          data={purchased}
          keyExtractor={(item, index) => index.toString()}
          contentContainerStyle={{flexGrow: 1}}
          numColumns={2}
          renderItem={({item, index}) => {
            return (
              <View style={styles.item}>
                <HistoryItem item={item} index={index} />
              </View>
            );
          }}
        />
      </View>
    </View>
  );
}
