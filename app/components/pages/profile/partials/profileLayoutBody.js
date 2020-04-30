import React from 'react';
import PropTypes from 'prop-types';
const ProfileLayoutBody = props => {
  const { title, children } = props;
  return (
    <div>
      <h2 className="page-profile__title">
        <i className="icon icon-single-01 mr-2" />
        {title}
      </h2>
      <div className="page-profile__body">{children}</div>
    </div>
  );
};

ProfileLayoutBody.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};
export default ProfileLayoutBody;
