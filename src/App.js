//⊗jsrtPmDtOAA №2

import React, {useState} from 'react';
import { nanoid } from 'nanoid'

function App() {

  const initNotes = [
    {
      id: 'GYi9G_uC4gBF1e2SixDvu',
      prop1: 'value11',
      prop2: 'value12',
      prop3: 'value13',
    },
    {
      id: 'IWSpfBPSV3SXgRF87uO74',
      prop1: 'value21',
      prop2: 'value22',
      prop3: 'value23',
    },
    {
      id: 'JAmjRlfQT8rLTm5tG2m1L',
      prop1: 'value31',
      prop2: 'value32',
      prop3: 'value33',
    },
  ];


  const [notes, setNotes] = useState(initNotes);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  
  const result = notes.map((note) => {
    return <div> 

      <li key = {note.id} > 
       <span>{note.prop1} </span> 
       <span>{note.prop2} </span> 
       <span>{note.prop3} </span> 
         </li>
      </div>
  })
  const newObj = new Object();
  newObj.id = nanoid();
  newObj.prop1 = value1;
  newObj.prop2 = value2;
  newObj.prop3 = value3;

  
 function addLi(){
  let copy = Object.assign([], initNotes);
  copy.push(newObj);
  
  setNotes(copy)
 }
  
  return <>
  <input onChange={(event) => setValue1(event.target.value)}></input>
  <input onChange={(event) => setValue2(event.target.value)}></input>
  <input onChange={(event) => setValue3(event.target.value)}></input>
  <ul>
    {result}
  </ul>
  <button onClick={() => addLi()}></button>
  </>
  
  }
  
  export default App;