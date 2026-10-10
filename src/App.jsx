import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import SiteHeader from "./component/Layout/SiteHeader";
import SiteFooter from "./component/Layout/SiteFooter";

const AUTH_PATHS = ["/signupform", "/loginform"];

const App = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isAuthPage = AUTH_PATHS.includes(pathname.toLowerCase());

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    } else {
      navigate("/SignupForm");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Move to the top whenever the page changes, like a book turning a page.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="app-shell">
      <SiteHeader minimal={isAuthPage} />
      <main className="app-main">
        <Outlet></Outlet>
      </main>
      <SiteFooter />
      <ToastContainer position="top-center" theme="dark"></ToastContainer>
    </div>
  );
};

export default App;
