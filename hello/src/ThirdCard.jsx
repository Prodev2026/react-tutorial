import React from 'react'

export default function ThirdCard({gender, children}) {
  return (
    <div className='p-2 border-[2px] border-green-700'>
        <p >Your Gender is: {gender}</p>
        {children}
    </div>
  )
}
