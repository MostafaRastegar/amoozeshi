import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';
const SnappAuthLayout = props => {
  const { className, children, title, icon } = props;
  return (
    <div
      className={`auth__layout wFull authBg bottomP30 ${!!className &&
        className}`}
    >
      <div className="header__simple center rCol bottomP30">
        <div className="icon-bar bg-secondary round50 center">
          <i className={`icon text40 color-white ${icon}`} />
        </div>
        {!!title && <span className="text18 bold">{title}</span>}
      </div>
      <div className="center rCol">{children}</div>
    </div>
  );
};

SnappAuthLayout.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  icon: PropTypes.string,
};
SnappAuthLayout.defaultProps = {
  icon: 'icon-profile',
};
export default SnappAuthLayout;
