import React from 'react'
import ComponentWrapper from '../../UniversalComponent/ComponentWrapper';
import symmetrical1 from "../../../assets/img/otc/SYMMETRICAL/symmetrical.png"
import symmetrical2 from "../../../assets/img/otc/SYMMETRICAL/symmetrical2.png"

const index = () => {
  return (
    <ComponentWrapper
    title="SYMMETRICAL"
    url={"https://www.youtube.com/shorts/dXi97O2kc-8"} 
    >

 <p className='pt-3'>সিমিট্রিকেল মানে দেখতে দেখতে বাকি অর্ধেকের মতো</p>
 <p>আমরা যদি একটা কেন্ডেলকে মাঝ বরাবর যদি কেটে ফেলি তাহলে অর্ধেক অংশ বাকি অর্ধেকের মতো</p>
 <p>A,H,LOVE symbol কে আমরা যদি মাঝ বরাবর কাটি একই জিনিস আমরা দেখতে পাবো।</p>

 <h4>Symmetry কিভাবে আমাদের টেডিংয়ে হেল্প করে...?</h4>
 <p>একটা স্ট্রং কেন্ডেল কেনো স্ট্রং তা বুজতে হলে আমাদের কেন্ডেলের মাঝ বরাবর যদি আলাদা করি তাহলে আমি অর্ধেক অংশ বাকি অর্ধেকের মতো দেখতে পাবো </p>
 <p>পৃথীবিতে সিমিট্রিকেল জিনিস সব থেকে পাওয়ারপুল , তেমনি ট্রেডিংয়েও পাওয়ারপুল কেন্ডেল বুঝায় ।</p>

 <h5>নিছে চিত্রের মাধ্যমে বুজানো হলো...</h5>
   

 <div>
    <img src={symmetrical1} alt='symmetrical img' className='img-fluid py-2'/>
    <img src={symmetrical2} alt='symmetrical img' className='img-fluid py-2'/>
 </div>
 
    </ComponentWrapper>
  )
}

export default index