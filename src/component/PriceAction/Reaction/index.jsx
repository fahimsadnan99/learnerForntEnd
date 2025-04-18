import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import Reaction from "../../../assets/img/PriceAction/Reaction/R1.jpg"

const index = () => {
  return (
    <ComponentWrapper title="Candle Reaction">
      <p>
        ক্যান্ডেল রিঅ্যাকশন (Candle Reaction) বলতে বোঝানো হয় — মার্কেটে কোনো
        নাম্বারে / প্রাইসে আসার পর প্রাইস কীভাবে আচরণ করছে বা রিঅ্যাক্ট করছে, তা
        ক্যান্ডেলের রিজেকসন মাধ্যমে বোঝা। এটি ট্রেডিংয়ে একটি গুরুত্বপূর্ণ
        কনসেপ্ট, কারণ এটি আমাদের বলে দেয়, কোন লেভেল থেকে প্রাইস রিজেক্ট হচ্ছে,
        কোন দিকে মুভ করতে পারে।
      </p>
      <h5>✅ উদাহরণ সহ ব্যাখ্যা:</h5>
      <p>
        কেন্ডেল নিচের দিকে নামছিল, এবং একটি গুরুত্বপূর্ণ নাম্বারে বা প্রাইসে এসে
        ঠেকেছে।
      </p>
      <p>হঠাৎ করে সেখানে একটি বড় লং উইক ওয়ালা বুলিশ ক্যান্ডেল তৈরি হলো।</p>
      <p>
        অর্থাৎ, মার্কেট সেই লেভেল/ price থেকে নিচে গেলেও সাথে সাথে বাইয়াররা এসে
        প্রাইস উপরে তুলে দিলো।
      </p>

      <p>এটি বোঝায়, ওই লেভেলে / নাম্বারে / প্রাইসে "Buyers" সক্রিয় হয়ে গেছে।</p>

      <h5>কেন্ডেল রিয়েকসন দেখে ট্রেড কিভাবে করবো?</h5>

      <p>
        ক্যান্ডেল রিএকশন থেকে ট্রেড করতে হলে আমাদেরকে প্রথমে চলতি ক্যান্ডেলএ কোন
        জায়গা থেকে মার্কেট রিজেকশন ফিল করতেছে বা সাপোর্ট ফিল করতেছে সেটা দেখতে
        হবে ,
      </p>
      <p>
        মনে করি আমাদের মার্কেট/কেন্ডেল ডাউনের দিকে আসতেছে এখন ওই ডাউন দিয়ে
        কেন্ডেল আসার সময় যে যে পয়েন্ট থেকে / প্রাইস থেকে মার্কেট রিজেকশন করে
        উপরের দিকে ঠেলে দেয়, সে সে পয়েন্ট গুলো আমাদের মনে রাখতে হবে,
      </p>
      <p>
        📌উদাহরণ হিসেবে মনে করি আমাদের ক্যান্ডেল ডাউনের দিকে আসতেছে মানে
        ক্যান্ডেল ডাউন এদিকে আসতেছে ,ডানের দিকে আসার সময় মার্কেট 100 থেকে ওপেন
        হয়েছে নিচের দিকে আসতেছে রিজেকসন ফিল করতেছে বা 85 নাম্বারে আমাদের বারবার
        হতে দিকে মার্কেট ঠেলে উপরের দিকে নিয়ে যাইতেছে এর মানে আমাদের 85 নাম্বারে
        বায়ার আছে।
      </p>
      <p>
        এখন পরে ক্যান্ডেল ওপেন হয়ে যদি আমাদের 85 নাম্বারে আসে বা প্রাইজে আসে
        আমরা এখান থেকে আপ এদিকে ট্রেড করতে পারব যেহেতু আগের ক্যান্ডেল এ আমাদেরকে
        85 নাম্বার প্রাইজে বাইরের দিকে মানে আপের দিকে রিয়েকসন দেখাই ছিল ।
      </p>
      <p>
        যদি 85 নাম্বার থেকে মার্কেট বারবার উপর দিকে গিয়ে শেষ পর্যন্ত 85 নিচে
        এসে আমাদের ক্লোজ করে তখন 85 নাম্বার লেভেলটা হবে আমাদের জন্য বা
        রেজিস্ট্যান্স লেভেল।পরের ক্যান্ডেলটা ওই রেজিস্ট্যান্স লেভেল থেকে ডাউনের
        দিকে আমরা ট্রেড করতে পারবো।
      </p>
      <p>
        তেমনি ভাবে বায়ার কেন্ডেলে রিঅ্যাকশন দেখে আমারা সেলার এবং বায়ার সাইডের
        দিকে ট্রেড করতে পারবো।
      </p>

      <p>
        কেন্ডেল রিএকশন কে আরো ভালোভাবে বুঝতে হলে আমাদেরকে এরিয়া চাটে যেতে হবে
        এরিয়া চার্ট কোন একটা প্রাইজে মার্কেট বার বার উঠানামা করলে ওই প্রাইসটা আমার
        জন্য সাপোর্ট এবং রেজিট্রেন্স হবে।
      </p>
      <img src={Reaction} alt ="Candle Reaction" className="my-2 img-fluid"/>
      <p>আমরা এইখানে একটা সিঙ্গেল কেন্ডেলের রিঅ্যাকশন দেখতেছি, কেন্ডেল ১০০ থেকে শুরু হয়ে ৬০ তে এসে নিছের দিকে রিজেকশন হয়ে ৮০ তে এসেছে, এর মানে ৬০ তে আমাদের সেলার আছে,৮০ থেকে কেন্ডেল ৩০ নাম্বারে যায়,৩০ থেকে সেলার প্রেসার দিয়ে আবার ৬০ তে নিয়ে আসে এরপর ৩০ এ এর মানে ৮০ এবং ৬০ এ আমাদের সেলার আছে।
      </p>
      <p>আমরা রানিং কেন্ডেলের রিঅ্যাকশন দেখলাম এবং কোথায় কোথায় সেলার এবং বায়ার প্রেসার আছে তা দেখছি, নেক্সট কেন্ডেলে আমরা দেখবো কেন্ডেল যাদি গ্যাপ আপ করে ৬০ বা ৮০ থেকে শুরু হয় তাহলে সেলার কেন্ডেল আসবে, কারন ওইখানে সেলার আছে, আবার কেন্ডেল যাদি নরমাল ভাবে শুরু হয় তাহলে আমাদের ৬০ এবং ৮০ নাম্বার থেকে ডাউনের দিকে ট্রেড নিতে পারবো, কিচু রুলস মানতে হবে এই জন্যে,</p>
      <p>১/  লং টাইম ফ্রেম ডাউন এ হতে হবে</p>
      <p>২/  ট্রেন্ড ডাউনে হতে হবে তাহলে উপরে রিঅ্যাকশন দেখে ট্রেড টা নিতে পারব।</p>

      <p>*** ঠিক তেমনি আমরা আপ ট্রেন্ড হোক বা ডাউন ট্রেন্ড হোক , আমরা ট্রেড করতে পারবো রিয়েকসন দেখে , আপে বা ডাউনে। </p>
    </ComponentWrapper>
  );
};

export default index;
