import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import Trend from "../../../assets/img/otc/Trend/Trend.png"

const index = () => {
  return (
    <ComponentWrapper title="Trend" url="">
      <h5 className="mt-4">📌 ট্রেন্ড কী? (Trend কী?)</h5>
      <p>
        ট্রেন্ড মানে হলো কোনো কিছুর ধারাবাহিক গতিপথ বা প্রবণতা। এটি শুধু
        ট্রেডিং-এ নয়, আমাদের জীবনেও দেখা যায়। ট্রেডিং-এ ট্রেন্ড বলতে বোঝায়
        মার্কেট নির্দিষ্ট একটি দিকে চলার প্রবণতা—উপরের দিকে (Uptrend),
        নিচের দিকে (Downtrend), বা সাইডওয়েতে (Sideways Trend)।
      </p>

      📖 সহজ গল্প দিয়ে বোঝানো যাক:
<p>🔹 গল্প: আমিরের ব্যাগের ব্যবসা</p>

  <p>আমির নামে এক ব্যবসায়ী ছিল, যে ব্যাগের ব্যবসা করত। একদিন সে লক্ষ্য করল—</p>

<p>👉 রোজার ঈদের আগে সবাই নতুন ব্যাগ কিনছে, দামও বাড়ছে।</p>
<p>👉 দিন দিন চাহিদা বাড়ছে, ব্যাগের দামও বাড়ছে!</p>

<p>📈 এটি হলো "আপ ট্রেন্ড" (Uptrend), অর্থাৎ বাজারে দাম বেড়ে চলেছে।</p>

<p>কিন্তু ঈদ শেষ হওয়ার পর—</p>
👉 মানুষ ব্যাগ কেনা কমিয়ে দিল।
<p>👉 অনেক দোকান ব্যাগের দাম কমিয়ে বিক্রি করতে লাগল।</p>

<p>📉 এটি হলো "ডাউন ট্রেন্ড" (Downtrend), অর্থাৎ বাজারে দাম কমছে।</p>

<p>এরপর কয়েক মাস দাম একই রকম থাকল, খুব বেশি ওঠানামা করল না।</p>
<p>📊 এটি হলো "সাইডওয়ে ট্রেন্ড" (Sideways Trend), যেখানে দাম খুব একটা পরিবর্তন হয় না।</p>

<img src={Trend} alt="Trend Img" className="img-fluid py-3"/>

<p>H - HIGH</p>
<p>L- LOW</p>
<p>HH - HIGHER HIGH</p>
<p>HL - HIGHER LOW</p>
----------------------

<p>LH-LOWER HIGH</p>
<p>LL-LOWER LOW</p>
    </ComponentWrapper>
  );
};

export default index;
