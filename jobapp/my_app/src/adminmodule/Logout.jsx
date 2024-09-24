import React from 'react'
import Adminnavbar from './Adminnavbar'

const Logout = () => {
  return (
    <>
    <Adminnavbar />
    <div style={{ marginLeft: 240, padding: 20 }}> {/* Offset for the sidebar */}
    <h1>Logout</h1>
  </div>
  </>
  )
}

export default Logout