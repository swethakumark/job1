import React from 'react';
import Adminnavbar from './Adminnavbar';

const Viewuserapplications = () => {
  return (
    <>
      <Adminnavbar />
      <div style={{ marginLeft: 240, padding: 20 }}> {/* Offset for the sidebar */}
        <h1>User Applications</h1>
      </div>
    </>
  );
};

export default Viewuserapplications;
