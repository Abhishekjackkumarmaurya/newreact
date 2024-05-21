import React from "react"; 
import Products from './components/Product'

const App = () =>{
const products = [
  {
    id:'p1',
    title:'Nirma',
    amount:100,
    date: new Date(2021,8,10)
  },
  {
    id:'p2',
    title:'Ghadi',
    amount:300,
    date: new Date(2021,1,15)
  },
  {
    id:'p3',
    title:'SorfExcel',
    amount:200,
    date: new Date(2021,3,1)
  },
 
    
  {
    id:'p4',
    title:'Ring',
    amount:200,
    date: new Date(2021,30,1)
  },
 
    
]
  return (
    <div>
      <Products items= {products} />
    </div>
  );
}

export default App;
