/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
// import Router from 'next/router'

export const otpPermission = () => {
  const otp = useSelector(state => state.otp);
  useEffect(() => {
    if (!otp.recipient) {
      // Router.push('/authentication/');
    }
  }, []);
};

export const btnLoading = () => {
  // ${btnLoading().loginLoading && 'btn-loading btn-disable disabled-link'}
  const btnLoadingConst = useSelector(state => state.Loading);
  return btnLoadingConst;
};
