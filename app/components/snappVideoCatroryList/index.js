/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import { financialLevel, rateColor } from '../GeneralFunctions';
const calcTime = data => {
	const time = data.time || 0;
	const unit = data.unit || 'دقیقه';
	if (unit === 'h') {
		return `${time} ساعت`;
	} else {
		return `${time} دقیقه`;
	}
};

function ninjaVideoCatroryList(props) {
	return (
		<div className="listItem relative">
			<div className="star-box absolute zIndex2 leftP5">
				<div className="financialLevel absolute bottom zIndex0 leftP10 rightP10 topP3 bottomP3 color-white">
          <span className="flex hCenter text13">
						02:22:22
						</span>
        </div>
			</div>
			<Link to={`/${props.slug}/`} className="dblock listItem__link">
					<div className="cover coverSmall restaurant-cover-small relative" style={{ backgroundImage: `url('${props.coverSmall}')` }}>
						<div className="restaurant-card-cover"></div>
						<div className="discription">
							<div className="absolute top right">
								<div
									className="imageBox centerBg contain"
									style={{ backgroundImage: `url('${props.profile}')` }}
								/>
								{/* {props.salePercentage > 0 && (
									<span className="discount discount-listpage flex center absolute top left bg-red color-white centerText">
										<span className="text14">{props.salePercentage}</span>
										<span className="text12 topM3 leftM3">%</span>
									</span>
								)} */}

							</div>
						</div>
					</div>
					<div className="discription flex leftP12 rightP12">
						<div className="left relative">
							<h2 className="discription__title font text-p_14 bold primary topP10">{props.name}</h2>

							{/* {props.foodTypes.length > 0 && (
              <ul className="flex">
                {props.foodTypes.map(
                  (item, index) =>
                    index < 3 && (
                      <li className="text12" key={item.id}>
                        {item.name}
                      </li>
                    ),
                )}
              </ul>
            )} */}

						</div>

						{/* <div className="flex economy spaceBetween">
            {props.isRecommended !== 0 && (
              <div className="suggested flex center">
                <span className="white text12 centerText hP10">پیشنهادی</span>
              </div>
            )}

          </div> */}
					</div>

					<div className="flex rRow wFull leftP12 rightP12">
						<div className="wFull flex hCenter gray overhide">
							<span className="text12">توسط: {props.by}</span>
						</div>
					</div>

					<div className="video-pricing rRow primary center leftP12 rightP12">
						{}

            {!!props.isNew ?( <div className="video-pricing__new flex center bg-primary">
							<span className="text12 color-white ">جدید</span>
						</div>
            ) : (
                <div
                  className={`video-pricing__new flex center ${rateColor(props.rateAverage)}`}
                >
                  <span className="color-white text12 leftM3">{props.rateAverage}</span>
                  <span className="icon icon-star-fill color-white text12" />
                </div>
            )}

						{typeof !!props.primaryPrice !== "undefined" &&
							<div className="flex price rightP10 leftContent primary text14 wFull hCenter">
								{!!props.primaryPrice === 0 ? (
									<span className="leftM5  text-title-18 bold-500">رایگان</span>
								) : (
										<React.Fragment>
											<span className={`leftM5 ${!!props.secondaryPrice?'overLine text12 gray7':'text-title-18 bold-500'}`} >{props.primaryPrice.toLocaleString()}</span>
											{!!props.secondaryPrice &&
												<span className="leftM5  text-title-18 bold-500 ">{props.secondaryPrice.toLocaleString()}</span>
											}
											<span className="text12">تومان</span>
										</React.Fragment>
									)}
							</div>
						}
					</div>
			</Link>
		</div>
	)
}

export default ninjaVideoCatroryList;
