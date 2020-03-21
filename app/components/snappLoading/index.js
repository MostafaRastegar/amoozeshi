import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const SnappLoading = props => {
  const { className } = props;
  return (
    <div id="loader-wrapper" className={className}>
      <div id="loader-body">
        <div id="loader" />
        {/* <div className="laoder-body-text">
          لطفا شکیبا باشید ...
        </div> */}
      </div>
    </div>
  );
};

SnappLoading.propTypes = {
  className: PropTypes.string,
};

export default SnappLoading;
