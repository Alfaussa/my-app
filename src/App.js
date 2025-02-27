⊗jsrtPmDtAOp №2//

import React, {useState} from 'react';
import { nanoid } from 'nanoid'

function App() {

  const [notes, setNotes] = useState([1, 2, 3, 4, 5]);


  const result = notes.map((note, index) => {
    return <div> 
      <li key = {nanoid()} onClick={() => squaredNum(index)}> {note} </li>
      <button onClick={() => deleteLi(index)}>delete</button>
      </div>
  })
  let copy = Object.assign([], notes);
  function squaredNum(index) {
    copy[index] = copy[index] ** 2  ;
    setNotes(copy);
  }
  
  function deleteLi(index){
  let copy1 = Object.assign([], notes);
  copy1.splice(index, 1);
  setNotes(copy1);
  }

  return <>
  
  <ul>
    {result}
  </ul>
  </>
  
  }
  
  export default App;





