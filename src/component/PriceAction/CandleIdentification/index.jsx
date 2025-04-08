import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import C1 from "../../../assets/img/PriceAction/CandleIdentification/C1.jpg";
import C2 from "../../../assets/img/PriceAction/CandleIdentification/C2.jpg";
import C3 from "../../../assets/img/PriceAction/CandleIdentification/C3.jpg";
import C4 from "../../../assets/img/PriceAction/CandleIdentification/C4.jpg";
import C5 from "../../../assets/img/PriceAction/CandleIdentification/C5.jpg";
import C6 from "../../../assets/img/PriceAction/CandleIdentification/C6.jpg";
import C7 from "../../../assets/img/PriceAction/CandleIdentification/C7.jpg";
import C8 from "../../../assets/img/PriceAction/CandleIdentification/C8.jpg";

const index = () => {
  return (
    <ComponentWrapper title="Candle Identification">
      <h5>📌 প্রতিটা ক্যান্ডেলে দুইটা মূল অংশ থাকে:</h5>
      <p>১/ বডি (Body) – ওপেন ও ক্লোজ প্রাইসের মধ্যকার অংশ। </p>
      <p>
        ২/ উইক/শেডো (Wick/Shadow) – সর্বোচ্চ ও সর্বনিম্ন দামের কতটুকু গিয়েছে তা
        বুঝায়, বডির উপরে ও নিচে দেখা যায়।{" "}
      </p>

      <h5>📌 দুই ধরণের ক্যান্ডেল হয়:</h5>
      <p>
        ১/ বুলিশ ক্যান্ডেল (সবুজ ): কেন্ডেল সবুজ আর প্রিইস উপরের দিকে ণীয়ে যায়
        বুলিশ কেন্ডেল দিয়ে,{" "}
      </p>
      <p>
        ২/ বিয়ারিশ ক্যান্ডেল (লাল):কেন্ডেল লাল আর প্রিইস নিছের দিকে ণীয়ে যায়
        সেলার কেন্ডেল দিয়ে কেন্ডেল দিয়ে,{" "}
      </p>

      <p>
        মার্কেটএ অনেক অনেক কেন্ডেল হয় , সব গুলার সাইজ আর নাম আমাদের না জানলেও
        চলবে, তবে যে সব কেন্ডেলের নাম জানাই লাগবে সে সবের সাথে প্রথমে পরিচিত হই,
      </p>

      <h4>Single Candle Stick</h4>
      <img src={C1} alt="Single Candle Stick" className="img-fluid my-2" />
      <img src={C2} alt="Single Candle Stick" className="img-fluid my-2" />
      <h4>Double Candle Stick</h4>
      <h5 className="my-3">🧭 দুই ধরনের ইনগালফিং প্যাটার্ন</h5>
      <h6 className="my-2">1. বুলিশ ইনগালফিং (Bullish Engulfing)</h6>
      <p>📌 সিগন্যাল দেয় বাজার উপরের দিকে যাবে (Buy Signal)</p>
      <p>প্রথম ক্যান্ডেল: ছোট লাল/বিয়ারিশ (Down candle)</p>
      <p>
        দ্বিতীয় ক্যান্ডেল: বড় সবুজ/বুলিশ (Up candle), যা প্রথম ক্যান্ডেলকে পুরো
        ঢেকে ফেলে
      </p>
      <p>
        লাল কেন্ডেল্টি গ্রিন কেন্ডেলের ৫০% এর সমান বা ৫০% থেকে থেকে বড, কিন্তু
        গ্রীন কেন্ডেল থেকে ছোট
      </p>
      <p>সাধারণত সাপোর্ট লেভেলের কাছাকাছি দেখা যায়</p>
      <h6 className="my-2">বিয়ারিশ ইনগালফিং (Bearish Engulfing)</h6>
      <p>📌 সিগন্যাল দেয় বাজার নিচের দিকে যাবে (Sell Signal)</p>
      <p>প্রথম ক্যান্ডেল: ছোট সবুজ/বুলিশ</p>
      <p>
        দ্বিতীয় ক্যান্ডেল: বড় লাল/বিয়ারিশ, যা প্রথম ক্যান্ডেলকে পুরো ঢেকে ফেলে
      </p>
      <p>
        সবুজ কেন্ডেলটি লাল কেন্ডেলের ৫০% এর সমান বা ৫০% থেকে থেকে বড, কিন্তু রেড
        কেন্ডেল থেকে ছোট,
      </p>
      <p>সাধারণত রেজিস্ট্যান্স লেভেলের কাছাকাছি দেখা যায়</p>

      <img src={C3} alt="Single Candle Stick" className="img-fluid my-2" />

      <h5 className="my-2">
        ইনসার্ট বার হলো সেই প্যাটার্ন যেই প্যাটার্নে আগের ক্যান্ডেলটা অনেকটা বড়
        হয় এবং পরেরটা অনেক ছোট হয় আগের ক্যান্ডেলের 50% এর থেকেও ছোট হয়।
      </h5>
      <img src={C4} alt="Single Candle Stick" className="img-fluid my-2" />
      <h5 className="my-2">
        আউটসাইড বার হলো সেই প্যাটার্ন যেই প্যাটার্নে আগের ক্যান্ডেলটা অনেকটা ছোট
        হয় এবং পরেরটা অনেক বড হয়, সামনের ক্যান্ডেলের 50% এর থেকেও পিছনের
        কেন্ডেল ছোট হয়।
      </h5>
      <img src={C5} alt="Single Candle Stick" className="img-fluid my-2" />
      <h4>Triple Candle Stick</h4>

      <h5> “Morning” মানে সকাল, আলো আসছে = দাম বাড়বে</h5>
      <p>
        মর্নিং স্টার হলো একটি বুলিশ রিভার্সাল প্যাটার্ন। এটি সাধারণত
        ডাউনট্রেন্ডের শেষে দেখা যায় এবং বাজার উপরে উঠতে শুরু করতে পারে।
      </p>
      <p>প্রথম ক্যান্ডেল: বড় লাল/বিয়ারিশ – বাজার নিচে যাচ্ছিল।</p>
      <p>দ্বিতীয় ক্যান্ডেল: ছোট বডির ক্যান্ডেল (ডোজি/স্পিনিং) </p>
      <p>তৃতীয় ক্যান্ডেল: বড় সবুজ/বুলিশ – মার্কেট ঘুরে দাঁড়িয়েছে।</p>
      <span className="text-danger p-1">
        {" "}
        মাঝের ক্যান্ডেলটার উইক যাতে কোনভাবে আমার উপরের দিকে কোন কেন্ডেলের বডি
        ব্রেক না করে
      </span>
      <img src={C6} alt="Single Candle Stick" className="img-fluid my-2" />

      <h5> “Evening” মানে সন্ধ্যা, অন্ধকার আসছে = দাম কমবে</h5>

      <p>প্রথম ক্যান্ডেল: বড় সবুজ/বুলিশ – বাজার উপরে উঠছিল।</p>
      <p>দ্বিতীয় ক্যান্ডেল: ছোট বডির ক্যান্ডেল (ডোজি/স্পিনিং)</p>
      <p>তৃতীয় ক্যান্ডেল: বড় লাল/বিয়ারিশ – মার্কেট ঘুরে নিচে নামল।</p>
      <span className="text-danger p-1">
        {" "}
        মাঝের ক্যান্ডেলটার উইক যাতে কোনভাবে আমার নিছের দিকে কোন কেন্ডেলের বডি
        ব্রেক না করে
      </span>

      <img src={C7} alt="Single Candle Stick" className="img-fluid my-2" />
      <p>
        মোমেন্টাম হলো কোন একটা কালারের তিনটা ক্যান্ডেল, যদি আমাদের মার্কেটএ তিনটা
        গ্রিন ক্যান্ডেল হয় তাহলে আমাদের গ্রিন ক্যান্ডেলের মোমেন্টাম মানে বায়ার
        মোমেন্টাম বলবো, যদি আমাদের রেড ক্যান্ডেলের  তিনটা ক্যান্ডেল হয় তাহলে সেটা আমাদের
        সেলার ক্যান্ডেলের মোমেন্টাম বলবো।
      </p>
      <img src={C8} alt="Single Candle Stick" className="img-fluid my-2" />
    </ComponentWrapper>
  );
};

export default index;
