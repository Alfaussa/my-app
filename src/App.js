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
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');

  const result = notes.map((note) => {
    return  <li key = {note.id} > 
       <span>{note.prop1} </span> 
       <span>{note.prop2} </span> 
       <span>{note.prop3} </span> 

       <button onClick={() => addText(note.id)}>
				btn
			</button>
         </li>
      
  })


  
function addText(id){
let copy = Object.assign([], notes)
copy.forEach(function(note, i, copy){
  if(note.id === id){
for(let key in note){
  setValue1(note.prop1);
  setValue2(note.prop2);
  setValue3(note.prop3);
}
}
})
  }

  return <>
  
  <ul>
    {result}
    <input value = {value1}></input>
    <input value = {value2}></input>
    <input value = {value3}></input>

  </ul>

  </>
  
  }
  
  export default App;
