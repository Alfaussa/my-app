import React from 'react';

function TempInp({temp, changeTemp}){
return <>
<input value = {temp} onChange={(event) => changeTemp(event)}/>
</>
}

export default TempInp;