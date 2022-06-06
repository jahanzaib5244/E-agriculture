import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';

import {styles} from './styles';
import ImgPath from '../../constants/ImgPath';
import ImagePicker from 'react-native-image-crop-picker';
import Input from '../../component/Input';
import {moderateVerticalScale} from 'react-native-size-matters';
import AppButton from '../../component/AppButton';
import {useDispatch} from 'react-redux';
import {addCropFirestore} from '../../Store/actions/AddProduct';

export default function AddCrop({navigation, route}) {
  const item = route.params?.item;
  const [imgPath, setimgPath] = useState(item ? item.image : '');
  const [loading, setloading] = useState(false);
  const [uploadImage, setuploadImage] = useState(false);
  const [inputsFiels, setinputsFiels] = useState(
    item ? item?.description : [{title: '', des: ''}],
  );
  const [productname, setproductname] = useState(item ? item?.name : '');
  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setuploadImage(true);
      setimgPath(image.path);
    });
  };
  const AddMoreFields = () => {
    setinputsFiels([...inputsFiels, {title: '', des: ''}]);
  };
  const dispatch = useDispatch();

  const ctaAddFirestore = () => {
    if (imgPath !== '' && productname !== '') {
      dispatch(
        addCropFirestore(
          setloading,
          imgPath,
          productname,
          inputsFiels,
          uploadImage,
          item,
        ),
      );
    } else {
      Alert.alert('Add Crop', 'Image and Product Name is required Fields');
    }
    console.log(inputsFiels);
  };
  const setFieldTitle = (v, index) => {
    inputsFiels[index].title = v;
    setinputsFiels(inputsFiels);
  };
  const setFieldDes = (v, index) => {
    inputsFiels[index].des = v;
    setinputsFiels(inputsFiels);
  };

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <TouchableOpacity
          style={styles.ImgaeContainer}
          onPress={() => choosePhotoFromLibrary()}>
          {imgPath == '' ? (
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'row',
              }}>
              <Image source={ImgPath.Add} style={styles.addImg} />
              <Text style={styles.imgTxt}>Upload Image</Text>
            </View>
          ) : (
            <Image style={styles.CropImage} source={{uri: imgPath}} />
          )}
        </TouchableOpacity>
        <Input
          placeholder={'Crop Name...'}
          name="Crop Name"
          onchange={v => setproductname(v)}
          inputstyle={styles.input}
          value={productname}
        />
        {inputsFiels.map((item, index) => {
          return (
            <View key={index}>
              <Input
                placeholder={'Title...'}
                name={`point ${index + 1} Title `}
                inputstyle={styles.input}
                defaultValue={item?.title}
                onchange={v => setFieldTitle(v, index)}
              />
              <Input
                placeholder={'Title...'}
                name={`point ${index + 1} Des `}
                inputstyle={styles.multipleTextInput}
                multiline={true}
                textinputstyle={styles.multiline}
                onchange={v => setFieldDes(v, index)}
                defaultValue={item?.des}
              />
            </View>
          );
        })}
        <AppButton
          BTstyle={styles.moreFields}
          name="Add More Points"
          onPress={() => AddMoreFields()}
        />
        <AppButton
          BTstyle={[styles.moreFields, {marginTop: 0}]}
          name={item ? 'Update Crop' : 'Add Crop '}
          loading={loading}
          onPress={() => ctaAddFirestore()}
        />
      </ScrollView>
    </View>
  );
}
