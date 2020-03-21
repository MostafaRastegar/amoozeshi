/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import './ErrorHandler.scss';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Page404 from '../../containers/Page404';
import icon from '../../images/icons/search_no_result.png';

const ErrorHandlerUI = props => {
  const { backToDashboard } = props;
  return (
    <div className="page-error vhFull center">
      <div className="page-error__main rCol">
        <div className="page-error__icon bottomP15 text-center">
          <img className="page-error__img" src={icon} alt="" />
        </div>
        <div className="page-error__icon bottomP15 text-center">
          <p className="page-error__title">Please try again</p>
          <Button onClick={backToDashboard} color="primary">
            Return to home page
          </Button>
        </div>
      </div>
    </div>
  );
};

class ErrorHandler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentCrashed: false,
    };
  }

  componentDidCatch() {
    this.setState({
      componentCrashed: true,
    });
  }

  dashboardButtonClick() {
    this.setState(
      {
        componentCrashed: false,
      },
      () => {
        window.location.replace('/');
        // this.props.history.push('/');
      },
    );
  }

  render() {
    if (this.props.notFound.show) {
      return <Page404 />;
    }
    if (this.state.componentCrashed) {
      return (
        <ErrorHandlerUI
          backToDashboard={this.dashboardButtonClick.bind(this)}
        />
      );
    }
    return this.props.children;
  }
}

const mapStateToProps = state => ({
  notFound: state.NotFound,
});
export default withRouter(connect(mapStateToProps)(ErrorHandler));
