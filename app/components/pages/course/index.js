import React, { useState } from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionItemTitle,
  AccordionItemBody,
} from 'react-accessible-accordion';
import Loading from '../../snappLoading';
import SnappCourseLayout from '../../snappCourseLayout';
import 'react-accessible-accordion/dist/fancy-example.css';
import './style.scss';

const Course = () => {
  const [loading] = useState(false);
  return (
    <>
      {!loading ? (
        <div className="page-course">
          <div className="page-course__header infoBg topP15 bottomP15 color-white">
            <div className="container">
              <h1 className="text-title_21">
                رابط و تجربه کاربری آموزش UI/UX مقدماتی تا پیشرفته
              </h1>
              <div className="page-course__detail flex hCenter bottomM15">
                <span className="icon icon-circle-chake text24 leftM20" />
                <div>
                  <h2 className="text-p_15 bottomM">بابک حقیقی</h2>
                  <div className="hCenter">
                    <span className="text14">بروز رسانی: </span>
                    <span className="text14">15 اسفند 98</span>
                  </div>
                </div>
              </div>
              <div className="page-course__detail center text-center borderAll borderWhite padd5 round10">
                <span className="text14 leftMauto"> 28:14:55</span>
                <span className="text-p__14">
                  <span className="leftP5">دانشجو</span>
                  <span>158</span>
                </span>
                <span className="rightMauto success">
                  <span className="icon-star-fill" />
                  <span className="leftP5">4</span>
                </span>
              </div>
            </div>
          </div>

          <SnappCourseLayout title="توضیح دوره" className="boxShadow15">
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است لورم ایپسوم متن ساختگی با تولید
              سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
              چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است
              و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
              بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
              گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
              نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
              طراحان
            </p>
          </SnappCourseLayout>

          <SnappCourseLayout title="این دوره شامل" className="boxShadow15">
            <div className="page-course__detail flex center">
              <span className="icon icon-movie_time text24 leftM15 gray1" />
              <span className="text-p__14 gray1">مدت زمان دوره</span>
              <span className="text-p__15 rightMauto">28:14:55</span>
            </div>
          </SnappCourseLayout>

          <SnappCourseLayout
            title="مطالبی که در این دوره یاد می‌گیرم"
            className="boxShadow15"
          >
            <div className="page-course__detail flex">
              <span className="icon icon-circle-chake text24 leftM15 success" />
              <span className="text-p__14">
                مطالبی که در این دوره یاد می‌گیرم
              </span>
            </div>
          </SnappCourseLayout>

          <SnappCourseLayout title="آموزش‌های این دوره" className="boxShadow15">
            <Accordion className="page-profile__sidebar-menu__item-wrapper">
              <AccordionItem className="page-profile__sidebar-menu__item">
                <AccordionItemTitle
                  className="accordion__title round10 borderAll border220"
                  hideBodyClassName="accordion_hide"
                  aria-selected="false"
                >
                  <div className="page-course__detail flex">
                    <span className="icon text24 leftM15" />
                    <span className="text-p__14">فصل اول - معرفی دوره</span>
                  </div>
                </AccordionItemTitle>
                <AccordionItemBody className="accordion__body borderAll border220 padd10">
                  <div className="accordion__ul">
                    <div className="accordion__list">
                      <div className="page-course__detail flex center">
                        <span className="icon icon-circle-play text24 leftM15 success" />
                        <span className="text-p__14">
                          <span>روش بررسی و تشخیص پرسوناها پروژه</span>
                          <br />
                          <span className="text12 gray6">28:14:55</span>
                        </span>
                        <span className="icon-circle-play success rightMauto text20" />
                      </div>
                    </div>
                  </div>
                </AccordionItemBody>
              </AccordionItem>
            </Accordion>
          </SnappCourseLayout>

          <SnappCourseLayout
            className="boxShadow15"
            title="تهیه شده توسط بابک حقیقی"
          >
            <div className="page-course__detail flex hCenter topM5">
              <div className="">
                <span className="icon icon-circle-chake text24 leftM15" />
              </div>
              <div>
                <div className="hCenter bottomM10">
                  <span className="icon icon-circle-chake text24 leftM10 gray1" />
                  <span className="text-p__15">تعداد دوره آموزشی</span>
                  <span className="text-p__15 rightM5 bold">2</span>
                </div>
                <div className="hCenter bottomM10">
                  <span className="icon icon-circle-chake text24 leftM10 gray1" />
                  <span className="text-p__15">تعداد دانشجو</span>
                  <span className="text-p__15 rightM5 bold">124</span>
                </div>
                <div className="hCenter bottomM10">
                  <span className="icon icon-circle-chake text24 leftM10 gray1" />
                  <span className="text-p__15">میانگین امتیاز</span>
                  <span className="text-p__15 rightM5 bold">4.5</span>
                </div>
              </div>
            </div>
          </SnappCourseLayout>

          <SnappCourseLayout
            title="نظرات"
            moreOption="نظر 156"
            className="boxShadow15"
          >
            <div className="page-course__detail borderAll border220 padd10 round10">
              <div className="flex hCenter">
                <span className="icon icon-movie_time text24 leftM15" />
                <span className="text-p__14">محمد رستمی</span>
                <span className="text-p__14 rightM5 text12 gray8">
                  (2 روز پیش)
                </span>
                <span className="text-p__15 rightMauto hCenter">
                  <span className="bold text16">4</span>
                  <span className="icon icon-star-fill text14 rightM5 success" />
                </span>
              </div>
              <p className="bottomM topP15 bottomP5">
                روش طراحی پروتوتایپ با استفاده از وایرفرم و روابط بین صفحات
                بصورت تعاملی جهت درک بهتر
              </p>
            </div>
          </SnappCourseLayout>

          <SnappCourseLayout className="bottomM15 boxShadow15">
            <div className="page-course__detail flex center">
              <span className="icon icon-warning text24 leftM15" />
              <span className="text-p__14">
                اعلام گزارش مشکل در محتوای این دوره
              </span>
              <span className="icon icon-arrow-left text40 gray1 rightMauto" />
            </div>
          </SnappCourseLayout>
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default Course;
