import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import WarningText from "../../UniversalComponent/WarningText";

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
        বা কোন সেলার জোনের কাছাকাছি যায় তাহলে বায়ার উইকনেস দেখায় তা আমরা বায়ার কেন্ডেলের উপরের দিকে লম্বা লম্বা উইক দেখে বুঝতে পারি। সেখানে আমরা <span className="bg-danger text-white p-1"> বায়ারের কোন ট্রেপ ব্যাবহার  করবোনা</span> ।
      </p>
      <p>তেমনি ভাবে সেলার  ক্যান্ডেল যদি কোন বায়ার এরিয়ার কাছাকাছি
        বা কোন বায়ার জোনের কাছাকাছি যায় তাহলে সেলার উইকনেস দেখায় তা আমরা সেলার কেন্ডেলের নিচের দিকে লম্বা লম্বা উইক দেখে বুঝতে পারি। সেখানে আমরা <span className="bg-danger text-white p-1"> সেলারের কোন ট্রেপ ব্যাবহার  করবোনা</span> ।
      </p>
      <p></p>
      <p></p>
      <p></p>
      <p></p>
    </ComponentWrapper>
  );
};

export default index;
