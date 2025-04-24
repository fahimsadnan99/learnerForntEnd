import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import pressure1 from "../../../assets/img/otc/PressureMarket/pressureCandle.png"
import pressure2 from "../../../assets/img/otc/PressureMarket/pressure2.png"

const index = () => {
  return (
    <ComponentWrapper title="Pressure Market" url="">
      <p className="mt-4">
        নরমাল ক্যান্ডেল বা স্ট্রং ক্যান্ডেলে আমরা দেখছি যে একটা ক্যান্ডেল দুই
        পাশে প্রায় সমান উইক থাকে।
      </p>
      <p>
        মিনিমাম তিন বা তার অধিক স্ট্রং ক্যান্ডেলের যোগফল মিলে আমরা স্ট্রং
        মার্কেট হিসেবে ধরি।
      </p>

      <h5>প্রেসার মার্কেট কি এবং কিভাবে বুঝবো?</h5>

      <p>
        প্রেসার মার্কেট নামের মধ্যে আমরা একটা মানে বুঝতে পারি যে মার্কেটএ
        প্রেসার আছে বুঝায়, প্রেসার কেন্ডেল হলো গ্রীন কেন্ডেলের নিছের দিকের সেডো
        বড হবে আর সেলারের প্রেসার কেন্ডেল হলো উপরের দিকে ঊইক বা সেডো বড হবে।
      </p>
   
   <h5>নিছে চিত্রের মাধ্যমে আমরা বারায় প্রেসার কেন্ডেল এবং সেলার প্রেসার কেন্ডেল দেখবো...</h5>

 <img src={pressure1} alt="pressure candle image" className="img-fluid py-2" />
      <p className="text-black bg-warning p-2">
      ৩ বা তার অধিক প্রেসার কেন্ডেল একসাথে করলে বা তাদের যোগফল হল প্রেসার মার্কেট।
      </p>
       
      
      
   <h5>নিছে চিত্রের মাধ্যমে আমরা বারায় প্রেসার কেন্ডেল এবং সেলার প্রেসার কেন্ডেল একসাথে করে একটা প্রেসার মার্কেট এর উদাহরণ দেখবো...</h5>
      <img src={pressure2} alt="pressure candle image" className="img-fluid py-2" />
      
    </ComponentWrapper>
  );
};

export default index;
