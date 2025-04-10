import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import T1 from "../../../assets/img/PriceAction/AllLevels/T1.jpg"
import T2 from "../../../assets/img/PriceAction/AllLevels/T2.jpg"
import T3 from "../../../assets/img/PriceAction/AllLevels/T3.jpg"
import T4 from "../../../assets/img/PriceAction/AllLevels/T4.jpg"
import T5 from "../../../assets/img/PriceAction/AllLevels/T5.jpg"
import T6 from "../../../assets/img/PriceAction/AllLevels/T6.jpg"
import T7 from "../../../assets/img/PriceAction/AllLevels/T7.jpg"
import T8 from "../../../assets/img/PriceAction/AllLevels/T8.jpg"
import T9 from "../../../assets/img/PriceAction/AllLevels/T9.jpg"
import T10 from "../../../assets/img/PriceAction/AllLevels/T10.jpg"
import T11 from "../../../assets/img/PriceAction/AllLevels/T11.jpg"
import T12 from "../../../assets/img/PriceAction/AllLevels/T12.jpg"
import T13 from "../../../assets/img/PriceAction/AllLevels/T13.jpg"
import T14 from "../../../assets/img/PriceAction/AllLevels/T14.jpg"


const index = () => {
  return (
    <ComponentWrapper title="ALL LEVELS">
      <h6 className="my-2">
        প্রাইজ একশনে অনেকগুলো লেভেল আছে যে লেভেল গুলো খুবই ইম্পট্যান্ট, সে লেভেল
        গুলা আমি আজ এখানে উল্লেখ করতেছি এবং সামনে বিস্তারিত এই লেভেল গুলা থেকে
        কিভাবে ট্রেড নিব কিভাবে দেখব বিস্তারিত দেখব এবং প্রতিটা লেভেল এবং
        প্রতিটা টপিকের উপরে বিস্তারিত আমাদের লেকচার থাকবে
      </h6>

      <h5 className="my-4">📌 সিঙ্গেল ক্যান্ডেলিস্টিক লেভেল</h5>
      {/* <p>
        একটা সিঙ্গেল কেন্ডেল স্টিক হইতে পারে ওইটা রেড ক্যান্ডেল হতে পারে ওটা
        গ্রীন ক্যান্ডেল যে ক্যান্ডেলই হোক আমাদের উপরের উইক একটা রেজিস্ট্যান্স
        লেভেল এবং নিচের উইক একটা সাপোর্ট লেভেল, যদি ক্যান্ডেলের উইক না থাকে তাহলে
        উপরের বডিটা একটা রেজিস্ট্যান্স লেভেল আর নিচের বডিটা একটা সাপোর্ট লেভেল।
      </p> */}
      <img src={T1} className="my-2 img-fluid" alt="img"/>
      <img src={T2} className="my-2 img-fluid" alt="img"/>
      <img src={T3} className="my-2 img-fluid" alt="img"/>

      <h5 className="my-4">📌 ডাবল ক্যান্ডেলিস্টিক লেভেল</h5>
      <img src={T4} className="my-2 img-fluid" alt="img"/>
      <img src={T5} className="my-2 img-fluid" alt="img"/>
      <img src={T6} className="my-2 img-fluid" alt="img"/>
      <img src={T12} className="my-2 img-fluid" alt="img"/>
      <img src={T13} className="my-2 img-fluid" alt="img"/>
      <h5 className="my-4">📌 ট্রিপল ক্যান্ডেলিস্টিক লেভেল</h5>
      <img src={T7} className="my-2 img-fluid" alt="img"/>

      <h5 className="my-4">📌 জোন লেভেল</h5>
      <img src={T10} className="my-2 img-fluid" alt="img"/>
      <img src={T11} className="my-2 img-fluid" alt="img"/>

      <h5 className="my-4">📌 রেঞ্জ লেভেল</h5>
      <img src={T8} className="my-2 img-fluid" alt="img"/>
      <h5 className="my-4">📌 ট্রেন্ড লেভেল</h5>
      <img src={T9} className="my-2 img-fluid" alt="img"/>
      <h5 className="my-4">📌 নেক লাইন লেভেল</h5>
      <img src={T14} className="my-2 img-fluid" alt="img"/>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </ComponentWrapper>
  );
};

export default index;
