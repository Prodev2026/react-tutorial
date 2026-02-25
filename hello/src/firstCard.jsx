import React from 'react'

export default function FirstCard({firstObject}) {
  const {title, desc} = firstObject;
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}
