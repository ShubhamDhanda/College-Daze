import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
import Shopkeeper from './Components/Shopkeeper/Shopkeeper'
import { Student } from './Components/Student/Student';
import { ItemCaller } from './Components/itemsCaller/ItemCaller';

function App() {
  const ary=[
    1,2,3,4,5,6,7,8,9
  ]
  return (
    <>
    {/* <Navbar /> */}
    <Router>
      <Routes>
        <Route path="/student" element={<Student/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/shopkeeper" element={<Shopkeeper />} />
        <Route path="itemcaller" element={<ItemCaller ary={ary}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
