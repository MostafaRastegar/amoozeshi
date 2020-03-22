/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-nested-ternary */
import React from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';

const SnappModal = props => {
  const classes = props;
  // use headerAlign: right | left | center
  return (
    <Modal
      isOpen={classes.modal}
      toggle={classes.toggle}
      className={`snapp-modal ${classes.className} ${
        classes.alert ? 'snapp-modal_alert' : ''
      }`}
      onClosed={classes.onClosed}
    >
      <div className="panigale__header-notification">
        {/* <PanigaleNotification/> */}
      </div>
      {!!classes.title && (
        <ModalHeader
          className={
            classes.headerAlign === 'left'
              ? 'modal-header_left'
              : classes.headerAlign === 'right'
                ? 'modal-header_right'
                : 'modal-header_center'
          }
          style={{ backgroundColor: classes.headerColor }}
        >
          {classes.title}
          <i className="icon snapp-close" onClick={classes.toggle} />
        </ModalHeader>
      )}
      <ModalBody style={{ backgroundColor: classes.bodyColor }}>
        {classes.children}
      </ModalBody>
    </Modal>
  );
};

export default SnappModal;
