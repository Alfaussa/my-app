

import React, {useState} from 'react';
import { nanoid } from 'nanoid'



function App() {
const [value, setValue] = useState('');



 
return <>
<select value={value} onChange={(event) => setValue(event.target.value)}>
  <option>Moscow</option>
  <option>Istanbul</option>
  <option>Malmo</option>
  <option>Paris</option>
</select>
<p>Your city:{value}</p>

</>
}


export default App;