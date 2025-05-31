import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState('');

  // veriation 1 -> first render 
  
  useEffect(() =>{
    console.log("UI Rendering done");
  })


  // veriation 4 -> handle unmounting of a component 









  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }
  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
