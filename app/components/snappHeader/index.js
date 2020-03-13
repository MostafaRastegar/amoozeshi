import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { logOutUser } from '../../actions/auth';
import { addToast } from '../../actions/notifications';
import SnappAutocomplete from '../../components/snappAutocomplete';
import { history } from '../../store';
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
    <header className="header-main">
      <div className="header-main__top">
        <div className="container">
          <div className="row center">
            <div className="col-2">
            <div className="header-main__top-logo">
                <i className="icon icon-profile"/>
                <span className="rightM10">آموزش‌جو</span>
              </div>
            </div>
            <div className="col-5">
              <SnappAutocomplete/>
            </div>
            <div className="col-3">
              <div className="header-main__top-education">
                <i className="icon icon-profile"></i>
                <span>تدریس در آموزش‌جو</span>
              </div>
            </div>
            <div className="col-2">
              <div className="header-main__top-login-register">
                <i className="icon icon-profile"></i>
                <span>ورود</span>
                <span>|</span>
                <span>ثبت‌نام</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-main__bottom"></div>
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
