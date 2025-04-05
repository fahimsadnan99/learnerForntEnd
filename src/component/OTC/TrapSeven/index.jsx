import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import WarningText from "../../UniversalComponent/WarningText";
import T1 from "../../../assets/img/otc/Trap7/T1.png"
import T2 from "../../../assets/img/otc/Trap7/T2.png"
import T3 from "../../../assets/img/otc/Trap7/T3.png"
import T4 from "../../../assets/img/otc/Trap7/T4.png"
import T5 from "../../../assets/img/otc/Trap7/T5.png"
import T6 from "../../../assets/img/otc/Trap7/T6.png"
import T7 from "../../../assets/img/otc/Trap7/T6.png"


const index = () => {
  return (
    <ComponentWrapper title="Trap Seven" url="">
      <WarningText></WarningText>
      <p>
        ট্র্যাপ সেভেন হলো সিচুয়েশন বেস ট্রেপ, এই ট্রেপে ট্রেড করতে হলে আমাদেরকে
        একজরসন আইডেন্টিফাই করতে হবে এবং সঠিক একজরসন আইডেন্টিফাই করতে পারলে আমরা
        ট্রেপ 7 এ ট্রেড করতে পারবো। মূলত ট্র্যাপ 7 এ ট্রেড করতে হলে
        পারিপার্শ্বিক আমাদের ছয়টা থেকে দশটা ক্যান্ডেল দেখে আমাদেরকে এই ট্রেপটা
        আইডেন্টিফাই করতে হবে।
      </p>
      <p>
        একটা পার্টির ভিতরে অন্য পার্টি ডেড বা ইলিমিনেট বা এজস্ট হয়ে যাওয়া বা
        আমাদের বড় কোন কেন্ডেল দিয়ে ডেড বা ইলিমিনেট বা এজস্ট প্রকাশ করা এই ডেড
        বা ইলিমিনেট বা এজস্ট  যখন প্রকাশ করবে তখন আমাদেরকে পারিপার্শ্বিক
        মার্কেট দেখতে হবে এবং মার্কেটে উইকনেস দেখতে হবে স্ট্রংনেস দেখতে হবে এইসব
        দেখে আমাদেরকে ওই ট্যাপটা কি আমাদের ডেড বা ইলিমিনেট বা এজস্ট হয়েছে কিনা সেটা বুঝতে হবে।
      </p>
      <p>নিচে চিত্রের মাধ্যমে আমরা বোঝার চেষ্টা করব</p>
      <img src={T1} alt="Trap 7 Image" className="img-fluid my-2"/>
      <img src={T2} alt="Trap 7 Image" className="img-fluid my-2"/>
      <img src={T3} alt="Trap 7 Image" className="img-fluid my-2"/>
      <img src={T4} alt="Trap 7 Image" className="img-fluid my-2"/>
      <img src={T5} alt="Trap 7 Image" className="img-fluid my-2"/>
      <img src={T6} alt="Trap 7 Image" className="img-fluid my-2"/>
      <img src={T7} alt="Trap 7 Image" className="img-fluid my-2"/>

    </ComponentWrapper>
  );
};

export default index;
