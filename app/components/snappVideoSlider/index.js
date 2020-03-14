import React, { useEffect } from 'react';
import Link from './myLink';
import SnappVideoCatroryList from '../snappVideoCatroryList';


import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
if (typeof window !== 'undefined') { require('owl.carousel'); }

const multiSlider = {
  0: {
    items: 3,
  },
  768: {
    items: 3,
  },
  992: {
    items: 4,
  },
  1200: {
    items: 5,
  },
  1440: {
    items: 6,
  },
};
const singleSlider = {0:{items:1}}

const ninjaVedeoSlider = function (props) {
  useEffect(() => {
    $(document).ready(function () {
      $(`#${props.uniName}`).owlCarousel({
        rtl: true,
        loop: props.loop,
        autoplay: props.autoplay ? props.autoplay : false,
        autoplayTimeout: props.autoplayTimeout ? props.autoplayTimeout : 5000,
        autoplayHoverPause: false,
        margin: props.adaptive ? 15 : 12,
        nav:  props.nav,
        dots: props.dots,
        autoWidth: props.adaptive,
        responsive: props.multi ? multiSlider : singleSlider,
      });
    });
  }, []);


  const switchSliderItem = (params)=> {
  switch(props.type){
    case 'single':
      return (
        <Link className={!props.showMoreLink ? "disabled-link" : ""} route={props.showMoreLink ? props.showMoreLink : '/'}>
          <img src={params.profile}/>
        </Link>
      )
    case 'multiCard':
      return (
        <SnappVideoCatroryList key={params.id} {...params} />
      );
    case 'multiMenu':
      return (
        <Link className={!props.showMoreLink ? "disabled-link" : ""} route={props.showMoreLink ? props.showMoreLink : '/'}>
          <button className="btn-white btn btn-secondary">{params.text}</button>
        </Link>
      )
  }
}

  let snappVedioSliderItem = props.data.map((posterItem, i) =>
    <div key={i} className="item" style={{ width: props.itemSize ? props.itemSize : 'auto' }}>
      {switchSliderItem(posterItem)}
    </div>
  );

  return (
    <div className="panigale-carousel">
      {!!props.showMoreLink &&
        <div className="flex leftP10 bottomP10">
          <h2 className="text-title_18 bottomM">
            <Link className={!props.showMoreLink ? "disabled-link" : ""} route={props.showMoreLink ? props.showMoreLink : '/'}>
              <span>
                {props.sliderTitle}
              </span>
            </Link>
          </h2>
          {!!props.showMoreLink &&
            <Link route={props.showMoreLink} className="text14 color-blue rightMauto">
              <span>
                نمایش همه
              <i className="icon icon-left-arrow"></i>
              </span>
            </Link>
          }
        </div>
      }
      <div className="ltr-plugin" >
        <div id={`${props.uniName}`} className="owl-carousel owl-theme">
          { snappVedioSliderItem}
        </div>
      </div>
    </div>
  )
}

export default ninjaVedeoSlider;
