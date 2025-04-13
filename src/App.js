//⊗jsrtPmCpUs


import React, {useState} from 'react';
import Product from './Product';
import User from './User';
import Employee from './Employee';
import { nanoid } from 'nanoid'

function App() {
  const personalData = [
    {id: nanoid(), name: 'Alex', surname: 'Fedor', age: 18},
    {id: nanoid(), name: 'Alexey', surname: 'Fedorov', age: 28},
    {id: nanoid(), name: 'Alexandr', surname: 'Fedorenskiy', age: 38},
  ];
return <>
 	<User name={personalData[0].name} surname={personalData[0].surname} age={personalData[0].age}/>
   <User name={personalData[1].name} surname={personalData[1].surname} age={personalData[1].age}/>
   <User name={personalData[2].name} surname={personalData[2].surname} age={personalData[2].age}/>
 </>
  
  }
  
  export default App;