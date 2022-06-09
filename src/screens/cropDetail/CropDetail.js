import {View, Text, Image, FlatList} from 'react-native';
import React from 'react';
import {styles} from './styles';
import ImgPath from '../../constants/ImgPath';
import DetailDropDown from '../../component/DetailDropDown';

export default function CropDetail({navigation, route}) {
  const crop = route.params?.crop;

  return (
    <View style={styles.root}>
      <Image style={styles.backgroundImage} source={{uri: crop?.image}} />
      <View style={styles.emptyContainer} />
      <View style={styles.detailContainer}>
        <FlatList
          data={crop?.description}
          keyExtractor={(item, index) => index.toString()}
          ListHeaderComponent={() => (
            <View style={styles.flatlistHeader}>
              <Text style={styles.headerTxt}>{crop?.name}</Text>
            </View>
          )}
          renderItem={({item, index}) => {
            console.log(item);
            return (
              <DetailDropDown
                index={index + 1}
                title={item?.title}
                detail={item?.des}
              />
            );
          }}
        />
      </View>
    </View>
  );
}
