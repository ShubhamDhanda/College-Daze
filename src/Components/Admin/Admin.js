import React from 'react'
import AdminShopCard from '../AdminShopCard/AdminShopCard'
import './Admin.css'

export const Admin = () => {

  const ary=[
    1,2,3,4,5,6
  ]
  return (
    <>
    <div className="pendingHeading">
      <p>Shop Lists</p>
  </div>
    <div className="formain">

      {ary.map((element) => {
                return <AdminShopCard />
    })}
    </div>
    </>
  )
}
