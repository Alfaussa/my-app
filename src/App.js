⊗jsrtPmFmsChI
// 
// 
// №1

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {
const [checked, setChecked] = useState(true);
const [result, setResult] = useState();

function showMessage(event){
 setResult(checked ? 'hello, user! ' : 'bye, user!')
}

 
return <>
<input type = 'checkbox' checked = {checked} onChange={() => setChecked(!checked)}/>
<button onClick={showMessage }></button>
<p>{result}</p>

</>
}


export default App;