import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const isAbsoluteUrl = (url) => {
  return /^https?:\/\//.test(url);
}

const LinkDuo = function (props) {
  return isAbsoluteUrl(props.route) ?
    <a
      target="_blank"
      href={props.route}
      className={props.className}
    >
      {props.children}
    </a> : <Link to={props.route} className={props.className}>
      {props.children}
    </Link>
}

export default LinkDuo;
