import {View, Text} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';

import {styles} from './styles';
import {Formik} from 'formik';
import Input from '../../component/Input';
import AppButton from '../../component/AppButton';
import {useDispatch} from 'react-redux';
import {addPriceFirestore} from '../../Store/actions/AddProduct';

const validationSchema = Yup.object().shape({
  vegName: Yup.string().required(),
  location: Yup.string().required(),
  price: Yup.string().required(),
});

export default function AddPrice({navigation, route}) {
  const item = route.params?.item;

  const [loading, setloading] = useState(false);

  const dispatch = useDispatch();

  const ctaAddMarketPrice = v => {
    dispatch(
      addPriceFirestore(setloading, v.vegName, v.location, v.price, item),
    );
  };
  return (
    <View style={styles.root}>
      <Text style={styles.marketTxt}>Add Market Price</Text>
      <Formik
        initialValues={{
          vegName: item ? item?.name : '',
          location: item ? item.location : '',
          price: item ? item.price : '',
        }}
        validationSchema={validationSchema}
        onSubmit={ctaAddMarketPrice}>
        {({
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
          setFieldTouched,
        }) => (
          <>
            <Input
              name={'Vegitable Name'}
              placeholder="veg..."
              onchange={handleChange('vegName')}
              blur={() => setFieldTouched('vegName')}
              error={touched.vegName && errors.vegName}
              value={values.vegName}
              inputstyle={styles.inputs}
            />
            <Input
              name={'Market Location'}
              placeholder="Market Location..."
              onchange={handleChange('location')}
              blur={() => setFieldTouched('location')}
              error={touched.location && errors.location}
              value={values.location}
              inputstyle={styles.inputs}
            />
            <Input
              name={'Price'}
              placeholder="price..."
              onchange={handleChange('price')}
              blur={() => setFieldTouched('price')}
              error={touched.price && errors.price}
              value={values.price}
              inputstyle={styles.inputs}
              keyboardType="numeric"
            />
            <AppButton
              onPress={handleSubmit}
              name={item ? 'Update Market Price' : 'Add Market Price'}
              BTstyle={styles.addBtn}
              loading={loading}
            />
          </>
        )}
      </Formik>
    </View>
  );
}
