import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import T1 from "../../../assets/img/otc/LiquidityHunt/T1.jpg"
import T2 from "../../../assets/img/otc/LiquidityHunt/T2.jpg"
import T3 from "../../../assets/img/otc/LiquidityHunt/T3.jpg"
import T4 from "../../../assets/img/otc/LiquidityHunt/T4.jpg"
import T5 from "../../../assets/img/otc/LiquidityHunt/T5.jpg"





const index = () => {
  return (
    <ComponentWrapper title="Liquidity Hunt">
      <p>
        ব্যাংক, হেজ ফান্ড, বিগ প্লেয়াররা জানে বেশিরভাগ রিটেইল ট্রেডাররা(আমরদের
        মত ছোট ট্রেডার যারা ট্রেড করি) কোথায় SL রাখে। তারা সেই SL-গুলোকেই
        টার্গেট করে, কারণ SL = অর্ডার = Liquidity।
      </p>
      <h5>🧠 বেসিক কনসেপ্ট:</h5>
      <p>
        রিটেইল ট্রেডাররা সাধারণত: রেসিসট্যান্স থেকে সেল ট্রেডে নেয়,
        সাপোর্ট এর দিকে বাই ট্রেডে নেয়, স্মার্ট ট্রেডার সেই বাই আর সেল করার জায়গায়
        মার্কেট পাঠায়, তাদের বিপরিতে নিয়ে যায় এবং নিজে উল্টো দিকে ট্রেড নেয়।
      </p>
      <p>ইনফ্লুএন্স এর এরিয়াতে লেভেল গুলো কাজ করলেও অন্য সব জায়গায় এইটা আপনাদের লস করাবে মার্কেট আপনার বিপরিতে গিয়ে।</p>
      <p>নিচে চিত্রের মাধ্যমে বোঝার চেষ্টা করি,</p>
      <img src={T1} alt="Liquidity Hunt" className="img-fluid my-2"/>
      <img src={T2} alt="Liquidity Hunt" className="img-fluid my-2"/>
      <img src={T3} alt="Liquidity Hunt" className="img-fluid my-2"/>
      <img src={T4} alt="Liquidity Hunt" className="img-fluid my-2"/>
      <img src={T5} alt="Liquidity Hunt" className="img-fluid my-2"/>
    </ComponentWrapper>
  );
};

export default index;
