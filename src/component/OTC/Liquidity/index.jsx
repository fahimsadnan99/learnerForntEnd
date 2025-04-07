import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";

const index = () => {
  return (
    <ComponentWrapper title="Liquidity" url="">
      <p>Liquidity = বাজারে কতো সহজে আপনি Buy বা Sell করতে পারছেন, তা বোঝায়।</p>
      <p>
        যদি অনেক মানুষ একই সময়ে Buy এবং Sell করতে চায়, এবং অনেক অর্ডার থাকে —
        তাহলে মার্কেটটা "Liquid" বলা হয়।
      </p>
      <p>
        যদি অর্ডার কম থাকে, মার্কেটটা হয় "Illiquid" — যেখানে ট্রেড করা কঠিন।
      </p>
      <h5>📊 মার্কেটে Liquidity কিভাবে কাজ করে?</h5>
      <p>
        ধরুন আপনি EUR/USD তে একটি Buy ট্রেড দিতে চাচ্ছেন। যদি মার্কেটে অনেক লোক
        EUR/USD সেল করতে চায়, তাহলে আপনি খুব সহজেই আপনার Buy ট্রেড execute করতে
        পারবেন — এটাই liquidity।
      </p>
     <h5>💡 বাস্তব জীবনের সাথে মিলিয়ে দেখা যাক:</h5>
      <p>ধরুন আপনি বাজারে গেছেন পেঁয়াজ কিনতে।

যদি অনেক দোকানে পেঁয়াজ বিক্রি হয়, দামও ঠিকঠাক, তখন আপনি সহজেই কিনতে পারবেন = high liquidity

</p>
      <p>কিন্তু যদি ১-২টা দোকানে পেঁয়াজ থাকে, তারা দাম চড়া চায়, আপনি হয়তো কিনতেই পারবেন না = low liquidity

ট্রেড মার্কেটেও একি — Liquidity বেশি মানে অনেক "buyers" আর "sellers" — আপনি সহজেই ট্রেড করতে পারবেন।</p>
    </ComponentWrapper>
  );
};

export default index;
