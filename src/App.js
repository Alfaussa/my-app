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
  // const [isVisible, setIsVisible] = useState(false) 
  
  let but = document.getElementById('button2');
  let but1 = document.getElementById('button1');
  
  function setIsVisible1(){
    but.style.display  = 'block';
    but1.style.display  = 'none';
}
function setIsVisible2(){
    but.style.display  = 'none';
    but1.style.display  = 'block';
}
;

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
</>



}


export default App;