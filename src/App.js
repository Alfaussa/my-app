
//⊗jsrtPmCpUs

import React, {useState} from 'react';
import Products from './Products';
import User from './User';
import Employee from './Employee';
import { nanoid } from 'nanoid'
import Users from './Users';
import Calculator from './Calculator';
//import {styles} from './styles.js'
import styled from 'styled-components';

const Text1 = styled.p`
font-style: italic;
color: brown;
`;
const Text2 = styled.p`
	font-style: italic;
	color: brown;
`;

const Text3 = styled.p`
	background-color: orange;
	font-weight: bold;
	color: white;
`;

const Container = styled.div`
	width: 200px;
	border: 2px solid brown;
	padding: 10px;
	text-align: center;
`;
function App() {



return  <>


<Container>
	<Text1>text</Text1>
	<Text2>text</Text2>
	<Text3>tetx</Text3>
</Container>
<Calculator/>

</>

 
  
  }
  
  export default App;