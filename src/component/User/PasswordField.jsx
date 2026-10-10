import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const PasswordField = ({ value, onChange, autoComplete }) => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="field">
      <label htmlFor="password">Password</label>
      <div className="field__control">
        <input
          id="password"
          type={visible ? "text" : "password"}
          name="password"
          value={value}
          onChange={onChange}
          autoComplete={autoComplete}
          required
        />
        <button
          type="button"
          className="field__toggle"
          onClick={() => setVisible((v) => !v)}
          aria-label={visible ? "Hide password" : "Show password"}
          aria-pressed={visible}
        >
          {visible ? <EyeOff size={19} /> : <Eye size={19} />}
        </button>
      </div>
    </div>
  );
};

export default PasswordField;
