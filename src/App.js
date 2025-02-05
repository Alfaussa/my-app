import React from 'react';


const prods = [
  {name: 'product1', cost: 100, id: 1},
  {name: 'product2', cost: 200, id: 2},
  {name: 'product3', cost: 300, id: 3},
 ];

function App() {
const res = prods.map(function(item){
  return <p key = {item.id}>
    {item.name}
    <span>{item.cost}</span>
    </p>
})

return <>
{res}</>
  
}

export default App;