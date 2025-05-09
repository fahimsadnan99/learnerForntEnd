import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import R1 from "../../../assets/img/PriceAction/RoundNumber/R1.jpg"
import R2 from "../../../assets/img/PriceAction/RoundNumber/R2.jpg"

const index = () => {
  return (
    <ComponentWrapper title="Round Number">
      <p>
        "রাউন্ড নাম্বার" (Round Number) বলতে বোঝানো হয় এমন একটি সংখ্যা যা
        সাধারণভাবে সহজে মনে রাখা যায়, বা হিসাবের জন্য সুবিধাজনক হয়। সাধারণত এই
        সংখ্যাগুলো ০, ৫০, ১০০, ১০০০ ইত্যাদির মতো হয়।
      </p>

      <h5>✅ রাউন্ড নাম্বারের সহজ উদাহরণ: সংখ্যার শেষে-</h5>

      <p>৫০ ✅</p>

      <p>১০০ ✅</p>

      <p>৫০০ ✅</p>

      <p>১০০০ ✅</p>

      <h5>❌ রাউন্ড নাম্বার না:</h5>

      <p>১৩</p>

      <p>৮৭</p>

      <p>১৪৩</p>

      <p>৯৯৭</p>
      <h5>ফেন্সি নাম্বার:</h5>
      <p>যে নাম্বার গুলো দেখতে আকর্ষণীয়</p>

      <p>যেমন সংখ্যার শেষে </p>
      <p>১১১...৯৯৯ </p>

      <h5>📌 কেন রাউন্ড নাম্বার ব্যবহার করি?</h5>
      <p>মনে রাখতে সহজ</p>

      <p>হিসাব করতে সহজ</p>

      <p>আনুমানিক বলতে</p>

      <h5>রাউন্ড নাম্বার কিভাবে ব্যবহার করে আমরা ট্রেড করবো..?</h5>
      <p>
        রাউন্ড নাম্বার গুলা আমাদের সব সময় সাপোর্ট এবং রেজিস্ট্যান্স এর মত কাজ
        করে, 
        রেঞ্জিং মার্কেট, আপট্রেন্ডে আমাদের রাউন্ড নাম্বার রেজিস্টেন্স এর মত কাজ করে এবং ডাউন
        ট্রেন্ডে রাউন্ড নাম্বার গুলা আমাদের সাপোর্ট হিসেবে কাজ করে
      </p>
       <img src={R1} alt="Single Candle Stick" className="img-fluid my-2" />
       <img src={R2} alt="Single Candle Stick" className="img-fluid my-2" />
    </ComponentWrapper>
  );
};

export default index;
