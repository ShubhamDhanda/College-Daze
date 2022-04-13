import React from 'react'
import './Modal.css'
import pepsi from '../../Utils/Images/img-pepsi.png'

const Modal = () => {
    const handleClick5=()=>{
        document.getElementById("modal-main").style.display="none";
    }
  return (
    <div className='modal-main' id="modal-main">
        <div className="closebutton" onClick={handleClick5}>X</div>
        <div className="imagemodal">
            <img src={pepsi} alt="this is image" />
        </div>
        <div className="ownerinformation">
            <div className="modaltitle">Owner Name</div>
            <div className="modaldesc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem maiores mollitia quasi.</div>
            <div className="phonenumber1">
                <span className="phonenum">PhoneNumber: {'  '}</span>
                 1234567890</div>
        </div>
    </div>
  )
}

export default Modal