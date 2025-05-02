import React from 'react';

function PregResult({curWeek}){
	let text = '';

	if (curWeek > 0 && curWeek <= 12){
		text = 'Вы в первом триместе беременности'
	}else if (curWeek > 12 && curWeek <= 24){
		text = 'Вы во втором триместе беременности'
	}  else if (curWeek > 24 && curWeek <= 38){
		text = 'Вы в третьем триместе беременности'
	}else if (curWeek > 38){
		text = ' Вам скоро рожать!'
	}
	return <>
	<p>{text}</p>
	</>
}

export default PregResult;