/**
 *
 * SnappFooter
 *
 */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { showModal } from '../../actions/modals';
import { addToast } from '../../actions/notifications';
import SnappNotification from '../../components/snappNotification';
import { jssRinc } from '../../style/jss/_rinc';
import { useStyles } from './style';
const SnappFooter = (props) => {
  const { flex, leftMauto, gray0Bg,notification } = { ...jssRinc(), ...useStyles() };
  const spyLogger = () => {
    const consoleSpy = `
		.d8888. d8b   db  .d8b.  d8888b. d8888b.      d8888b. db       .d88b.   d888b  
		88'  YP 888o  88 d8' '8b 88  '8D 88  '8D      88  '8D 88      .8P  Y8. 88' Y8b 
		'8bo.   88V8o 88 88ooo88 88oodD' 88oodD'      88oooY' 88      88    88 88      
		  'Y8b. 88 V8o88 88~~~88 88~~~   88~~~        88~~~b. 88      88    88 88  ooo 
		db   8D 88  V888 88   88 88      88           88   8D 88booo. '8b  d8' 88. ~8~ 
		'8888Y' VP   V8P YP   YP 88      88           Y8888P' Y88888P  'Y88P'   Y888P  
	 `;
    console.log(consoleSpy);
  }


  useEffect(() => {
    spyLogger();
  }, []);

  return (
    <React.Fragment>
      <footer className={`py-5 ${gray0Bg}`}>
        <div className={`container ${flex}`}>
          <span className={`m-0 text-center text-white ${flex}`}>Copyright &copy; Your Website 2019</span>
          <span className={`text-center text-white ${leftMauto} ${flex}`}>
            <Link to="/" className={"nav-link pt-0 text-white"}>Home</Link>
            <Link to="/kit" className={"nav-link pt-0 text-white"}>Kit</Link>
          </span>
        </div>
      </footer>

      <div className={`container-fluid topM10 top ${notification}`}>
        <SnappNotification />
      </div>
    </React.Fragment>
  );
}



const mapStateToProps = state => ({
  notification: state.Notification,
  auth: state.Auth,
  location: state.router.location.pathname
});
const mapDispatchToProps = dispatch => ({
  showModal: (showStatus) => {
    dispatch(showModal(showStatus))
  },
  showAlert: (showStatus) => {
    dispatch(addToast(showStatus));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(SnappFooter);