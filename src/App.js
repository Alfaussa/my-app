//⊗jsrtPmCpUs


import React, {useState} from 'react';
import Product from './Product';
import User from './User';
import Employee from './Employee';
import { nanoid } from 'nanoid'

function App() {
  const users = [
    {id: nanoid(), name: 'user1', surn: 'surn1', 
      age: 30}, 
    {id: nanoid(), name: 'user2', surn: 'surn2', 
      age: 31}, 
    {id: nanoid(), name: 'user3', surn: 'surn3', 
      age: 32}, 
  ];
return <>
 	<User name={users[0].name} surname={users[0].surn} age={users[0].age}/>
   <User name={users[1].name} surname={users[1].surn} age={users[1].age}/>
   <User name={users[2].name} surname={users[2].surn} age={users[2].age}/>
 </>
  
  }
  
  export default App;