
import './App.css';
import Item from './Components/Item';
import ItemDate from './Components/ItemDate';


function App() {
  const responce = [
    {
        itemName:"Nirma",
        itemDay:"20",
        itemMonth:"sep",
        itemYear:"1998"
    },
        {
        itemName:"Nirma2",
        itemDay:"202",
        itemMonth:"se2p",
        itemYear:"19982"
    },
        {
        itemName:"Nirma4",
        itemDay:"201",
        itemMonth:"se7p",
        itemYear:"19985"
    }
  ];
  return (
    <div> 
    <Item name={responce[0].itemName}></Item>
    <ItemDate day = {responce[0].itemDay}  month ={responce[0].itemMonth}  year = {responce[0].itemYear} ></ItemDate>

 <Item name={responce[1].itemName}></Item>
    <ItemDate day = {responce[1].itemDay}  month ={responce[1].itemMonth}  year = {responce[1].itemYear}></ItemDate>

     <Item name={responce[2].itemName}></Item>
    <ItemDate day = {responce[2].itemDay}  month ={responce[2].itemMonth} year = {responce[2].itemYear}></ItemDate>


    
   <div className="App"> hello</div>
    </div>
   
  );
}

export default App;
