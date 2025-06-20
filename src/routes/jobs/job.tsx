import React from 'react'
import { Outlet } from 'react-router-dom'

const Job = () => {
  return (
    <div className='border-3'>
      <div className='bg-green-500 flex flex-row justify-between md:inline-flex border-2'>
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
          People stopped telling jokes
        </h4>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          The king, seeing how much happier his subjects were, realized the error of
          his ways and repealed the joke tax.
        </p>
      </div>
      <Outlet />
    </div>
  )
}

export default Job
