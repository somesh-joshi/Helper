import React from "react";
import '../../App.css';
import axios from 'axios';
import { NavLink, useNavigate } from 'react-router-dom';

const SignUp = () => {
    
        return (
            <>
            <div className="sub-nav">
            <h1>Sign Up</h1>
            <SignUpForm/>
            </div>
            </>
        );
};

const SignUpForm = () => {

    const navigate = useNavigate();    
    const [data, setData] = React.useState({
        name: "",
        number: 0,
        email: "",
        password: "",
        user_name: "",
    });

    // post data to the server
    const handleSubmit = (e) => {  
        e.preventDefault();
        console.log(data);
        // encrept password
        axios.post('http://localhost:4000/users/add', data)
        .then(res => {
            alert(res.data.message);
            navigate("/user/signIn");
        })
        .catch(err => {
            alert(err.message);
        });

        setData({name: "", number: 0, email: "", password: "", user_name: ""});
    };


    return (
        <>
        <div className="sign-up-form">
        <form>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Full Name</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full Name"  onChange={(e) => setData({...data, name:e.target.value})}/>
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Number</label>
        <input type="number" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Number" onChange={(e) => setData({...data, number: e.target.value})}/>
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setData({...data, email: e.target.value, user_name: e.target.value})}/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={(e) => setData({...data, password: e.target.value})}/>
        </div>
        <div className="form-group form-check">
        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
        <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button><br />
        You have <NavLink to="/user/signin">Sign In</NavLink> if you have an account
        </form>
        </div>
        </>
    );
};


export default SignUp;