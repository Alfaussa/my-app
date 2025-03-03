//⊗jsrtPmDtAOp №4

import React, {useState} from 'react';
import { nanoid } from 'nanoid'

function App() {

  const [notes, setNotes] = useState(["hi", "my", "name", "is", "Alya"]);
  const [value, setValue] = useState();
  const [index, setIndex] = useState();



  const result = notes.map((note, index) => {
    return <div> 
      <li key = {nanoid()} onClick={() => textTransfer(index)}> {note} </li>
      </div>
  })
  
function  textTransfer(index){
let res = notes[index];
setValue(res); 
setIndex(index);
}


function returnText(index){
  let copy = Object.assign([], notes);

  copy[index]=value;
  setNotes(copy)
}


  return <>
  
  <ul>
    {result}
  
  </ul>
  <input value = {value} onChange={(event) => setValue(event.target.value)} onBlur={() => returnText(index)}></input>
  </>
  
  }
  
  export default App;