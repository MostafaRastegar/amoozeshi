import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Row, Col, Navbar, NavbarBrand } from 'reactstrap';
import BottomMenu from './BottomMenu';
import SnappAutocomplete from '../snappAutocomplete';
import messages from './messages';

import './style.scss';

const Header = () => {
  const [, setBreadCrumb] = useState('');
  const location = useSelector(state => state.router.location.pathname);
  const pageTitle = () => {
    const splitLocation = location.split('/');
    splitLocation.forEach(item => {
      // eslint-disable-next-line default-case
      switch (item) {
        case 'article':
          setBreadCrumb('Blog');
          break;
        case 'authentication':
          setBreadCrumb('Authentication');
          document.title = 'Authentication';
          break;
        case 'tags':
          setBreadCrumb('Tags');
          document.title = 'Tags';
          break;
        case 'kit':
          setBreadCrumb('kit');
          document.title = 'Kit';
          break;
      }
    });
    if (location === '/') {
      setBreadCrumb('Home');
      document.title = 'Snapp Blog';
    }
  };
  useEffect(
    () => {
      pageTitle();
    },
    [location],
  );

  return (
    <header className="main-header">
      <div className="main-header__top center">
        <div className="container">
          <div className="row center">
            <div className="col-2">
              <div className="main-header__top-logo">
                <i className="icon icon-profile" />
                <span className="rightM10">{messages.headerTop.logo}</span>
              </div>
            </div>
            <div className="col-5">
              <SnappAutocomplete />
            </div>
            <div className="col-3">
              <div className="main-header__top-education">
                <i className="icon icon-teacher" />
                <span>{messages.headerTop.education}</span>
              </div>
            </div>
            <div className="col-2">
              <div className="main-header__top-login-register">
                <i className="icon icon-profile" />
                <Link to="/authentication/">{messages.headerTop.login}</Link>
                <span>|</span>
                <Link to="/register/">{messages.headerTop.register}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main-header__bottom">
        <Container>
          <Row className="main-header__bottom-inner">
            <Col>
              <BottomMenu />
            </Col>
          </Row>
        </Container>
      </div>
    </header>
  );
};

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};
NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};

export default Header;
