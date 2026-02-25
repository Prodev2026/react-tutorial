import React from 'react'

export default function FirstCard({firstObject}) {
  return (
    <div>
      <h1>title: {firstObject.title}</h1>
      <p>desc: {firstObject.desc}</p>
    </div>
  )
}
