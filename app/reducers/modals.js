/* eslint-disable no-case-declarations */
// import React, { useRef } from 'react';
import { CLOSE_MODAL, OPEN_MODAL, SHOW_MODAL } from '../constants/actionModals';
// import { logOutGet } from '../api/account';

const initialModals = {
  RestaurantPageModal: false,
  UserPositionModal: false,
  alertExp: false,
  isVerifyModal: false,
  successChangePassModal: false,
  trackingModal: false,
  verifyModal: false,
};

// const usePrevious = value => {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// };

let winYclone = 0;
let myVar;
const modals = (state = initialModals, action) => {
  switch (action.type) {
    case CLOSE_MODAL:
      return { ...state, ...action.payload };
    case OPEN_MODAL:
      return { ...state, ...action.payload };
    case SHOW_MODAL:
      const winY = window.scrollY;
      const { body } = document;
      // const mainPageBody = document.querySelector(".heightFix").nextSibling;
      const mainPageBody = body;
      if (Object.values(action.payload)[0] === true) {
        myVar = setTimeout(() => {
          winYclone = winY;
          mainPageBody.style.top = `-${winYclone}px`;
          mainPageBody.style.left = 0;
          mainPageBody.style.right = 0;
          mainPageBody.style.position = 'fixed';
        }, 1000);
        return { ...state, ...action.payload };
      }
      clearTimeout(myVar);
      mainPageBody.removeAttribute('style');
      window.scrollTo(0, winYclone);
      return { ...state, ...action.payload };

    default:
      return state;
  }
};

export default modals;
