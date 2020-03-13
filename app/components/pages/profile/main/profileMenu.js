import React from 'react';
import { Link } from 'react-router-dom';

function ProfileMenu(props) {
  return (
    <div className="chili-more-menu">
      <div className="chili-more-menu__item">

        <Link to="/profile/order/" className={`accordion__title accordion_hide bgWhite`}>
            <span className="icon-circle-pluse leftP10 text22 success"> </span>
            <span className={`accordion__list-text primary`}>سفارش های من</span>
        </Link>
      </div>

      <div className="chili-more-menu__item">

        <Link to="/profile/transaction/" className={`accordion__title accordion_hide bgWhite`}>
            <span className="icon-circle-pluse leftP10 text22 orange-13"> </span>
            <span className={`accordion__list-text primary`}>تراکنش های من</span>
        </Link>
      </div>


      <div className="chili-more-menu__item">

        <Link to="/profile/fav-restaurant/" className={`accordion__title accordion_hide bgWhite`}>
            <span className="icon-circle-pluse leftP10 text22 red"> </span>
            <span className={`accordion__list-text primary`}>علاقه مندی های من</span>
        </Link>
      </div>

      <div className="chili-more-menu__item">

        <Link to="/profile/my-Comments/" className={`accordion__title accordion_hide bgWhite`}>
            <span className="icon-circle-pluse leftP10 text22 green-1"> </span>
            <span className={`accordion__list-text primary`}>نظرات من</span>
        </Link>
      </div>

      <div className="chili-more-menu__item">

        <Link to="/profile/change-pass/" className={`accordion__title accordion_hide bgWhite`}>
            <span className="icon-circle-pluse leftP10 text22 green-1"> </span>
            <span className={`accordion__list-text primary`}>تغییر رمز عبور</span>
        </Link>
      </div>

      <div className="chili-more-menu__item">
        <span className={`accordion__title accordion_hide bgWhite`} onClick={() => props.userLogOut()}>
          <span className="icon-circle-pluse leftP10 text22 green-1"> </span>
          <span className={`accordion__list-text primary`}>خروج</span>
        </span>
      </div>

    </div>
  );
}

export default ProfileMenu;
