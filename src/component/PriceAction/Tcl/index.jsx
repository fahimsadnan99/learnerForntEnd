import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import T1 from "../../../assets/img/PriceAction/AllLevels/T7.jpg";
import T2 from "../../../assets/img/PriceAction/TCL/T1.jpg";
import T3 from "../../../assets/img/PriceAction/TCL/T2.jpg";
import T4 from "../../../assets/img/PriceAction/TCL/T3.jpg";
import T5 from "../../../assets/img/PriceAction/TCL/T4.jpg";

const index = () => {
  return (
    <ComponentWrapper title="Tripple candlestick Level">
      <h5 className="mt-4">TCL = TRIPPLE CANDLESTICK LEVEL</h5>
      <h5 className="mt-4"> 📌 Morning Star & Evening Star</h5>
      <img src={T1} alt="Single Candle Stick" className="img-fluid my-2" />
      <p>
        ট্রিপল ক্যান্ডেলস্টিক লেভেলের ভিতরে আমাদের কাছে আছে মর্নিংস্টার এবং
        ইভিনিং স্টার, মর্নিং স্টার হলো আমাদের মার্কেট উপরের দিকে যাবে ইন্ডিকেট
        করে এবং এভেনিং স্টার মার্কিন নিচের দিকে যাবে এটা ইন্ডিকেট করে।
      </p>
      <p>
        👉 মর্নিং স্টার ঃ- ছোট স্পিনিং ক্যান্ডেল, হোক সেটা রে্ড হোক সেটা গ্রিন
        সেটার উপরে  উইক একটা আমাদের লেভেল এবং বড় রেড ক্যান্ডেলের উপরের উইক থাকলে উইক থেকে
        বডি পর্যন্ত আমাদের একটা লেভেল থাকবে, উইক না থাকলে বড রেড কেন্ডেলের বডি
        হবে লেভেল।
      </p>
      <img src={T2} alt="Single Candle Stick" className="img-fluid my-2" />
      <p>
        মর্নিংস্টার এ আমাদের দুইটা লেভেল থাকে, দুইটা লেভেল আমাদেরকে সাপোর্ট
        হিসেবে আমরা ব্যবহার করতে পারব আমাদের এর জন্য ট্রেন্ড আইডেন্টিফাই করতে হবে
        ট্রেন্ড যদি আমাদের আপটেন্ড হয় অথবা রেঞ্জিং হয় তখন আমরা মর্নিং স্টারে
        ট্রেড করতে পারব।
      </p>
      <img src={T4} alt="Single Candle Stick" className="img-fluid my-2" />
      <p>
        👉 এভেনিং স্টার ঃ- ছোট স্পিনিং ক্যান্ডেল, হোক সেটা রে্ড হোক সেটা গ্রিন
        সেটার নিছের উইক একটা আমাদের লেভেল এবং বড় গ্রীন ক্যান্ডেলের নিছের উইক থাকলে উইক থেকে
        বডি পর্যন্ত আমাদের একটা লেভেল থাকবে, উইক না থাকলে বড গ্রীন কেন্ডেলের বডি
        হবে লেভেল।
      </p>
      <img src={T3} alt="Single Candle Stick" className="img-fluid my-2" />
      <p>
      এভেনিং স্টার এ আমাদের দুইটা লেভেল থাকে, দুইটা লেভেল আমাদেরকে রেজিস্টেন্স
        হিসেবে আমরা ব্যবহার করতে পারব আমাদের এর জন্য ট্রেন্ড আইডেন্টিফাই করতে হবে
        ট্রেন্ড যদি আমাদের ডাঊন হয় অথবা রেঞ্জিং হয় তখন আমরা মর্নিং স্টারে
        ট্রেড করতে পারব।
      </p>
      <img src={T5} alt="Single Candle Stick" className="img-fluid my-2" />
      <p></p>
    </ComponentWrapper>
  );
};

export default index;
