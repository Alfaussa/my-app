

import React, {useState} from 'react';
import { nanoid } from 'nanoid'

function App() {

  const [notes, setNotes] = useState([1, 2, 3]);

  
  function getSumArr(arr){
    let sum = 0;

    for(const elem of arr) {
      sum += +elem;
    }
    return sum;
  }

  function changeHandler(index, event){
    setNotes([...notes.slice(0, index),
      event.target.value, ...notes.slice(index + 1)]);
  }

  const result = notes.map((note, index) => {
    return <input
    key = {index}
    value = {note}
    onChange={event => changeHandler(index, event)}
    ></input>
  });

  return <>
  {result}
  {getSumArr(notes)}
  </>
  
  
  
  }
  
  
  export default App;





