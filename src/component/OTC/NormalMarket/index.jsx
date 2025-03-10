import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import StrongMarket from "../../../assets/img/otc/StrongMarket/StrongMarket.png"


const index = () => {
  return (
    <ComponentWrapper title="Normal Market / Strong Market" url="">
      <p className="bg-warning text-black mt-4 p-2">
        আমরা স্ট্রং কেন্ডেল দেখেছি, এখন স্ট্রং মার্কেট দেখবো এবং শিখবো, কিভাবে
        আমরা মার্কেট দেখে বুঝতে পারবো স্ট্রং কিনা , যে আমার বায়ার বা সেলার
        মার্কেট স্ট্রং...
      </p>

      <p>
        ছোট বেলায় আমরা একটা গল্প শুনেছি বা পডেছি, কৃষক এবং তার পুত্রদের গল্প।
        কৃষক তার ১ জন পুত্রকে একটা লাঠি দিয়েছে এবং ভাংতে বলেছিলেন, সহজে ভেঙ্গে
        ফেলেছে । তাকে ৩ / ৪ টা লাঠি এক সাথে করে দিয়েছিল কিন্তু ভাংতে পারেনাই।
        কারন অনেক গুলো শক্ত লাঠি এক সাথে করে ফেলায় তা আর ভাংগা সহজ হয়নাই। এই
        গল্প দিয়ে আমরা আজ আমাদের স্ট্রং মার্কেট কি সেটা বুঝতে পারবো সহজে ।
      </p>

      <p>
        আমাদের মার্কেটএর মধ্যে ১ টা স্ট্রং কেন্ডেল দিয়ে আমরা মার্কেট স্ট্রং কিনা
        তা বুঝতে পারবোনা, কিন্তু অনেক গুলো স্ট্রং কেন্ডেল একসাথে করে আমরা স্ট্রং
        মার্কেট হিসেবে ধরতে পারবো। অনেক গুলো স্ট্রং কেন্ডেলের যোগফল হল স্ট্রং মার্কেট।
      </p>
      <h5>নিছ চিত্রের মাধ্যমে বুজানো হল ...</h5>

      <img src={StrongMarket} alt="Strong market" className="img-fluid py-2"/>

      <h5 className="text-black bg-warning p-2">মিনিমাম ৩ বা তার অদিক কেন্ডেলের যোগফল মিলে আমরা স্ট্রং মার্কেট ধরবো </h5>
    </ComponentWrapper>
  );
};

export default index;
