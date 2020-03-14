import React from 'react';
import './style.scss';

const SnappLoading = (props)=>{
  return (
    <div id="loader-wrapper" className={props.className}>
      <div id="loader-body">
        <div id="loader"></div>
        {/* <div className="laoder-body-text">
          لطفا شکیبا باشید ...
        </div> */}
      </div>
    </div>
  );
}

export default SnappLoading;