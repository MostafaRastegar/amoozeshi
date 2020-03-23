import React from 'react';
import PropTypes from 'prop-types';
import SnappFooter from '../snappFooter';
import SnappHeader from '../snappHeader';
import GlobalStyle from '../../global-styles';

const Layout = props => {
  const { children } = props;
  return (
    <div className="bg-grey-160">
      <SnappHeader />
      <main className="main-body container">
        <div className="row">
          <div className="col-12">
            <div className="my-4">{children}</div>
          </div>
        </div>
      </main>
      <SnappFooter />
      <GlobalStyle />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
