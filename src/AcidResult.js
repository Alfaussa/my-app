import React, { useState } from 'react';

function AcidResult({pH}){
    let result = '';
    if (pH = 7){
    result = 'среда нейтральная'
    } else if (pH > 7) {
    result = 'среда щелочная'
    } else if (pH < 7) {
    result = 'среда кислая'
    } else{
    result = 'введите число!'
    }

    return<>
     <p>{result}</p>
     </>
}

export default AcidResult;