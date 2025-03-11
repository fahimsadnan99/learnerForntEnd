import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import upTrendOpenArea from "../../../assets/img/otc/OpenArea/openArea1.png"
import downTrendOpenArea from "../../../assets/img/otc/OpenArea/openArea2.png"
import rangingOpenArea from "../../../assets/img/otc/OpenArea/Ranging.png"
import candleOpenArea from "../../../assets/img/otc/OpenArea/candle.png"

const index = () => {
  return (
    <ComponentWrapper title="Open Area" url="">
      <h5>ওপেন এরিয়া কি?</h5>

      <p>
        ওপেন এরিয়া, এই কথার মাঝে উত্তর আছে, ওপেন মানে খালি, এরিয়া মানে জায়গা।
        ওপেন এরিয়া মানে খালি জায়গা।
      </p>

      <p>
        আমরা ট্রেন্ড শিখেছি, ট্রেন্ড দিয়ে আমরা মার্কেটএর স্ট্রাকচার বুঝতে পারি,
        আর মার্কেট ভিহেবিবার হল আচরন  বা স্ট্রাকচার এর সাথে চলা।
      </p>
      <p>একটা মার্কেট উপরের দিকে যাচ্ছে মানে ঊপ ট্রেন্ড করতেছে এইটা হল মার্কেট স্ট্রাকচার আর ঊপ এর দিকে যাওয়ার প্রবণতা হল মার্কেট ভিহেবিয়ার।</p>

      <p>ওপেন এরিয়া হলো কোন একটা খালি এরিয়া পুরন করতে যাওয়া হোক ঊপ ট্রেন্ড বা ডাঊন ট্রেন্ড । </p>

      <h5>নিছে চিত্রের মাধ্যমে আমরা আরো ভালোভাবে বুঝতে পারবো...</h5>

      <img src={upTrendOpenArea} alt="Open Area img" className="img-fluid py-2"/>
      <img src={downTrendOpenArea} alt="Open Area img" className="img-fluid py-2"/>
      <img src={rangingOpenArea} alt="Open Area img" className="img-fluid py-2"/>
      <img src={candleOpenArea} alt="Open Area img" className="img-fluid py-2"/>

      <h6 className="p-2 text-black bg-warning lh-lg">কেন্ডেল ওপেন এরিয়া কবার বা ওপেন এরিয়ার দিকে যাবে কি যাবেনা এইটা নির্ভর করবে কেন্ডেল স্ট্রং কিনা এবং মার্কেট স্ট্রং কিনা যা আমরা আগের লেকচার গুলোতে শিখে এসেছি।
      আগামি ৪ টা লেকচার খুব ইম্পরটেন্ট যার মাধ্যমে আমরা কিভাবে ট্রেড করতে হয় শিখতে পারবো। 
      </h6>
      
    </ComponentWrapper>
  );
};

export default index;
