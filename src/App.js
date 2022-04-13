import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Components/Home/Home.js'
import Navbar from './Components/Navbar/Navbar.js'
import Login from './Components/Login/Login.js'
import Signup from './Components/Signup/Signup.js'

function App() {
  return (
    <>
    <Navbar />
    <Router>
      <Routes>
        <Route path="/home" element={Home} />
        <Route path="/login" element={Login} />
        <Route path="/signup" element={Signup} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
