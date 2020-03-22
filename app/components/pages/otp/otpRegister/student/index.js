import React, { useEffect, useState } from 'react';
// import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { signUpSubmit, useFormInput } from '../util';
import { AnimateField } from '../../../../snappForm';
// import { otpPermission } from '../util';
import SnappAuthLayout from '../../../../snappAuthLayout';

// import 'react-accessible-accordion/dist/fancy-example.css';
import '../style.scss';

const OtpRegister = ({
  initIschecked = false,
  initSignUpFullname = '',
  initSignUpUserEmail = '',
  initSignUpPass = '',
}) => {
  // otpPermission();
  // const otp = useSelector(state => state.otp);

  const signUpFullname = useFormInput(initSignUpFullname);
  const signUpUserEmail = useFormInput(initSignUpUserEmail);
  const signUpPass = useFormInput(initSignUpPass);

  const [isChecked] = useState(initIschecked);
  const { SubmitComp, onKeyPress } = signUpSubmit({
    signUpFullname,
    signUpUserEmail,
    signUpPass,
  });

  useEffect(
    () => {
      if (isChecked === false) {
        signUpPass.setValue('');
      }
    },
    [isChecked],
  );

  return (
    <SnappAuthLayout title="ثبت‌نام دانشجو">
      <div className="registerForm padd20 bottomP30 wFull">
        <AnimateField
          className="col-12"
          placeholder=" "
          name="signUpPhone"
          value="09358537536"
          type="text"
          label="شماره موبایل"
          icon="chilivery-online-pay-help"
          disabled
        />
        <AnimateField
          className="col-12"
          placeholder=" "
          name="signUpFullname"
          value={signUpFullname.value}
          type="text"
          onChange={signUpFullname.onChange}
          onKeyPress={onKeyPress}
          label="نام و نام خانوادگی"
          icon="chilivery-user"
          required
        />
        <AnimateField
          className="col-12"
          placeholder=" "
          name="signUpUserEmail"
          value={signUpUserEmail.value}
          type="text"
          onChange={signUpUserEmail.onChange}
          onKeyPress={onKeyPress}
          label="ایمیل (اختیاری، درصورت تمایل به دریافت تخفیف‌ها)"
          // icon="chilivery-email"
          required
          // validation={['ایمیل اشتباه است.']}
        />
        {isChecked && (
          <AnimateField
            className="col-12"
            placeholder=" "
            name="signUpPass"
            onChange={signUpPass.onChange}
            value={signUpPass.value}
            type="password"
            label="رمزعبور"
            // icon="chilivery-pass"
            onKeyPress={onKeyPress}
          />
        )}

        <div className="text-center">
          <span className="ruleAndCondition midText">
            با کلیک بر روی دکمه ثبت نام شما
            <span className="ruleAndCondition__link">
              <span className="accordion__list-text">
                {'\u00A0'}
                قوانین سایت
                {'\u00A0'}
              </span>
            </span>
            را پذیرفته اید
          </span>
        </div>
      </div>
      <div className="topM20 wFull hP20 center bottomM20">
        <SubmitComp />
      </div>
    </SnappAuthLayout>
  );
};
OtpRegister.propTypes = {
  initIschecked: PropTypes.bool,
  initSignUpFullname: PropTypes.string,
  initSignUpUserEmail: PropTypes.string,
  initSignUpPass: PropTypes.string,
};

export default OtpRegister;
