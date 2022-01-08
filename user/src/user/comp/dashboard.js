import React from "react";
import { Route, Routes, Navigate, Link } from "react-router-dom";

function Dashboard () {

    const handlesingout = () => {
        sessionStorage.removeItem("token");
        window.location.reload();
    };


    return (
        <>
        <div className="sub-nav">
            <h1>Dashboard</h1>
            <Link className='btn btn-success' to="/user/dashboard/newtaks">Add tasks</Link>{'    '}
            <Link className='btn btn-primary' to="/user/dashboard/tasks">tasks</Link>{'    '}
            <Link className='btn btn-warning' to="/user/dashboard/profile">Profile</Link>{'    '}
            <button className="btn btn-danger" onClick={handlesingout}>Sign Out</button>
        </div>
        <hr />
        <Routes>
            <Route path="/newtaks" element={<Newtaks />} />
            <Route path="/tasks" element={<Tasks />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
        </>
    );
};


function Newtaks () {

    return (
        <>
        <div className="sub-nav">
            <h1>New Taks</h1>
            <form>
                <div className="form-group">
                    <label >Tasks:</label>
                    <select className="form-select" defaultValue={"Select"} >
                        <option value="Select">Select</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <br />
                    <label >No of:</label>
                    <input type="number" className="form-control"/>
                </div>
                <br />
                <div className="form-group">
                    <label >From:</label>
                    <input type="date" className="form-control" />
                </div>
                <br />
                <div className="form-group">
                    <label >To:</label>
                    <input type="date" className="form-control" />
                </div>
                <br />
                <div className="form-group">
                    <label >Note for us:</label>
                    <textarea className="form-control" rows="5" defaultValue={""} />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    
        </>
    );

};


function Profile() {
    return (
        <>
        <div className="sub-nav">
            <h1>Profile</h1>
            <form>
                <div className="form-group">
                    <label >Name:</label>
                    <input type="text" className="form-control" />
                </div>
                <br />
                <div className="form-group">
                    <label >Email:</label>
                    <input type="email" className="form-control" />
                </div>
                <br />
                <div className="form-group">
                    <label >Address:</label>
                    <textarea className="form-control" rows="5" />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
        </>
    );
};

function Tasks() {

    return (
        <>
        <div className="sub-nav">
            <h1>Tasks</h1>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tasks</th>
                        <th scope="col">No of</th>
                        <th scope="col">From</th>
                        <th scope="col">To</th>
                        <th scope="col">status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>  
                        <td>One</td>
                        <td>1</td>
                        <td>01/01/2020</td>
                        <td>01/01/2020</td>
                        <td>Done</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
};











export default Dashboard; 


