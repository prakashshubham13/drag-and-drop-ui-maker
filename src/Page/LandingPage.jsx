import React from 'react'
import { Link } from 'react-router-dom'

const LandingPage = () => {
  return (
    <div>
      <Link to="/dashboard">Create New Page</Link>
      <div>Open Existing Page</div>
    </div>
  )
}

export default LandingPage
