import React, { Component } from "react";
import SnappAlert from '../../snappAlert';

class Toast extends Component {
  componentDidMount(){
    const alertTimer = (this.props.delay === "")?2000:this.props.delay
    setTimeout((alertTimer) => {
      this.props.onDismissClick();
    }, alertTimer);
  }
  render() {
    return (
      <li className="toast">
        <SnappAlert
          type={this.props.color}
        >
          {this.props.text}
        </SnappAlert>
      </li>
    );
  }

  shouldComponentUpdate() {
    return false;
  }
}
export default Toast;