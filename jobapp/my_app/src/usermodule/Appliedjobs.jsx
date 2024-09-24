import React from 'react';
import Usernavbar from './Usernavbar';
import { Link } from 'react-router-dom';

const AppliedJobsPage = () => {
  return (
    <>
      <Usernavbar />
      <div style={{ marginLeft: 240, padding: 20 }}> {/* Sidebar width offset */}
        <Link to="/admindashboard">
        
        <h1>Applied Jobs</h1></Link>
      </div>
    </>
  );
};

export default AppliedJobsPage;
