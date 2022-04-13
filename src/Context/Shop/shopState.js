import React, { useState } from 'react';
import shopContext from './shopContext'

const UserState = (props) => {
    const host = 'http://localhost:5000';

    const getShops = async () => {
        const response = await fetch(`${host}/shops/getshops`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log(json);

        return json;
    }

    const getOrdersShop = async (id) => {
        const response = await fetch(`${host}/shops/getShopOrders/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log(json);

        return json;
    }

    const getOrdersUser = async (id) => {
        const response = await fetch(`${host}/shops/getUserOrders/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log(json);

        return json;
    }

    const orderItem = async (creds) => {
        const response = await fetch(`${host}/shops/orderItem/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shopId: creds.shopId,
                itemId: creds.itemId,
                quantity: creds.quantity
            })
        });
        const json = await response.json();
        console.log(json);

        return json;
    }

    const addSubs = async (creds) => {
        const response = await fetch(`${host}/shops/addSubs/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                shopId: creds.shopId,
                itemId: creds.itemId,
                timeLimit: creds.timeLimit
            })
        });
        const json = await response.json();
        console.log(json);

        return json;
    }

    const addItem = async (creds) => {
        const response = await fetch(`${host}/shops/addItem/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ItemName: creds.name,
                quantity: creds.quantity,
                price: creds.quantity,
                desc: creds.desc
            })
        });
        const json = await response.json();
        console.log(json);

        return json;
    }

    return (
        <shopContext.Provider value={{ getShops, getOrdersShop, getOrdersUser, orderItem, addSubs, addItem  }}>
            {props.children}
        </shopContext.Provider>
    )
}

export default UserState;