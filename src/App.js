// ⊗jsrtPmFmsTx 
// 
// 
// №1

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {

const [text, setText] = useState('');
const [transText, setTransText] = useState('');

function handleClick(event){
  setText(event.target.value);
}

function textTransform(text){
  
  let arrru = [ 'Я','я','Ю','ю','Ч','ч','Ш','ш','Щ','щ','Ж','ж','А','а','Б','б','В','в','Г','г','Д','д','Е','е','Ё','ё','З','з','И','и','Й','й','К','к','Л','л','М','м','Н','н', 'О','о','П','п','Р','р','С','с','Т','т','У','у','Ф','ф','Х','х','Ц','ц','Ы','ы','Ь','ь','Ъ','ъ','Э','э', ' ' ];
  const arren = [ 'Ya','ya','Yu','yu','Ch','ch','Sh','sh','Sh','sh','Zh','zh','A','a','B','b','V','v','G','g','D','d','E','e','E','e','Z','z','I','i','J','j','K','k','L','l','M','m','N','n', 'O','o','P','p','R','r','S','s','T','t','U','u','F','f','H','h','C','c','Y','y','`','`','\'','\'','E', 'e', '-' ];

  for(let i=0; i<arrru.length; i++){
    
    const reg = new RegExp(arrru[i], "g");
    text = text.replace(reg, arren[i]);
    return text;
  }
  setTransText(text);

}

function handleTrans(event){
  handleClick(event);
  textTransform(text);

}

 
return <>
<textarea value = {text} onChange ={handleTrans}/>
<p>{transText}</p>


</>



}


export default App;