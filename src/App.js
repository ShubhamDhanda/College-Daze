import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'
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
        <Route path="/" element={<Student/>} />
        {/* <Route path="/home" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} /> */}
        <Route path="itemcaller" element={<ItemCaller ary={ary}/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
