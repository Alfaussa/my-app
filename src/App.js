import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {

  // const state = useState('prod');
  // const name = state [0];
  // const setName = state [1];

  const [name, setName] = useState('prod');
  const [surname, setSurname] = useState('prod');
  const [age, setAge] = useState('prod');
  const [inCart, setIncart] = useState(false);
  const [isBanned, setIsBanned] = useState(false);
  const [count, setCount] = useState(0);
  const [ageCount, setAgeCount] =useState(18);
  const [value, setValue] = useState('text')
  const [text, setText] = useState('write here...')
  const [text1, setText1] = useState('write here...')
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [result, setResult] = useState(0);


// function clickHandler(){
// setCount(count + 1)
// }

  let but = document.getElementById('button2');
  let but1 = document.getElementById('button1');
  
  function setIsVisible1(){
    but.style.display  = 'block';
    but1.style.display  = 'none';
}
function setIsVisible2(){
    but.style.display  = 'none';
    but1.style.display  = 'block';
};
function square(num){
 return num **2
}
function yearBirth(num){
 return new Date().getFullYear() - num;
}
function farToCel(num){
return num - 32;
 }
 function handleClick(){
  setResult(Number(value1)+ Number(value2))
 }


// function handleChange(event){
//   setValue(event.target.value)
// }

return <>

<p>
  <span>Имя: {name}</span>
  <button onClick = {() => setName('alfiya')}></button>
</p>
<p>
  <span>Фамилия: {surname}</span>
  <button onClick = {() => setSurname('us')}></button>
</p>
<p>
  <span>Врзраст: {age}</span>
  <button onClick = {() => setAge('35')}></button>
</p>
<div>
<span>{inCart? 'в корзине': 'не в корзине'}</span>
<button onClick={() => setIncart(!inCart)}btn></button>
</div>
<div>
<span>{isBanned? 'you are banned': 'unbanned'}</span>
<button id ='button1' onClick={() => {setIsBanned(true); setIsVisible1("button2");}}btn>забанить</button>
<button id ='button2' onClick={() => {setIsBanned(false); setIsVisible2("button1")}}btn >разбанить</button>
</div>
<div><span>{count}</span>
<button onClick = {() => setCount(count + 1)}></button></div>

<div>
<button onClick = {() => setAgeCount(ageCount - 1)}></button>
<span>{ageCount}</span>
<button onClick = {() =>  setAgeCount(ageCount + 1)}></button></div>
<input value = {value} onChange = {(event) => setValue(event.target.value)}/>
<p>text: {square(value)}</p>
<input value={text} onChange={(event) => setText(event.target.value)}/>
<p>{yearBirth(text)}</p>
<input value ={text1} onChange={(event)=>setText1(event.target.value)}/>
<p>{text1.length}</p>
<input value={text} onChange={(event) => setText(event.target.value)}/>
<p>{farToCel(text)}</p>
<input value = {value1} onChange={(event) => setValue1(event.target.value)}></input>
<button onClick={() => setResult(Number(value1)+Number(value2))}btn></button>
<input value = {value2} onChange={(event) => setValue2(event.target.value)}></input>
<button onClick={() => setResult(Number(value1)*Number(value2))}btn></button>
<p>result: {result}</p>
</>



}


export default App;