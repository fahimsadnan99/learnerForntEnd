import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import pressure1 from "../../../assets/img/otc/PressureReflection/p1.png"
import pressure2 from "../../../assets/img/otc/PressureReflection/p2.png"
import pressure3 from "../../../assets/img/otc/PressureReflection/p3.png"



const index = () => {
  return (
    <ComponentWrapper title="Pressure Reflection" url="">
      <h5 className="mt-4">প্রেসার মার্কেট, দেখে প্রেসার রিফ্লেকশন কিভাবে দেখবো...?</h5>

      <p>
        প্রেসার কেন্ডেল বলতে বুঝি  বায়ার কেন্ডেলের নিছের দিকে ঊইক বড এবং সেলার
        কেন্ডেলের উপরের দিকে ঊইক বড।
      </p>
      <p>বায়ার প্রেসার মার্কেট হল অনেক গুলা বায়ার প্রেসার কেন্ডেল এক সাথে মার্কেটএ দেখলে আমরা সেটাকে বায়ার প্রেসার মার্কেট বুঝি।</p>
      <p>সেলার প্রেসার মার্কেট হল অনেক গুলা সেলার প্রেসার কেন্ডেল এক সাথে মার্কেটএ দেখলে আমরা সেটাকে সেলার প্রেসার মার্কেট বুঝি।</p>

<img src={pressure1} alt="pressure Reflection " className="img-fluid my-2"/>

      <h5 className="my-2">সেলার প্রেসার মার্কেট রিফ্লেকশন কিভাবে হবে?</h5>
       <p>আমরা আগে দেখেছিলাম নরমাল রিফ্লেসন বা স্ট্রং রিফ্লেকশন,</p>
       <p>নরমান রিফ্লেকশন বা স্ট্রং রিফ্লেকশন হলে প্রেসার রিফ্লেকশন কিছুটা আলাদা</p>
      <p>১/ নমারল রিফ্লেকশনে আমরা সেলার অথবা বায়ারকে সাধারানত কোন টেন্ড লাইন বা সাপোট রেসিস্টেন্স থেকে দেখতে পাই,
        কিন্তু প্রেসার রিফ্লেকশনে মার্কেট যদি বায়ার প্রেসার দেখায় তাহলে মার্কেটএ ট্রেন্ড রেজিস্টেন্স লাইন বা রেজিস্ট্রেন্স ব্রেক করে চলে যাবে উপরে।
      </p>
      <p>২/ নমারল রিফ্লেকশনে আমরা সেলার অথবা বায়ারকে সাধারানত কোন টেন্ড লাইন বা সাপোট রেসিস্টেন্স থেকে দেখতে পাই,
      কিন্তু প্রেসার রিফ্লেকশনে মার্কেট যদি সেলার প্রেসার দেখায় তাহলে মার্কেটএ ট্রেন্ড সাপোট লাইন বা সাপোট ব্রেক করে চলে যাবে উপরে।</p>
      <p>যদি সাপোট বা  রেজিস্টেন্স লাইন ব্রেক করে চলে যায় কোন বায়ার প্রেসার মার্কেট বা সেলার প্রেসার মার্কেট তাহলে তাদের রিফ্লেকসন অনেক দেরিতে হয়।</p>
      
      <p>নিছে চিত্রের মাধ্যমে বুঝানো হলো...</p>

      <img src={pressure2} alt="pressure Reflection " className="img-fluid my-2"/>
      <img src={pressure3} alt="pressure Reflection " className="img-fluid my-2"/>

    </ComponentWrapper>
  );
};

export default index;
