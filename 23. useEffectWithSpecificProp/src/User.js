import React, { useEffect, useState } from "react";
import './App.css';

function User(props) {

    useEffect(()=>{
        console.log("Use Effect from User Count");
    },[props.countProp]);

    useEffect(()=>{
        console.log("Use Effect  from User Data");
    },[props.dataProp]);

    return (
        <div className='App-child'>
            <h3>useEffect With Specific Props</h3>
            <h3>Props from App child User</h3>
            <h2>Count Porps :: {props.countProp}</h2>
            <h2>Data Porps :: {props.dataProp}</h2>
        </div>
    );
}
export default User;