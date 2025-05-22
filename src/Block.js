import React from "react";
import styled from "styled-components";
const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 150px;
`;
const Input = styled.input`
	background: ${(props) => (props.first ? 'yellow' : 'green')};

	margin: 5px;
	font-size: 18px;
`;

function Block() {
	return (
		<Container>
	<Input first = {+true} />
	<Input placeholder="name" 
		type="text" /> 
	<Input type="password" />
</Container>
	);
}

export default Block;