import './App.css';

import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

import Home from './Components/Home/Home'
import Navbar from './Components/Navbar/Navbar'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'

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
