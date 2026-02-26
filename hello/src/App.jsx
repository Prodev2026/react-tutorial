import { useState } from 'react'
import './App.css'
import Users from '../Users';

function App() {
  const [text, setText] = useState("hi!")
  return (
      <div className='flex gap-x-5'>
      <Users/>
      </div>
  );
} 

export default App
