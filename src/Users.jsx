import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001')
    .then(result => setUsers(result.data))
    .catch(err => console.error(err))
  }, [])

  const handleDelete = (id) => {
    axios.delete("http://localhost:3001/deleteUser/"+id)
    .then(res => {console.log(res)
      window.location.reload()
    })
    .catch(err => console.log(err))
  }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
  <div className='w-50 bg-white rounded p-3'>
    <Link to="/create" className='btn btn-success mb-3'>Add +</Link>
      <table className='table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <tr key={user._id}>
                <td data-label="Name">{user.name}</td>
                <td data-label="Email">{user.email}</td>
                <td data-label="Age">{user.age}</td>
                <td data-label="Action">
                  <Link to={`/update/${user._id}`} className='btn btn-success btn-sm mr-2'>Update</Link>
                  <button className='btn btn-danger btn-sm' onClick={() => handleDelete(user._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
  </div>
</div>


  /*<div className='d-flex flex-column vh-100 bg-primary justify-content-center align-items-center p-3'>
      <div className='w-100 w-md-75 w-lg-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success mb-3'>Add +</Link>
        <div className='table-responsive'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((user) => (
                  <tr key={user._id}>
                    <td data-label="Name">{user.name}</td>
                    <td data-label="Email">{user.email}</td>
                    <td data-label="Age">{user.age}</td>
                    <td data-label="Action">
                      <Link to={`/update/${user._id}`} className='btn btn-success btn-sm mr-2'>Update</Link>
                      <button className='btn btn-danger btn-sm' onClick={() => handleDelete(user._id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
            */
  )
}

export default Users
