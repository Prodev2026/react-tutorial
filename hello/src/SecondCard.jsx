import React from 'react'

export default function SecondCard({secondObject}) {
  const {title, desc} = secondObject;
  return (
    <div>
      <h1>{title}</h1>
      <p>{desc}</p>
    </div>
  )
}
