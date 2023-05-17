import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import Edit from './Modal';

function Read() {
    const [apiget, setApiget] = useState([])
    const [showmodal, setShowModal] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [modalData, setModalData] = useState()


    const resData = () => {
        setToggle(!toggle)
    }

    function getData() {
        axios.get("https://crudcrud.com/api/bdf95c910832441499ea8a0971da9b0d/user")
            .then((res) => setApiget(res.data))
            .catch((err) => console.log(err))

    }
    useEffect(() => {
        getData()
    }, [toggle])

    const handleDelete = (id) => {
        //console.log(id)
        axios.delete(`https://crudcrud.com/api/bdf95c910832441499ea8a0971da9b0d/user/${id}`)
            .then(getData())
            .catch((err) => console.log(err.message))
        setToggle(!toggle)
    }
    function hideModal() {
        setShowModal(false)
    }
    const handleEdit = (data) => {
        setShowModal(true)
        setModalData(data)
    }
    return (
        <div>
            <Link to='./create'>
                <button className='btn btn-primary chng-btn'>Go to Creat Page</button>
            </Link>
            <h2 className='emp_list'>The list of Users</h2>
            <table className='table-control  table table-bordered table-striped table-light table-hover'>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Password</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        apiget && apiget.map((data, index) => {
                            return <tr key={index}>
                                <td>{data.name}</td>
                                <td>{data.age}</td>
                                <td>{data.password}</td>
                                <td>
                                    <button type="button" onClick={() => handleEdit(data)}>Edit</button>
                                    <button type="button" onClick={() => handleDelete(data._id)}>Delete</button>
                                </td>
                            </tr>
                        })
                    }
                    {
                        showmodal && <Edit onhide={hideModal} mData={modalData} resData={resData} />
                    }

                </tbody>
            </table>
        </div >
    )
}
export default Read