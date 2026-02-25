import { useState } from 'react'
import './App.css'
import WelcomeAdmin from './WelcomeAdmin';
import WelcomeUser from './WelcomeUser';


function App() {
  const [text, setText] = useState("hi!")
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log('================================================')
    console.log('form submitted!')
    console.log('================================================')

    
  }
  return (
      <div >
        <h1 className='mb-16 text-lg font-bold italic'>{text}</h1>
       <form onSubmit={handleSubmit}>
        <button type='submit' className='border-[2px] bg-blue-500 text-black py-1 px-2'>
          submit
        </button>
       </form>
        </div>
  );
} 

export default App
