import { useState } from 'react'
import './App.css'
import WelcomeAdmin from './WelcomeAdmin';
import WelcomeUser from './WelcomeUser';


function App() {
  const [counterValue, setCounterValue] = useState(0);
  const isAdmin = false;
  return (
      <div className='text-5xl font-bold italic'>
        {!isAdmin? <WelcomeAdmin/>:<WelcomeUser/>}
      </div>
  );
} 

export default App
