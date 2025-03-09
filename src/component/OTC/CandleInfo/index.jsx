import React from "react";
import buyerCandle from "../../../assets/img/otc/CandleInfo/Buyer.jpg"
import sellerCandle from "../../../assets/img/otc/CandleInfo/Seller.jpg"
import VideoPlayer from "../../UniversalComponent"
import { useNavigate } from "react-router-dom";

const index = () => {
    const navigate = useNavigate()
  return (
    <div className="bgDark py-2">
      <button className="btn btn-success m-3" onClick={()=> navigate(-1)}>GO BACK</button>
      <div className="container pb-5">
        <h1 className="text-white border border-bottom  text-center bg-danger">
          Candle Information
        </h1>

        <div>
          <p className="pt-4">
            ট্রেডিং এ আমাদের হাতে খড়ি হয় ক্যান্ডেলের মাধ্যমে, আর সেই
            ক্যান্ডেলের ভাষা বুঝতে পারাটাই হচ্ছে ক্যান্ডেলের ইনফরমেশন।
          </p>
          <p>
            ট্রেডিংয়ে প্রাইস আমরা বুঝতে পারি বায়ার এবং সেলার ক্যান্ডেলের
            মাধ্যমে আর সেই বায়ার এবং সেলার ক্যান্ডেল আমাদের মার্কেটের কন্ডিশন
            বুঝায় আর আপনি যদি সেই ক্যান্ডেলের ইনফরমেশন বুঝতে পারেন তাহলে সহজে
            আপনি মার্কেট কি বলতে চাইতেছে বুঝতে পারবেন।
          </p>
          <p>
            ট্রেডিংটাকে আমরা একটা রান্নার মতো চিন্তা করতে পারি। চা বানাতে
            বিভিন্ন উপাদানের প্রয়োজন হয় এবং বিভিন্ন উপাদানের মাধ্যমে আমরা চা
            বানাতে পারি, ট্রেডিং ও আমাদের অনেক কিছু উপাদান যেমন ক্যান্ডেল,
            মুভমেন্ট,মার্কেট এবং অর্ডার ফ্লো আরো অনেক কিছু মার্কেটে দরকার যার
            মাধ্যমে আমরা ট্রেডিং করতে পারব।
          </p>
          <p>
            চা বানানো উপাদান গুলোর মতো করে আমরা ট্রেডিং এর উপাদান গুলোর নাম এবং
            কেমন দেখতে তা প্রথমে শিখবো এবং আস্তে আস্তে কিভাবে চা এর মত করে
            ট্রেডিংয়ের সব উপাদান একসাথে করে ট্রেড করা শিখবো।
          </p>

          <p>
            ট্রেড করার প্রথম উপাদান হলো ক্যান্ডেল,এটাকে আমরা আগুন মনে করতে পারি
            আগুন ছাড়া আমরা চা বানাতে পারি না, তেমনি ক্যান্ডেল ছাড়া আমরা
            ট্রেডিং করতে পারবো না।
          </p>
          <p>
            একটা ক্যান্ডেল অনেকগুলো ক্যান্ডেলের সমষ্টি বা যোগফল । একটা ১ ঘন্টা
            ক্যান্ডেলের ভিতরে আমরা ৬০ টা ১ মিনিটের ক্যান্ডেল দেখতে পাব যেহেতে ১
            ঘন্টা সমান ৬০ মিনিট আর প্রতি মিনিটে ১ টা কেন্ডেল হলে ৬০টা কেন্ডেল
            পাবো এবং ১ মিনিটের ক্যান্ডেলে 5 সেকেন্ডের 12 টা ক্যান্ডেল দেখতে পাবো
            , আমরা খুদ্র সময় ৫ সেকেন্ডের নিছে দেখতে পাইনা তাই ৫ সেকেন্ড * ১২ =
            ৬০ সেকেন্ড মানে ১ মিনিট । এর মানে আমরা বুঝতে পারছি যে একটা কেন্ডেল
            এর মাঝে অনেক কেন্ডেল লুকোনো আছে আর সে লুকোনো কেন্ডেলের ভাষা বুঝতে
            শিখবো আজ আমরা।
          </p>

          <p>
            ১ ঘন্টার একটা কেন্ডেল সবুজ মানে বায়ার কেন্ডেল হয়েছে মানে ৬০ টা
            কেন্ডেল সবুজ হয়েছে এমন না, এই ৬০ টা কেন্ডেলের মাঝে কোথাও সেলার
            কেন্ডেল মানে লাল কেন্ডেল হয়েছে কোথাও সবুজ, বেশীর ভাগ সবুজ হয়েছে তার
            কারনে কেন্ডেলের রঙ সবুজ হয়েছে যাকে আমরা বুল কেন্ডেল বা বুলিশ হিসেবে
            জানি। তেমনি ১ মিনিটের কেন্ডেলে ৫ সেকেন্ডের ১২ টা কেন্ডেল হয়েছে তার
            মধ্যে ৪ টা লাল আর ৮ তা সবুজ হয়েছে মনে করি এর মানে সবুজ বেশী এর কারনে
            কেন্ডেল হবে সবুজ।
            নিছে চিত্রের মাধ্যমে আমরা বুঝার চেষ্টা করবো...
          </p>

      <h5 className="my-2">নিছে চিত্রে 
        <p>প্রথম অংশ ৫ সেকেন্ডের ১২ টা কেন্ডেল</p>
        <p>দ্বিতীয় অংশ লাইন চ্যাঁট বা এরিয়া চ্যাঁট</p>
        <p>শেষ অংশ যোগফল বা ১ মিনিটের কেন্ডেল দেখতে কেমন হয়েছে তা</p>
        </h5>
          <div>
            <img src={buyerCandle} alt="Buyer Candle" className="img-fluid"/>
          </div>
          <h5 className="my-4">সেলার কেন্ডেল দেখতে কেমন হবে বা কিভাবে দেখবো তার জন্যে সেলার কেন্ডেল একই ভাবে বুঝিয়ে দেওয়া হলো।</h5>
          <div>
            <img src={sellerCandle} alt="Buyer Candle" className="img-fluid"/>
          </div>

          <div>
          <VideoPlayer title="CandleStick Information Video" url="https://www.youtube.com/shorts/dXi97O2kc-8"></VideoPlayer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
