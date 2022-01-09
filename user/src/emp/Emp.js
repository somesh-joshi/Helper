import React from  'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import '../App.css';
import SignIn from '../emp/comp/signIn.js';
import SignUp from '../emp/comp/signUp.js';
import Dashboard from '../emp/comp/dashboard.js';


const User = () => {

  const [auth, setAuth ] = React.useState(() => {
      return sessionStorage.getItem('token') ? true : false; 
  });

  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate replace to="/user/signIn"/>} />
      <Route path="/signIn" element={<SignIn setAuth={setAuth}/>} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/dashboard/*" element={auth ? <Dashboard /> : <Navigate replace to="/user/signIn"/>} />
    </Routes>
    </>
  );
  
};






export default User;
