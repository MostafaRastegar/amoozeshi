import React, { useEffect } from 'react';

const SnappCarouselLayout = function (props) {
  useEffect(() => {
  }, []);

  return (
    <div className={`page-carousel__layout padd20 topM20${!!props.className? ' ' + props.className:''}`}>
      {(!!props.title || !!props.moreOption) &&
        <div className="flex leftP10 bottomP10">
          {!!props.title &&
            <h2 className="text-sub-title_bold_16 bottomM">
                {props.title}
            </h2>
          }
          {!!props.moreOption &&
            <span className="text14 color-blue rightMauto">
              <span>
                {props.moreOption}
                <i className={`icon ${props.icon}`}></i>
              </span>
            </span>
          }
          </div>
        }
        <div className="page-carousel__layout-body">
          {props.children}
        </div>
    </div>
  )
}

export default SnappCarouselLayout;
