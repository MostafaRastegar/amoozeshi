import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfileEdit from '../../../components/pages/profile/edit';

const ProfileIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <div>
          <ProfileEdit />
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
