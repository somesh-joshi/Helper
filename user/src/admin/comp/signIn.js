import axios from "axios";
import React from "react";
import '../../App.css';

const SignIn = () => {
    
        return (
            <>
            <hr/>
            <div className="sub-nav">
            <h1>Sign In</h1>
            <SignInForm />
            </div>
            </>
        );
};

const SignInForm = () => {


    const [data, setData] = React.useState({    
        user_name: "",
        password: "",
    });

    // post data to the server
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        
        axios.post('http://localhost:4000/users/login', data)
        .then(res => {
            console.log(res);
            console.log(res.data);
        })
        .catch(err => {
            console.log(err);
        });
        setData({user_name: "", password: ""});
    };

    return (
        <>

        <div className="sign-in-form">
        <form>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setData({...data, user_name:e.target.value})}/>
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
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
        </form>
        </div>
        </>
    );
};



export default SignIn;