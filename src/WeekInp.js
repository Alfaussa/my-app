import React, { useState } from 'react';

function WeekInp({curWeek,weekChange}){

	return <>
	<p>Введите количество недель</p>
	<input value = {curWeek} onChange={(event) => weekChange(event)}></input>
	</>
}

export default WeekInp;