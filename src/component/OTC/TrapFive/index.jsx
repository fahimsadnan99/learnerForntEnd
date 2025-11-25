import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import WarningText from "../../UniversalComponent/WarningText";
import T1 from "../../../assets/img/otc/Trap5/T1.png"
import T2 from "../../../assets/img/otc/Trap5/T2.png"
import T3 from "../../../assets/img/otc/Trap5/T3.png"
import T4 from "../../../assets/img/otc/Trap5/T4.png"
import T5 from "../../../assets/img/otc/Trap5/T5.png"

const index = () => {
  return (
    <ComponentWrapper title="Trap Five">
      <WarningText></WarningText>
      <p>
        ট্রেপ ৫ হলো ট্রেন্ড বা সাপোর্ট এবং রেজিস্টেন্স লাইন এক্সজরসন বা এলিমিনেট
        হওয়া, এই ট্রেপ ৫ এ মার্কেট ট্রেন্ড বা সাপোর্ট এবং রেজিস্টেন্স লাইন থেকে
        লিকুইডিটী কালেক্ট করে তারপর মার্কেট ডাঊন বা আপে যায়, এই ট্রেপ ৫ এ ট্রেড
        করতে হলে আমাদের আগে সেলার এরিয়া আর বায়ার এরিয়া দেখতে হবে সাথে ট্রেন্ড
        লাইন ড্র করতে হবে, ট্রেপ ৫ এ কেন্ডেল অনেকটা বড হয়ে ট্রেন্ড লাইন ব্রেক
        করে বা সেলার অথবা বায়ার এরিয়াতে যায় বা ব্রেক করে।
      </p>
      <p>
        ১ মিনিটে ট্রেপ ৫ এ ট্রেড করতে হলে এরিয়া চার্ট বা ৫ সেকেন্ডে গিয়ে মার্কেট
        স্ট্রাকচার পরিবর্তন হয়েছে কিনা দেখতে হবে, যদি পরিবর্তন না হয় তাহলে ট্রেপ
        ৫ এ ট্রেড করা যাবেনা,
      </p>
      <p>লো টাইম ফ্রেম বা এরিয়া চার্ট আমাদের দেখায় মার্কেট লিকুইডিটি নিতেছে কিনা, যদি মার্কেট লিকুইডিটি না নেয় এবং ট্রেন্ড ফ্লো করে তাহলে ট্রেপ ৫ কাজ না করার চান্স ২০% </p>
      

  <img src={T1} alt="Trap Five Image" className="img-fluid my-2" />
  <img src={T2} alt="Trap Five Image" className="img-fluid my-2" />
  {/* <img src={T3} alt="Trap Five Image" className="img-fluid my-2" />
  <img src={T4} alt="Trap Five Image" className="img-fluid my-2" /> */}
  <img src={T5} alt="Trap Five Image" className="img-fluid my-2" />



    </ComponentWrapper>
  );
};

export default index;
