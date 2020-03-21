import React, { useState } from 'react';
import Loading from '../../components/snappLoading';
import CoursePage from '../../components/pages/course';

const CourseIndex = () => {
  const [loading] = useState(false);

  return (
    <>
      {!loading ? (
        <div>
          <CoursePage />
        </div>
      ) : (
        <div className="center hFull">
          <Loading />
        </div>
      )}
    </>
  );
};

export default CourseIndex;
