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
      <FirstComponents/>
        <hr />
      <SecondComponents/>
      </>
  );
} 

export default App
