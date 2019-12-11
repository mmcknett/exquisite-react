import React from 'react';
import PropTypes from "prop-types";
import './RecentSubmission.css';

const RecentSubmission = ({ lastPlayer }) => {
  return (
    <div className="RecentSubmission">
      <h3>The Most Recent Submission</h3>
      <p className="RecentSubmission__submission">{ lastPlayer }</p>
    </div>
  );
}

RecentSubmission.propTypes = {
  lastPlayer: PropTypes.string.isRequired,
};

export default RecentSubmission;
