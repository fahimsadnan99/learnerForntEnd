import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import weakCandle from "../../../assets/img/otc/WeakMarket/weakCandle.png"
import weakCandle2 from "../../../assets/img/otc/WeakMarket/weak2.png"

const index = () => {
  return (
    <ComponentWrapper title="Weak Market" url="">
      <p className="mt-4">ঊইক মার্কেট বা দুর্বল মাকেট কথার মাঝে আমরা বুঝতে পারি। </p>
      <p>
        উইক কেন্ডেল আমরা আগে জেনেছি, যে কেন্ডেলের বায়ার কেন্ডেলে সেলার প্রেসার আর
        সেলার কেন্ডেলে বায়ার প্রেসার বেশী হয় সে কেন্ডেল্টা উইক বা দুর্বল
        কেন্ডেল।
      </p>

      <img src={weakCandle} alt="weak Candle img" className="img-fluid py-3"/>

      <p>
        ৩ বা তার বেশী উইক কেন্ডেলের মাধ্যমে আমরা উইক মার্কেট দরতে পারবো, যদি
        গ্রীন কেন্ডেলের মার্কেট উইক বা দুর্বল হয় তাহলে আমরা বায়ার সাইড উইক দরবো,
        ঠীক তেমনি কতোগুলো সেলার ঊইক বা দুর্বল কেন্ডেলের মাধ্যমে আমরা সেলার
        মার্কেট উইক দরতে পারবো।
      </p>
      <img src={weakCandle2} alt="weak Candle img" className="img-fluid py-3"/>

      <div></div>
    </ComponentWrapper>
  );
};

export default index;
