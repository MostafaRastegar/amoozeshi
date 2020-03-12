import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { logOutUser } from '../../actions/auth';
import { addToast } from '../../actions/notifications';
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
    <React.Fragment>
      <div className={`headerResBg`}>
        <div className="container">
          <Navbar color="faded" light expand="md">
            <NavbarBrand className="mr-auto text-white">Snapp Blog</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar className="customNav">
              <Nav navbar>
                <NavItem>
                  <NavLink to="/" className={"nav-link text-white"}>Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink to="/kit" className={"nav-link text-white"}>Kit</NavLink>
                </NavItem>
              </Nav>
              {auth.token ? <button onClick={userLoggedOut}
                className={`btn btn-transparent text-white btnTransparent`}>
                Logout
                </button> :
                <NavLink
                  to="/authentication"
                  className={`btn btn-transparent text-white btnTransparent`}>
                  Login / Register
                </NavLink>
              }
            </Collapse>
          </Navbar>
        </div>
      </div>
      <header className={`bg-primary text-white mainHeader center`}>
        <h1 className="flex">{breadCrumb}</h1>
      </header>
    </React.Fragment>
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
