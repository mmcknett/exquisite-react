import React from 'react';
import PropTypes from 'prop-types';
import './RecentSubmission.css';

const RecentSubmission = (props) => {

  const hideRecentSubmission = () => {
    if (props.submission !== undefined) {
      return (
        <>
          <h3>The Most Recent Submission</h3>
          <p className="RecentSubmission__submission">{ props.submission }</p>
        </>
      )
    } 
  }

  return (
    <div className="RecentSubmission">
      {/* <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ props.submission }</p> */}
      {hideRecentSubmission()}
    </div>
  );
}

RecentSubmission.propTypes = {
  submission: PropTypes.string,
};

export default RecentSubmission;
