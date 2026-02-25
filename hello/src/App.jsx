import { useState } from 'react'
import './App.css'
import Container from './Container';


function App() {
  const [counterValue, setCounterValue] = useState(0);
  return (
      <div>
        <Container/>
      </div>
  );
} 

export default App
