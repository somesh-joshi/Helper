import React from "react";
import { Route, Routes, Link } from "react-router-dom";

function Dashboard () {


    const handlesingout = () => {
        sessionStorage.removeItem("token");
        window.location.reload();
    };


    return (
        <>
        <div className="sub-nav">
            <h1>Dashboard</h1>
            
            <button className="btn btn-danger" onClick={handlesingout}>Sign Out</button>
        </div>
        <hr />
        </>
    );
};


export default Dashboard; 


