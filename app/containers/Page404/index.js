import React from 'react';
import { Link } from 'react-router-dom';
const icon = require('../../images/icons/search_no_result.png');
const Page404 = () => (
  <div className="page-404 vhFull center">
    <div className="page-404__main rCol">
      <div className="page-404__icon bottomP15">
        <img className="page-404__img" src={icon} alt="" />
      </div>
      <div className="page-404__icon bottomP15 text-center">
        <p className="page-404__title">404 page</p>
        <Link to="/" className="btn btn-danger">
          go to home
        </Link>
      </div>
    </div>
  </div>
);

export default Page404;
