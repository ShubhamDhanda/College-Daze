import React from 'react'
import PendingOrders from '../pendingOrders/PendingOrders'
import './PendingOrderCaller.css'


const pendingary = [
    1,2,3,4,5,6
]

const PendingOrdersCaller = () => {
  return (<>
  <div className="pendingHeading">
      <p>Pending orders</p>
  </div>
    <div className='pendings-main  abc'>
    <span className="serialno  abc">S.No</span>
    <span className="Item-Name abc">Itm</span>
    <span className="Quantity abc ">Quan.</span>
    <span className="Total-Price abc">Price</span>
    <span className="Userid abc">UserID</span>

    </div>
    {pendingary.map((element) => {
                return <PendingOrders pendingary1={element}/>
    })}
    <PendingOrders />
    </>
  )
}

export default PendingOrdersCaller