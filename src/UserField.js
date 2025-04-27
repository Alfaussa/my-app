import React from "react";

function UserField({text, type, id, isDataEdit, editUser}){
    return isDataEdit ? <input value ={text} onChange={(event) => editUser(id, type, event)}/> : <span>{text}</span>
    
}
export default UserField; 