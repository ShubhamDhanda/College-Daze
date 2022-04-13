import React from 'react'
import './ItemsCaller.css'
import Item from '../Item/Item'

export const ItemCaller = (props) => {
    const ary = props.ary;
  return (
    <div className="centbody">
    {ary.map((element) => {
                return <Item abc={element}/>
    })}
    </div>
  )
}

export default ItemCaller;