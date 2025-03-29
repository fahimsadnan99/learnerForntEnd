import React from 'react'
import ComponentWrapper from '../../UniversalComponent/ComponentWrapper'
import Wr1 from "../../../assets/img/otc/WEAKREFLECTION/Wr1.png"
import Wr2 from "../../../assets/img/otc/WEAKREFLECTION/Wr2.png"
import Wr3 from "../../../assets/img/otc/WEAKREFLECTION/Wr3.png"
import Wr4 from "../../../assets/img/otc/WEAKREFLECTION/Wr4.png"

const index = () => {
  return (
    <ComponentWrapper title="Weak Reflection" url="">
         
         <p className='mt-3'>ঊইক রিফ্লেকশন হল স্ট্রং এবং প্রেসার রিফ্লেকশন এর মত, কিন্তু ঊইক রিফ্লেকশনে মার্কেট কন্টিনিউ করতে পারেনা, বা আমরা সে দিকে ট্রেড করার কথা চিন্তা করবোনা।।</p>
         <p>ঊইক মার্কেট রিফ্লেকশনে মার্কেট বেশীদুর যাইতে পারেনা, ঊইক মার্কেট সাধারণত ইলিমিনেট/এক্সজোস্ট হবে আবার স্ট্রং মার্কেট সময়ের সাথে ঊইক হয়ে ইলিমিনেট বা ডেড বা মৃত হবে ।</p>
         <p>মার্কেট যদি স্ট্রং এন্ট্রি করে এবং সময়ের সাথে ঊইক হয় তাহলে আমরা সেটাকে ঊইক মার্কেট ধরবোনা</p>
         <p>মার্কেট যদি ঊইক এন্ট্রি করে  আমরা সেটাকে ঊইক মার্কেট ধরবো।</p>
         <p>যদি পিছনে মার্কেট স্ট্রং থাকে তাহলে পরে যদি সে রিফ্লেকসন করে স্ট্রং এন্ট্রি দিয়ে তাহলে আমরা ট্রেড করতে পারবো ওপেন এরিয়া আর টাইম ফিল্টারিং করে, পরের লেকচারে আমরা এই ইম্পটেন্ট টপিকট শিখবো, যা না জানলে আমরা ট্রেডে ভালো একুরেশী আনতে পারবোনা।</p>
         <p>যদি পিছনে মার্কেট উইক থাকে তাহলে পরে যদি সে রিফ্লেকসন করে স্ট্রং এন্ট্রি দিয়ে তাহলে আমরা ট্রেড করবোনা, কারন যার রেফারেন্সে ট্রেড করতেছি সেটা ঊইক ছিল ।</p>
         <h5>নিছের চিত্রের মাধ্যমে বুঝার চেষ্টা করবো-</h5>

         <img src={Wr1} alt='Weak Reflection Image' className='img-fluid my-2'/>

         <img src={Wr2} alt='Weak Reflection Image' className='img-fluid my-2'/>
         <img src={Wr3} alt='Weak Reflection Image' className='img-fluid my-2'/>
         <img src={Wr4} alt='Weak Reflection Image' className='img-fluid my-2'/>
    </ComponentWrapper>
  )
}

export default index