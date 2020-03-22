/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const SnappCarouselLayout = props => {
  const { className, title, moreOption, icon, children } = props;

  return (
    <div
      className={`page-carousel__layout padd20 topM20 ${
        !!className && className
      }`}
    >
      {(!!title || !!moreOption) && (
        <div className="flex leftP10 bottomP10">
          {!!title && (
            <h2 className="text-sub-title_bold_16 bottomM">{title}</h2>
          )}
          {!!moreOption && (
            <span className="text14 color-blue rightMauto">
              <span>
                {moreOption}
                <i className={`icon ${icon}`} />
              </span>
            </span>
          )}
        </div>
      )}
      <div className="page-carousel__layout-body">{children}</div>
    </div>
  );
};

SnappCarouselLayout.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  moreOption: PropTypes.bool,
  icon: PropTypes.string,
  children: PropTypes.node,
};

export default SnappCarouselLayout;
