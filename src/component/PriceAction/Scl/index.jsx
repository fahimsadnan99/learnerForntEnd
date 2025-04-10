import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import T1 from "../../../assets/img/PriceAction/AllLevels/T1.jpg";
import T2 from "../../../assets/img/PriceAction/AllLevels/T1.jpg";
import C1 from "../../../assets/img/PriceAction/AllLevels/T3.jpg";
import T3 from "../../../assets/img/PriceAction/SCL/T1.jpg";
import T4 from "../../../assets/img/PriceAction/SCL/T3.jpg";
import D1 from "../../../assets/img/PriceAction/SCL/Drowing.jpg"
import D2 from "../../../assets/img/PriceAction/SCL/D2.jpg"


const index = () => {
  return (
    <ComponentWrapper title="SCL">
      <h5 className="mt-4">SCL = Single Candlestick Level</h5>
      <p>
        একটা সিঙ্গেল কেন্ডেল স্টিক হইতে পারে ওইটা রেড ক্যান্ডেল হতে পারে ওটা
        গ্রীন ক্যান্ডেল যে ক্যান্ডেলই হোক আমাদের উপরের উইক একটা রেজিস্ট্যান্স
        লেভেল এবং নিচের উইক একটা সাপোর্ট লেভেল, যদি ক্যান্ডেলের উইক না থাকে
        তাহলে উপরের বডিটা একটা রেজিস্ট্যান্স লেভেল আর নিচের বডিটা একটা সাপোর্ট
        লেভেল।
      </p>
      <img src={T1} alt="Single Candle Stick" className="img-fluid my-2" />
      <img src={T2} alt="Single Candle Stick" className="img-fluid my-2" />

      <p>
        বড় টাইম প্রেমে মানে 15 মিনিট 30 মিনিট এবং এক ঘন্টার ক্যান্ডেলের আপার
        উইকে একটা অরিজিনাল লাইন এবং ডাউন উইকে একটা লাইন যদি আমরা ড্র করি তাহলে 1
        মিনিটে এসে যদি দেখি সেই লেভেল গুলা আমাদের সাপোর্ট এবং রেজিস্টেন্স এর মত
        কাজ করছে।
      </p>
      <img src={T3} alt="Single Candle Stick" className="img-fluid my-2" />
      <h5>30 Minute Candle Size</h5>

      <img src={T4} alt="Single Candle Stick" className="img-fluid my-2" />
      <h5>1 Minute Candle</h5>
      <p>
        তেমনি ভাবে আমরা এক মিনিট কেন্ডেলে দেখতে পাইতেছি যে আমাদের আপার উইক টা
        রেজিস্টেন্স এর মতো কাজ করতেছে এবং ডাউন ঊইকটা একটা সাপোর্ট মত কাজ করতেছে
        এক মিনিট ক্যান্ডেল এ ,1 মিনিটে বড় গ্রিন ক্যান্ডেল টা দিয়ে আমরা বুঝতে
        পারতেছি
      </p>

      <h5>📌50% লেভেল</h5>
      <p>
        কথাটার মধ্যেই আমরা বুঝতে পারি যে আমাদের একটা বড় ক্যান্ডেলের 50% হচ্ছে
        সাপোর্ট এবং রেজিস্ট্যান্স এর মত কাজ করবে।
      </p>
      <img src={C1} alt="Single Candle Stick" className="img-fluid my-2" />
      <p>
        বড় গ্রীন ক্যান্ডেলে 50% আমাদের সাপোর্ট হিসেবে কাজ করবে এবং বড় রেড
        ক্যান্ডেলে 50% রেজিস্ট্যান্স হিসেবে কাজ করবে
      </p>
      <p>
        একটা ক্যান্ডেল 50% বডি থেকে বডি আমরা ক্যালকুলেট করব আপার বডি থেকে লোয়ার
        বডি পর্যন্ত যতটুকু হবে তার 50% আমরা সাপোর্ট এবং রেজিস্ট্যান্স হিসেবে
        নিব।
      </p>
      <p>
        একটা ক্যান্ডেলে 50% বের করতে হলে আমাদের টুলসের সাহায্য নিতে হবে গান
        বক্সটা আমরা কোটেক্সে পেয়ে যাবো, আর আমরা চোখের আন্দাজে ৫০% ও বের করতে পরবো কয়েকবার দেখলে,
      </p>

      <img src={D1} alt="Single Candle Stick" className="img-fluid my-2" />
      <p></p>
      <img src={D2} alt="Single Candle Stick" className="img-fluid my-2" />
    </ComponentWrapper>
  );
};

export default index;
