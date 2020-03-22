import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const isAbsoluteUrl = url => /^https?:\/\//.test(url);

const LinkDuo = props => {
  const { route, className, children } = props;
  return isAbsoluteUrl(route) ? (
    <a target="_blank" href={route} className={className}>
      {children}
    </a>
  ) : (
    <Link to={route} className={className}>
      {children}
    </Link>
  );
};

LinkDuo.propTypes = {
  route: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};
export default LinkDuo;
