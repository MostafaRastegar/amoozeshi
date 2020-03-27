import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Loading from '../../../components/snappLoading';
import ProfileEditTeacher from '../../../components/pages/profile/edit/teacher';
import ProfileEditStudent from '../../../components/pages/profile/edit/student';

const ProfileIndex = props => {
  const { match } = props;
  const [loading] = useState(false);
  return (
    <>
      {!loading ? (
        <div>
          {match.params.slug === 'teacher' ? (
            <ProfileEditTeacher />
          ) : (
            <ProfileEditStudent />
          )}
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};
ProfileIndex.propTypes = {
  match: PropTypes.object,
};
export default ProfileIndex;
