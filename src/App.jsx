import './App.css';
import { useState } from 'react';

function App() {
  const {count,setCount} = useState(0);
  return (
    <div className='App'>
      <h1>Hello Meng</h1>
      <Button count={count} setCount={setCount}/>
    </div>
  )
}

const Button = (props) => {
  console.log("Props: ", props);
  return <button>Click Me !!!</button>
  
}

export default App
