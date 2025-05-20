import React from "react";
import styled from "styled-components";

const Container = styled.div`
margin: 100px;

`
const Button = styled.button`
color: ${(props) => (props.warn ?'red' : 'white')};
background: ${(props) => (props.warn ? 'wellow' : 'greem')};
width: 100px;
height: 40px;
`
function Block(){

    return<Container>
    <Button disabled>button</Button>
    <Button warn>button</Button>
    <Button type="reset">button</Button>
    </Container>
}

export default Block;