import React, { useState } from 'react';

import WeekInp from './WeekInp';
import PregResult from './PregResult';

function PregCalc(){

	const[curWeek, setCurWeek] = useState(' ');

	function weekChange(event){
		setCurWeek(event.target.value)
	}

		return <>
		
		<WeekInp curWeek = {curWeek} weekChange = {weekChange}/>
		<PregResult curWeek={curWeek}/>
		
		</>


}
export default PregCalc;