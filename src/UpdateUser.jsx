import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(result => {
        console.log(result);
        setName(result.data.name);
        setEmail(result.data.email);
        setAge(result.data.age);
      })
      .catch(err => console.error(err));
  }, [id]);

  const update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, email, age })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => console.log(err));
  };

  return ( // KODE 1

    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={update}>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              placeholder='Enter Name'
              id='name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='email'>Email</label>
            <input
              type='email'
              placeholder='Enter Email'
              id='email'
              className='form-control'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-2'>
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              placeholder='Enter Age'
              id='age'
              className='form-control'
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='btn btn-success'>
            Update
          </button>
        </form>
      </div>
    </div>
    // KODE 2
    //  <div className='container-fluid d-flex vh-100 bg-primary justify-content-center align-items-center'>
    //   <div className='w-100 w-sm-75 w-md-50 bg-white rounded p-3'>
    //     <form onSubmit={update}>
    //       <h2 className='mb-4'>Update User</h2>
    //       <div className='mb-3'>
    //         <label htmlFor='name' className='form-label'>Name</label>
    //         <input
    //           type='text'
    //           placeholder='Enter Name'
    //           id='name'
    //           className='form-control'
    //           value={name}
    //           onChange={(e) => setName(e.target.value)}
    //         />
    //       </div>
    //       <div className='mb-3'>
    //         <label htmlFor='email' className='form-label'>Email</label>
    //         <input
    //           type='email'
    //           placeholder='Enter Email'
    //           id='email'
    //           className='form-control'
    //           value={email}
    //           onChange={(e) => setEmail(e.target.value)}
    //         />
    //       </div>
    //       <div className='mb-3'>
    //         <label htmlFor='age' className='form-label'>Age</label>
    //         <input
    //           type='text'
    //           placeholder='Enter Age'
    //           id='age'
    //           className='form-control'
    //           value={age}
    //           onChange={(e) => setAge(e.target.value)}
    //         />
    //       </div>
    //       <button type='submit' className='btn btn-success w-100'>
    //         Update
    //       </button>
    //     </form>
    //   </div>
    // </div>
  );
}

export default UpdateUser;
