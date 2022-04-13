import React from 'react'
import './Signup.css'

const Signup = () => {
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
                    <h2>Sign Up</h2>
                    <form >
                       <div className="inputBox">
                           <input type="text" name="" id="" placeholder="Username"/>
                       </div> 
                       <div className="inputBox">
                        <input type="passowrd" name="" id="" placeholder="passowrd"/>
                        </div>
                        <div className="inputBox">
                        <input type="passowrd" name="" id="" placeholder="confirm passowrd"/>
                        </div>
                        <div className="inputBox">
                            <input type="submit" value = "Sign Up"/>
                        </div>
                        
                    </form>
                </div>
            </div>
        </div>
        
    </section>
    </>
  )
}

export default Signup