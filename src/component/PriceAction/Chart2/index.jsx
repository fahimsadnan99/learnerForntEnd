import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import H1 from "../../../assets/img/PriceAction/Head/H1.jpg";
import H2 from "../../../assets/img/PriceAction/Head/H2.jpg";
import H3 from "../../../assets/img/PriceAction/Head/H3.jpg";

const index = () => {
  return (
    <ComponentWrapper title="Head and shoulders">
      <h5 className="mt-4">
        M & W মত আমাদের কাছে চার্ট প্যাটার্ন আছে , সেটা হোলো হেড এন্ড সোল্ডার ও
        ইনভারটেড হেড এন্ড সোল্ডার ।
      </h5>

      <p>
        হেড এন্ড শোল্ডার কথাটার মানে হচ্ছে , একটা মাথা থাকবে এবং কাঁধ থাকবে একটা
        মানুষের মত এই প্যাটার্নটা দেখতে ঠিক আমাদের মানুষের মতই হয় তাই এইটাকে হেড
        এন্ড শোল্ডার বলে।
      </p>
      <img src={H1} alt="Single Candle Stick" className="img-fluid my-2" />

      <p>**হেড এন্ড শোল্ডার</p>
      <img src={H2} alt="Single Candle Stick" className="img-fluid my-2" />
      <p>
        আমরা হেড এন্ড সোল্ডার M Pattern মত ব্যবহার করব,আমাদের মাথার অংশ যদি কেটে
        ফেলি হেডের অংশটি কেটে ফেলি তাহলে এটা আমাদের M  এর  মতো দেখতে পাব, যখন
        আমাদের দুই পাশের কাঁধ মানে সোল্ডার সমান হবে তখন মার্কেট যদি সেলের
        রিজেকশন আসে বা সেলার আসে তখন আমরা সেখান থেকে ডাউনের দিকে ট্রেড করতে পারব
        নেক  লাইন পর্যন্ত, নেইক লাইন ব্রেক করলে আমরা ট্রেড করতে পারবো ওপেন পয়েন্ট পর্যন্ত।
      </p>

      <p>**ইনভারটেড হেড এন্ড শোল্ডার</p>
      <img src={H3} alt="Single Candle Stick" className="img-fluid my-2" />
      <p>
        ইনভারটেডএন্ড সোল্ডার , যখন
        আমাদের দুই পাশের কাঁধ মানে সোল্ডার সমান হবে তখন মার্কেট যদি সেলের
        বায়ার আসে  তখন আমরা সেখান থেকে আপের দিকে ট্রেড করতে পারব,
        নেক  লাইন পর্যন্ত, নেইক লাইন ব্রেক করলে আমরা ট্রেড করতে পারবো ওপেন পয়েন্ট পর্যন্ত।
      </p>
    </ComponentWrapper>
  );
};

export default index;
