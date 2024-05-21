import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';

function App() {
const product = [
  {
    ItemName:"Nirma",
    ItemDay:"30",
    ItemMonth:"July",
    ItemYear:"2027"
  },
  {
    ItemName:"SurfExcel",
    ItemDay:"3",
    ItemMonth:"January",
    ItemYear:"2029"
  },
  {
    ItemName:"Tide",
    ItemDay:"20",
    ItemMonth:"June",
    ItemYear:"2025"
  }
]
  return (
    <div>
      <Item name={product[0].ItemName}>
        mai hu aapka first element 
      </Item>
      <ItemDate day={product[0].ItemDay} month={product[0].ItemMonth} year={product[0].ItemYear}></ItemDate>
      <Item name={product[1].ItemName}></Item>
      <ItemDate  day={product[1].ItemDay} month={product[1].ItemMonth} year={product[1].ItemYear}></ItemDate>
      <Item name={product[2].ItemName}></Item>
      <ItemDate day={product[2].ItemDay} month={product[2].ItemMonth} year={product[2].ItemYear}></ItemDate>
      <div className='App'>Hello jii i am Abhi</div>
    </div>
  );
}

export default App;
