import React from 'react'
import { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";
import { Link } from 'react-router-dom';

function SignupForm() {
    const [form, setForm] = useState({ name: "", uid: "", password: "" });
    const [showPassword, setShowPassword] = useState(false);
  
    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
    const togglePassword = () => setShowPassword(!showPassword);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log("Signup Data", form);
    };
  
    return (
      <div className='row'>
        <div className='col-lg-4 col-md-8 col-sm-12 mx-auto mt-5'>
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className='mx-3'>
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control my-2" />
          </div>
          <div className="form-group">
            <label>QUOTEX UID</label>
            <input type="number" name="uid" value={form.uid} onChange={handleChange} required className="form-control my-2" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <div className="input-group">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                required
                className="form-control my-2"
              />
              <div className="input-group-append">
                <button
                  type="button"
                  onClick={togglePassword}
                  className="btn btn-outline-secondary my-2"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-primary btn-block mt-3 mx-auto">Sign Up</button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <Link to={"/LoginForm"} className="btn btn-link p-0">Login</Link>
        </p>
        </div>
        
      </div>
    );
  }

export default SignupForm