import React from 'react';
import {View, Image, Text, ScrollView, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import AppButton, {LoadingButton} from '../../component/AppButton';
import Input from '../../component/Input';
import Passwordinput from '../../component/PasswordInput';

import {LoginStyle} from './LoginStyle';
import strings from '../../constants/language/LocalizedString';
import Uselogin from './Uselogin';
import {suppressDeprecationWarnings} from 'moment';

const validationschema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(3).label('Password'),
});

export default function Login({navigation}) {
  const [isinvalid, loading, doSigninUser, setsecureText, secureText] =
    Uselogin();
  return (
    <ScrollView contentContainerStyle={LoginStyle.root}>
      <View style={LoginStyle.logo}>
        <Image
          style={LoginStyle.image}
          source={require('../../assets/logo.png')}
        />
        <Text style={LoginStyle.logoText}>E Agriculture</Text>
      </View>
      <View style={LoginStyle.input}>
        <Text style={LoginStyle.loginText}>{strings.Login}</Text>
        <Formik
          initialValues={{email: '', password: ''}}
          validationSchema={validationschema}
          onSubmit={values => doSigninUser(values)}>
          {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
            <>
              <Input
                onchange={handleChange('email')}
                inputstyle={LoginStyle.inputfield}
                placeholder={strings.enterEmail}
                name={strings.Email}
                blur={() => setFieldTouched('email')}
              />
              {errors.email && touched.email ? (
                <Text style={LoginStyle.error}>{errors.email}</Text>
              ) : null}
              <Passwordinput
                inputstyle={LoginStyle.inputfield}
                placeholder={strings.enterPassword}
                name={strings.Password}
                onchange={handleChange('password')}
                blur={() => setFieldTouched('password')}
              />
              {errors.password && touched.password ? (
                <Text style={LoginStyle.error}>{errors.password}</Text>
              ) : null}
              {isinvalid !== '' && (
                <Text style={LoginStyle.error}>{isinvalid}</Text>
              )}
              <View style={LoginStyle.forget}>
                <TouchableOpacity
                  style={LoginStyle.forgetBtn}
                  onPress={() => navigation.navigate('ForgetPassword')}>
                  <Text style={LoginStyle.forgettext}>
                    {strings.forgetPassword}
                  </Text>
                </TouchableOpacity>
              </View>

              <AppButton
                name={strings.Login}
                BTstyle={LoginStyle.btn}
                onPress={handleSubmit}
                loading={loading}
              />
            </>
          )}
        </Formik>
        <View
          style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center'}}>
          <View style={{flexDirection: 'row', bottom: 20}}>
            <Text
              style={{paddingVertical: 10, color: 'gray', textAlign: 'left'}}>
              {strings.noAccount}
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('Singup')}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                paddingHorizontal: 5,
              }}>
              <Text
                style={{
                  borderBottomWidth: 1,
                  color: 'black',
                  textAlign: 'left',
                }}>
                {strings.Singup}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
