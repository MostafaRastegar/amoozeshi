/* eslint-disable jsx-a11y/label-has-associated-control */
/**
 *
 * Kit
 *
 */

import React from 'react';
import { Button } from 'reactstrap';
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
if (typeof window !== 'undefined') { require('owl.carousel'); }

import { AnimateField, AnimateFieldSheba, CheckBox } from '../../snappForm';
import Icon from './icon';
import ChiliAlert from '../../snappAlert';
import './style.scss';

/* eslint-disable react/prefer-stateless-function */
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

  componentDidMount() {
    $(document).ready(function () {
      $('#demo').owlCarousel({
        rtl: true,
        loop: false,
        margin: 15,
        nav: false,
        dots: false,
        autoWidth: true,
        responsive: {
          0: { items: 3, },
          768: { items: 3, },
          992: { items: 4, },
          1200: { items: 5, },
          1440: { items: 6, },
        },
      });
    });
  }

  render() {
    const buttonElement = {
      title: `مشاهده لیست رستوران ها`,
      small: `small`,
      big: `big`,
      success: `success`,
    };
    const {
      loginUserName,
      signUpPhone,
      signUpUserEmail,
      signUpSheba,
      signUpGender,
      signUpCity,
      loginPass,
    } = this.state;


    let ChiliOwlDemo = [1, 2, 3, 4, 5, 6]
    let ChiliOwlDemoItems = ChiliOwlDemo.map((posterItem, i) =>
      <div
        key={i}
        className="item"
        style={{
          width: "200px",
          backgroundColor: "#4DC7A0",
          padding: "1rem"
        }}
      >
        <h4>{posterItem}</h4>
      </div>
    );
    return (
      <div className="container bg-white">
        <div className="row topP15">
          <hr />
          <div className="col-lg-12">
            <div className="ltr-plugin">
              <div id="demo" className="owl-carousel owl-theme">
                {ChiliOwlDemoItems}
              </div>
            </div>
          </div>
        </div>
        <div className="row topP15 bottomP15">
          <div className="col-4">
            <div className="color-palet bg-primary"></div>
            <div>color-primary</div>
            <div>282337</div>
          </div>
          <div className="col-4">
            <div className="color-palet bg-secondary"></div>
            <div>color-secondary</div>
            <div>f79e40</div>
          </div>

          <div className="col-4">
            <div className="color-palet bg-blue"></div>
            <div>color-blue</div>
            <div>007aff</div>
          </div>
          <div className="col-4">
            <div className="color-palet bg-yellow"></div>
            <div>color-yellow</div>
            <div>ffc800</div>
          </div>
          <div className="col-4">
            <div className="color-palet bg-red"></div>
            <div>color-red</div>
            <div>ff0018</div>
          </div>
          <div className="col-4">
            <div className="color-palet bg-black"></div>
            <div>color-black</div>
            <div>000000</div>
          </div>
          <div className="col-4">
            <div className="color-palet bg-grey-120"></div>
            <div>color-grey-120</div>
            <div>fafafa</div>
          </div>
          <div className="col-4">
            <div className="color-palet bg-grey-160"></div>
            <div>color-grey-160</div>
            <div>f5f5f5</div>
          </div>
          <div className="col-4">
            <div className="color-palet bg-grey-220"></div>
            <div>color-grey-220</div>
            <div>dcdcdc</div>
          </div>
          <div className="col-4">
            <div className="color-palet bg-grey-240"></div>
            <div>color-grey-240</div>
            <div>f0f0f0</div>
          </div>
        </div>


        <div className="row topP15 bottomP15">

          <div className="col-12">
            <div className="text-title_24">تیتر 24</div>
            <div className="text-title_21">تیتر 21</div>
            <div className="text-title_18">تیتر 18</div>
            <div className="text-title_15">تیتر 15</div>
            <div className="text-title_14">تیتر 14</div>

            <div className="text-sub-title_bold_16">سوتیتر 16</div>
            <div className="text-sub-title_medium_16">سوتیتر 16</div>

            <p className="text-p_15">پاراگراف 15</p>
            <p className="text-p_14">پاراگراف 14</p>
            <p className="text-p_13">پاراگراف 13</p>
            <p className="text-p_12">پاراگراف 12</p>

          </div>

        </div>

        <div className="row">
          <div className="col-lg-12">
            <ChiliAlert type="success">
              For test
            </ChiliAlert>

            <ChiliAlert type="warning">
              For test
            </ChiliAlert>

            <ChiliAlert type="danger">
              For test
            </ChiliAlert>

            <ChiliAlert type="info">
              For test
            </ChiliAlert>

          </div>
          <div className="col-lg-12">
            <Icon />
          </div>

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
            <h1>فرم ها</h1>
            <AnimateField
              className="col-12"
              placeholder="وارد نمایید"
              name="loginUserName"
              type="text"
              label="شماره همراه / آدرس ایمیل"
              value={loginUserName}
              onChange={this.onChange}
              icon="chilivery-user"
              iconcolor="blue"
              validation={['شماره موبایل اشتباه است.']}
            />
            <AnimateField
              className="col-12"
              name="loginPass"
              type="password"
              placeholder="وارد نمایید"
              label="رمز عبور"
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

            <div>
              <span className="panigale-modal__rules">
                <CheckBox
                  className="required-chechbox checked"
                  type="checkbox"
                  name="signUpRule"
                  onChange={this.onChange}
                  defaultValue={1}
                  defaultChecked="checked"
                  // inputClassName="styled"
                  labelClassName="page-payment__rule"
                  label={

                    <span key="2"> را می پذیرم.</span>
                  }
                />
              </span>
            </div>
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
              <span>مرد</span>
            </label>
            <div className="chili-animate-field form-group col-sm-6">
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
                  <span>مرد</span>
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
                  <span>زن</span>
                </label>
              </div>
              <label> جنسیت </label>
            </div>

            <div className="row banks-row">
              <div className="col-xl-4 col-lg-4 col-sm-4 col-xs-6">
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="gateway"
                      value="6"
                    />
                    <div className="radio-face" />
                  </div>
                  <span className="clearfix">
                    سامان
                    <img
                      src="https://payment.iiventures.com/public/img/gateways/newSaman.png"
                      className="pull-left"
                      alt="tik8"
                    />
                  </span>
                </label>
              </div>

              <div className="col-xl-4 col-lg-4 col-sm-4 col-xs-6">
                <label className="radio-wrapper">
                  <div className="label-parent">
                    <input
                      type="radio"
                      className="radio-input"
                      name="gateway"
                      value="7"
                    />
                    <div className="radio-face" />
                  </div>
                  <span className="clearfix">
                    پارسیان
                    <img
                      src="https://payment.iiventures.com/public/img/gateways/newParsian.png"
                      className="pull-left"
                      alt="tik8"
                    />
                  </span>
                </label>
              </div>
            </div>

            <AnimateField
              className="col-sm-6"
              placeholder="وارد نمایید"
              name="signUpPhone"
              type="text"
              label="شماره همراه"
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
              placeholder="وارد نمایید"
              name="signUpUserEmail"
              type="email"
              label="آدرس ایمیل"
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
            <AnimateFieldSheba
              className="col-sm-6"
              name="signUpSheba"
              type="text"
              placeholder="وارد نمایید"
              label="شماره شبا"
              value={signUpSheba}
              onChange={this.onChange}
              onKeyPress={this.handleKeyPressUpdate}
            // validation={
            //   typeof classes.validation.userUpdate.sheba_number === "undefined"?
            //   false:classes.validation.userUpdate.sheba_number
            // }
            />
            {/* <div className={"chili-animate-field form-group col-sm-6" + (typeof classes.validation.userUpdate.city_id === "undefined"?"":" panigale__border_red")}> */}
            <div className="chili-animate-field form-group col-sm-6">
              <div className="select-wrapper">
                <select
                  name="signUpCity"
                  value={signUpCity}
                  onChange={this.onChange}
                  onKeyPress={this.handleKeyPressUpdate}
                  id="inputState"
                  className="form-control"
                >
                  <option value="">شهر</option>
                  {/* {cityItem} */}
                </select>
              </div>
              <label>شهر</label>
            </div>

            <div className="chili-page-profile__user-edit-button form-group col-12">
              {/* <button className={!classes.loading.userProfileLoading?"btn btn-danger ml-0":"btn ml-0 btn-loading btn-disable disabled-link"}> */}
              <button type="button" className="btn btn-danger ml-0">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Kit;
