import {
  CLOSE_MODAL,
  OPEN_MODAL,
  SHOW_MODAL
} from '../constants/actionModals';
import { logOutGet } from '../api/account';
import React,{useRef} from 'react';

const initialModals = {
  RestaurantPageModal: false,
  UserPositionModal: false,
  alertExp: false,
  isVerifyModal: false,
  successChangePassModal: false,
  trackingModal: false,
  verifyModal: false,
};

function usePrevious(value) {
	const ref = useRef();
	useEffect(() => {
		ref.current = value;
	});
	return ref.current;
}

let winYclone = 0;
let myVar;
const modals = (state = initialModals, action) => {
	switch (action.type) {
		
		case CLOSE_MODAL:
		return Object.assign({}, state, action.payload);
		case OPEN_MODAL:
		return Object.assign({}, state, action.payload);
		case SHOW_MODAL:
					let winY = window.scrollY;
					let body = document.body;
					// const mainPageBody = document.querySelector(".heightFix").nextSibling;
					const mainPageBody = body;
					if(Object.values(action.payload)[0] === true){
						myVar = setTimeout(() => {
							winYclone = winY;
							mainPageBody.style.top = `-${winYclone}px`;
							mainPageBody.style.left = 0;
							mainPageBody.style.right = 0;
							mainPageBody.style.position = 'fixed';
						}, 1000);
						return Object.assign({}, state, action.payload);
					}else{
						clearTimeout(myVar);
						mainPageBody.removeAttribute('style');
						window.scrollTo(0,winYclone);
						return Object.assign({}, state, action.payload);
					}
      default:
          return state;
  }
}

export default modals;