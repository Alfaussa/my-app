import React from "react";
import UserField from "./UserField";

function User({name, surname, age, id, isDataEdit, toggleUser, editUser}){
    return <>
    <tr>
    <td>Имя: <UserField
        text = {name}
        type = 'name'
        id = {id}
        isDataEdit={isDataEdit}
        editUser={editUser}/>
    </td> 
    <td>Фамилия: <UserField
        text = {surname}
        type = 'surn'
        id = {id}
        isDataEdit={isDataEdit}
        editUser={editUser}/>
    </td> 
    <td>Возраст: <UserField
        text = {age}
        type = 'age'
        id = {id}
        isDataEdit={isDataEdit}
        editUser={editUser}/>
    </td>       
       <button onClick={() => toggleUser(id)}>{isDataEdit ? 'сохранить' : 'редактировать' }</button>
    </tr>
    </>
}
export default User;