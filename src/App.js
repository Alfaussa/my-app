//⊗jsrtPmCpUs


import React, {useState} from 'react';
import Product from './Product';
import User from './User';
import Employee from './Employee';
import { nanoid } from 'nanoid'

function App() {
return <>
 <Product/>
 <User />
 <User />
 <User />
 <Employee name="Alex" surname="alexov" salary="100£" />
 <Employee name="olex" surname="olexov" salary="200£" />
 <Employee name="yalex" surname="yalexov" salary="300£" />
 </>
  
  }
  
  export default App;