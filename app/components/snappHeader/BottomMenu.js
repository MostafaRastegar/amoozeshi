import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  Collapse,
  Navbar,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
} from 'reactstrap';

import messages from './messages';

const HeaderMenu = props => {
  const { pathname } = props;
  const [isOpen] = useState(false);
  const [mainMenu] = useState(messages.bottomMenu);
  const [pathName, setPathName] = useState(pathname);

  useEffect(
    () => {
      setPathName(pathname);
    },
    [pathname],
  );

  return (
    <div>
      <Navbar light expand="xs">
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <span className="nav-link-logo">
              <img src="" alt="tik8" />
            </span>

            <NavItem>
              <NavLink
                className={`nav-link${pathName === '/' ? ' active-link' : ''}`}
                to="/"
              >
                صفحه اصلی
              </NavLink>
            </NavItem>
            {mainMenu.map((item, index) => (
              <NavItem
                key={item.slug}
                className={index + 2 >= 4 ? 'd-none d-lg-block' : ''}
              >
                <NavLink
                  className="nav-link"
                  activeClassName="active-link"
                  to={`/category/${item.slug}/`}
                >
                  {item.title}
                </NavLink>
              </NavItem>
            ))}
            <UncontrolledDropdown
              className="d-lg-none panigale__header_bottom-more-menu"
              nav
              inNavbar
            >
              <DropdownToggle nav caret>
                بیشتر
              </DropdownToggle>
              <DropdownMenu right>
                {mainMenu.map((item, index) => (
                  <React.Fragment key={item.slug}>
                    {index + 2 >= 4 && (
                      <NavLink
                        className="nav-link"
                        to={`/category/${item.slug}/`}
                      >
                        {item.title}
                      </NavLink>
                    )}
                  </React.Fragment>
                ))}
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
});
HeaderMenu.propTypes = {
  pathname: PropTypes.string,
};
export default connect(mapStateToProps)(HeaderMenu);
