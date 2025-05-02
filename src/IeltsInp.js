import React, { useState } from 'react';

function IeltsInp({score, changeScore}){

    return <>
    <p>Введите общий балл</p>
    <input value = {score} onChange={(event) => changeScore(event)}/>
    </>
}

export default IeltsInp; 