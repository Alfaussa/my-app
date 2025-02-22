

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {

const [value, setVAlue] = useState('');

const texts = ['text1', 'text2', 'text3', 'text4', 'text5']

const options = texts.map((text, index) => {
 return <option key = {index} value = {index} >{text}</option>}
)


 
return <>
<p>Ваш возраст?</p>
<select value = {value} onChange={(event) => setVAlue(event.target.value)}>
{options}
</select>
<p>
		{texts[value]}
		</p>

</>



}


export default App;