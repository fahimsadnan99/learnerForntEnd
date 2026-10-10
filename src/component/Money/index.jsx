import React from 'react'
import ComponentWrapper from "../UniversalComponent/ComponentWrapper"

const index = () => {
    const tips = [
        {
          title: "Fixed Percentage Risk Rule (১-৩%)",
          description:
            "প্রতি ট্রেডে আপনার একাউন্টের সর্বোচ্চ ১-৩% এর বেশি রিস্ক নেবেন না। যেমন ধরুন আপনার একাউন্টে $100 থাকলে, প্রতি ট্রেডে $1-$3 রিস্ক নিবেন। এতে করে আপনি দীর্ঘসময় মার্কেটে টিকে থাকতে পারবেন।",
          note: "টিপ: বড় একাউন্ট তৈরি হয় টিকে থাকার মাধ্যমে, জুয়া খেলে নয়।",
        },
        {
          title: "Compound Growth Strategy",
          description:
            "প্রতিদিন নির্দিষ্ট একটি % প্রফিট লক্ষ্য রাখুন (যেমন: 5%) এবং সেই অনুযায়ী ট্রেড এমাউন্ট সাইজ/ডলার নির্ধারণ করুন। কম্পাউন্ডিং ফলো করলে ছোট একাউন্ট থেকেও মাসখানেকে দ্বিগুণ করতে পারবেন।",
          note: "উদাহরণ: Day 1 = $100 → 5% profit = $105 → Day 2 = $105 → $110.25 → ...",
        },
        {
          title: "Avoid Martingale — Use Anti-Martingale",
          description:
            "Martingale মানে লসের পর  এমাউন্ট বাড়ানো — এটা খুব বিপজ্জনক। বরং Anti-Martingale ফলো করুন, মানে প্রফিটের পর এমাউন্ট বাড়ান। এতে আপনি নিরাপদে একাউন্ট বাড়াতে পারবেন।",
          note: "টিপ: লসের পর প্রতিশোধ নয় — বিশ্রাম নিন, মাথা ঠান্ডা করুন।",
        },
        {
          title: "Set Daily Win/Loss Limit",
          description:
            "প্রতিদিন একটি নির্দিষ্ট লক্ষ্য রাখুন: যেমন 3 Win বা 2 Loss হলে দিন শেষ। এটা আপনাকে overtrading থেকে রক্ষা করবে।",
          note: "টিপ: আজ 2টা ট্রেড হেরেছেন? আজ আর ট্রেড নয়, কাল আবার চেষ্টা।",
        },
        {
          title: "Keep a Trading Journal",
          description:
            "প্রতিটি ট্রেড লিখে রাখুন: Entry, Expiry, Amount, Result, Emotion। প্রতি সপ্তাহে রিভিউ করুন। এটা আপনার ডিসিপ্লিন ও দক্ষতা বাড়াবে।",
          note: "টিপ: আপনার জার্নালই হবে আপনার সবচেয়ে বড় শিক্ষক।",
        },
      ];
    
  return (
    <ComponentWrapper title="Money Management">
      <p className="lead-line">
        বাইনারি ট্রেডিংয়ের ৫টি ইফেক্টিভ মানি ম্যানেজমেন্ট টিপস
      </p>

      <ol className="tips">
        {tips.map((tip, index) => (
          <li key={index} className="tip">
            <h3 className="tip__title">{tip.title}</h3>
            <p className="tip__text">{tip.description}</p>
            <p className="tip__note">{tip.note}</p>
          </li>
        ))}
      </ol>

      <p className="closing-line">
        একাউন্ট বড় করতে চান? আগে মানি ম্যানেজমেন্ট ঠিক করুন — স্ট্র্যাটেজির আগে
        ডিসিপ্লিন।
      </p>
    </ComponentWrapper>
  )
}

export default index
