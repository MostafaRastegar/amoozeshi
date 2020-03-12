import React, { Component } from 'react';
import { Alert } from 'reactstrap';

class SnappAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      info: false,
      infoClose: false,
      danger: false,
      warning: false,
      visible: true
    };
    this.onDismiss = this.onDismiss.bind(this);
  }

  onDismiss() {
    this.setState({ visible: false },()=>{
    });
  }

  componentDidMount() {

    switch (this.props.type) {
      case 'success':
        this.setState({
          success: true
        });
        break;
      case 'info':
        this.setState({
          info: true
        });
        break;
      case 'infoClose':
        this.setState({
          infoClose: true
        });
        break;
      case 'danger':
        this.setState({
          danger: true
        });
        break;
      case 'warning':
        this.setState({
          warning: true
        });
        break;
    };

 

    
  }
  render() {
    const classes = this.props;
    const {
      success, danger, info, warning,infoClose
    } = this.state;
    return (
      <div>
        {success &&
          <Alert color={classes.type} isOpen={this.state.visible} toggle={this.onDismiss}>
            <i className="icon icon-c-check"></i>
            {classes.children}
          </Alert>
        }
        {info &&
          <Alert color={classes.type} isOpen={this.state.visible} toggle={this.onDismiss}>
            <i className="icon icon icon-c-warning"></i>
            {classes.children}
          </Alert>
        }

        {danger &&
          <Alert color={classes.type} isOpen={this.state.visible} toggle={this.onDismiss}>
            <i className="icon icon-c-remove"></i>
            {classes.children}
          </Alert>
        }

        {warning &&
          <Alert color={classes.type} isOpen={this.state.visible} toggle={this.onDismiss}>
            <i className="icon icon icon-c-warning"></i>
            {classes.children}
          </Alert>
        }

      </div>
    );
  }
}

export default SnappAlert;