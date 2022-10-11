import React from 'react'
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <div className='flex flex-col min-h-[700px] justify-center items-center'>
        <h1 className='text-4xl'>Sorry, an unexpected error has occurred.</h1>
        <br />
        {error && (
          <div>
          <p className='text-red-600 font-mono font-semibold'>{error.statusText || error.message}</p>
          <p className='text-2xl'>{error.status}</p>
        </div>
        )}
      </div>
    </div>
  )
}

export default Error;