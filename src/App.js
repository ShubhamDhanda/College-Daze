import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { useState } from 'react';

import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Shopkeeper from './Components/Shopkeeper/Shopkeeper'
import { Student } from './Components/Student/Student';
import { ItemCaller } from './Components/itemsCaller/ItemCaller';
import PendingOrders from './Components/pendingOrders/PendingOrders';
import PendingOrdersCaller from './Components/PendingOrdersCaller/PendingOrdersCaller';

function App() {
  // const ary=[
  //   1,2,3,4,5,6,7,8,9
  // ]
  const [ary, setary]= useState([]);
  const [Data, setData] = useState([]);
  console.log(Data);
  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/student" element={<Student Data={Data} setary={setary}/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login setData={setData}/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/shopkeeper" element={<Shopkeeper />} />
        <Route path="itemcaller" element={<ItemCaller ary={ary}/>} />
      </Routes>
      {/* <PendingOrders /> */}
      {/* <PendingOrdersCaller /> */}
    </Router>
    </>
  );
}

export default App;
