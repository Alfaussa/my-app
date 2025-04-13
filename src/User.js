import React from "react";

function User({name, surname, age}){
    return <>
    <tr>
        <td>Имя: {name}</td>
        <td>Фамилия: {surname}</td>
        <td>Возраст: {age}</td>
    </tr>
    </>
}
export default User;