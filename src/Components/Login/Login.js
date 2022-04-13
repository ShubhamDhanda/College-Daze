import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
const Login = () => {
  return (
    <>
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
                            <input type="submit" value = "login"/>
                            </Link>
                        </div>
                        
                        <div className="forget">Don't have an account ? <Link to="/signup">Sign Up</Link> </div>
                    </form>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Login;