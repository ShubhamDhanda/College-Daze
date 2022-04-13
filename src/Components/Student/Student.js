import React from 'react'
import './Student.css'
import { Link } from 'react-router-dom'

export const Student = () => {
  const fertdata = [
    {
      "title" : "Washerman",
      "Description" : "urea/amonia",
      "Quantity" : "2",
      "Unit" : "MT",
      "items" : [1],
      "loginID" : "aman1"
    },

    {
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      
      "items" : [],
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    },
      {
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      "items" : [],
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    },
    {
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      "items" : [],
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    },
    {
      "title" : "fertilizer",
      "Description" : "urea/amonia",
      "items" : [],
      "Quantity" : "2",
      "Unit" : "MT",
      "loginID" : "aman1"
    }
  ]
  const handleClick=(element)=>{

  }
  return (
    <>
      <div className="row">
      {fertdata.map((element) => {
                  return <Link to="/itemcaller" className="card" style={{width: "18rem"}}>
                  <img className="card-img-top" src="https://clipartcraft.com/images/laundry-clipart-woman.png" alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">Washer Man</h5>
                  </div>
                  </Link>
      })}
      </div>
      </>
  )
}
