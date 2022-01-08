import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import axios from "axios";

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

    const [data, setData] = React.useState({
        to: "",
        from: "",
        task: "",
        note: "",
        no_of: "",
        address: "",
    });

    return (
        <>
        <div className="sub-nav">
            <h1>New Taks</h1>
            <form>
                <div className="form-group">
                    <label >Task:</label>
                    <select className="form-select" defaultValue={"Select"} onChange={(e) => setData({...data,task: e.target.value})}>
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
                    <label >Address:</label>
                    <textarea className="form-control" rows="3" />
                </div>
                <br />
                <div className="form-group">
                    <label >Note for us:</label>
                    <textarea className="form-control" rows="2" defaultValue={""} />
                </div>
                <br />
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    
        </>
    );

};


function Profile() {

    let token = sessionStorage.getItem("token");
    token = JSON.parse(token);
    const [data, setData] = React.useState({
        name: "",
        email: "",
        address: "",
        number: "",
    });

    React.useEffect(() => {
        
        axios.get('http://localhost:4000/users/'+token)
        .then(res => {
            setData({
                name: res.data.name,
                email: res.data.email,
                address: res.data.address,
                number: res.data.number,
            });
        })
        
    }, []);

    const handlSubmit = (e) => {
        e.preventDefault();
        axios.put('http://localhost:4000/users/'+token, data)
        .then(res => {
            console.log(res.data);
            // set 2 sec timeout
            setTimeout(() => {
                window.location.reload();
            }
            , 2000);
        })
        .catch(err => { 
            console.log(err);
            setTimeout(() => {
                window.location.reload();
            }
            , 2000);
        });
    };

    return (
        <>
        <div className="sub-nav">
            <h1>Profile</h1>
            <form>
                <div className="form-group">
                    <label >Name:</label>
                    <input type="text" className="form-control" defaultValue={data.name} onChange={(e) => {setData({...data,name: e.target.value})}}/>
                </div>
                <br />
                <div className="form-group">
                    <label >Email:</label>
                    <input type="email" className="form-control" defaultValue={data.email} onChange={(e) => setData({...data,email: e.target.value})}/>
                </div>
                <br />
                <div className="form-group">
                    <label >Mobile No:</label>
                    <input type="number" className="form-control" defaultValue={data.number} onChange={(e) => setData({...data,number: e.target.value})}/>
                </div>
                <br />
                <div className="form-group">
                    <label >Address:</label>
                    <textarea className="form-control" rows="5" defaultValue={data.address} onChange={(e) => setData({...data,address: e.target.value})}/>
                </div>
                <br />
                <button type="submit" className="btn btn-primary" onSubmit={handlSubmit}>Submit</button>
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
                        <th scope="col">Edit/Cancle</th>
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
                        <td><Link className='btn btn-primary' to="/user/dashboard/tasks/edit">Edit</Link></td>
                    </tr>
                </tbody>
            </table>
        </div>
        </> 
    );
};











export default Dashboard; 


