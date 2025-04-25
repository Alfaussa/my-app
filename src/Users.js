import React, { useState } from "react";
import User from "./User";
import { nanoid } from 'nanoid'

function Users(){
    const users = [
        {id: nanoid(), name: 'user1', surn: 'surn1', 
          age: 30, isDataEdit: false}, 
        {id: nanoid(), name: 'user2', surn: 'surn2', 
          age: 31, isDataEdit: false}, 
        {id: nanoid(), name: 'user3', surn: 'surn3', 
          age: 32, isDataEdit: false}, 
      ];
    const[currentUsers, setUser] = useState(users);

    function toggleUser(id){
      setUser(currentUsers.map(currentUser => {
        if(currentUser.id === id){
          currentUser.isDataEdit = !currentUser.isDataEdit
        }
        return currentUser;
      }))
    }

    function editUser(id, field, event){
      setUser(currentUsers.map(currentUser => {
        if(currentUser.id === id){
          currentUser[field] = event.target.value;
        }
        return currentUser;
      }))
    }

    
      
    const resultUsers = currentUsers.map(currentUser => {
    return <User 
      id = {currentUser.id}
      key = {currentUser.id}
      name = {currentUser.name}
      surname={currentUser.surn}
      age = {currentUser.age}
      isDataEdit={currentUser.isDataEdit}
      toggleUser={toggleUser}
      editUser={editUser}
     
      />
        
    })
    return <>
    {resultUsers}
    </>
   
}
export default Users; ;