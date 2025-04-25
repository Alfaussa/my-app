import React from "react";

function User({name, surname, age, id, isDataEdit, toggleUser, editUser}){
    return <>
    <tr>
        <td>Имя: {isDataEdit ? <input value ={name} onChange={(event) => editUser(id, 'name', event)}/> : <span>{name}</span> }</td>
        <td>Фамилия: {isDataEdit ? <input value ={surname} onChange={(event) => editUser(id, 'surn', event)}/> : <span>{surname}</span>}</td>
        <td>Возраст: {isDataEdit ? <input value ={age} onChange={(event) => editUser(id, 'age', event)}/> : <span>{age}</span>}</td>
       <button onClick={() => toggleUser(id)}>{isDataEdit ? 'сохранить' : 'редактировать' }</button>
    </tr>
    </>
}
export default User;