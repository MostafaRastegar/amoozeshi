import React, { useState } from 'react';
import Loading from '../../../components/snappLoading';
import ProfilePage from '../../../components/pages/profile/main';


const ProfileIndex = () => {
	const [loading, setLoading] = useState(false);

	return (
		<React.Fragment>
      {!loading ?
        <div>
          <ProfilePage/>
        </div>
        :
				<div className="center hFull">
					<Loading />
				</div>
			}
		</React.Fragment>
	);
}

export default ProfileIndex;
