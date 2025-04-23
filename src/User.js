import React from "react";

function User({name, surname, age, id, isBanned, toBan}){
    return <>
    <tr>
        <td>Имя: {name}</td>
        <td>Фамилия: {surname}</td>
        <td>Возраст: {age}</td>
        <td>id: {id}</td>
        <span>{isBanned ? 'Юзер забанен' : ' '}</span>
        <button onClick={() => toBan(id)}> Забанить</button>

    </tr>
    </>
}
export default User;