import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate()

  const Submit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/createUser", { name, email, age })
      .then(result => {
        console.log(result)
        navigate("/")
      })
      .catch(err => console.log(err));
  }

  return (
    // KODE 1

    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h2>Add User</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input type='text' placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} required/>
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} required/>
          </div>
          <div className='mb-2'>
            <label htmlFor='age'>Age</label>
            <input type='text' placeholder='Enter Age' className='form-control' onChange={(e) => setAge(e.target.value)} required/>
          </div>
          <button type='submit' className='btn btn-success'>
            Submit
          </button>
        </form>
      </div>
    </div>

   // KODE 2
   /*
    <div className='container-fluid d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-100 w-sm-75 w-md-50 bg-white rounded p-3'>
        <form onSubmit={Submit}>
          <h2 className='mb-4'>Add User</h2>
          <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Name</label>
            <input type='text' id='name' placeholder='Enter Name' className='form-control' onChange={(e) => setName(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' id='email' placeholder='Enter Email' className='form-control' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='mb-3'>
            <label htmlFor='age' className='form-label'>Age</label>
            <input type='text' id='age' placeholder='Enter Age' className='form-control' onChange={(e) => setAge(e.target.value)} />
          </div>
          <button type='submit' className='btn btn-success w-100'>
            Submit
          </button>
        </form>
      </div>
    </div> */
  )
}

export default CreateUser;
