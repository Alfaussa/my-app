import React, { useState } from "react";
import User from "./User";
import { nanoid } from 'nanoid';

function Users(){
    const users = [
        {id: nanoid(), name: 'user1', surn: 'surn1', 
          age: 30}, 
        {id: nanoid(), name: 'user2', surn: 'surn2', 
          age: 31}, 
        {id: nanoid(), name: 'user3', surn: 'surn3', 
          age: 32}, 
      ];
    const[currentUsers, setUser] = useState(users);


    function changeUser(id, field, event){
      setUser(currentUsers.map(currentUser => {
        if(currentUser.id === id){
          currentUser[field] = event.target.value;
        }
        return currentUser;
      }))
    }

    
      
const rows = currentUsers.map(currentUser => {
    return <User 
      id = {currentUser.id}
      key = {currentUser.id}
      name = {currentUser.name}
      surname={currentUser.surn}
      age = {currentUser.age}
      changeUser={changeUser}
     
      />
        
    })
    return <table>
<tbody>
  {rows}
</tbody>
    </table>
}
export default Users; ;