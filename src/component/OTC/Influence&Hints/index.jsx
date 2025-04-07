import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import WarningText from "../../UniversalComponent/WarningText";
import T1 from "../../../assets/img/otc/Influence/T1.jpg"
import T2 from "../../../assets/img/otc/Influence/T2.jpg"
import T3 from "../../../assets/img/otc/Influence/T3.jpg"

const index = () => {
  return (
    <ComponentWrapper title="Influence And Hints">
      <WarningText />
      <p>
        ইনফ্লুয়েন্স এন্ড হিন্ডস এটা হচ্ছে আমাদের অপজিট পার্টি আসার আগে একটা
        আগাম পূর্বাভাস।
      </p>
      <p>
        এটা অনেকটা চুম্বকের মত যেমন দুইটা চুম্বক একে অপরের কাছাকাছি আনলে একটা
        টান অনুভব করে তেমনি ভাবে বায়ার ক্যান্ডেল যদি কোন সেলার এরিয়ার কাছাকাছি
        বা কোন সেলার জোনের কাছাকাছি যায় তাহলে বায়ার উইকনেস দেখায় তা আমরা বায়ার
        কেন্ডেলের উপরের দিকে লম্বা লম্বা উইক দেখে বুঝতে পারি। সেখানে আমরা{" "}
        <span className="bg-danger text-white p-1">
          {" "}
          বায়ারের কোন ট্রেপ ব্যাবহার করবোনা
        </span>{" "}
        ।
      </p>
      <p>
        তেমনি ভাবে সেলার ক্যান্ডেল যদি কোন বায়ার এরিয়ার কাছাকাছি বা কোন বায়ার
        জোনের কাছাকাছি যায় তাহলে সেলার উইকনেস দেখায় তা আমরা সেলার কেন্ডেলের
        নিচের দিকে লম্বা লম্বা উইক দেখে বুঝতে পারি। সেখানে আমরা{" "}
        <span className="bg-danger text-white p-1">
          {" "}
          সেলারের কোন ট্রেপ ব্যাবহার করবোনা
        </span>{" "}
        ।
      </p>
      <p>
        এই ক্ষেত্রে আমাদেরকে সতর্ক থাকতে হবে আমরা যাতে কোন ট্রেপে ট্রেড না করি
        বা কন্টিনিউ ট্রেড না করি আমরা অপোজিট পার্টির  এন্টির জন্য অপেক্ষা করবো
        বা এলিমিনেট বা একজরসন দেখে অপোজিট পার্টিতে ট্রেড করবো আমাদের এই জায়গায় অপেক্ষা করে
        ট্রেড করতে হবে সেলার অথবা বায়ার জোনে বা এরিয়াতে।
      </p>
      <p>যখন মার্কেট লেভেল/জোন এর দিকে যত এগুতে থাকবে তত ইনফ্লুয়েন্স দেখাতে যদি শুরু করে তাহলে আমাদের এনালাইসিস অপোজিট পার্টিতে ট্রেড করার দিকে হবে যে পার্টি ইনফ্লুয়েন্স দেখাইতেছে।</p>
      <p>নিচের চিত্রের মাধ্যমে বুঝানো হলো</p>
      
      <img src={T1} alt="Influence Image" className="my-2 img-fluid"/>
      <img src={T2} alt="Influence Image" className="my-2 img-fluid"/>
      <img src={T3} alt="Influence Image" className="my-2 img-fluid"/>
    </ComponentWrapper>
  );
};

export default index;
