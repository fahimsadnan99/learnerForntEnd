import React from "react";
import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <hr className="ledger-rule" />
      <div className="wrap site-footer__inner">
        <div className="site-footer__about">
          <p className="site-footer__name">Trader Sadnan</p>
          <p className="site-footer__risk">
            ট্রেডিং একটা ঝুঁকিপূর্ণ ব্যবসা, আপনার সম্পূর্ণ টাকা এখানে ইনভেস্ট করবেন
            না, এখানে আপনি সাইকোলজির জন্যে আপনার সম্পূর্ণ টাকা লস করতে পারেন।
          </p>
        </div>

        <nav className="site-footer__links" aria-label="Footer">
          <Link to="/priceAction">Price Action</Link>
          <Link to="/MasterClass">Master Class</Link>
          <Link to="/psychology">Psychology</Link>
          <Link to="/MoneyManagement">Money Management</Link>
          <a href="https://t.me/traderSadnan1" target="_blank" rel="noreferrer">
            টেলিগ্রামে জয়েন করতে ক্লিক করুন
          </a>
        </nav>
      </div>
      <p className="wrap site-footer__legal">
        © {new Date().getFullYear()} Trader Sadnan
      </p>
    </footer>
  );
};

export default SiteFooter;
