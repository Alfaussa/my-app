import React from "react";

function UserField({text, type, id, isDataEdit, editUser}){
    return <>
    <tr>
        <td>
            {isDataEdit 
            ? <input value ={text} 
            onChange={(event) => editUser(id, 'name', event)}/> : <span>{name}</span> }</td>
        <td>Фамилия: {isDataEdit ? <input value ={surname} onChange={(event) => editUser(id, 'surn', event)}/> : <span>{surname}</span>}</td>
        <td>Возраст: {isDataEdit ? <input value ={age} onChange={(event) => editUser(id, 'age', event)}/> : <span>{age}</span>}</td>
    </tr>
    </>
}
export default User;