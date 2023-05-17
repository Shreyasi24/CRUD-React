import React, { useState } from 'react'
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

export default function Create() {
    const [data, setData] = useState({
        name: "",
        age: "",
        password: ""
    })
    const { name, age, password } = data;
    const navigate = useNavigate("")
    const handlechange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }
    const handlesubmit = (e) => {
        e.preventDefault();
        const info = {
            name: name,
            age: age,
            password: password
        }
        //console.log(info)
        axios.post("https://crudcrud.com/api/bdf95c910832441499ea8a0971da9b0d/user", info)
            .then((res) => setData(res.data))
            .then(navigate("/"))
            .catch((err) => console.log(err.message))
    }
    return (
        <>
            <Link to='/'>
                <button className='btn chng-btn'>Go to Users list Page</button>
            </Link>
            <h1>Create Data</h1>
            <div className='crt-pg row'>
                <div className='col-md-6'>
                    <form onSubmit={handlesubmit}>
                        <div className='form-group'>
                            <label><b>Enter Name:</b></label> <br />
                            <input type='text' placeholder='Input Your Name' className='form-control' name='name' value={name} onChange={handlechange} />
                        </div><br />
                        <div className='form-group'>
                            <label><b>Enter Age:</b></label> <br />
                            <input type='number' placeholder='Input Your Age' className='form-control' name='age' value={age} onChange={handlechange} />

                        </div> <br />
                        <div className='form-group'>
                            <label><b>Enter Password:</b></label> <br />
                            <input type='password' placeholder='Input Your Password' className='form-control' name='password' value={password} onChange={handlechange} />

                        </div> <br />
                        <div className='btn-sbmt'>
                            <button type='submit'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
