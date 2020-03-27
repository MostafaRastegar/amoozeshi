import React from 'react';
import PropTypes from 'prop-types';
import SnappVideoSlider from '../../snappVideoSlider';
import Loading from '../../snappLoading';

const slider1 = {
  loop: false,
  margin: 15,
  nav: false,
  dots: true,
  autoplay: true,
  type: 'single',
  itemSize: '100%',
};
const slider2 = {
  loop: false,
  dots: false,
  adaptive: true,
  sliderTitle: 'جدیدترین دوره‌ها',
  showMoreLink: 'home',
  multi: true,
  type: 'multiCard',
  itemSize: '240px',
};
const slider3 = {
  loop: false,
  dots: false,
  adaptive: true,
  sliderTitle: 'محبوب‌ترین دوره‌ها',
  showMoreLink: 'home',
  multi: true,
  type: 'multiCard',
  itemSize: '240px',
};

const HomePage = props => {
  const loading = false;
  const { mockMainSlider, data } = props;
  return (
    <>
      {!loading ? (
        <div className="home">
          <div className="main-slider topP15 bottomP15 bg-grey-240">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <SnappVideoSlider
                    {...slider1}
                    uniName="main-slider"
                    data={mockMainSlider}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="center topM50 bottomM50">
              <span className="color-secondary bold text28">
                آموزش آنلاین در وب سایت آموزش‌جو
              </span>
            </div>
            <div className="row topM20">
              <div className="col-12 leftP bottomP50">
                <SnappVideoSlider {...slider2} uniName="slider2" data={data} />
              </div>
            </div>
            <div className="row topM20">
              <div className="col-12 leftP bottomP70">
                <SnappVideoSlider {...slider3} uniName="slider3" data={data} />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

HomePage.propTypes = {
  data: PropTypes.array,
  mockMainSlider: PropTypes.array,
};

export default HomePage;
