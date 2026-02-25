import { useState } from 'react'
import './App.css'
import {cardsList} from './data'
import Cards from './Cards';

function App() {
  const [text, setText] = useState("hi!")
  return (
      <div className='flex gap-x-5'>
        {cardsList.map((card, index)=>(
          <Cards key={index} card={card}/>
        ))}
      </div>
  );
} 

export default App
