import React from 'react'
import SecondCard from './SecondCard'
import FirstCard  from './firstCard'
export default function Container() {

  const firstObject = {
    title:"first card", 
    desc: "description for first card"
  }

  return (
    <div>
      <FirstCard 
      firstObject={firstObject}/>
      <SecondCard
        title="title 2" 
      desc="this is desc for second card in the desc two"
      />
    </div>
  )
}
