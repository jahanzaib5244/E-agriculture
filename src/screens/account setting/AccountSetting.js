import React, {useState, useEffect, useRef} from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Modal,
  Animated,
} from 'react-native';
import {useSelector} from 'react-redux';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch} from 'react-redux';
import ImagePicker from 'react-native-image-crop-picker';

import ImageViewer from 'react-native-image-zoom-viewer';

import Input from '../../component/Input';
import {styles} from './styles';
import AppButton, {LoadingButton} from '../../component/AppButton';
import {SuccessAlerts} from '../../component/Alerts';
import {UpdateProfileApi} from '../../Store/actions/AuthActions';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import NavStrings from '../../constants/NavStrings';

const validationschema = Yup.object().shape({
  Phone: Yup.string().label('Phone'),
  firstName: Yup.string().required().trim().label('First Name'),
  lastName: Yup.string().required().trim().label('Last Name'),
  Address: Yup.string().trim().label('Adress'),
});

export default function AccountSetting({navigation}) {
  const dispatch = useDispatch();

  const user = useSelector(state => state.AuthReducer.userData);

  console.log(user);
  const [loading, setloading] = useState(false);
  const [invalid, setinvalid] = useState('');
  const [alertShow, setalertShow] = useState(false);
  const [userImage, setuserImage] = useState(user?.ProfilePic);
  const [model, setmodel] = useState(false);
  const [uploadImage, setuploadImage] = useState(false);
  const [height, setheight] = useState(400);
  const [translateY, settranslateY] = useState(false);
  const actionSheet = useRef(new Animated.Value(0)).current;

  actionSheet.addListener(({value}) => {
    if (value == 0) {
      settranslateY(false);
    } else {
      settranslateY(true);
    }
  });
  const onLayout = event => {
    const {x, y, height, width} = event.nativeEvent.layout;
    setheight(height);
  };
  useEffect(() => {
    return () => {
      settranslateY(false);
    };
  }, []);
  const BottomSheetAnimation = Value => {
    Animated.timing(actionSheet, {
      duration: 200,
      toValue: -Value,
      useNativeDriver: true,
    }).start();
  };

  const takePhotoFromCamera = () => {
    BottomSheetAnimation(0);
    ImagePicker.openCamera({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setuserImage(image.path);

      setuploadImage(true);
    });
  };

  const choosePhotoFromLibrary = () => {
    BottomSheetAnimation(0);
    ImagePicker.openPicker({
      width: 200,
      height: 200,
      cropping: true,
      includeBase64: true,
    }).then(image => {
      setuserImage(image.path);
      setuploadImage(true);
    });
  };

  const ctaUpdateProfile = val => {
    dispatch(
      UpdateProfileApi(
        setinvalid,
        setalertShow,
        setloading,
        val.firstName,
        val.lastName,
        val.Phone,
        val.Address,
        uploadImage,
        userImage,
      ),
    );
  };

  const images = [
    {
      url: user?.ProfilePic,
    },
  ];

  const confirm = () => {
    navigation.navigate(NavStrings.TabHome);
  };
  return (
    <View style={styles.root}>
      <View style={styles.uppercontainer}>
        <TouchableOpacity
          style={styles.imageBtn}
          onPress={() => BottomSheetAnimation(height)}>
          <Image
            style={styles.image}
            source={{
              uri: userImage,
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.InputFieldContainer}>
        <Formik
          initialValues={{
            firstName: user?.FirstName,
            lastName: user?.LastName,
            Phone: !!user?.phone ? user.phone : '',
            Address: !!user?.address ? user.address : '',
          }}
          validationSchema={validationschema}
          onSubmit={values => ctaUpdateProfile(values)}>
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            setFieldTouched,
            touched,
          }) => {
            return (
              <>
                <Input
                  value={values.firstName}
                  onchange={handleChange('firstName')}
                  inputstyle={styles.fname}
                  name="First Name"
                  placeholder="First Name..."
                  blur={() => setFieldTouched('firstName')}
                />
                {errors.firstName && touched.firstName ? (
                  <Text style={styles.error}>{errors.firstName}</Text>
                ) : null}

                <Input
                  value={values.lastName}
                  onchange={handleChange('lastName')}
                  inputstyle={styles.inputfields}
                  name="Last Name"
                  blur={() => setFieldTouched('lastName')}
                  placeholder="Last Name..."
                />
                {errors.lastName && touched.lastName ? (
                  <Text style={styles.error}>{errors.lastName}</Text>
                ) : null}

                <Input
                  value={values.Phone}
                  onchange={handleChange('Phone')}
                  inputstyle={styles.inputfields}
                  name="Phone"
                  blur={() => setFieldTouched('Phone')}
                  placeholder="Phone..."
                />
                {errors.Phone && touched.Phone ? (
                  <Text style={styles.error}>{errors.Phone}</Text>
                ) : null}

                <Input
                  value={values.Address}
                  onchange={handleChange('Address')}
                  inputstyle={styles.inputfields}
                  name="Address"
                  blur={() => setFieldTouched('Address')}
                  placeholder="Address..."
                />
                {errors.Address && touched.Address ? (
                  <Text style={styles.error}>{errors.Address}</Text>
                ) : null}

                {invalid !== '' && <Text style={styles.error}>{invalid}</Text>}
                {/* // button */}

                <AppButton
                  onPress={handleSubmit}
                  name="Update Profile"
                  BTstyle={styles.btn}
                  loading={loading}
                />
              </>
            );
          }}
        </Formik>
        <SuccessAlerts
          title="profile"
          msg={'your profile has been updated'}
          confirm={() => confirm()}
          showAlert={alertShow}
        />
      </View>
      {translateY && (
        <TouchableOpacity
          activeOpacity={0.9}
          onPress={() => BottomSheetAnimation(0)}
          style={{
            height: '100%',
            width: '100%',
            position: 'absolute',
            backgroundColor: 'rgba(0, 0, 0,0.5)',
          }}
        />
      )}
      <Animated.View
        onLayout={onLayout}
        style={[
          styles.bottomSheet,
          {transform: [{translateY: actionSheet}], bottom: -height},
        ]}>
        <Text style={styles.bottomTitle}>Profile Image</Text>
        <Text style={styles.bottomDes}>Chose Your Profile picture</Text>
        <TouchableOpacity
          onPress={() => choosePhotoFromLibrary()}
          style={styles.sheetBtn}>
          <Text style={styles.sheetText}>Choose from Gallery</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => takePhotoFromCamera()}
          style={styles.sheetBtn}>
          <Text style={styles.sheetText}>Chose from Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.sheetBtn, {marginBottom: moderateVerticalScale(10)}]}
          onPress={() => {
            BottomSheetAnimation(0);
            setmodel(true);
          }}>
          <Text style={styles.sheetText}>View Image</Text>
        </TouchableOpacity>
      </Animated.View>
      <Modal visible={model} transparent={true}>
        <ImageViewer
          enableSwipeDown={true}
          onSwipeDown={() => setmodel(false)}
          imageUrls={images}
        />
      </Modal>
    </View>
  );
}
