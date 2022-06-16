import React, {useState, useEffect} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import {SingupStyle} from './SingupStyle';
import Input from '../../component/Input';
import Passwordinput from '../../component/PasswordInput';

import AppButton, {LoadingButton} from '../../component/AppButton';
import {RegisterApi} from '../../Store/actions/AuthActions';
import COLORS from '../../style/COLORS';
import strings from '../../constants/language/LocalizedString';

const validationschema = Yup.object().shape({
  Email: Yup.string().required().email().label('Email'),
  Password: Yup.string().required('Password is required'),
  ConfirmPassword: Yup.string().oneOf(
    [Yup.ref('Password'), null],
    'Passwords must match',
  ),
  firstName: Yup.string().required().trim().label('First Name'),
  lastName: Yup.string().required().trim().label('Last Name'),
  userName: Yup.string().required().trim().label('User Name'),
});

export default function Singup({navigation}) {
  const dispatch = useDispatch();

  const [loading, setloading] = useState(false);
  const [invalid, setinvalid] = useState('');

  const ctaSignUP = val => {
    dispatch(
      RegisterApi(
        setinvalid,
        setloading,
        val.ConfirmPassword,
        val.Email,
        val.firstName,
        val.lastName,
        val.userName,
      ),
    );
  };

  useEffect(() => {
    return () => {
      setloading(false);
    };
  }, []);

  return (
    <View style={SingupStyle.root}>
      {/* //header component */}

      <View style={SingupStyle.uppercontainer}>
        <TouchableOpacity
          style={SingupStyle.back}
          onPress={() => navigation.goBack()}>
          <Image
            style={SingupStyle.image}
            source={require('../../assets/back.png')}
          />
        </TouchableOpacity>
        <Text style={SingupStyle.singupText}>{strings.Singup}</Text>
      </View>

      <Formik
        initialValues={{
          Email: '',
          Password: '',
          ConfirmPassword: '',
          firstName: '',
          lastName: '',
          userName: '',
        }}
        validationSchema={validationschema}
        onSubmit={values => ctaSignUP(values)}>
        {({handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
          <>
            <View style={SingupStyle.InputFieldContainer}>
              <View>
                <View style={SingupStyle.nameContainer}>
                  <Input
                    onchange={handleChange('firstName')}
                    inputstyle={SingupStyle.fname}
                    name={strings.firstName}
                    placeholder={strings.enterFirstname}
                    blur={() => setFieldTouched('firstName')}
                  />

                  <Input
                    onchange={handleChange('lastName')}
                    inputstyle={SingupStyle.lname}
                    name={strings.lastName}
                    blur={() => setFieldTouched('lastName')}
                    placeholder={strings.enterLastName}
                  />
                </View>
                {touched.firstName && errors.firstName ? (
                  <Text style={SingupStyle.error}>{errors.firstName}</Text>
                ) : null}
                {touched.lastName && errors.lastName ? (
                  <Text style={SingupStyle.error}>{errors.lastName}</Text>
                ) : null}

                <Input
                  onchange={handleChange('userName')}
                  inputstyle={SingupStyle.email}
                  name={strings.userName}
                  blur={() => setFieldTouched('userName')}
                  placeholder={strings.enterUserName}
                />

                {touched.userName && errors.userName ? (
                  <Text style={SingupStyle.error}>{errors.userName}</Text>
                ) : null}
                <Input
                  onchange={handleChange('Email')}
                  inputstyle={SingupStyle.email}
                  name={strings.Email}
                  blur={() => setFieldTouched('Email')}
                  placeholder={strings.enterEmail}
                />
                {touched.Email && errors.Email ? (
                  <Text style={SingupStyle.error}>{errors.Email}</Text>
                ) : null}

                <Passwordinput
                  onchange={handleChange('Password')}
                  inputstyle={SingupStyle.email}
                  name={strings.Password}
                  blur={() => setFieldTouched('Password')}
                  placeholder={strings.enterPassword}
                />
                {/* {!!touched.Password && <Text style={SingupStyle.error}>{errors.Password}</Text>} */}
                <Passwordinput
                  onchange={handleChange('ConfirmPassword')}
                  inputstyle={SingupStyle.email}
                  name={strings.Password}
                  blur={() => setFieldTouched('ConfirmPassword')}
                  placeholder={strings.enterPassword}
                />

                {touched.ConfirmPassword && errors.ConfirmPassword ? (
                  <Text style={SingupStyle.error}>
                    {errors.ConfirmPassword}
                  </Text>
                ) : null}

                {invalid !== '' && (
                  <Text style={SingupStyle.error}>{invalid}</Text>
                )}
                {/* // button */}

                <AppButton
                  onPress={handleSubmit}
                  name={strings.Singup}
                  BTstyle={SingupStyle.btn}
                  loading={loading}
                />
              </View>
              <View
                style={{
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  backgroundColor: COLORS.white,
                  marginTop: 30,
                }}>
                <View style={{flexDirection: 'row', bottom: 20}}>
                  <Text style={{paddingVertical: 10, color: 'gray'}}>
                    {strings.alreadyAccount}
                  </Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Login')}
                    style={{
                      paddingVertical: 10,
                      justifyContent: 'center',
                      alignItems: 'center',
                      paddingHorizontal: 5,
                    }}>
                    <Text style={{borderBottomWidth: 1, color: 'black'}}>
                      {strings.Login}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
}
