
//⊗jsrtPmCpUs

import React, {useState} from 'react';
import Products from './Products';
import User from './User';
import Employee from './Employee';
import { nanoid } from 'nanoid'
import Users from './Users';
import Calculator from './Calculator';
//import {styles} from './styles.js'




function App() {

const wd1 = '200px';
const br1 = '2px solid brown';
const pd1 = '10px';
const ta1 = 'center';
const co1 = 'orangered';
const fw1 = 'bold';
const fs1 = 'italic';
const co2 = 'brown';
const bco1 = 'orange';
const co3 = 'white';

return  <>


<div style = {{
			width: wd1,
			border: br1,
			padding: pd1,
			textAlign: ta1 }}>
			<p style = {{ color: co1, fontWeight: 
				fw1 }}> 
				text
			</p>
			<p style = {{ fontStyle: fs1, color: 
				co2 }}> 
				text
			</p>
			<p style = {{ 
				backgroundColor: bco1,
				fontWeight: fw1,
				color: co3 }}>
				text
			</p>
		</div>
<Calculator/>

</>

 
  
  }
  
  export default App;