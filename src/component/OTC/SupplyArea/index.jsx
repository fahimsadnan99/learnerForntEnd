import React from "react";
import ComponentWrapper from "../../UniversalComponent/ComponentWrapper";
import T1 from "../../../assets/img/otc/Supply/T1.jpg"

const index = () => {
  return (
    <ComponentWrapper title="Measurement & Demand Area">
      <p>
        সাপ্লাই বলতে আমরা বুঝি মার্কেট যদি কোন কিছু অনেক পরিমাণে থাকে তার দাম
        কমে যায় তখন মার্কেটে সেই জিনিসটার দাম কমের দিকে পড়তে থাকে মানে রেড
        ক্যান্ডেল হতে থাকে দাম কমতে থাকে, দামের নিম্নমুখী প্রবাহ টা হচ্ছে
        স্প্লাই।
      </p>
      <p>
        সাপ্লাই মেজারমেন্ট টা ঠিক আমাদের ডিমান্ড মেজারমেন্ট এর মত আমাদের যদি
        মার্কেট ডাউন ট্রেন্ডে থাকে আমরা তখন প্রথম ডাউনট্রেন্ডের A পয়েন্ট থেকে
        মেজারমেন্ট করে B পয়েন্টে কতটুকু পর্যন্ত সাপ্লাই আসবে তা একটা ধারণা
        পেতে পারি এবং B পয়েন্ট থেকে C পয়েন্ট পর্যন্ত কতটুকু সাপ্লাই আসতে
        পারে তার একটা ধারণা পেতে পারি ।
      </p>
       <img src={T1} alt="Demand Area" className="my-2 img-fluid" />
    </ComponentWrapper>
  );
};

export default index;
