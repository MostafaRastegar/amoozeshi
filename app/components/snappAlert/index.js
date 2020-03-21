/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { Alert } from 'reactstrap';

class SnappAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      info: false,
      danger: false,
      warning: false,
      visible: true,
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false }, () => {});
  }

  componentDidMount() {
    const { type } = this.props;
    switch (type) {
      case 'success':
        this.setState({
          success: true,
        });
        break;
      case 'info':
        this.setState({
          info: true,
        });
        break;
      case 'danger':
        this.setState({
          danger: true,
        });
        break;
      case 'warning':
        this.setState({
          warning: true,
        });
        break;
      default:
        this.setState({
          warning: true,
        });
        break;
    }
  }

  render() {
    const classes = this.props;
    const states = this.state;
    const { success, danger, info, warning } = this.state;
    return (
      <div>
        {success && (
          <Alert
            color={classes.type}
            isOpen={states.visible}
            toggle={this.onDismiss}
          >
            <i className="icon icon-c-check" />
            {classes.children}
          </Alert>
        )}
        {info && (
          <Alert
            color={classes.type}
            isOpen={states.visible}
            toggle={this.onDismiss}
          >
            <i className="icon icon icon-c-warning" />
            {classes.children}
          </Alert>
        )}

        {danger && (
          <Alert
            color={classes.type}
            isOpen={states.visible}
            toggle={this.onDismiss}
          >
            <i className="icon icon-c-remove" />
            {classes.children}
          </Alert>
        )}

        {warning && (
          <Alert
            color={classes.type}
            isOpen={states.visible}
            toggle={this.onDismiss}
          >
            <i className="icon icon icon-c-warning" />
            {classes.children}
          </Alert>
        )}
      </div>
    );
  }
}

// SnappAlert.propTypes = {
//   type:‌ PropTypes.string,
//   children :‌ PropTypes.node,
// };

export default SnappAlert;
