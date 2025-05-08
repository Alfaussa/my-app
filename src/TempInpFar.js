import React from 'react';

function TempInpFar({temp,changeTemp, fromCtoF}){
let tempF = (temp) => fromCtoF(temp);




return <>
<input value = {tempF} onChange={(event) => changeTemp(event)}/>
</>
}

export default TempInpFar;