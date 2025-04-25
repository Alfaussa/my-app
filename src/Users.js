import React, { useState } from "react";
import User from "./User";
import { nanoid } from 'nanoid'

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

      function toBan(id){
      setUser(currentUsers.map(currentUser => {
        if(id === currentUser.id){
            currentUser.isBanned = true;
        }
        return currentUser;
      }))
      }
    const resultUsers = currentUsers.map(currentUser => {
    return <div>
      <User 
      id = {currentUser.id}
      key = {currentUser.id}
      name = {currentUser.name}
      surname={currentUser.surn}
      age = {currentUser.age}
      isBanned = {currentUser.isBanned}
      toBan={toBan}
      />
        </div>
    })
    return <>
    {resultUsers}
    </>
   
}
export default Users; ;