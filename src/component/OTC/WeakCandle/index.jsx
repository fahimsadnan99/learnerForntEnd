import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import WeakCandle from "../../../assets/img/otc/Weak Candle/weakCandle.png";
import weakCandle2 from "../../../assets/img/otc/Weak Candle/weakCandle2.png";


const index = () => {
  return (
    <ComponentWrapper
      title="Weak Candle"
      url={"https://www.youtube.com/shorts/dXi97O2kc-8"}
    >
      <div className="py-3">
        <p>
          এইবার আমরা জানবো ঊইক বা দুর্বল কেন্ডেল কি আর কিভাবে আমরা বুঝবো
          কেন্ডেলটা দুর্বল ...
        </p>
        <p>
          যে কালারের বা রঙের কেন্ডেল হোকনা কেনো সে কেন্ডেলের ভিতরে যদি অন্য
          পার্টির প্রেসার থাকে তাহলে আমরা দুর্বল হিসেবে দরবো।
        </p>
        <p>
          যদি আমরা আরো সহজ ভাবে বুঝতে চাই তাহলে, বায়ার কেন্ডেলের ভিতরে সেলার
          প্রেসার আর সেলার কেন্ডেলের ভিতরে বায়ার প্রেসার হওয়াটাকে বুঝায়।
        </p>

        <div>
          <h5>কিভাবে বুঝবো গ্রীন কেন্ডল বা বায়ার দুর্বল ?</h5>
          <p>
            বায়ার কেন্ডেলের উপরের উইক বা সেডো অনেক বড হবে, যদি বায়ার কেন্ডেলের
            নিছের উইক থেকে উপরের উইক অনেক বড হয় তাহলে আমরা বায়ার কেন্ডেলটাকে ঊইক
            বা দুর্বল দরবো।
          </p>
          <p>
            Body এর তুলনায় উপরের উইক ১.৫ গুন থেকে তারো বেশী বড হলে আমরা ঊইক বা
            দুর্বল হিসেবে দরবো।
          </p>
        </div>

        <div>
          <h5>কিভাবে বুঝবো রেড কেন্ডল বা সেলার দুর্বল ?</h5>
          <p>
            সেলার কেন্ডেলের নিছের উইক বা সেডো অনেক বড হবে, যদি সেলার কেন্ডেলের
            উপরের উইক থেকে নিছের উইক অনেক বড হয় তাহলে আমরা সেলার কেন্ডেলটাকে ঊইক
            বা দুর্বল দরবো।
          </p>
          <p>
            Body এর তুলনায় উপরের উইক ১.৫ গুন থেকে তারো বেশী বড হলে আমরা ঊইক বা
            দুর্বল হিসেবে দরবো।
          </p>


          <h4>নিছের চিত্রের মাধ্যমে দুর্বল বায়ার এবং সেলার কেন্ডেল দেখানো হলো...</h4>

           <img src={WeakCandle} alt="weak Candle img" className="img-fluid"/>

           <img src={weakCandle2} alt="weak Candle img" className="img-fluid my-2"/>

           {/* <img src={weakCandle3} alt="weak Candle img" className="img-fluid my-2"/> */}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default index;
