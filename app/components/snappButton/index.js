/**
 *
 * SnappButton
 *
 */

import React from 'react';
import { Button } from 'reactstrap';
import './style.scss';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

const SnappButton = props => {
  const { size, title, type } = props;
  return (
    <div>
      <Button
        className={`${size === 'small' ? 'smallButton' : 'bigButton'} ${
          type === 'primary' ? 'whiteButton' : 'greenButton'
        }`}
      >
        {title}
      </Button>
    </div>
  );
};

SnappButton.propTypes = {
  title: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
};
export default SnappButton;
