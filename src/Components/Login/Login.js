import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = (props) => {
  const fertdata = [
    {
      "title" : "Washerman",
      "Description" : "urea/amonia",
      "Quantity" : "2",
      "Unit" : "MT",
      "items" : [1,2,3,4,5,6],
      "loginID" : "aman1"
    },

    {
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      
      "items" : [1,2,3,4,5],
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    },
      {
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      "items" : [1,2,3,4],
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    },
    {
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      "items" : [1,2],
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    },
    {
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      "items" : [1,2,3],
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    }
  ]
  const handleClick2 = ()=>{
     props.setData(fertdata);
  }
  return (
    <div class="c1">
    <section>
        <div className="color"></div>
        <div className="color"></div>
        <div className="color"></div>
        <div className="box">
            <div className="square" ></div>
            <div className="square" ></div>
            <div className="square" ></div>
            <div className="square" ></div>
            <div className="square" ></div>
            <div className="container">
                <div className="form">
                    <h2>Login</h2>
                    <form >
                       <div className="inputBox">
                           <input type="text" name="" id="" placeholder="Username"/>
                       </div> 
                       <div className="inputBox">
                        <input type="passowrd" name="" id="" placeholder="passowrd"/>
                        </div>
                        <div className="inputBox">
                          <Link to="/student">
                            <input type="submit" value = "login" onClick={handleClick2}/>
                            </Link>
                        </div>
                        
                        <div className="forget">Don't have an account ? <Link to="/signup">Sign Up</Link> </div>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
    </div>
  )
}

export default Login;