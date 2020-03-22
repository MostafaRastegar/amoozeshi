import { CLOSE_MODAL, OPEN_MODAL, SHOW_MODAL } from 'constants/actionModals';
// import modals from '../reducers/Modals';

export const closeModal = modals => ({
  type: CLOSE_MODAL,
  payload: modals,
});

export const openModal = modals => ({
  type: OPEN_MODAL,
  payload: modals,
});

export const showModal = modals => ({
  type: SHOW_MODAL,
  payload: modals,
});
