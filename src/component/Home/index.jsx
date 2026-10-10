import React from "react";
import { Link } from "react-router-dom";
import priceAction from "../../assets/img/priceAction.jpg";
import OTC from "../../assets/img/otc.jpg";
import PSY from "../../assets/img/psy.jpg";
import MoneyManagement from "../../assets/img/MoneyManagement.jpg";
import { otcLessons } from "../../data/otcLessons";
import { priceActionLessons } from "../../data/priceActionLessons";
import CandlePlate from "./CandlePlate";

const sections = [
  {
    to: "/priceAction",
    img: priceAction,
    title: "Price Action",
    desc: "ক্যান্ডেল, লেভেল, জোন ও চার্ট প্যাটার্ন — দাম কীভাবে চলে তার ভিত্তি।",
    meta: `${priceActionLessons.length} lessons`,
  },
  {
    to: "/MasterClass",
    img: OTC,
    title: "Master Class (OTC)",
    desc: "ক্যান্ডেল, অর্ডারফ্লো, ট্রেপ, লিকুইডিটি ও এরিয়া — ধাপে ধাপে বিস্তারিত পাঠ।",
    meta: `${otcLessons.length} lessons`,
  },
  {
    to: "/psychology",
    img: PSY,
    title: "Psychology",
    desc: "ভয়, লোভ, শৃঙ্খলা ও ধৈর্য — ট্রেডিংয়ের মানসিক দিক।",
    meta: "1 article",
  },
  {
    to: "/MoneyManagement",
    img: MoneyManagement,
    title: "Money Management",
    desc: "রিস্ক রুল, কম্পাউন্ডিং ও ডেইলি লিমিট — একাউন্ট টিকিয়ে রাখার নিয়ম।",
    meta: "1 article",
  },
];

const Home = () => {
  return (
    <>
      <section className="hero">
        <div className="wrap hero__grid">
          <div className="hero__text">
            <h1 className="hero__title">বেসিক থেকে মাস্টার</h1>
            <p className="hero__lede">
              ট্রেডার সাদনানের সম্পূর্ণ ট্রেডিং অ্যানালাইসিস — প্রতিটি টপিক আলাদা
              পাঠে, চার্টের ছবিসহ।
            </p>
            <p className="hero__byline">
              ২০১৬ সাল থেকে ট্রেডিংয়ে। ১৬টি ব্যাচে প্রায় ২০০০ শিক্ষার্থীকে
              শেখানোর অভিজ্ঞতা।
            </p>
            <a className="btn-solid hero__cta" href="#course">
              Browse lessons
            </a>
          </div>
          <CandlePlate />
        </div>
      </section>

      <section id="course" className="wrap course">
        <h2 className="course__title">Course contents</h2>
        <hr className="ledger-rule" />
        <ul className="course-list">
          {sections.map((s) => (
            <li key={s.to}>
              <Link to={s.to} className="course-row">
                <img
                  className="course-row__thumb"
                  src={s.img}
                  alt=""
                  loading="lazy"
                  width="192"
                  height="144"
                />
                <span className="course-row__body">
                  <span className="course-row__title">{s.title}</span>
                  <span className="course-row__desc">{s.desc}</span>
                  <span className="course-row__meta">{s.meta}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Home;
