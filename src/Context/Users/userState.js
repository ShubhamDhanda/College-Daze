import React, { useState } from 'react';
import userContext from './userContext';

const UserState = (props) => {
    const host = 'http://localhost:5000';

    //Login User
    const userLogin = async (creds) => {
        const response = await fetch(`${host}/auth/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                loginID: creds.loginID,
                password: creds.password,
                type: creds.type
            })
        });
        const json = await response.json();
        console.log(json);

        if (json.success) {
            //Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
        }

        return json;
    }

    //Signup User
    const userSignup = async (creds) => {
        if (creds.type === "shopkeeper") {
            const response = await fetch(`${host}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: creds.name,
                    phoneNumber: creds.phoneNumber,
                    loginId: creds.loginId,
                    password: creds.password,
                    type: creds.type,
                    shopName : creds.shopName,
                    shopType: creds.shopType
                })
            });
        }else{
            const response = await fetch(`${host}/auth/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: creds.name,
                    phoneNumber: creds.phoneNumber,
                    loginId: creds.loginId,
                    password: creds.password,
                    type: creds.type
                })
            });
        }
        const json = await response.json();
        console.log(json);

        if (json.success) {
            //Save the auth Token and redirect
            localStorage.setItem('token', json.authToken);
        }

        return json;
    }

    //Delete User
    const deleteUser = async (Id) => {
        const response = await fetch(`${host}/auth/deleteUser`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id : Id
            })
        });
        const json = await response.json();
        console.log(json);

        return json;
    }

    const getUserDetails = async (id) => {
        const response = await fetch(`${host}/auth/getUserDetails/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const json = await response.json();
        console.log(json);

        return json;
    }

    return (
        <userContext.Provider value={{ userLogin, userSignup, deleteUser, getUserDetails }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState;