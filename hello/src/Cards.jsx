import React from 'react'

export default function Cards({card}) {
  return (
    <div className='border border-blue-700 p-2'>
        <p>{card.name}</p>
        <p>{card.desc}</p>
    </div>
  )
}
