// ⊗jsrtPmFmsTx 
// 
// 
// №1

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {
const [checked1, setChecked1] = useState(true);
const [checked2, setChecked2] = useState(true);
const [checked3, setChecked3] = useState(true);


 
return <>
<label><input type = 'checkbox' checked = {checked1} onChange={() => setChecked1(!checked1)}/>html</label>
<label><input type = 'checkbox' checked = {checked2} onChange={() => setChecked2(!checked2)}/>css</label>
<label><input type = 'checkbox' checked = {checked3} onChange={() => setChecked3(!checked3)}/>js</label>
<p>Вы выбрали:</p>
<p>{checked1 ? 'html' : ''}</p>
<p>{checked2 ? 'css' : ''}</p>
<p>{checked3 ? 'js' : ''}</p>


</>
}


export default App;