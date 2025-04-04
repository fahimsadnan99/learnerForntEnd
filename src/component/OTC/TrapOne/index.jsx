import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import WarningText from "../../UniversalComponent/WarningText";
import t1 from "../../../assets/img/otc/Trap1/t1.png"
import t2 from "../../../assets/img/otc/Trap1/t2.png"
import t3 from "../../../assets/img/otc/Trap1/t3.png"
import t4 from "../../../assets/img/otc/Trap1/t4.png"

const index = () => {
  return (
    <ComponentWrapper title="Trap One" ur="">
      <WarningText></WarningText>

      <p>
        ট্রেপ ওয়ান সব সময় আমরা ওপেন এরিয়া সাথে ওডার ফ্লো দেখে ট্রেপ ওয়ানে ট্রেড
        করবো,
      </p>
      <p>ট্রেপ ওয়ানে ট্রেড করতে হলে টাইম ফ্রেম ফিল্টার করে ডিরেকশন দেখবো</p>
      <p>
        তারপর ছোট টাইম ফ্রেমে এসে ওপেন এরিয়া ঐ দিকে হলে সাথে অডার ফ্লো হলে
        সেখানে আমরা ট্রেপ ওয়ানে ট্রেড করতে পারবো।
      </p>
      <p>
        **লজিক - ট্রেপ ওয়ানে আমরা দেখতে পাই কোন বায়ার কেন্ডেলের উপরের দিকে
        উইক/সেডো, বা সেলার কেন্ডেলের নিছের দিকে ঊইক বা সেডো, যদি বায়ার সাইডে
        ট্রেপ ওয়ান হয় তাহলে বুঝতে হবে ওই ঊইকে সেলার এক্সজস্ট বা ডেড হইছে , আবার
        যদি যদি সেলার সাইডে ট্রেপ ওয়ান হয় তাহলে বুঝতে হবে ওই ঊইকে বায়ার এক্সজস্ট
        বা ডেড হইছে ,
      </p>
      <p>
        *** কখান ট্রেপ ওয়ানে ট্রেড করবোনা ওডার ফ্লো আর ট্রাইম ফ্রেম ফিল্টার করার
        পরেও...?
      </p>
      <p>
        যখন উইক এর তুলনায় বডি ৩০% বা তার কম হয় সে জায়গায় ট্রেপ ওয়ানে ট্রেড
        করবোনা। কারন এর মানে হলো সেলার প্রেসার আর সেলার সেখানে বায়ায়ের বডি ৩০%
        বা তার কমে নিয়ে আসতে পারছে এই প্রেসার এর কারনে
      </p>

  <p>নিছে চিত্রের মাধ্যমে বুঝানো হলো...</p>

  <img src={t1} alt="Trap One image" className="img-fluid my-2"/>
  <img src={t2} alt="Trap One image" className="img-fluid my-2"/>
  <img src={t3} alt="Trap One image" className="img-fluid my-2"/>
  <img src={t4} alt="Trap One image" className="img-fluid my-2"/>

    </ComponentWrapper>
  );
};

export default index;
