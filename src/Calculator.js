import React, { useState } from 'react';

import TempInp from './TempInp';
import Verdict from './Verdict';


function Calculator(){

	const[temp, setTemp] = useState(0);

	function changeTemp(event){
		setTemp(event.target.value);
	}
	return <div>

		<TempInp temp ={temp} changeTemp = {changeTemp}/>
		<Verdict temp ={temp}/>

	</div>
}

export default Calculator;