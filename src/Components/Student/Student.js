import React from 'react'
import './Student.css'
import { Link } from 'react-router-dom'

export const Student = (props) => {
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
  const handleClick3 = (e)=>{
    props.setary(e);
  }
  
  return (
    <>
      <div className="row">
      {props.Data.map((element) => {
                  return <Link to="/itemcaller" className="card" style={{width: "18rem"}} onClick={()=>handleClick3(element.items)}>
                  <img className="card-img-top" src="https://clipartcraft.com/images/laundry-clipart-woman.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                  </div>
                  </Link>
      })}
      </div>
      </>
  )
}
