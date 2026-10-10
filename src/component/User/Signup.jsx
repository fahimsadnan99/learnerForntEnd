import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import PasswordField from "./PasswordField";

function SignupForm() {
  const [form, setForm] = useState({ name: "", UID: "", password: "" });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const notifySuccess = (x) => toast.success(x, { autoClose: 2000 });
  const notifyError = (x) => toast.error(x, { autoClose: 2000 });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
    } catch {
      notifyError("Already Signup this UID");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="wrap auth">
      <section className="auth__intro">
        <p className="auth__risk">
          ট্রেডিং একটা ঝুঁকিপূর্ণ ব্যবসা, আপনার সম্পূর্ণ টাকা এখানে ইনভেস্ট করবেন
          না,এখানে আপনি সাইকোলজির জন্যে আপনার সম্পূর্ণ টাকা লস করতে পারেন।
        </p>
        <p>
          আসসালামুয়ালাইকুম, আমি <strong>ট্রেডার সাদনান</strong>,আমি ২০১৬ থেকে
          ট্রেডিং এর সাথে যুক্ত আছি।আমার প্রায় ১০ বছরের অভিজ্ঞতা ট্রেডিং ফিল্ডে।
        </p>
        <p>
          ট্রেডিং এর উপরে ১৬ টা ব্যাচ প্রায় ২০০০ মত Student দের শিখানোর
          অভিজ্ঞতার আলোকে আমি এই কোর্সে আমার সম্পূর্ণ ট্রেডিং এনালাইসিস বেসিক টু
          মাস্টার সব কিছু টপিক বাই টপিক আপনাদের জন্যে দিয়ে দিলাম।
        </p>
        <p>
          <a href="https://t.me/traderSadnan1" target="_blank" rel="noreferrer">
            টেলিগ্রামে জয়েন করতে ক্লিক করুন
          </a>
        </p>
      </section>

      <section className="panel auth__panel">
        <h1 className="auth__title">Sign up</h1>
        <form onSubmit={handleSubmit} className="auth__form">
          <div className="field">
            <label htmlFor="name">Full name</label>
            <div className="field__control">
              <input
                id="name"
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                autoComplete="name"
                required
              />
            </div>
          </div>
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
            autoComplete="new-password"
          />
          <button type="submit" className="btn-solid auth__submit" disabled={loading}>
            {loading ? "Signing up…" : "Sign up"}
          </button>
        </form>
        <p className="auth__switch">
          Already have an account? <Link to={"/LoginForm"}>Log in</Link>
        </p>

        <div className="auth__howto">
          <p>
            লিঙ্ক -{" "}
            <a
              href="https://market-qx.trade/sign-up/?lid=1630480"
              target="_blank"
              rel="noreferrer"
            >
              Quotex Link - Click Me
            </a>
          </p>
          <p>লিঙ্ক থেকে কোটেস্ক ID খুলে, UID দিয়ে সাইনআপ করুন </p>
          <p>
            ওয়েবসাইডে সাইনআপ করতে পাসওয়াড নিজের মত করে দিন, কোটেস্কএর পাসওয়াড দিয়ে
            সাইনআপ/লগইন লাগবেনা।
          </p>
        </div>
      </section>
    </div>
  );
}

export default SignupForm;
