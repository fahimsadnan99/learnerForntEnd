import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import PasswordField from "./PasswordField";

function LoginForm() {
  const [form, setForm] = useState({ name: "", UID: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const notifySuccess = (x) => toast.success(x, { autoClose: 2000 });
  const notifyError = (x) => toast.error(x, { autoClose: 10000 });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        "https://learn-trading-backend.vercel.app/api/auth/login",
        form
      );
      if (res?.data) {
        localStorage.setItem("token", res?.data?.token);
        notifySuccess(`Login Successful ${res?.data?.user?.name}`);
        navigate("/");
      }
    } catch (err) {
      notifyError(
        err?.response?.data?.message ||
          "Could not log in. Check your UID and password, then try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrap auth auth--narrow">
      <section className="panel auth__panel">
        <h1 className="auth__title">Log in</h1>
        <form onSubmit={handleSubmit} className="auth__form">
          <div className="field">
            <label htmlFor="uid">Quotex UID</label>
            <div className="field__control">
              <input
                id="uid"
                type="number"
                name="UID"
                value={form.UID}
                onChange={handleChange}
                autoComplete="username"
                required
              />
            </div>
          </div>
          <PasswordField
            value={form.password}
            onChange={handleChange}
            autoComplete="current-password"
          />
          <button type="submit" className="btn-solid auth__submit" disabled={loading}>
            {loading ? "Logging in…" : "Log in"}
          </button>
        </form>
        <p className="auth__switch">
          Don’t have an account? <Link to={"/SignupForm"}>Sign up</Link>
        </p>
      </section>
    </div>
  );
}

export default LoginForm;
