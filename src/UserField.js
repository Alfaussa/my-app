import React, { useState } from "react";

function UserField({text, type, id, changeUser}){

    const [isDataEdit, setIsDataEdit] = useState(false)
    return <td>
        {
    isDataEdit 
    ? <input value ={text} 
    onChange={(event) => changeUser(id, type, event)}
    onBlur = {() => setIsDataEdit(false) }/> 
    : <span onClick = {() => setIsDataEdit(true)}>{text}</span>
        }
    </td>
}
export default UserField; 