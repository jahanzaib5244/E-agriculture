import AsyncStorage from '@react-native-async-storage/async-storage';
import { FORGETPASSWORD, LOGIN, LOGOUT, RETREIVEDUSER, PUBLICVIDEO, COMPANIES, PRIVATEVIDEO, IMAGE } from '../States';
import axios from 'axios';
import {ToastAndroid , Platform ,AlertIOS } from 'react-native'
import { URL } from '../../config/URL';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const dologin = (email, password, setisinvalid, setloading) => async (dispatch) => {
    setloading(true)
    setisinvalid(null)

    try {
        let logindata = {
            usertoken: null,
        }
        const res=await auth().signInWithEmailAndPassword(email,password)
        console.log(res)
            logindata.usertoken = 'zaib'
           
           
            
            setloading(false)


     

        dispatch({
            type: LOGIN,
            payload: logindata
        })

    } catch (error) {
        setloading(false)
        setisinvalid('No Internet Connection')
        console.log(error)
    }

}
export const UpdateProfileApi = (setinvalid, setalertShow, setalertmsg, setloading, firstName, lastName, Phone, Address, DOB) => async (dispatch) => {
    try {
        setinvalid(null)
        setloading(true)
        let user_id = await AsyncStorage.getItem('user-id')
        let res = await axios.get(`${URL}action=update_user_profile&user_id=${user_id}&user_first_name=${firstName}&user_last_name=${lastName}&user_phone=${Phone}&user_address=${Address}&user_dob=${DOB}`)
        console.log(res.data)
        if (res.data.sts == 'success') {
            setalertmsg(res.data.msg)
            setalertShow(true)
        } else {
            if (res.data.sts == 'danger') {
                setinvalid(res.data.msg)
            }
        }
    } catch (error) {
        console.log(error)
    } finally {
        setloading(false)
    }
}

export const dologout = () => async (dispatch) => {
    try {
        dispatch({
            type: LOGOUT,
        })
    } catch (error) {
        console.log(error)
    }
}



export const ApiUpdatePassword = (setinvalid, setloading, oldPassword, Password, ConfirmPassword, setalertMsg, setshow) => async (dispatch) => {
    try {
        setloading(true)
        setinvalid(null)
        let user_id = await AsyncStorage.getItem('user-id')
        let res = await axios.get(`${URL}action=update_password&old_password=${oldPassword}&new_password=${Password}&confirm_password=${ConfirmPassword}&user_id=${user_id}`)
        console.log(res.data)
        if (res.data.sts == 'success') {
            setalertMsg(res.data.msg)
            setshow(true)
        } else {
            if (res.data.sts == "warning") {
                setinvalid(res.data.msg)
            }
        }
    } catch (error) {

    } finally {
        setloading(false)
    }
}




export const ForgetPasswordApi = (email, setisinvalid, setloading, setalertMsg, setshow) => async (dispatch) => {
    try {
        setisinvalid(null)
        console.log('api call')
        setloading(true)
        const res = await auth().sendPasswordResetEmail(email)
        console.log(res)
        
    } catch (error) {
        console.log(error)
    } finally {
        setloading(false)
    }
}

export const listCompanies = (getCompanies) => async (dispatch) => {
    let companies = []
    getCompanies(true)
    try {
        const res = await axios.get(`${URL}action=business_list`)
        console.log(res.data)
        if (res.data.sts == 'success') {
            companies = res.data.data
        }
        dispatch({
            type: COMPANIES,
            payload: companies
        })
    } catch (error) {
        console.log(error)
    } finally {
        getCompanies(false)
    }
}
export const RegisterApi = (setinvalid, setshow, setalertMsg, setloading, ConfirmPassword, Email,  firstName, lastName,  userName) => async (dispatch) => {
    try {
        setinvalid(null)
        console.log(setloading, ConfirmPassword, Email, firstName, lastName, userName,)
        setloading(true)
        const res = await auth().createUserWithEmailAndPassword(Email,ConfirmPassword)
       console.log(res.user.uid)
       const add = await firestore().collection('Users').doc(res.user.uid).set({
         FirstName: firstName,
         LastName: lastName,
         Email: Email,
         UserName: userName,
         ProfilePic: 'https://firebasestorage.googleapis.com/v0/b/e-agriculture-ca3f3.appspot.com/o/userProfiles%2Fdefault.png?alt=media&token=c1abb2b4-436e-4c19-94f4-6c741e3f73ef',
         uid: res.user.uid,
       })
       setshow(true)
       setalertMsg('User created successfully')
    } catch (error) {
        console.log(error,'register')
    } finally {
        setloading(false)
    }
}
export const uploadImage = (base64) => async (dispatch) => {
    try {
        var profile_pic = ""

        const imagedata = new FormData
        imagedata.append('img', base64)
        const userid = await AsyncStorage.getItem('user-id');

        const res = await axios.post(`${URL}action=update_profile_pic&user_id=${userid}`, imagedata)
        console.log(res)
        if (res.data.sts == 'success') {
            profile_pic = res.data.img_path

        }
        dispatch({
            type: IMAGE,
            payload: profile_pic
        })
    } catch (error) {

    }

}


