import React, { useState } from 'react';

import IeltsInp from './IeltsInp';
import IeltsRes from './IeltsRes';

function IeltsCalc(){

	const [score, setScore] = useState(' ');

	function changeScore(event){
		setScore(event.target.value);
	}

	return <>
<IeltsInp score ={score} changeScore ={changeScore}/>
<IeltsRes score = {score}/>
	</>
}
export default IeltsCalc;
