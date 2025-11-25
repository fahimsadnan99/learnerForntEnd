import React from 'react'
import ComponentWrapper from '../../UniversalComponent/ComponentWrapper'
import WarningText from '../../UniversalComponent/WarningText'
import T1 from "../../../assets/img/otc/Trap2/T1.png"
import T2 from "../../../assets/img/otc/Trap2/T2.png"
import T3 from "../../../assets/img/otc/Trap2/T3.png"
import T4 from "../../../assets/img/otc/Trap2/T4.png"

const index = () => {
  return (
    <ComponentWrapper title="Trap Two" url="">
      <WarningText></WarningText>
      <p>ট্রেপ টু সাধারনত এক্সস্ট বা ডেড ট্রেপ বলা হয়, এই ট্রেপ দুই ভাবে হতে পারে,</p>
      <p>১/ মনে করি আপ ট্রেন্ড , বায়ার স্ট্রং এবং সেলার সাইড ঊইক সে ক্ষেত্রে আমরা যানি যে স্ট্রং সাইড রেস্ট নেয় এবং ঊইক সাইড ডেড বা এক্সজস্টেট বা ইলিমিনেট হয়, ট্রেপ টু তে প্রথম অবস্থায় ঊইক সাইড ডেড বা ইলিমিনেট হবে,এমন অবস্থায় সেলার কেন্ডেল এক্সজস্টেট হবে কোন উইক না থাকলে বা সেলার কেন্ডেলের উপের দিকে ঊইক থাকলে, বা এমন হতে পারে সেলার কেন্ডেলের বডী ৩০% বা তার কম হলে,   যদি সে কেন্ডেলের দুই দিকে সমান ঊইক থাকে তাহলে সে কেন্ডেল স্ট্রং কেন্ডেলও হতে পারে।</p>
      <p>২/ যদি কোন ট্রেন্ডে কোনো এক সাইড হোক বায়ার বা সেলার, ১ টা কেন্ডেল দিয়ে ওপেন এরিয়া কভার করে ফেলে আর কেন্ডেলের দুই সাইডে সমান ঊইক যদি না থাকে, এবং সে সাইড পিছনে মার্কেট স্ট্রাকচার ঊইক ছিল তাহলে আমরা সেটাকে এক্সজস্টেট দরতে পারবো</p>
      <img src={T1} alt='Trap Two Image' className='img-fluid my-2' />
      <img src={T2} alt='Trap Two Image' className='img-fluid my-2' />
      <img src={T3} alt='Trap Two Image' className='img-fluid my-2' />
      <img src={T4} alt='Trap Two Image' className='img-fluid my-2' />


    </ComponentWrapper>
  )
}

export default index