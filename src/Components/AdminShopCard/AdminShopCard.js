import React from 'react'
import './AdminShopCard.css'
import pepsiimg from '../../Utils/Images/img-pepsi.png'
import Modal from '../Modal/Modal'

const AdminShopCard = () => {
    
  return (
         <div className="container3">
        <div className="card3">
        <div className="product-image">
            <img src = {pepsiimg} alt="this is image" />
        </div>
        <div className="product-info">
            <h4>Samsung Galaxy s21 ultra 5G</h4>
            <h4>Rs89,017</h4>
        </div>
        <div className="btn">
            <button type="button">Delete
            </button>
        </div>
    </div>
        
    </div>
  )
}

export default AdminShopCard