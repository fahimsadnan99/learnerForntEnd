import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import ArticleShell from "./ArticleShell";

const ComponentWrapper = ({ title, children }) => {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();

  // Access check: lessons only render once the server confirms the token.
  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://learn-trading-backend.vercel.app/api/token/check", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setActive(response?.data?.isValid);
      })
      .catch(() => {
        navigate("/SignupForm");
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!active) {
    return (
      <div className="wrap article-loading" role="status" aria-live="polite">
        <span className="article-loading__dot" aria-hidden="true" />
        Loading lesson…
      </div>
    );
  }

  return <ArticleShell title={title}>{children}</ArticleShell>;
};

export default ComponentWrapper;
