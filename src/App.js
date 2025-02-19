// ⊗jsrtPmFmsDt 
// 
// 
// №2

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {

const [num, numSet] = useState();
const [result, setResult] = useState(0)



function digitSum(){
  const arr = Array.from(String(num)).map(string => +string)
  const sum = arr.reduce((acc, cur) => (acc + cur));
  setResult(sum)
}    



 
return <>

<input value = {num} onChange={event =>numSet(event.target.value)}
 onBlur={digitSum}></input>


<p>result: {result} </p>
</>



}


export default App;