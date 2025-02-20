// ⊗jsrtPmFmsTx 
// 
// 
// №1

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {

const [num, setNum] = useState();
const [multiNum, setMultiNum] = useState(0);

function handleClick(event){
  setNum(event.target.value);
}
  
function numberSum(num){
  let res = [];
res = num.split('').map(string => +string).reduce((acc, item) => (acc + item))
setMultiNum(res);
 }


function func(event){
  handleClick(event);
  numberSum(num);
}




 
return <>
<textarea value = {num} onChange ={func}/>
<p>{multiNum}</p>


</>



}


export default App;