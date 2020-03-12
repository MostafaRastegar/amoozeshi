/**
 *
 * SnappForm
 *
 */

import React from 'react';

const AnimateField = props => {
  const classes = props;
  return (
    <div
      className={`snapp-animate-field form-group ${
        classes.className ? classes.className : ''
        }${!classes.validation ? '' : ' panigale__border_red'}`}
    >
      {classes.validation && (
        <div className="snapp-form-validation">{classes.validation[0]}</div>
      )}
      <input
        {...props}
        className="form-control"
        type={classes.type}
        name={classes.name}
        pattern={classes.pattern}
        id={classes.name}
        value={classes.value}
        onChange={classes.onChange}
        onKeyPress={classes.onKeyPress}
        placeholder={classes.placeholder}
        disabled={classes.disabled}
      />
      <label htmlFor={classes.name}>
        {classes.label}{' '}
        {!!classes.required && <span className="required-start">*</span>}
      </label>
      {!!classes.icon && (
        <i
          className={`snapp-icon ${classes.icon}`}
          style={{
            color: classes.iconcolor ? classes.iconcolor : '#929292',
          }}
        />
      )}
    </div>
  );
};

const AnimateFieldSheba = props => {
  const classes = props;
  return (
    <div
      className={`snapp-animate-field form-group ${
        classes.className ? classes.className : ''
        }${!classes.validation ? '' : ' panigale__border_red'}`}
    >
      {classes.validation && (
        <div className="snapp-form-validation">{classes.validation[0]}</div>
      )}
      <span className="snapp-form-shabe">IR-</span>
      <input
        className="form-control"
        type={classes.type}
        name={classes.name}
        pattern={classes.pattern}
        id={classes.name}
        value={classes.value ? classes.value : ' '}
        onChange={classes.onChange}
        onKeyPress={classes.onKeyPress}
        placeholder={classes.placeholder}
        disabled={classes.disabled}
      />
      <label htmlFor={classes.name}>
        {classes.label}{' '}
        {!!classes.required && <span className="required-start">*</span>}
      </label>
      {!!classes.icon && (
        <i
          className={`snapp-icon ${classes.icon}`}
          style={{
            color: classes.iconcolor ? classes.iconcolor : '#929292',
          }}
        />
      )}
    </div>
  );
};

const CheckBox = props => {
  const classes = props;
  return (
    <div
      className={`checkbox checkbox-success checkbox-toggle topP5 ${
        classes.className ? classes.className : ''
        }`}
    >
      <input
        type={classes.type}
        name={classes.name}
        defaultValue={classes.defaultValue}
        checked={classes.checked}
        className={`styled ${
          classes.inputClassName ? classes.inputClassName : ''
          }`}
        defaultChecked={classes.defaultChecked}
        onChange={classes.onChange}
        onKeyPress={classes.onKeyPress}
        id={classes.name}
      />
      <label htmlFor={classes.name} className={classes.labelClassName}>
        {classes.label}
      </label>
    </div>
  );
};

const RadioButton = props => {
  const classes = props;
  return (
    <div
      className={`radiobuttion radiobutton-success radiobutton-toggle topP5 ${
        classes.className ? classes.className : ''
        }`}
    >
      <input
        type={classes.type}
        name={classes.name}
        defaultValue={classes.defaultValue}
        checked={classes.checked}
        className={`styled ${
          classes.inputClassName ? classes.inputClassName : ''
          }`}
        defaultChecked={classes.defaultChecked}
        onChange={classes.onChange}
        onKeyPress={classes.onKeyPress}
        id={classes.name}
      />
      <label htmlFor={classes.name} className={classes.labelClassName}>
        {classes.label}
      </label>
    </div>
  );
};


class AnimateFieldPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'password',
    };
    this.showHide = this.showHide.bind(this);
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    // this.state.type === 'input'
    //   ? () => this.setState({ type: 'ppassword' })
    //   : () => this.setState({ type: 'input' });
    this.setState({
      type: this.state.type === 'input' ? 'password' : 'input',
    });
  }

  render() {
    const classes = this.props;
    return (
      <div
        className={`snapp-animate-field form-group ${
          classes.className ? classes.className : ''
          }${!classes.validation ? '' : ' panigale__border_red'}`}
      >
        {classes.validation && (
          <div className="snapp-form-validation">{classes.validation[0]}</div>
        )}
        <input
          className="form-control"
          type={this.state.type}
          name={classes.name}
          id={classes.name}
          value={classes.value}
          onChange={classes.onChange}
          onKeyPress={classes.onKeyPress}
          placeholder={classes.placeholder}
        />
        <label htmlFor={classes.name}>
          {classes.label}{' '}
          {!!classes.required && <span className="required-start">*</span>}
        </label>
        <span className="snapp-password__show" onClick={this.showHide}>
          {this.state.type === 'input' ? 'مخفی' : 'نمایش'}
        </span>
      </div>
    );
  }
}

export {
  AnimateField,
  AnimateFieldSheba,
  AnimateFieldPassword,
  CheckBox,
  RadioButton,
};
