/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getUserOtp } from '../../../../actions/otp';

export const otpMainVerify = ({ initDisabled, initDate, initOtpCode }) => {
  const [disabled] = useState(initDisabled);
  const [date, setDate] = useState(initDate);
  const [otpCode, setOtpCode] = useState(initOtpCode);
  const dispatch = useDispatch();
  const [keyss, setKeyss] = useState(0);
  const sendSubmit = (props, otpCodeGet) => {
    // eslint-disable-next-line no-restricted-globals
    event.preventDefault();
    const verification = {
      recipient: props.otp.recipient,
      otp: otpCodeGet,
      secret: props.otp.secret,
      build: 29,
      device: 'Sony*E6633*E6633',
      deviceId: '3e76a990b8b91ffe',
      platform: 2,
    };
    // setState({ disabled: !disabled });
    props.onSendVerify(verification);
    setOtpCode('');
  };

  const resetCode = props => {
    const user = {
      recipient: props.otp.recipient,
      channel: 'sms',
    };
    dispatch(getUserOtp({ user }));
    setKeyss(keyss + 1);
  };

  const resetComp = props => (
    <button
      type="button"
      className="btn-white btn"
      onClick={() => resetCode(props)}
    >
      ارسال مجدد کد
    </button>
  );

  return {
    disabled,
    date,
    setDate,
    keyss,
    otpCode,
    setOtpCode,
    sendSubmit,
    resetComp,
  };
};
