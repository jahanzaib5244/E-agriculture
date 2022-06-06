import React, {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {dologin} from '../../Store/actions/AuthActions';

export default function Uselogin() {
  const dispatch = useDispatch();

  const [secureText, setsecureText] = useState(true);
  const [isinvalid, setisinvalid] = useState('');
  const [loading, setloading] = useState(false);

  useEffect(() => {
    return () => {
      setloading(false);
    };
  }, []);

  const doSigninUser = values => {
    dispatch(dologin(values.email, values.password, setisinvalid, setloading));
  };

  return [isinvalid, loading, doSigninUser, setsecureText, secureText];
}
