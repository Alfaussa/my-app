import React, { useState } from 'react';

function PHInp({pH, changePH}){

    return <>
    <p>Введите значение pH</p>
    <input value = {pH} onChange={(event) => changePH(event)}></input>
    </>
}

export default PHInp; 