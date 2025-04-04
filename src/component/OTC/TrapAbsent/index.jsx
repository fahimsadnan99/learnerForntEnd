import React from 'react'
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper"
import a1 from "../../../assets/img/otc/TrapAbsent/a1.png"
import a2 from "../../../assets/img/otc/TrapAbsent/a2.png"
import a3 from "../../../assets/img/otc/TrapAbsent/a3.png"
import a4 from "../../../assets/img/otc/TrapAbsent/a4.png"
import WarningText from '../../UniversalComponent/WarningText'


const index = () => {
  return (
    <ComponentWrapper title="Trap Absent" url="">

      <WarningText></WarningText>
    
    <p >এবসেন্ট মানে হলো অনুপস্থিত , যেখানে আমাদের বায়ার সেলার থাকার কথা সেখানে তারা নাই,এখন এই জায়গায় কিভাবে ট্রেপ করে মার্কেট...?</p>
    <p>মনে করি কোন ট্রেন্ড লাইন আছে আমাদের কাছে , রেজিটেন্স ট্রেন্ড লাইনে সেলার এন্ট্রি করবে, এই ক্ষেত্রে যদি সেলার এন্ট্রি না করে<span className='text-white bg-danger p-1 mx-1'>ছোট বায়ার স্ট্রং কেন্ডেল</span>  দেয় এর মানে সেলার এবসেন্ট সেখানে, এবং বায়ার স্ট্রং  সেখানে আমাদের এবসেন্ট ট্রেপ কাজ করবে</p>
    <p>কখন এই ট্রেপ আমাদের ইগনোর করতে হবে...?</p>
    <p>১/ অডার ফ্লো যদি ডিক্রিস বা অডার ফ্লো যদি ছোট হতে থাকে সেখানে ব্যাবহার করবোনা,</p>
    <p>২/ এবসেন্ট এর জায়গায় যদি ঊইক মানে দুর্বল কেন্ডেল দিয়ে এবসেন্ট প্রকাশ করে মার্কেট সে ক্ষেত্রেও আমরা  এই ট্রেপ ব্যাবহার করবোনা। </p>
   
   <h5>নিছে চিত্রের মাধ্যমে বুঝার চেষ্টা করবো...</h5> 

   <img src={a1} alt='ABsent image' className='img-fluid my-2'/>
   <img src={a2} alt='ABsent image' className='img-fluid my-2'/>
   <img src={a3} alt='ABsent image' className='img-fluid my-2'/>
   <img src={a4} alt='ABsent image' className='img-fluid my-2'/>
    </ComponentWrapper>
  )
}

export default index