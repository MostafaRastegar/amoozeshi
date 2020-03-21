/* eslint-disable react/prop-types */
/* eslint-disable no-shadow */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { removeToast } from 'actions/notifications';
import NotificationToast from './components';

const Notification = ({ actions, notification }) => {
  const { removeToast } = actions;
  return (
    <ul className="notification">
      {notification.map(toast => {
        const { id, delay } = toast;
        return (
          <NotificationToast
            {...toast}
            key={id}
            delay={typeof delay === 'undefined' ? 2000 : delay}
            onDismissClick={() => removeToast(id)}
          />
        );
      })}
    </ul>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ removeToast }, dispatch),
});

const mapStateToProps = state => ({
  notification: state.Notification,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Notification);
