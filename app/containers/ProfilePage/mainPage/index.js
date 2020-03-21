import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfilePage from '../../../components/pages/profile/main';

const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <div>
          <ProfilePage />
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default ProfileIndex;
