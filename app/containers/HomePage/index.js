import React, { useState } from 'react';
import Loading from '../../components/snappLoading';
import HomePage from '../../components/pages/home';
import {
  mockCartItem,
  mockMainSlider,
  mockMainMenu,
} from '../../api/testJson/mock';

const HomeIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <div>
          <HomePage
            data={mockCartItem.result.data}
            mockMainSlider={mockMainSlider}
            mockMainMenu={mockMainMenu}
          />
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default HomeIndex;
