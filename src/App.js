import React from 'react';

function App() {
 const arr = ['a', 'b', 'c', 'd', 'e'];
const res = arr.map(function(elem, index){
  return <li key = {index}>{elem}</li>
})



  return <>
  <ul>{res}</ul></>

}
export default App;