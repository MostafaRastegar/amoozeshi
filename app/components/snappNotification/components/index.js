import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import SnappAlert from '../../snappAlert';

const Toast = props => {
  const { delay, onDismissClick, text, color } = props;
  useEffect(() => {
    const alertTimer = delay === '' ? 2000 : delay;
    setTimeout(() => {
      onDismissClick();
    }, alertTimer);
  }, []);

  return (
    <li className="toast">
      <SnappAlert type={color}>{text}</SnappAlert>
    </li>
  );
};
Toast.propTypes = {
  delay: PropTypes.number,
  onDismissClick: PropTypes.func,
  text: PropTypes.string,
  color: PropTypes.string,
};
export default Toast;
