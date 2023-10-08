import { useRef } from 'react';
import './App.css';
import User from './User';

function App() {
  const inputRef = useRef();
  const handleClick = () => {
    console.log(inputRef.current.value)
    console.log(inputRef.current.focus())
    console.log(inputRef.current.style.color = "red")
  }
  return (
    <>
      <h1>Forward Ref</h1>
      <User ref={inputRef} />
      <button onClick={handleClick}>Submit</button>
    </>
  );
}

export default App;
