import React from 'react'

export default function SecondCard(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.desc}</p>
    </div>
  )
}
