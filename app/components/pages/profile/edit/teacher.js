import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import ProfileLayout from '../partials/profileLayout'; // import a component from another file
import Loading from '../../../snappLoading';
import { signUpSubmit, useFormInput } from './util';
import { AnimateField } from '../../../snappForm';
import './style.scss';

const PageProfileEditTeacher = ({
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
              name="signUpSpecialty"
              value=""
              type="text"
              onChange=""
              onKeyPress={onKeyPress}
              label="عنوان تخصصی مدرس"
              placeholder="مثلا طراح رابط و تجربه کاربری"
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
              name="signUpPhone"
              value="کد ملی"
              type="text"
              label=""
              disabled
            />
            <AnimateField
              className="col-12"
              placeholder=" "
              name="signUpPhone"
              value="تصویر کارت ملی"
              type="text"
              label=""
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
            <AnimateField
              className="col-12"
              name="signUpResume"
              value=""
              type="text"
              onChange=""
              onKeyPress={onKeyPress}
              label="شماره شبا (جهت واریز حق تدریس)"
              placeholder="IR75220********"
              icon="chilivery-user"
              required
            />
            <AnimateField
              className="col-12"
              name="signUpResume"
              value=""
              type="text"
              onChange=""
              onKeyPress={onKeyPress}
              label="آخرین مدرک و رشته تحصیلی"
              placeholder="مثلا کارشناسی نرم‌افزار کامپیوتر"
              icon="chilivery-user"
              required
            />
            <AnimateField
              className="col-12"
              name="signUpResume"
              value=""
              type="text"
              onChange=""
              onKeyPress={onKeyPress}
              label="سوابق حرفه‌ای"
              placeholder="توضیحات مربوط به سوابق و توانمندی‌ها"
              icon="chilivery-user"
              required
            />
            <AnimateField
              className="col-12"
              name="signUpResume"
              value=""
              type="text"
              onChange=""
              onKeyPress={onKeyPress}
              label="لینک رزومه (اختیاری)"
              placeholder="فایل رزومه خود را ضمیمه کنید"
              icon="chilivery-user"
              required
            />
            <AnimateField
              className="col-12"
              name="signUpResume"
              value=""
              type="text"
              onChange=""
              onKeyPress={onKeyPress}
              label="عنوان اولین آموزش"
              placeholder="اولین موضوعی که می‌خواهید آموزش دهید"
              icon="chilivery-user"
              required
            />
            <AnimateField
              className="col-12"
              name="signUpResume"
              value=""
              type="text"
              onChange=""
              onKeyPress={onKeyPress}
              label="لینک‌(های) صفحه پروفایل شخصی"
              placeholder="linkedin/babak.haghighi"
              icon="chilivery-user"
              required
            />
          </div>
          <div className="topM20 wFull hP20 center bottomM20">
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

PageProfileEditTeacher.propTypes = {
  initIschecked: PropTypes.bool,
  initSignUpFullname: PropTypes.string,
  initSignUpUserEmail: PropTypes.string,
  initSignUpPass: PropTypes.string,
};
export default PageProfileEditTeacher;
