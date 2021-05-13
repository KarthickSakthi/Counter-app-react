import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
function App() {
  const[count,setCount]=useState(0)
  return (
    <div className="App">
      <h1 class='title'>Counter Application</h1>
      <div class='centre'>
      <h1 class='zero'>{count}</h1>
      
    <button onClick={()=>setCount(count+1)}>+</button>  
    <button class='buton' style={{backgroundColor : "#f44336"}} onClick={()=>setCount(count-count)}>Reset</button>
    <button class='buton' onClick={()=>setCount(count-1)}>-</button>
    </div>
     
     
    
    </div>
  );
}

export default App;
