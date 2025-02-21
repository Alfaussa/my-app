

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {
const [value, setValue] = useState('');
const texts = ['Moscow', 'Istanbul', 'Malmo', 'Paris'];
const options = texts.map((text, index) => {
  return <option key = {index}>{text}</option>
})

 
return <>
<select value={value} onChange={(event) => setValue(event.target.value)}>
 {options}
</select>
<p>Your city:{value}</p>

</>
}


export default App;