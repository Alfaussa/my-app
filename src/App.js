//⊗jsrtPmDtOAA №1


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


  const result = notes.map((note) => {
    return  <li key = {note.id} > 
       <span>{note.prop1} </span> 
       <span>{note.prop2} </span> 
       <span>{note.prop3} </span> 
         </li>
      
  })

  const obj = {id: nanoid(), prop1:'new', prop2:'new', prop3:'new'}
  
 function addLi(){
  let copy = Object.assign([], notes);
  let obj = {id: nanoid(), prop1:'new', prop2:'new', prop3:'new'}
  copy.push(obj);
  setNotes(copy)
 }
  

  return <>
  
  <ul>
    {result}
  </ul>
  <button onClick={() => addLi()}></button>
  </>
  
  }
  
  export default App;
