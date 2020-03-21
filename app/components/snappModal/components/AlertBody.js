/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
const AlertBody = props => {
  const { alertTitle, children, verifyClick, toggle } = props;
  return (
    <div className="snapp-modal_alert-main overhide">
      <div className="center rCol absolute whFull hP30 bottomP50">
        <h3 className="centerText text20 bold">{alertTitle}</h3>
        <p className="centerText topM20 bottomM">{children}</p>
      </div>
      <div className="flex snapp-modal_alert-footer absolute bottom left right wFull white">
        <div
          className="col snapp-modal_alert-footer-item center"
          onClick={verifyClick}
        >
          <span>تایید</span>
        </div>
        <div
          className="col snapp-modal_alert-footer-item center"
          onClick={toggle}
        >
          <span>انصراف</span>
        </div>
      </div>
    </div>
  );
};
AlertBody.propTypes = {
  alertTitle: PropTypes.string,
  children: PropTypes.node,
  verifyClick: PropTypes.func,
  toggle: PropTypes.func,
};
export default AlertBody;
