import React from 'react';
import Usernavbar from './Usernavbar';

const BrowsejobsPage = () => {
  return (
    <>
      <Usernavbar />
      <div style={{ marginLeft: 240, padding: 20 }}> {/* Sidebar width offset */}
        <h1>Browse Jobs</h1>
        {/* Job Listings with filters */}
      </div>
    </>
  );
};

export default BrowsejobsPage;
