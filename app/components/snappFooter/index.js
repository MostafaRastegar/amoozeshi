
import React, { useEffect } from 'react';
import sabt from '../../images/sabt.jpg';
import enamad from '../../images/enamad.jpg';
// import stylesheet from "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
import './style.scss';

const SnappFooter = () => {
    return(
        <div className="footer">
            <div className="footer-one flex">
                <ul className="flex rightP15">
                    <li>درباره ما</li>
                    <li>راهنمای مدرس</li>
                    <li>راهنمای دانشجو</li>
                    <li>قوانین و مقررات</li>
                    <li>حریم خصوصی</li>
                    <li>ارتباط با ما</li>
                </ul>
                <div className="footer-one__left flex">
                    <span className="center">88776655-021</span>
                    <span className="icon-students center"></span>
                </div>
            </div>
            <div className="footer-two flex">
                <div>
                    <div className="footer-two__text">
                        <span>با اشتراک در خبرنامه از آخرین دوره ها و تخفیف ها با خبر شوید.</span>
                    </div>
                    <div className="input-footer">
                        <div className="row input-footer__inner align-items-center">
                            <div className="input-footer__put-email col pr-0">
                                <input
                                    className="footer-form form-control form-control-lg form-control-borderless"
                                    type="text"
                                    placeholder="ایمیل خود را وارد کنید..."
                                    name="email"
                                />
                            </div>
                            <div className="col-auto pl-0">
                                <button className="footer-two__btn btn btn-success btn-lg">
                                    اشتراک
                                </button>
                            </div>
                        </div>
                    </div>   
                </div>
                <div className="footer-two__left flex center">
                    <span className="icon-share"></span>
                    <span className="icon-share"></span>
                    <span className="icon-share"></span>   
                </div> 
            </div>
            <div className="footer-three flex">
                <div>
                    <div className="footer-three__issue flex">
                        <div className="issue center">
                            <span className="icon-rectangle"></span>
                        </div>
                        <span className="title hcenter">آموزش‌ جو</span>
                    </div>
                    <p>در این قسمت درباره وب‌سایت و آموزش‌ها و خدمات و ماموریت و اهداف وب سایت <br/>متنی نوشته می شود.
                        اینکه توسط افراد متخصص و با سابقه با رویکرد توسعه دانش و <br/>فراهم ساختن افراد متخصص برای بازار کار.
                    </p>
                </div>
                <div className="left-img flex">
                    <img src={sabt} className="left-img__sabt"/>
                    <img src={enamad} className="left-img__enamad"/>
                </div>
            </div>
            <div className="footer-four center">
                <span>تمامی حقوق این وبسایت متعلق به شرکت دانش آنلاین پارسیان  با نام تجاری آموزش‌جو می‌باشد. | 1398 ©</span>
            </div>
        </div>
    )
}

export default SnappFooter;