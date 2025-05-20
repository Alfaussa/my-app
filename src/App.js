
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

const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;
`;

const Input = styled.input`
	margin: 5px;
	font-size: 18px;
`;

function App() {



return  <>



		<Container>
			<Input />
			<Input placeholder = "name" type = "text" />
			<Input type = "password"/>
		</Container>
	

</>

 
  
  }
  
  export default App;