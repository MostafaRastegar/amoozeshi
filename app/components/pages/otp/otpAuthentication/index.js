import React from 'react';
import { AnimateField } from '../../../snappForm';
import { loginSubmit, useFormInput } from './util';
import SnappAuthLayout from '../../../snappAuthLayout';

import './style.scss';
function Login() {
  const recipient = useFormInput('');
  const { SubmitComp, onKeyPress } = loginSubmit(recipient, 'login');
  return (
    <>
      <SnappAuthLayout title="ورود | ثبت نام">
        <div className="padd10 wFull" style={{ textAlign: 'center' }}>
          <span className="dblock text14 gray1">
            شماره موبایل خود را وارد و کد تایید را دریافت کنید
          </span>
        </div>
        <div className="loginForm padd20">
          <AnimateField
            className="col-12"
            placeholder=" "
            name="recipient"
            value={recipient.value}
            type="tel"
            onChange={recipient.onChange}
            label="موبایل"
            onKeyPress={onKeyPress}
            icon="chilivery-online-pay-help"
            iconColor="#A19F2E"
          />
        </div>
        <div className="wFull hP20 center bottomM20 otp-auth__enter bottomP40">
          <SubmitComp />
        </div>
      </SnappAuthLayout>
    </>
  );
}

export default Login;
