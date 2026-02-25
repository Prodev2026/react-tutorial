import React from 'react'
import SecondCard from './SecondCard'
import FirstCard  from './firstCard'
import ThirdCard from './ThirdCard'
import SomeDetails from './SomeDetails'
import NewDetails from './NewDetails'
export default function Container() {

  const firstObject = {
    title:"card 1", 
    desc: "description for first card"
  }

  const secondObject = {
    title: "card 2",
    desc: "description for second card"
  }

  return (
    <div className='flex flex-col gap-y-10'>
      <FirstCard 
        firstObject={firstObject}/>
      <SecondCard
        secondObject={secondObject}/>
      <hr />
      <br />
      <ThirdCard gender="Male">
        <SomeDetails/>
      </ThirdCard>
      <ThirdCard gender="Male">
        <NewDetails/>
      </ThirdCard>
    </div>
  )
}
