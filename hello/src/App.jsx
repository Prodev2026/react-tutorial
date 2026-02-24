import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FirstComponents from './FirstComponents';
import SecondComponents from './SecondComponents';

function App() {
  const [counterValue, setCounterValue] = useState(0);
  return (
    <>
    <h1 className="text-3xl font-bold underline bg-green-500">
    this is my first react app!
  </h1>
    <hr />
      <FirstComponents/>
        <hr />
      <SecondComponents/>
      </>
  );
} 

export default App
