import React, {useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';

import {UpdatePasswordStyle} from './UpdatePasswordStyle';
import Passwordinput from '../../component/PasswordInput';
import AppButton, {LoadingButton} from '../../component/AppButton';
import {
  dologout,
  updatePasswordFirebase,
} from '../../Store/actions/AuthActions';
import {SuccessAlerts} from '../../component/Alerts';

const validationschema = Yup.object().shape({
  oldPassword: Yup.string().required().label('Old Password'),
  Password: Yup.string().required('Password is required'),
  ConfirmPassword: Yup.string().oneOf(
    [Yup.ref('Password'), null],
    'Passwords must match',
  ),
});

export default function UpdatePassword() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(false);
  const [invalid, setinvalid] = useState('');
  const [show, setshow] = useState(false);
  const [alertMsg, setalertMsg] = useState('');

  const confirm = () => {
    setshow(false);
    console.log('changed');
    dispatch(dologout());
  };

  const CtaUpdatePassword = val => {
    dispatch(
      updatePasswordFirebase(
        setloading,
        setinvalid,
        val.oldPassword,
        val.ConfirmPassword,
      ),
    );
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={UpdatePasswordStyle.root}>
      <View style={UpdatePasswordStyle.upperContaier} />
      <View style={UpdatePasswordStyle.lowerContainer}>
        <Formik
          initialValues={{oldPassword: '', Password: '', ConfirmPassword: ''}}
          validationSchema={validationschema}
          onSubmit={values => CtaUpdatePassword(values)}>
          {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <>
              <Passwordinput
                name="Old Password"
                placeholder="Enter Your Old Password..."
                inputstyle={UpdatePasswordStyle.oldPassword}
                blur={() => setFieldTouched('oldPassword')}
                onchange={handleChange('oldPassword')}
              />
              {touched.oldPassword && errors.oldPassword ? (
                <Text style={UpdatePasswordStyle.error}>
                  {errors.oldPassword}
                </Text>
              ) : null}
              <Passwordinput
                name="New Password"
                placeholder="Enter Your New Password..."
                inputstyle={UpdatePasswordStyle.newPassword}
                blur={() => setFieldTouched('Password')}
                onchange={handleChange('Password')}
              />
              <Passwordinput
                name="Confirm Password"
                placeholder="Enter Your Cofirm Password..."
                inputstyle={UpdatePasswordStyle.newPassword}
                blur={() => setFieldTouched('ConfirmPassword')}
                onchange={handleChange('ConfirmPassword')}
              />
              {touched.ConfirmPassword && errors.ConfirmPassword ? (
                <Text style={UpdatePasswordStyle.error}>
                  {errors.ConfirmPassword}
                </Text>
              ) : null}
              {invalid !== '' && (
                <Text style={UpdatePasswordStyle.error}>{invalid}</Text>
              )}

              <AppButton
                name="Change Password"
                onPress={handleSubmit}
                BTstyle={UpdatePasswordStyle.Btn}
                loading={loading}
              />
            </>
          )}
        </Formik>
      </View>
      <SuccessAlerts
        title="Password"
        msg={alertMsg}
        showAlert={show}
        confirm={confirm}
      />
    </ScrollView>
  );
}
