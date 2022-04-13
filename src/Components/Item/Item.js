import React from 'react'
import './item.css'
import pepsi from '../../Utils/Images/img-pepsi.png'

export const Item = () => {
  return (
        <div className="card1">
        <div className="circle"></div>
        <div className="content">
            <h2>Pepsi Cola</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus reiciendis amet minus.</p>
            <a href="#">Buy Now</a>
        </div>
        <img src={pepsi} alt="this is image" className="product-img" />
    </div>
  )
}
export default Item;
