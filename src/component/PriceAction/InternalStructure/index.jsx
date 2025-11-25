import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import T1 from "../../../assets/img/PriceAction/IS/T1.jpg";
import T2 from "../../../assets/img/PriceAction/IS/T2.jpg";
import T3 from "../../../assets/img/PriceAction/IS/T3.jpg";

const index = () => {
  return (
    <ComponentWrapper title="Internal Structure">
      <p>ইন্টার্নাল স্ট্রাকচার মানে আমাদের ভেতরে কোন স্ট্রাকচার</p>
      <p>
        আমাদের আপট্রেন্ড অথবা ডাউন ট্রেন্ড মার্কেটের কারেক্টিভ অংশে আমাদের
        অপোজিট ট্রেন্ড দেখা যায় যেমন আপট্রেন্ড মার্কেটের কারেক্টিভ অংশে ডাউন
        ট্রেন্ড দেখা যায় এবং ডাউন ট্রেন মার্কেটের কারেক্টিভ অংশে আপডেট দেখা
        যায় এই বড় ট্রেন্ডের ভিতরে ছোট একটা ট্রেন্ড এটাকে বলা হয় ইন্টারনাল
        স্ট্রাকচার।
      </p>
      <h5>***এক্সটার্নাল এক্সট্রাকচার কে সবথেকে বেশি প্রাধান্য দিব আমরা</h5>

      <img src={T1} alt="Single Candle Stick" className="img-fluid my-2" />
      <img src={T2} alt="Single Candle Stick" className="img-fluid my-2" />
      <img src={T3} alt="Single Candle Stick" className="img-fluid my-2" />
    </ComponentWrapper>
  );
};

export default index;
