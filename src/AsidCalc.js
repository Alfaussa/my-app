import React, { useState } from 'react';

import PHInp from './PHInp';
import AcidResult from './acidResult';

function AcidCalc(){

	const [pH, setpH] = useState();

	function changePH(event){
		setpH(event.target.value);
	}

	return <>

	<PHInp pH = {pH} changePH = {changePH}/>
	<AcidResult pH = {pH}  />

	</>
}
export default AcidCalc;
