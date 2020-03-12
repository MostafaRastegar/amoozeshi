import React, { useEffect, useState, } from 'react';
import { useSelector } from 'react-redux';
import { signUpSubmit, useFormInput } from './util';
import { AnimateField } from '../../../snappForm';
// import { otpPermission } from '../util';
import SnappAuthLayout from '../../../snappAuthLayout';

// import 'react-accessible-accordion/dist/fancy-example.css';
import './style.scss';

const OtpRegister = ({
	initIschecked = false,
	initSignUpFullname = "",
	initSignUpUserEmail = "",
	initSignUpPass = ""
}) => {
	// otpPermission();
	const otp = useSelector(state => state.otp)

	const signUpFullname = useFormInput(initSignUpFullname);
	const signUpUserEmail = useFormInput(initSignUpUserEmail);
	const signUpPass = useFormInput(initSignUpPass);

	const [isChecked, setIschecked] = useState(initIschecked);
	const { SubmitComp, onKeyPress } = signUpSubmit({ signUpFullname, signUpUserEmail, signUpPass });

	useEffect(() => {
		if (isChecked === false) {
			signUpPass.setValue('');
		}
	}, [isChecked])


	return (
		<React.Fragment>
		<SnappAuthLayout title="ورود | ثبت نام">
			<div className="padd10 wFull" style={{ textAlign: "center" }}>
				<span className="dblock text14 gray1">شماره موبایل خود را وارد و کد تایید را دریافت کنید</span>
			</div>
			<div className="loginForm" style={{ padding: "10px 20px 0 20px", }}>
			<AnimateField
				className="col-12"
				placeholder=" "
				name="signUpPhone"
				value="09358537536"
				type="text"
				label="شماره موبایل"
				icon="chilivery-online-pay-help"
				disabled={true}
			/>
			<AnimateField
				className="col-12"
				placeholder=" "
				name="signUpFullname"
				value={signUpFullname.value}
				type="text"
				onChange={signUpFullname.onChange}
				onKeyPress={onKeyPress}
				label="نام و نام خانوادگی"
				icon="chilivery-user"
				required
			/>
			<AnimateField
				className="col-12"
				placeholder=" "
				name="signUpUserEmail"
				value={signUpUserEmail.value}
				type="text"
				onChange={signUpUserEmail.onChange}
				onKeyPress={onKeyPress}
				label="ایمیل"
				icon="chilivery-email"
				required
			// validation={['ایمیل اشتباه است.']}
			/>
			{isChecked &&

				<AnimateField
					className="col-12"
					placeholder=" "
					name="signUpPass"
					onChange={signUpPass.onChange}
					value={signUpPass.value}
					type="password"
					label="رمزعبور"
					icon="chilivery-pass"
					onKeyPress={onKeyPress}
				/>
			}

			<div className="mt-4">
				<span className="ruleAndCondition midText">
					با کلیک بر روی دکمه ثبت نام شما
					<span className="ruleAndCondition__link">
						<span className="accordion__list-text">
							{'\u00A0'}
							قوانین چیلیوری
							{'\u00A0'}
						</span>
					</span>
					را پذیرفته اید
				</span>
			</div>
			<div className="topM20 wFull hP20 center bottomM20">
				<SubmitComp />
			</div>
		</div>
		</SnappAuthLayout>
	</React.Fragment>
	)
}
export default OtpRegister;
