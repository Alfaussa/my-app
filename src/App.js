// ⊗jsrtPmFmsDt 
// 
// 
// №2

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {
  let options = {year: "numeric", month:"numeric",day:"numeric"}
let curDate = new Date().toLocaleDateString("en-US", options);
let arr = curDate.split('/');
let num = +arr[0];
function padTo2Digits(num) {
    
  return num.toString().padStart(2, '0'); // Преобразует 9 в 09, а 10 оставит без изменений
     }
  
    let month = padTo2Digits(num);
    
  
    let res = arr[2] + '-' + month+ '-' + arr[1];


const [date1, setDate1] = useState(res);
const [date2, setDate2] = useState(res);
const [result, setResult] = useState(0);


    function dateDiff(){

      setResult(Math.floor(new Date(date2) - new Date(date1)) / (1000*60*60*24));
    }
  

    
    
    
    
    

return <>

<input type='date' id = 'date1' value = {date1} onChange={event =>setDate1(event.target.value)}></input>
<input type='date' id = 'date2' value = {date2} onChange={event => setDate2(event.target.value)}></input>
<button onClick={dateDiff}></button>
<p>result: {result} </p>
</>



}


export default App;