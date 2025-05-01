import React from 'react';

function Verdict({temp}){
	let text = '';
 if(temp <= 0) {
	text = 'вода твердая'
 } else if (temp > 0){
	text = 'вода жидкая'
 } else if (temp > 100) {
	text = 'вода газообразная'

  }
  return <p>
	{text}
  </p>

}

export default Verdict;