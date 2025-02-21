

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {
const [checked, setChecked] = useState(true);


let message;
if(checked) {
  message = 
	<h2>Ура, абзац виден!</h2>
}

 
return <>
<input type = 'checkbox' checked = {checked} onChange={() => setChecked(!checked)}/>
<p>{message}</p>

</>
}


export default App;