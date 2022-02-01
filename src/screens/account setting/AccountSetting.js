import React, { useState ,useEffect} from 'react'
import { Image, View, Text, ScrollView, TouchableOpacity,Modal } from 'react-native'
import { useSelector } from 'react-redux'
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch } from 'react-redux'
import moment from 'moment';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import ImagePicker from 'react-native-image-crop-picker';


import ImageViewer from 'react-native-image-zoom-viewer';

import Input from '../../component/Input'
import { AccountSettingStyle } from './AccountSettingStyle'
import AppButton, { LoadingButton } from '../../component/AppButton'
import { SuccessAlerts } from '../../component/Alerts'
import { UpdateProfileApi } from '../../Store/actions/AuthActions'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { size } from '../../config/Utils';
import { uploadImage } from '../../Store/actions/AuthActions';

const validationschema = Yup.object().shape({
    Phone: Yup.number().required().label("Phone"),
    firstName: Yup.string().required().trim().label("First Name"),
    lastName: Yup.string().required().trim().label("Last Name"),
    Address: Yup.string().required().trim().label("Adress"),
    DOB: Yup.string().required().label('Date Of Birth')

});


export default function AccountSetting() {
    const dispatch = useDispatch()
 
    const profilePic = useSelector(state => state.AuthReducer.ProfilePic)

    console.log(profilePic)

    const [loading, setloading] = useState(false)
    const [invalid, setinvalid] = useState(null)
    const [userDOB, setuserDOB] = useState('29-11-1997')
    const [alertmsg, setalertmsg] = useState('')
    const [alertShow, setalertShow] = useState(false)
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [userImage, setuserImage] = useState(profilePic)
    const [model, setmodel] = useState(false)
    const [date, setdate] = useState('')


    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
            width: 200,
            height: 200,
            cropping: true,
            includeBase64: true,

        }).then(image => {
            console.log(image);
            setuserImage(image.path);
            // dispatch(uploadImage(image.data))
            this.bs.current.snapTo(1);
        });
    }

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
            width: 200,
            height: 200,
            cropping: true,
            includeBase64: true,

        }).then(image => {
            console.log(image);
            setuserImage(image.path);
            // dispatch(uploadImage(image.data))
            this.bs.current.snapTo(1);
        });
    }
    renderInner = () => (
        <View style={AccountSettingStyle.panel}>
            <View style={{ alignItems: 'center' }}>
                <Text style={AccountSettingStyle.panelTitle}>Upload Photo</Text>
                <Text style={AccountSettingStyle.panelSubtitle}>Choose Your Profile Picture</Text>
            </View>
            <TouchableOpacity
                style={AccountSettingStyle.panelButton}
                onPress={() => {
                    this.bs.current.snapTo(1)
                    setmodel(true)
                }}>
                <Text style={AccountSettingStyle.panelButtonTitle}>View Image</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AccountSettingStyle.panelButton} onPress={takePhotoFromCamera}>
                <Text style={AccountSettingStyle.panelButtonTitle}>Take Photo</Text>
            </TouchableOpacity>
            <TouchableOpacity style={AccountSettingStyle.panelButton} onPress={choosePhotoFromLibrary}>
                <Text style={AccountSettingStyle.panelButtonTitle}>Choose From Library</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={AccountSettingStyle.panelButton}
                onPress={() => { this.bs.current.snapTo(1) }}>
                <Text style={AccountSettingStyle.panelButtonTitle}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );

    renderHeader = () => (
        <View style={AccountSettingStyle.header}>
            <View style={AccountSettingStyle.panelHeader}>
                <View style={AccountSettingStyle.panelHandle} />
            </View>
        </View>
    );

    bs = React.createRef();
    fall = new Animated.Value(1);


    const ctaUpdateProfile = (val) => {
        console.log('clicked', val)
        // dispatch(UpdateProfileApi(setinvalid, setalertShow, setalertmsg, setloading, val.firstName, val.lastName, val.Phone, val.Address, userDOB))
    }
    const confirm = () => {
        setalertShow(false)
    }
    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        let pickDate = moment(date).format('YYYY-MM-DD');
        setdate(moment(pickDate).format("D-MMM-YYYY"))
        console.log(pickDate)
        setuserDOB(pickDate)
        hideDatePicker();
    };
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };


    const images = [{
        url: profilePic
    }]
