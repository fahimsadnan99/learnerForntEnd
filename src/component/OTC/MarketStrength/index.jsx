import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import buyerStengthCandle from "../../../assets/img/otc/MarketStrength/buyerNumber.png"
import sellerStrenthCandle from "../../../assets/img/otc/MarketStrength/sellerStrenth.png"
import BuyerStrenthMarket from "../../../assets/img/otc/MarketStrength/BuyerStrenth.png"
import sellerStrengthMarket from '../../../assets/img/otc/MarketStrength/sellerStrength.png'

const index = () => {
  return (
    <ComponentWrapper title="Market Strength" url="">
      <p className="pt-3">
        মার্কেট স্ট্রেংথ বলতে আমরা বুঝি মার্কেটএর শক্তি কেমন সেটা, আমরা আগে
        শিখেছি স্ট্রং মার্কেট, প্রেসার মার্কেট এবং ঊইক মার্কেট কি এবং কেমন
        দেখতে।
      </p>

      <h5>
        যদি আমাদের মার্কেটএ কেন্ডেল যদি মিক্সড হয় তাহলে, যেমন কোনোটা ঊইক কোনোটা
        স্ট্রং তাহলে আমরা সে মার্কেট কে কিভাবে ইডেন্টিফাই করবো যে মার্কেটটি
        স্ট্রং বা ঊইক...?
      </h5>
      
      <p>এইটা বুঝতে হলে বা শিখতে হলে আগে আমাদের নাম্বারিং কিভাবে করতে হয় বুঝতে হবে।</p>
      <p>স্ট্রং কেন্ডেলকে আমরা ১০ নাম্বার দিব, প্রেসার কেন্ডেলকে আমরা ১০ নাম্বার দিব, কেন্ডেল যত উইক হবে আমরা তাদের নাম্বারতত কমাবো।</p>
      <p>আমাদের এভারেজ যোগফল যদি ৬.৫/৬ এর কম হয় তাহলে আমরা ওই মার্কেট কে ঊইক বা দুর্বল মার্কেট হিসেবে বিবেচনা করবো, আর যদি যোগফল ৬.৫ থেকে বেশি হয় তাহলে আমরা স্ট্রং মার্কেট হিসেবে ধরবো।</p>
     
     <h5>নিছের চিত্রের মাধ্যমে আমরা বুঝার চেষ্টা করি...</h5>

    <img src={buyerStengthCandle} alt="Buyer Strength Candle" className="img-fluid py-2"/>
       
    <img src={sellerStrenthCandle} alt="Buyer Strength Candle" className="img-fluid py-2"/>

    <img src={BuyerStrenthMarket} alt="Buyer Strength Candle" className="img-fluid py-2"/>

    <img src={sellerStrengthMarket} alt="Buyer Strength Candle" className="img-fluid py-2"/>
    </ComponentWrapper>
  );
};

export default index;
