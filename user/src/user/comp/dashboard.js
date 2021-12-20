import React from "react";
import { useLocation } from "react-router-dom";

const Dashboard = () => {

    const location = useLocation();
    const [data] = React.useState({
        user_name: location.state.user_name,
        Name: location.state.name,
        Email: location.state.email,
        Number: location.state.number,
    });

    console.log(data);

    return (
        <>
        <div className="sub-nav">
            <h1>Dashboard</h1>
            <h1>{data.Name}</h1>
            <h1>{data.Email}</h1>
            <h1>{data.Number}</h1>
            <h1>{data.user_name}</h1>
        </div>
        </>
    );
};

export default Dashboard; 