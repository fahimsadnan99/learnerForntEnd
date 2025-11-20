import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function SignupForm() {
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
      autoClose: 2000,
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
    setLoading(true);
    try {
      const res = await axios.post(
        "https://learn-trading-backend.vercel.app/api/auth/register",
        form
      );

      if (res?.data?.status) {
        notifySuccess(res?.data?.status);
        navigate("/LoginForm");
      }
    } catch (err) {
      notifyError("Already Signup this UID");
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div style={{fontSize : "14px"}}>
       <h6 className="mt-4 p-2 bg-danger text-white">
              ট্রেডিং একটা ঝুঁকিপূর্ণ ব্যবসা, আপনার সম্পূর্ণ টাকা এখানে ইনভেস্ট করবেন
              না,এখানে আপনি সাইকোলজির জন্যে আপনার সম্পূর্ণ টাকা লস করতে পারেন।{" "}
            </h6>
            <p>
              আসসালামুয়ালাইকুম, আমি <strong>ট্রেডার সাদনান</strong>,আমি ২০১৬ থেকে
              ট্রেডিং এর সাথে যুক্ত আছি।আমার প্রায় ১০ বছরের অভিজ্ঞতা ট্রেডিং ফিল্ডে।
            </p>
            <p>
              ট্রেডিং এর উপরে ১৬ টা ব্যাচ প্রায় ২০০০ মত
              Student দের শিখানোর অভিজ্ঞতার আলোকে আমি এই কোর্সে আমার সম্পূর্ণ ট্রেডিং
              এনালাইসিস বেসিক টু মাস্টার সব কিছু টপিক বাই টপিক আপনাদের জন্যে দিয়ে
              দিলাম।
            </p>
           
            </div>
            <a href="https://t.me/traderSadnan1" className="pointer">টেলিগ্রামে জয়েন করতে ক্লিক করুন</a>
      <div className="col-lg-4 col-md-8 col-sm-12 mx-auto mt-2">
        <h2 className="text-center mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit} className="mx-3">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="form-control my-2"
            />
          </div>
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
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to={"/LoginForm"} className="btn btn-link p-0">
            Login
          </Link>
        </p>
        <div className="mt-4">
        <p>লিঙ্ক - <a href="https://market-qx.trade/sign-up/?lid=1630480">Quotex Link - Click Me</a></p>
        <p>লিঙ্ক থেকে কোটেস্ক ID খুলে, UID দিয়ে সাইনআপ করুন </p>
        <p>ওয়েবসাইডে সাইনআপ করতে পাসওয়াড নিজের মত করে দিন, কোটেস্কএর পাসওয়াড দিয়ে  সাইনআপ/লগইন লাগবেনা।</p>
      </div>
      </div>
     </div>
    </div>
  );
}

export default SignupForm;
