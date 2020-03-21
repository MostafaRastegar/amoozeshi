/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
const SnappAuthLayout = props => {
  const { className, children, title } = props;
  return (
    <div className={`whFull absolute authBg ${className}`}>
      <div className="authentication">
        <div className="">
          <div className="header__simple center rCol bottomP30">
            <div className="icon-bar bg-secondary round50 center">
              <i className="icon icon-profile text40 color-white" />
            </div>
            <span className="text18 bold">{title}</span>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

SnappAuthLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
};
export default SnappAuthLayout;
