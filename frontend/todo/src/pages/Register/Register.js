import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { register } from '../../services/api';
import Header from '../../components/partial/Header';

function Register() {
  const [errors, setErrors] = useState(null)
   
  const navigation=useNavigate()

  const [form, setForm] = useState({
    name: '',
    username: "",
    email: "",
    password: ""
  })

  useEffect(()=>{
    const user = localStorage.getItem('user')
    if(user){
     return navigation('/')
    }
  },[])

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await register(form)

    if (result.status === 200) {
      if (result.data.status === 200) {
        localStorage.setItem('user', JSON.stringify(result.data.data));
        navigation('/');
        return;
      }
    
    if (result.data.status === 201) {
      setErrors(result.data.data);
      return;
    }
    if (result.data.status === 202) {
      toast(result.data.message);
      return;
    }

    } else {
      toast('Something went wrong,please try again')
    }
  }

  return (
    <>
    <Header/>
      <div className="container">
        <ToastContainer />
        <div className="row justify-content-center mt-5">
          <div className="col-md-6">
            <div className="card">
              <div className="card-body">
                <h2 className="card-title text-center">Register</h2>
                <form>
                  <div className="mb-3">
                    <label className="form-label">
                      Email address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name='email'
                      onChange={handleInputChange}
                      aria-describedby="emailHelp"
                      placeholder='enter your email address'
                    />
                        {errors?.email && (
                        <div id="emailHelp" className="form-text text-danger">
                          {errors.email.msg}
                        </div>
                      )}
                  </div>


                  <div className="mb-3">
                    <label className="form-label">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name='name'
                      onChange={handleInputChange}
                      placeholder='enter your name'
                    />
                    {errors?.name && (
                      <div id="emailHelp" className="form-text text-danger">
                        {errors.name.msg}
                      </div>
                    )}
                  </div>


                  <div className="mb-3">
                    <label className="form-label">
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      onChange={handleInputChange}
                      name='username'
                      placeholder='enter username'
                      aria-describedby="emailHelp"
                    />
                    {errors?.username && (
                      <div id="emailHelp" className="form-text text-danger">
                        {errors.username.msg}
                      </div>
                    )}
                  </div>


                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder='enter password'
                      onChange={handleInputChange}
                      className="form-control"
                      id="exampleInputPassword1"
                      name='password'
                    />
                    {errors?.password && (
                      <div id="emailHelp" className="form-text text-danger">
                        {errors.password.msg}
                      </div>
                    )}
                  </div>

                  <button type="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary">
                    Register now
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register