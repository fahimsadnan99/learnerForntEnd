import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function LoginForm() {
  const [form, setForm] = useState({ name: "", UID: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const notifySuccess = (x) =>
    toast.success(x, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = (x) =>
    toast.error(x, {
      position: "top-center",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });
  const togglePassword = () => setShowPassword(!showPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    try {
      const res = await axios.post(
        "https://learn-trading-backend.vercel.app/api/auth/login",
        form
      );
      if(res?.data){
        localStorage.setItem('token', res?.data?.token);
        notifySuccess(`Login Successful ${res?.data?.user?.name}`)
          navigate("/");
      }
      

      // if (res?.data?.status) {
      //   notifySuccess(res);
      //   navigate("/LoginForm");
      // }
    } catch (err) {
      notifyError(err?.response?.data?.message);

    }
  };
  return (
    <div className="row">
      <div className="col-lg-4 col-md-8 col-sm-12 mx-auto mt-5">
        <h2 className="text-center mb-4">LOGIN PAGE</h2>
        <form onSubmit={handleSubmit} className="mx-3">
         
          <div className="form-group">
            <label>QUOTEX UID</label>
            <input
              type="number"
              name="UID"
              value={form.UID}
              onChange={handleChange}
              required
              className="form-control my-2"
            />
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
          <button
            type="submit"
            className="btn btn-primary btn-block mt-3 mx-auto"
            disabled={loading}
          >
            {loading ? "Login Proccess..." : "Login"}
          </button>
        </form>
        <p className="text-center mt-3">
          Don’t have an account?{" "}
          <Link to={"/SignupForm"} className="btn btn-link p-0">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}

export default LoginForm;
