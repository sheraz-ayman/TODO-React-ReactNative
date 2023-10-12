import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { login } from '../../services/api';
import {ToastContainer, toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

function Login({user,setUser}) {
  const navigation=useNavigate()

  const [form,setForm]=useState({
    username:'',
    password:''
  });

  useEffect(()=>{
    if(user){
      navigation('/')
    }
  },[])

  const [errors,setErrors]=useState(null)

  const handleChange = (e) => {
    setForm({ ...form,[e.target.name]:e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const result = await login(form);
  
    console.log("form", result);
    setErrors(null);
  
    if (result.status === 200) {
      if (result.data.status === 200) {
        localStorage.setItem('user', JSON.stringify(result.data.data));
        navigation('/');
        return;
      }
    }
    if (result.data.status === 201) {
      setErrors(result.data.data);
      return;
    }
    if (result.data.status === 202) {
      toast(result.data.message);
      return;
    }
  };
  
  return (
    <div className="container">
      <ToastContainer/>
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h2 className="card-title text-center">Login</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address or Username
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={handleChange}
                    name='username'
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  {errors?.username &&(
                    <div id="emailHelp" className="form-text">
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
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={handleChange}
                    name='password'
                  />
                   {errors?.password &&(
                    <div id="emailHelp" className="form-text">
                    {errors.password.msg}
                  </div>
                  )}
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
