import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";

const index = () => {
    const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="container d-flex align-items-center justify-content-center min-vh-100">
    <div className="card shadow p-4 w-100" style={{ maxWidth: "400px" }}>
      {isLogin ? <LoginForm onSwitch={() => setIsLogin(false)} /> : <SignupForm onSwitch={() => setIsLogin(true)} />}
    </div>
  </div>
  )
}

export default index