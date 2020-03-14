import React, { useState } from 'react';
import Loading from '../../components/snappLoading';
import CoursePage from '../../components/pages/course';


const CourseIndex = () => {
	const [loading, setLoading] = useState(false);

	return (
		<React.Fragment>
      {!loading ?
        <div>
          <CoursePage/>
        </div>
        :
				<div className="center hFull">
					<Loading />
				</div>
			}
		</React.Fragment>
	);
}

export default CourseIndex;
