import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import WarningMsg from "../../UniversalComponent/WarningText";
import T1 from "../../../assets/img/otc/MiniZone/T1.jpg"
import T2 from "../../../assets/img/otc/MiniZone/T2.jpg"
import T3 from "../../../assets/img/otc/MiniZone/T3.jpg"

const index = () => {
  return (
    <ComponentWrapper title="Mini Zone" url="">
      <p>
        মিনি জোন হলো এমন একটা জোন যেখানে মার্কেট ঘোরাফেরা করে গ্রীন রেড গ্রীন
        রেড এভাবে করে অথবা আমাদের দুইটা বা তিনটা কেন্ডেল গ্রিন আবার দুইটা বা
        তিনটা কেন্ডেল রেড করে একটা জোন অথবা রেনজিং মার্কেট তৈরী করে।
      </p>
      <p>
        যেখানে আমাদের দুই পার্টি সমানভাবে স্ট্রং অথবা সমানভাবে দুই পার্টি উইক
        ওইসব জায়গায় আমাদের জোন তৈরি হয়
      </p>
      <p>
        স্টং মার্কেট অথবা স্ট্রং ক্যান্ডেলের চ্যাপ্টারে আমরা দেখেছি যে
        <ol>
          <li>
            স্ট্রং মার্কেট/কেন্ডেল VS স্ট্রং মার্কেট/কেন্ডেল মানে মার্কেট আমাদের রেঞ্জিং করবে ।
          </li>
          <li>উইক মার্কেট/কেন্ডেল VS উইক মার্কেট/কেন্ডেল মানে মার্কেট আমাদের রেঞ্জিং করবে।</li>
          <li>
            স্ট্রং মার্কেট/কেন্ডেল VS উইক/কেন্ডেল মার্কেট ,মার্কেট আমাদের স্ট্রং মার্কেটের
            দিকে যাবে।
          </li>
          <li>
            উইক মার্কেট/কেন্ডেল VS স্ট্রং মার্কেট/কেন্ডেল, আমাদের স্ট্রং মার্কেটের দিকে যাবে।
          </li>
        </ol>
      </p>
      <p>মার্কেটে কখন রেড গ্রীন রেড গ্রীন ক্যান্ডেল করবে এই জিনিসটা আমরা এই ফর্মুলা দিয়ে আগে বুঝতে পারি।</p>
      <p>জোনে আমরা রেড গ্রীন রেড গ্রিনে ট্রেড করতে পারবো,জোন ফিলআপ না হওয়া পরযন্ত।</p>
      <p>নিচে চিত্রের মাধ্যমে বুঝানো হলো...</p>

      <img src={T1} alt="Mini Zone Image" className="img-fluid my-2"/>
      <img src={T2} alt="Mini Zone Image" className="img-fluid my-2"/>
      <img src={T3} alt="Mini Zone Image" className="img-fluid my-2"/>
    </ComponentWrapper>
  );
};

export default index;
