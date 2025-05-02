import React, { useState } from 'react';

function IeltsRes({score}){
    let text = ' ';
    if(score == 1){
        text = 'Ваш уровень А0'
    }else if(score > 1 && score <3){
        text = 'Ваш уровень А1'
    }else if(score >= 3 && score <4){
        text = 'Ваш уровень А2'
    }else if(score >= 4 && score <5){
        text = 'Ваш уровень B1'
    }else if(score >= 5 && score <7){
        text = 'Ваш уровень B2'
    }else if(score >= 5 && score <7){
        text = 'Ваш уровень C1'
    }else if(score >= 7 && score <9){
        text = 'Ваш уровень C2'
        
    }else {
        text = 'введите верный балл'
    }


    return <>
    <p>{text}</p>
    </>
}

export default IeltsRes; 