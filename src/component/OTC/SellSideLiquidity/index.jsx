import React from 'react'
import ComponentWrapper from '../../UniversalComponent/ComponentWrapper'
import T1 from "../../../assets/img/otc/SellSideLiquidity/T1.jpg"
import T2 from "../../../assets/img/otc/SellSideLiquidity/T2.jpg"


const index = () => {
  return (
   <ComponentWrapper title="Sell Side Liquidity">
    
    <h5>Sell-side Liquidity Hunt (Up then Drop)</h5>
    <p>সিচুয়েশন:</p>
    <p>মার্কেট একটি রেসিস্ট্যান্স এরিয়ায় ঘোরাফেরা করছে</p>
    <p>অনেক রিটেইল ট্রেডার(আমরা যারা ট্রেড করি) এখানে সেল ট্রেড নিচ্ছে</p>
    <p>তারা  রেসিস্ট্যান্স থেকে ডাঊনে ট্রেড করে</p>
    <p>স্মার্ট ট্রেডার মার্কেটকে উপরে ঠেলে দেয় → SL হিট করায় মানে বিপরিতে নিয়ে যায়  → Liquidity নেয় → তারপর ড্রপ করে</p>


    <img src={T1} alt='Sell Side Liquidity' className='my-2 img-fluid' />
    <img src={T2} alt='Sell Side Liquidity' className='my-2 img-fluid' />









   </ComponentWrapper>
  )
}

export default index