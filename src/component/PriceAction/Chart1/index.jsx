import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import C1 from "../../../assets/img/PriceAction/Chart1/C1.jpg";
import C2 from "../../../assets/img/PriceAction/Chart1/C2.jpg";
import C3 from "../../../assets/img/PriceAction/Chart1/C3.jpg";
import C4 from "../../../assets/img/PriceAction/Chart1/C4.jpg";

const index = () => {
  return (
    <ComponentWrapper title="M & W Pattern">
      <h5>M & W হলো চার্ট </h5>

      <p>
        M আর W হলো চার্ট প্যাটার্ন , এই চার্ট প্যাটার্ন এর ভিতরে আমাদের তিনটা
        জিনিস লক্ষ্য করা যায় একটা হচ্ছে আমাদের ডাবল টপ এবং ডাবল বটম অন্যটা
        হচ্ছে নেক লাইন এখন ,
      </p>
      <p>
        * এম প্যাটার্ন নেকলাইন কোনটা এবং ডাবল ট্যাপ কোনটা সেটা আমরা আইডেন্টীফাই
        করব এবং কিভাবে এখানে ট্রেড করতে সেটা দেখব :-
      </p>
      <img src={C1} alt="Single Candle Stick" className="img-fluid my-2" />
      <img src={C2} alt="Single Candle Stick" className="img-fluid my-2" />
      <p>
        এম প্যাটার্ন কিভাবে হয় এবং আমরা কিভাবে  ট্রেড করব সেটা এখন
        দেখব:- কোন একটা হাই লেভেল ওইখানে মার্কেট Resistance লেভেল আছে রেজিস্ট্যান্স
        লেভেলে মার্কেট রিজেক্ট করে ডাউনলোড আসবে ওইখান থেকে  প্রথম টার্গেট
        হবে আমাদের এম প্যাটার্ন Neck line পর্যন্ত এবং নেক লাইন যদি
        ক্রস বা ব্রেক  করে তখন আমাদের টার্গেট হবে ওপেন পয়েন্ট পর্যন্ত।
      </p>
      <p>
        * ডাব্লিউ প্যাটার্ন নেকলাইন কোনটা এবং ডাবল ট্যাপ কোনটা সেটা আমরা
        আইডেন্টীফাই করব এবং কিভাবে এখানে ট্রেড করতে সেটা দেখব :-
      </p>
      <img src={C3} alt="Single Candle Stick" className="img-fluid my-2" />
      <img src={C4} alt="Single Candle Stick" className="img-fluid my-2" />
      <p>
        ডাব্লিউ প্যাটার্ন কিভাবে হয় এবং আমরা কিভাবে  ট্রেড করব সেটা এখন
        দেখব:- কোন একটা লো লেভেল ওইখানে মার্কেট সাপোর্ট লেভেল আছে রেজিস্ট্যান্স
        লেভেলে মার্কেট রিজেক্ট করে ডাউনলোড আসবে ওইখান থেকে  প্রথম টার্গেট
        হবে আমাদের ডাব্লিউ প্যাটার্ন Neck line পর্যন্ত এবং নেক লাইন যদি
        ক্রস বা ব্রেক  করে তখন আমাদের টার্গেট হবে ওপেন পয়েন্ট পর্যন্ত।
      </p>
    </ComponentWrapper>
  );
};

export default index;
