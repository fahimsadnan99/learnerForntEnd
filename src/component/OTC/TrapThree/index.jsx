import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import WarningText from "../../UniversalComponent/WarningText";
import T1 from "../../../assets/img/otc/Trap3/T1.png"
import T2 from "../../../assets/img/otc/Trap3/T2.png"

const index = () => {
  return (
    <ComponentWrapper title="Trap Three" url="">
      <WarningText></WarningText>

      <p>
        ট্রেপ তিন হল ট্রেপ এক এর মত , ট্রেপ এক এ আমরা দেখেছি ঊইকের ভিতরে অন্য
        পার্টি একজস্ট বা ডেড বা ইলিমিনেট হয়ে যায়, তবে সেটা ওডার ফ্লো এর সাথে।
      </p>

      <p>
        ট্রেপ তিন হলো ট্রেপ ওয়ান এর মতই উইকের ভিতরে অন্য পার্টি একজাস্ট হয়ে
        যাওয়া, তবে সেটা স্ট্রাকচারের শুরুতে হয়,আবার এইখানে ওডার ফ্লো না হলেও
        সমস্যা নাই।
      </p>

      <p>
        ঊইকে একজস্ট মানে হলো আমাদের ঊইক পার্টি যদি ক্যান্ডেল দিয়ে এগজস্ট না হতে
        পারে তাহলে অপোজিট পার্টির ক্যান্ডেলের উইক এর ভিতরে একজস্ট হয়,সে
        জায়গায় আমরা ট্রাপ ধরবো মানে হচ্ছে উইকেন্ডের উইক এর ভিতরে অপোজিট পার্টি
        ডেড বা  ইলিমিনেট হয়ে গেছে তারপরে আমরা ট্রেপে ট্রেড করবো।
      </p>

      <p>নিছে চিত্রের মাধ্যমে দেখানো হল...</p>


      <img src={T1} alt="Trap Three Image" className="img-fluid my-2"/>
      <img src={T2} alt="Trap Three Image" className="img-fluid my-2"/>
    </ComponentWrapper>
  );
};

export default index;
