

import React, {useState} from 'react';
import { nanoid } from 'nanoid'

function App() {

  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);


  const result = notes.map((note, index) => {
    return <li key = {index}>{note}</li>
  })

  function addElem() {
    let res = [...notes, elem]
    setNotes(res);
    setElem('')
  }

  return <>
  <input value = {elem} onChange={((event) => setElem(event.target.value))}></input>
  <button onClick={addElem}>push me</button>
  <ul>
    {result}
  </ul>
  </>
  
  }
  
  export default App;





