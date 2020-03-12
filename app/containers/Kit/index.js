/**
 *
 * Kit
 *
 */

import React from 'react';
import { Button } from 'reactstrap';
import { AnimateField, CheckBox } from '../../components/snappForm';
import SnappAlert from '../../components/snappAlert';

export class Kit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginUserName: '',
      signUpGender: 'male',
      signUpPhone: '09358537536',
      signUpUserEmail: 'm.rastegar991@gmail.com',
      signUpSheba: '',
      signUpCity: '',
      loginPass: '',
    };
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    const {
      loginUserName,
      signUpPhone,
      signUpUserEmail,
      signUpGender,
      signUpCity,
      loginPass,
    } = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <SnappAlert type="success">
              For test
            </SnappAlert>

            <SnappAlert type="warning">
              For test
            </SnappAlert>

            <SnappAlert type="danger">
              For test
            </SnappAlert>

            <SnappAlert type="info">
              For test
            </SnappAlert>

          </div>
          <hr />

          <div className="col-lg-12">
            <h1>Buttons:</h1>
            <Button color="primary">primary</Button>{' '}
            <Button color="secondary">secondary</Button>{' '}
            <Button color="success">success</Button>{' '}
            <Button color="info">info</Button>{' '}
            <Button color="warning">warning</Button>{' '}
            <Button color="danger">danger</Button>{' '}
            <Button color="warning btn-big">warning</Button>{' '}
            <Button className="btn-big" color="danger">
              danger
            </Button>{' '}
            <Button className="btn-white">danger</Button>{' '}
            <Button className="btn-white btn-big">danger</Button>{' '}
            <Button color="link">link</Button>
          </div>
          <div className="col-lg-12 mt-5">
            <h1>Form</h1>
            <AnimateField
              className="col-12"
              placeholder="Please Enter"
              name="loginUserName"
              type="text"
              label="Email"
              value={loginUserName}
              onChange={this.onChange}
              icon="snapp-user"
              iconcolor="blue"
              validation={['error']}
            />
            <AnimateField
              className="col-12"
              name="loginPass"
              type="password"
              placeholder="Pleas Enter"
              label="Password"
              value={loginPass}
              onChange={this.onChange}
              // onKeyPress={this.handleKeyPress}
              // validation={
              //   typeof classes.validation.password === 'undefined'
              //     ? false
              //     : classes.validation.password
              // }
              required
            />

            <div className="snapp-animate-field form-group col-sm-6">
              <div>
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="signUpGender"
                      checked={signUpGender === 'male'}
                      onChange={this.onChange}
                      // onKeyPress={this.handleKeyPressUpdate}
                      value="male"
                    />
                    <div className="radio-face" />
                    <i />
                  </div>
                  <span>Male</span>
                </label>
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="signUpGender"
                      checked={signUpGender === 'female'}
                      onChange={this.onChange}
                      // onKeyPress={this.handleKeyPressUpdate}
                      value="female"
                    />
                    <div className="radio-face" />
                    <i />
                  </div>
                  <span>Female</span>
                </label>
              </div>
              <label> Type </label>
            </div>


            <AnimateField
              className="col-sm-6"
              placeholder="Please Enter"
              name="signUpPhone"
              type="text"
              label="Mobile"
              value={signUpPhone}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPressUpdate}
              // validation={
              //   typeof classes.validation.userUpdate.phone_number === "undefined"?
              //   false:classes.validation.userUpdate.phone_number
              // }
              disabled
            />

            <AnimateField
              className="col-sm-6"
              placeholder="Please Enter"
              name="signUpUserEmail"
              type="email"
              label="Email"
              value={signUpUserEmail}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPressUpdate}
              disabled
            // validation={
            //   typeof classes.validation.userUpdate.email === "undefined"?
            //   false:classes.validation.userUpdate.email
            // }
            // required={true}
            />
            {/* <div className={"snapp-animate-field form-group col-sm-6" + (typeof classes.validation.userUpdate.city_id === "undefined"?"":" panigale__border_red")}> */}
            <div className="snapp-animate-field form-group col-sm-6">
              <div className="select-wrapper">
                <select
                  name="signUpCity"
                  value={signUpCity}
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyPressUpdate}
                  id="inputState"
                  className="form-control"
                >
                  <option value="">City</option>
                  {/* {cityItem} */}
                </select>
              </div>
              <label>City</label>
            </div>

            <div className="snapp-page-profile__user-edit-button form-group col-12">
              {/* <button className={!classes.loading.userProfileLoading?"btn btn-danger ml-0":"btn ml-0 btn-loading btn-disable disabled-link"}> */}
              <button type="button" className="btn btn-danger ml-0">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Kit;
