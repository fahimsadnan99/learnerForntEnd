import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import normalMarketReflection from "../../../assets/img/otc/Normal Market Reflection/n1.png"
import normalMarketReflection1 from "../../../assets/img/otc/Normal Market Reflection/n2.png"
import normalMarketReflection2 from "../../../assets/img/otc/Normal Market Reflection/n3.png"

const index = () => {
  return (
    <ComponentWrapper title="Strong reflection / Normal Reflection" url="">
      <h3 className="mt-4">স্ট্রং রিফ্লেকশন বা নরমাল রিফ্লেকশন কি?</h3>
      <p>
        আমরা আগে শিখেছি - নরমাল কেন্ডেল / স্ট্রং কেন্ডেল, নরমাল মার্কেট/ স্ট্রং
        মার্কেট, এই নরমাল বা স্ট্রং মার্কেট  রিফ্লেকশন কিভাবে কাজ করে আজ আমরা দেখবো,
        এই নরমাল মার্কেট রিফ্লেকশন এর জন্যে আমাদের নরমাল মার্কেট স্ট্রাকচার থাকতে হবে লেফট সাইডে, 
        সেটা রাইট সাইডে রিফ্লেকশন করবে।
      </p>
      <p>আরো সহজ করে বুঝতে গেলে আমরা চিত্রের মধ্যমে বুঝবো, নিছে চিত্র  দেওয়া  হলো...</p>
      <img src={normalMarketReflection} alt="normal Market Reflection one" className="img-fluid my-2" />
      <p>উপরের চিত্রে বায়ার সাইডে কে B, সেলার সাইডকে  S দিয়ে বুজানো হলো,  </p>
      <p>বায়ার সাইডে আমরা দেখতেছি স্ট্রং বায়ার মার্কেট, এবং এই স্ট্রং মার্কেট আমাদের ট্রেন্ড লাইনে এর পরে আবার স্ট্রং কেন্ডেল দিয়ে এন্ট্রি করে ওপেন এরিয়া কভার করতে উপরে যায়, এই ওপেন এরিয়া যে কভার করবে তার জন্যে পিছনে মার্কেট স্ট্রাকচার স্ট্রং থাকতে হয়, এইখানে লেফট সাইডে শুরুতে দেখতে পেয়েছি আমাদের বায়ার মার্কেট স্ট্রং এবং এর পর সেলার স্ট্রং আসছে, ট্রেন্ড লাইন থেকে আবার বায়ার স্ট্রং এন্ট্রি করেছে, লেফট সাইডে আগে স্ট্রং থাকার কারনে রাইড সাইডে স্ট্রং এন্ট্রি দিলে মার্কেট ওপেন এরিয়া কভার করতে যাওয়ার সম্ভাবনা সব থেকে বেশী।
      </p>
      <p>ঠিক তেমনি ভাবে সেলার সাইড রিফ্লেকশন এর জন্যে সেলার মার্কেট স্ট্রাকচার স্ট্রং থাকতে হবে, উপরে আমরা দেখতে পাইতেছি মার্কেট
         আপ ট্রেন্ড মার্কেট এবং সেলার সাইডে ট্রেন্ড লাইন থেকে স্ট্রং মার্কেট স্ট্রাকচার ছিল লেফট সাইডে, সেটা আবার পরে ট্রেন্ড লাইন টাচ করে রাইড সাইডে স্ট্রং সেলার এন্ট্রি দিয়ে আগের লেফট সাইডের স্ট্রং এনারজি রিফ্লেসন করে, এবং ওপেন এরিয়া ডাওনে , মার্কেট তা কভার করে ডাঊন সাইডে যাওয়ার প্রবনতা হলো রিফ্লেকশন।
      </p>
      
      <h5>নিছে আরো বিস্তারিত ভাবে চিত্রের মাধ্যমে বুঝানো হলো...</h5>
      <img src={normalMarketReflection1} alt="Buyer Strong Reflection" className="img-fluid my-3"/>
      <img src={normalMarketReflection2} alt="Buyer Strong Reflection" className="img-fluid my-3"/>
    </ComponentWrapper>
  );
};

export default index;
