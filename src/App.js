// ⊗jsrtPmFmsDt 
// 
// 
// №4

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {

const [num, numSet] = useState();
const [result, setResult] = useState(0)



function multiDivisors(){
  let arr = [];
  for (let i = 1; i <= num; i++ ){
    if(num % i === 0)
      arr.push(i)
  } 
  const res = arr.reduce((acc, cur) => (acc * cur))

  setResult(res)
  

}


 
return <>

<input value = {num} onChange={event =>numSet(event.target.value)}
 onBlur={multiDivisors}></input>


<p>result: {result} </p>
</>



}


export default App;