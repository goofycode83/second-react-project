/* eslint-disable react/prop-types */
import { useState } from 'react';

function App() {
  const [count,setCount] = useState(0);
  return (
    <>
      <Button count={count} setCount={setCount}/>
    </>
  );
}

function Button(props) {
  console.log("Props: ", props);
  return (
    <button 
      onClick={() => {
      props.setCount(props.count+1);
   }}> Counter: {props.count} </button>
  );  
}

export default App;
