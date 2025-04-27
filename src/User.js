import React from "react";
import UserField from "./UserField";

function User({name, surname, age, id, changeUser}){
    return <>
    <tr>
    <td>Имя: <UserField
        text = {name}
        type = 'name'
        id = {id}
        changeUser={changeUser}
    />
    </td> 
    <td>Фамилия: <UserField
        text = {surname}
        type = 'surn'
        id = {id}
        changeUser={changeUser}/>
    </td> 
    <td>Возраст: <UserField
        text = {age}
        type = 'age'
        id = {id}
        changeUser={changeUser}/>
    </td>       
      
    </tr>
    </>
}
export default User;