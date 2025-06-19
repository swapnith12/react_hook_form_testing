import React from 'react'
import { Outlet } from 'react-router-dom'

const Job = () => {
  return (
    <div>
      Job Card
      <Outlet/>
    </div>
  )
}

export default Job
