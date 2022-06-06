import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState} from 'react';

import {styles} from './styles';

import ImgPath from '../../constants/ImgPath';
import Input from '../../component/Input';
import {Formik} from 'formik';
import AppButton from '../../component/AppButton';
import ImagePicker from 'react-native-image-crop-picker';

import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import {addProductFirestore} from '../../Store/actions/AddProduct';

const validationSchema = Yup.object().shape({
  productName: Yup.string().required(),
  price: Yup.string().required(),
  discount: Yup.string().required(),
});

export default function AddProduct({navigation, route}) {
  const item = route.params?.item;

  const [imgPath, setimgPath] = useState(item ? item?.image : '');
  const [uploadImg, setuploadImg] = useState(false);
  const [loading, setloading] = useState(false);
  const dispatch = useDispatch();

  const choosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 200,
      height: 300,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setuploadImg(true);
      setimgPath(image.path);
    });
  };

  const ctaAddProduct = v => {
    let percentage = (v.discount * 100) / v.price;
    let saved = v.price - v.discount;
    if (imgPath !== '') {
      dispatch(
        addProductFirestore(
          setloading,
          imgPath,
          saved,
          percentage,
          v.discount,
          v.price,
          v.productName,
          item,
          uploadImg,
        ),
      );
    } else {
      alert('Imgae should not be empty');
    }
  };

  return (
    <View style={styles.root}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.imageContainer}>
          <TouchableOpacity
            onPress={() => choosePhotoFromLibrary()}
            style={styles.imageWrapper}>
            {imgPath == '' ? (
              <View style={styles.emptyImageContainer}>
                <Image source={ImgPath.Add} style={styles.addImage} />
                <Text style={styles.uploadImgaetxt}>Upload Product Image</Text>
              </View>
            ) : (
              <Image source={{uri: imgPath}} style={styles.productimage} />
            )}
          </TouchableOpacity>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.detailTxt}>Add Product detail</Text>
          <Formik
            validationSchema={validationSchema}
            initialValues={{
              productName: item ? item?.name : '',
              price: item ? item?.price : '',
              discount: item ? item?.dicountPrice : '',
            }}
            onSubmit={ctaAddProduct}>
            {({
              handleChange,
              setFieldTouched,
              errors,
              values,
              handleSubmit,
              touched,
            }) => (
              <>
                <Input
                  onchange={handleChange('productName')}
                  value={values.productName}
                  blur={() => setFieldTouched('productName')}
                  error={touched.productName && errors.productName}
                  inputstyle={styles.input}
                  name="Product Name"
                  placeholder={'Product Name...'}
                />
                <Input
                  onchange={handleChange('price')}
                  value={values.price}
                  blur={() => setFieldTouched('price')}
                  error={touched.price && errors.price}
                  inputstyle={styles.input}
                  name="Product Price (PKR)"
                  keyboardType="numeric"
                  placeholder={'Product price...'}
                />
                <Input
                  onchange={handleChange('discount')}
                  value={values.discount}
                  blur={() => setFieldTouched('discount')}
                  error={touched.discount && errors.discount}
                  inputstyle={styles.input}
                  name="Discounted Price (PKR)"
                  keyboardType="numeric"
                  placeholder={'Product price with discout...'}
                />
                <AppButton
                  name={item ? 'Update Product' : 'Add Product'}
                  BTstyle={styles.addBtn}
                  onPress={handleSubmit}
                  loading={loading}
                />
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </View>
  );
}
