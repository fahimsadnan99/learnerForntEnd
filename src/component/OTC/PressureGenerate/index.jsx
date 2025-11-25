import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import T1 from "../../../assets/img/otc/PressureGenerate/T1.jpg"
import T2 from "../../../assets/img/otc/PressureGenerate/T2.jpg"
import T3 from "../../../assets/img/otc/PressureGenerate/T3.jpg"
import T4 from "../../../assets/img/otc/PressureGenerate/T4.jpg"

const index = () => {
  return (
    <ComponentWrapper title="Pressure Generate">
      <p>
        প্রেসার জেনারেট কথার মাঝে আমরা এর মানে বুঝছি, যে এরিয়াতে আমাদের মার্কেট
        প্রেসার দিতেছে, হতে পারে এটা আপের দিকে বা হতে পারে এটা ডাউনের দিকে
      </p>
      <p>
        যেখান থেকে মার্কেটে সেলিং প্রেসার বেশি ঐসব জায়গায় ক্যান্ডেলের উপরের
        দিকের উইক অনেকটা বড় থাকে এবং এর মানে বুঝতে পারি যে ওই জায়গায় আমাদের
        সেলিং প্রেসার আছে এবং ঠিক উল্টো ভাবে যেসব জায়গায় ক্যান্ডেলের নিচের
        দিকে অনেক লম্বা উইক থাকে , ওটা গ্রীন হতে পারে তার রেড এর মানে হচ্ছে বাইং
        প্রেসার।
      </p>
      <p>
        যেসব জায়গায় বায়িং প্রেসার বা সেলিং প্রেশার থাকে ঐসব জায়গায় নরমালি
        আমরা আপের দিকে বা ডাউনের দিকে ট্রেড করে থাকি এবং মার্কেট ওই জায়গায়
        সবচেয়ে বেশি আমাদেরকে লিকুইড করে এবং আমাদের বিপরীতে চলে যায় মার্কেট।
      </p>
      <p>
        মার্কেট লিকুইডীটি নিয়ে চলে, যেসব জায়গায় আমাদের সেলিং প্রেসার দেখাইছে ওইসব
        জায়গায় মার্কেট আপ এদিকে গিয়ে সেলিং প্রেসার গুলো কালেক্ট করে মানে ওই
        জায়গায় মার্কেট লিকুইড করে আমাদেরকে তারপর লিকুইটি নেওয়ার পরে মার্কেট
        যেদিকে প্রেসার দেখাচ্ছে ওই দিকে যায় মানে ডাউন সাইডে যায়।
      </p>
      
      <p>ঠিক তেমনি যেসব জায়গায় আমাদের বায়িং প্রেসার দেখাইছে ওইসব
        জায়গায় মার্কেট ডাউনের এদিকে গিয়ে বায়িং প্রেসার গুলো কালেক্ট করে মানে ওই
        জায়গায় মার্কেট লিকুইড করে আমাদেরকে তারপর লিকুইটি নেওয়ার পরে মার্কেট
        যেদিকে প্রেসার দেখাচ্ছে ওই দিকে যায় মানে আপ সাইডে যায়।</p>

       <p>নিচে চিত্রের মাধ্যমে বোঝার চেষ্টা করি</p> 

       <img src={T1} alt="Pressure Generate" className="my-2 img-fluid"/>
       <img src={T2} alt="Pressure Generate" className="my-2 img-fluid"/>
       <img src={T3} alt="Pressure Generate" className="my-2 img-fluid"/>
       <img src={T4} alt="Pressure Generate" className="my-2 img-fluid"/>


    </ComponentWrapper>
  );
};

export default index;
