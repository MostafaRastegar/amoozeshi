/* eslint-disable react/button-has-type */
import React from 'react';

import './style.scss';
const SnappAuthLayout = (props) => {
    return (
      <div className={`whFull absolute authBg ${props.className}`}>
        <div className="authentication">
          <div className="">
            <div className="header__simple center rCol bottomP30">
            <div className="icon-bar bg-secondary round50 center">
              <i className="icon icon-profile text40 color-white"></i>
            </div>
            <span className="text18 bold">
              {props.title}
            </span>
            </div>
            <div>
              {props.children}
            </div>
          </div>
        </div>
      </div>
    );
}

export default SnappAuthLayout;
