/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { otpSignupAction } from '../../../../actions/otp';
import SnappNumber from '../../../snappNumber';

export function signUpSubmit({ signUpFullname, signUpUserEmail, signUpPass }) {
  const dispatch = useDispatch();
  const otp = useSelector(state => state.otp);

  const signUpSubmitFunc = () => {
    const user = {
      name: SnappNumber(signUpFullname.value),
      email: SnappNumber(signUpUserEmail.value),
      recipient: otp.recipient ? otp.recipient : '',
      password: signUpPass.value,
      verification_token: otp.verificationToken ? otp.verificationToken : '',
      expires_at: otp.expiresAt ? otp.expiresAt : 0,
      build: 29,
      device: 'Sony*E6633*E6633',
      deviceId: '3e76a990b8b91ffe',
      platform: '2',
    };
    dispatch(otpSignupAction({ user }));
  };
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      signUpSubmitFunc();
    }
  };

  const SubmitComp = () => (
    <button
      type="button"
      className="btn btn-auth btn-success"
      onClick={() => signUpSubmitFunc()}
    >
      ثبت‌نام دانشجو
    </button>
  );
  return {
    SubmitComp,
    onKeyPress: handleKeyPress,
  };
}

export function useFormInput(initValue) {
  const [value, setValue] = useState(initValue);
  const handleChange = e => {
    setValue(e.target.value);
  };
  return {
    value,
    setValue,
    onChange: handleChange,
  };
}
