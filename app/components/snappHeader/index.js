import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Container, Row, Col, Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import BottomMenu from './BottomMenu';
import { logOutUser } from '../../actions/auth';
import { addToast } from '../../actions/notifications';
import SnappAutocomplete from '../../components/snappAutocomplete';
import { history } from '../../store';
import messages from './messages';

import './style.scss';

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [breadCrumb, setBreadCrumb] = useState('');
  const dispatch = useDispatch();
  const auth = useSelector(state => state.Auth);
  const location = useSelector(state => state.router.location.pathname);
  const toggleNavbar = () => setCollapsed(!collapsed);
  const userLoggedOut = () => {
    dispatch(logOutUser({}));
    dispatch(addToast({
      text: 'You have successfully logged out',
      color: 'success',
      delay: 3000,
    }))
    history.push('/');
  };
  const pageTitle = () => {
    const splitLocation = location.split('/');
    splitLocation.forEach((item) => {
      switch (item) {
        case ('article'):
          setBreadCrumb('Blog');
          break;
        case ('authentication'):
          setBreadCrumb('Authentication');
          document.title = 'Authentication';
          break;
        case ('tags'):
          setBreadCrumb('Tags');
          document.title = 'Tags';
          break;
        case ('kit'):
          setBreadCrumb('kit');
          document.title = 'Kit';
          break;
      }
    });
    if (location == "/") {
      setBreadCrumb('Home');
      document.title = 'Snapp Blog';
    }
  }
  useEffect(() => {
    pageTitle()
  }, [location])

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
                <i className="icon icon-teacher"></i>
                <span>{messages.headerTop.education}</span>
              </div>
            </div>
            <div className="col-2">
              <div className="main-header__top-login-register">
                <i className="icon icon-profile"></i>
                <span>{messages.headerTop.login}</span>
                <span>|</span>
                <span>{messages.headerTop.register}</span>
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
  )
}

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}
NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
  // pass in custom element to use
}

export default Header;
