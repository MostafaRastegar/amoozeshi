import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProfileLayout from '../partials/profileLayout'; // import a component from another file
import Loading from '../../../snappLoading';
import { signUpSubmit, useFormInput } from './util';
import { AnimateField } from '../../../snappForm';
import './style.scss';

const PageProfileEditStudent = ({
  initIschecked = false,
  initSignUpFullname = '',
  initSignUpUserEmail = '',
  initSignUpPass = '',
}) => {
  const loading = false;
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
    <ProfileLayout>
      {!loading ? (
        <div className="page-profile-edit">
          <div className="registerForm padd20 bottomP30 wFull">
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
          </div>
          <div className="wFull hP20 center bottomM20">
            <SubmitComp />
          </div>
        </div>
      ) : (
        <div className="center">
          <Loading />
        </div>
      )}
    </ProfileLayout>
  );
};

PageProfileEditStudent.propTypes = {
  initIschecked: PropTypes.bool,
  initSignUpFullname: PropTypes.string,
  initSignUpUserEmail: PropTypes.string,
  initSignUpPass: PropTypes.string,
};
export default PageProfileEditStudent;