useEffect(() => {
setdate(moment().format('D-MMM-YYYY'))
}, []);

    return (
        <ScrollView contentContainerStyle={AccountSettingStyle.root}>

            <BottomSheet
                ref={this.bs}
                snapPoints={[size.height40 + 60, 0]}
                renderContent={this.renderInner}
                renderHeader={this.renderHeader}
                initialSnap={1}
                callbackNode={this.fall}
                enabledGestureInteraction={true}
            />
            <Animated.View style={{
                flex: 1,
                opacity: Animated.add(0, Animated.multiply(this.fall, 1.0)),
            }}>
                <View style={AccountSettingStyle.uppercontainer} >
                    <TouchableOpacity style={AccountSettingStyle.imageBtn} onPress={() => this.bs.current.snapTo(0)}>
                        <Image style={AccountSettingStyle.image} source={{ uri: "https://www.gstatic.com/mobilesdk/160503_mobilesdk/logo/2x/firebase_28dp.png" }} />
                    </TouchableOpacity>
                </View>
                <View style={AccountSettingStyle.lowerContainer}>
                    <Formik
                        initialValues={{ firstName: 'muhammad', lastName:'jahanzaib', Phone:'03487789894', Address: "GM ABAD", DOB: userDOB }}
                        validationSchema={validationschema}
                        onSubmit={values => ctaUpdateProfile(values)}>
                        {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => {
                            console.log(errors)
                            return (
                                <>
                                    <View style={AccountSettingStyle.InputFieldContainer}>
                                        <Input
                                            defaultValue={'muhammad'}
                                            onchange={handleChange("firstName")}
                                            inputstyle={AccountSettingStyle.fname}
                                            name='First Name'
                                            placeholder='First Name...'
                                            blur={() => setFieldTouched("firstName")}
                                        />
                                        {errors.firstName && touched.firstName ? <Text style={AccountSettingStyle.error}>{errors.firstName}</Text> : null}

                                        <Input
                                            defaultValue={'jahanzaib'}
                                            onchange={handleChange("lastName")}
                                            inputstyle={AccountSettingStyle.inputfields}
                                            name='Last Name'
                                            blur={() => setFieldTouched("lastName")}
                                            placeholder='Last Name...'
                                        />
                                        {errors.lastName && touched.lastName ? <Text style={AccountSettingStyle.error}>{errors.lastName}</Text> : null}

                                        <Input
                                            defaultValue={'03487789894'}
                                            onchange={handleChange("Phone")}
                                            inputstyle={AccountSettingStyle.inputfields}
                                            name='Phone'

                                            blur={() => setFieldTouched("Phone")}
                                            placeholder='Phone...'
                                        />
                                        {errors.Phone && touched.Phone ? <Text style={AccountSettingStyle.error}>{errors.Phone}</Text> : null}

                                        <Input
                                            defaultValue={'GM-Abad'}
                                            onchange={handleChange("Address")}
                                            inputstyle={AccountSettingStyle.inputfields}
                                            name='Address'
                                            blur={() => setFieldTouched("Address")}
                                            placeholder='Address...'
                                        />
                                        {errors.Address && touched.Address ? <Text style={AccountSettingStyle.error}>{errors.Address}</Text> : null}
                                        <TouchableOpacity onPress={showDatePicker}>
                                            <Input
                                                defaultValue={date}
                                                onchange={handleChange("DOB")}
                                                inputstyle={AccountSettingStyle.inputfields}
                                                name='Date Of Birth'
                                                blur={() => setFieldTouched("DOB")}
                                                placeholder='Date Of Birth...'
                                                editable={false}
                                                color='black'
                                            />
                                        </TouchableOpacity>
                                        {errors.DOB && touched.DOB ? <Text style={AccountSettingStyle.error}>{errors.DOB}</Text> : null}
                                        {!!invalid && <Text style={AccountSettingStyle.error}>{invalid}</Text>}
                                        {/* // button */}
                                        {loading ?
                                            <LoadingButton BTstyle={AccountSettingStyle.btn} />
                                            :
                                            <AppButton onPress={handleSubmit} name='Update Profile' BTstyle={AccountSettingStyle.btn} />
                                        }

                                    </View>
                                </>
                            )
                        }}
                    </Formik>
                    <SuccessAlerts title='profile' msg={alertmsg} confirm={() => confirm()} showAlert={alertShow} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                        date={new Date(userDOB)}
                    />
                </View>
            </Animated.View>
            <Modal visible={model} transparent={true}>

                <ImageViewer
                    enableSwipeDown={true}
                    onSwipeDown={() => setmodel(false)}
                    imageUrls={images} />


            </Modal>
        </ScrollView>
    )
}
