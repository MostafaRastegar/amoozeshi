import React from 'react';
import SnappFooter from '../../components/snappFooter';
import SnappHeader from '../../components/snappHeader';
import GlobalStyle from '../../global-styles';

const Layout = (props) => {
  return (
    <React.Fragment>
      <SnappHeader />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className='my-4'>
              {props.children}
            </div>
          </div>
        </div>
      </div>
      <SnappFooter />
      <GlobalStyle />
    </React.Fragment>
  )
}

export default Layout;
