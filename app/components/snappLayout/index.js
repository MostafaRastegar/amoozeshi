import React from 'react';
import PropTypes from 'prop-types';
import SnappFooter from '../snappFooter';
import SnappHeader from '../snappHeader';
import GlobalStyle from '../../global-styles';

const Layout = props => {
  const { children } = props;
  return (
    <>
      <SnappHeader />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="my-4">{children}</div>
          </div>
        </div>
      </div>
      <SnappFooter />
      <GlobalStyle />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
