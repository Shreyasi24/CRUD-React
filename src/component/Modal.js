import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'



export function Popup(props) {
    // console.log(props)
    return (
        < div className='editing' >
            <><h2 className='emp_list'>Update the list of Users</h2></>
            <>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={props.onhide}>
                    <span aria-hidden="true">&times;</span>
                </button>
                <div className="container bg-light" >
                    <div className='card display-4 card2'>
                        {props.children}
                    </div>
                </div>
            </>

        </div >
    )
}


const Modal = (props) => {
    console.log(props, 'props adata')
    const [toggle, setToggle] = useState(false)
    const modalElement = document.getElementById("modal");
    const [editData, setEditData] = useState({
        name: props.mData.name,
        age: props.mData.age,
        password: props.mData.password
    })
    function handleUpdate(e) {
        setEditData({ ...editData, [e.target.name]: e.target.value })
    }
    function handleSubmit(e) {
        e.preventDefault();
        axios.put(`https://crudcrud.com/api/bdf95c910832441499ea8a0971da9b0d/user/${props.mData._id}`,
            { ...editData }
        ).then((res) => setEditData(res))
        setToggle(!toggle)
        props.onhide()
        props.resData()
    }
    console.log(editData)
    useEffect(() => {

    }, [toggle])
    return (
        <div>
            {ReactDOM.createPortal(<Popup onhide={props.onhide}>
                <form onSubmit={handleSubmit}>
                    <div className='form-group'>
                        <label><b>Enter Name:</b></label> <br />
                        <input type='text' placeholder='Input Your Name' className='form-control' defaultValue={editData.name} name="name" onChange={handleUpdate} />
                    </div><br />
                    <div className='form-group'>
                        <label><b>Enter Age:</b></label> <br />
                        <input type='number' placeholder='Input Your Age' className='form-control' name="age" defaultValue={editData.age} onChange={handleUpdate} />

                    </div> <br />
                    <div className='form-group'>
                        <label><b>Enter Password:</b></label> <br />
                        <input type='password' placeholder='Input Your Password' className='form-control' name="password" value={editData.password} onChange={handleUpdate} />

                    </div> <br />
                    <div className='btn-form'>
                        <button type='submit' >Update Form</button>
                    </div>
                </form>
            </Popup>, modalElement)}
        </div>
    )
}
export default Modal;