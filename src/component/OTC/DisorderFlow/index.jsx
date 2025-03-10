import React from 'react'
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper"
import DisorderFlowImg from "../../../assets/img/otc/DisorderFlow/disorderFlw.png"

const index = () => {
  return (
    <ComponentWrapper
    title="Disorder Flow"
    url={""}
    >
  <p className='pt-3'>অডার ফ্লো তে আমরা দেখেছি কেন্ডেল বড থেকে ছোট বা ছোট থেকে বড হয় সেটাকে আমরা অডার ফ্লো বলি,কিন্তু ডিসঅডার ফ্লোতে কেন্ডেল বড থেকে ছোট বা ছোট থেকে বড হয়না, এইখানে অডার গুলা মানে কেন্ডেল কোনটা বড আবার কোনটা ছোট এইভাবে হয়ে থাকে।
  </p>
   
   <p>মনে করে ৩ টা গ্রীন কেন্ডেল আছে, প্রথমটা ছোট পরের টা তার থেকে বড কিন্তু শেষের কেন্ডেলটা আবার ছোট , এইখানে অডার ফ্লো মেন্টেইন বা মানেনাই, তাই আমরা এইটা ডিসঅডার ফ্লো বলি।
  </p>

  <h5>নিছের চিত্রের মাধ্যমে আমরা ডিসঅডার ফ্লো দেখবো...</h5>

  <img src={DisorderFlowImg} alt="Disorder Flow image" className='img-fluid py-3' />

    </ComponentWrapper>
  )
}

export default index