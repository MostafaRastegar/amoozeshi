/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProfileMenu = props => {
  const { userLogOut } = props;
  const auth = {
    fullname: 'بابک حقیقی',
    rule: 'طراح رابط و تجربه کاربری',
    email: 'm.rastegar@gmail.com',
    mobileNumber: '09358537536',
  };
  return (
    <div>
      <div className="profile-home relative profile-home__vip-not">
        <div className="profile-user bg-primary color-white">
          <div className="profile bottomP30 topP30">
            <div className="profile__image center">
              <span className="icon chilivery-user"> </span>
            </div>

            <div className="profile__character">
              <h5 className="profile__name text16 color-white">
                {auth.fullname}
              </h5>
            </div>
            <div className="profile__character">
              <h5 className="profile__name color-grey-220">{auth.rule}</h5>
            </div>

            <div className="profile__character bottomP15 topP5 flex rRow wFull spaceAround">
              <div className="rCol flex text13">
                <span className="title bottomP5 color-grey-220">
                  تعداد دوره
                </span>
                <span className="detail">2</span>
              </div>
              <div className="rCol flex text13">
                <span className="title bottomP5 color-grey-220">
                  موجودی شما
                </span>
                <span className="detail">20000 تومان</span>
              </div>
              <div className="rCol flex text13">
                <span className="title bottomP5 color-grey-220">
                  تعداد دانشجو
                </span>
                <span className="detail">2</span>
              </div>
            </div>
            <div className="profile__character flex rRow wFull center">
              <button type="button" className="btn btn-success center">
                <span className="icon-circle-pluse leftP10" />
                <span>ایجاد دوره آموزشی</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="page-profile__sidebar-menu bg-white">
        <div className="page-profile__sidebar-menu__item">
          <Link
            to="/profile/order/"
            className="accordion__title accordion_hide"
          >
            <span className="icon-circle-pluse leftP10 text22 success" />
            <span className="accordion__list-text primary">
              ویرایش اطلاعات شخصی
            </span>
          </Link>
        </div>

        <div className="page-profile__sidebar-menu__item">
          <Link
            to="/profile/transaction/"
            className="accordion__title accordion_hide"
          >
            <span className="icon-circle-pluse leftP10 text22 orange-13">
              {' '}
            </span>
            <span className="accordion__list-text primary">
              آموزش‌های تولید شده
            </span>
          </Link>
        </div>

        <div className="page-profile__sidebar-menu__item">
          <Link
            to="/profile/fav-restaurant/"
            className="accordion__title accordion_hide"
          >
            <span className="icon-circle-pluse leftP10 text22 red"> </span>
            <span className="accordion__list-text primary">
              دوره‌هایی که خریده‌ام
            </span>
          </Link>
        </div>

        <div className="page-profile__sidebar-menu__item">
          <Link
            to="/profile/my-Comments/"
            className="accordion__title accordion_hide"
          >
            <span className="icon-circle-pluse leftP10 text22 green-1"> </span>
            <span className="accordion__list-text primary">نشان شده‌ها</span>
          </Link>
        </div>

        <div className="page-profile__sidebar-menu__item">
          <Link
            to="/profile/change-pass/"
            className="accordion__title accordion_hide"
          >
            <span className="icon-circle-pluse leftP10 text22 green-1"> </span>
            <span className="accordion__list-text primary">کیف پول</span>
          </Link>
        </div>
        <div className="page-profile__sidebar-menu__item">
          <Link
            to="/profile/change-pass/"
            className="accordion__title accordion_hide"
          >
            <span className="icon-circle-pluse leftP10 text22 green-1"> </span>
            <span className="accordion__list-text primary">تراکنش‌ها</span>
          </Link>
        </div>
        <div className="page-profile__sidebar-menu__item">
          <Link
            to="/profile/change-pass/"
            className="accordion__title accordion_hide"
          >
            <span className="icon-circle-pluse leftP10 text22 green-1"> </span>
            <span className="accordion__list-text primary">نظرهای من</span>
          </Link>
        </div>

        <div className="page-profile__sidebar-menu__item">
          <span
            className="accordion__title accordion_hide"
            onClick={() => userLogOut()}
          >
            <span className="icon-circle-pluse leftP10 text22 green-1"> </span>
            <span className="accordion__list-text primary">خروج</span>
          </span>
        </div>
      </div>
    </div>
  );
};

ProfileMenu.propTypes = {
  userLogOut: PropTypes.func,
};

export default ProfileMenu;
