import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { LogOut, Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import logo from "../../assets/img/t-mark.png";

const links = [
  { to: "/", label: "Home", end: true },
  { to: "/priceAction", label: "Price Action" },
  { to: "/MasterClass", label: "Master Class" },
  { to: "/psychology", label: "Psychology" },
  { to: "/MoneyManagement", label: "Money Management" },
];

const SiteHeader = ({ minimal = false }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const signedIn = Boolean(localStorage.getItem("token"));

  // Close the mobile menu whenever the page changes.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/SignupForm");
  };

  return (
    <header className="site-header">
      <div className="wrap site-header__bar">
        <Link to="/" className="brand" aria-label="Trader Sadnan, home">
          <img src={logo} alt="" width="44" height="44" />
          <span>Trader Sadnan</span>
        </Link>

        {!minimal && (
          <nav
            id="site-nav"
            className={"site-nav" + (open ? " is-open" : "")}
            aria-label="Main"
          >
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.end} className="site-nav__link">
                {l.label}
              </NavLink>
            ))}
          </nav>
        )}

        <div className="site-header__actions">
          <ThemeToggle />
          {!minimal && signedIn && (
            <button type="button" className="icon-btn site-header__logout" onClick={logout} aria-label="Log out" title="Log out">
              <LogOut size={19} />
            </button>
          )}
          {!minimal && (
            <button
              type="button"
              className="icon-btn site-header__menu"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="site-nav"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          )}
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
