import React from "react";
import candleInformation from "../../assets/img/otc/candleInformation1.jpg";
import strongCandle from "../../assets/img/otc/strongCandle2.jpg";
import weakCandle from "../../assets/img/otc/weakCandle3.jpg";
import symmetrical from "../../assets/img/otc/SYMMETRICAL4.jpg";
import orderFlow from "../../assets/img/otc/OrderFlw5.jpg"
import disOrderFlow from "../../assets/img/otc/DISORDER6.jpg"
import normalMarket from "../../assets/img/otc/NormalMarket8.jpg"
import pressureMarket from "../../assets/img/otc/pressureMarket7.jpg"
import weakMarket from "../../assets/img/otc/weakMarket9.jpg"
import trend from "../../assets/img/otc/trend10.jpg"
import openArea from "../../assets/img/otc/openArea11.jpg"
import normalReflection from "../../assets/img/otc/NormalReflection12.jpg"
import pressureReflection from "../../assets/img/otc/Pressure Reflection13.jpg"
import weakReflection from "../../assets/img/otc/WeakREflect14.jpg"
import directionalizom from "../../assets/img/otc/directionlizom15.jpg"
import marketStrength from "../../assets/img/otc/othersPHOTO/MarketStrength.jpg"


import { Link } from "react-router-dom";


const Index = () => {
  const Datas = [
    {
      img: candleInformation,
      title: "কেন্ডেল ইনফরমেশন বা তথ্য",
      to: "candleInformation"
      
    },
    {
      img: strongCandle,
      title: "শক্তিশালী কেন্ডেল",
      to: "strongCandle"
    },
    {
      img: weakCandle,
      title: "উইক বা দুর্বল কেন্ডেল",
      to: "weakCandle"
    },
    {
      img: symmetrical,
      title: "সিমিট্রিকেল (ভারসাম্য)",
      to: "symmetrical"
    },
    {
      img: orderFlow,
      title: "অর্ডারফ্লো",
      to: "orderFlow"
    },
    {
      img: disOrderFlow,
      title: "ডিসঅর্ডারফ্লো",
      to: "disOrderFlow"
    },
    {
      img: normalMarket,
      title: "স্বাভাবিক মার্কেট",
      to: "normalMarket"
    },
    {
      img: pressureMarket,
      title: "চাপের মার্কেট",
      to: "pressureMarket"
    },
    {
      img: weakMarket,
      title: "উইক বা দুর্বল মার্কেট",
      to: "weakMarket"
    },
    {
      img: marketStrength,
      title: "মার্কেট স্ট্রেংথ / মার্কেট নাম্বারিং",
      to: "marketStrength"
    },
    {
      img: trend,
      title: "ট্রেন্ড",
      to: "trend"
    },
    {
      img: openArea,
      title: "ওপেন এরিয়া",
      to: "openArea"
    },
    {
      img: normalReflection,
      title: "স্বাভাবিক রিফ্লেকশন ",
      to: "strongReflection"
    },
    {
      img: pressureReflection,
      title: "চাপের রিফ্লেকশন",
      to: "pressureReflection"
    },
    {
      img: weakReflection,
      title: "উইক বা দুর্বল রিফ্লেকশন",
      to: "weakReflection"
    },
    {
      img: directionalizom,
      title: "দিকনির্দেশনা (Move Catch/ Direction)",
      to: "directionalizom"
    },
  ];

  return (
    <div className="container">
      

      {/* 
      <div>
         {
          Datas.map((item,index)=>{
            return <div key={index} className='masterClassImges rounded py-1 d-flex my-3' style={{boxShadow : "0px 1px 7px #000",text : "bold", fontSize : "25px"}}><div className='mx-3 my-auto text-success'>{index+1}</div><img src={item.img} alt={item} className='img-fluid' style={{width : "90px"}} ></img> <h5 className='my-auto mx-3 text-primary-emphasis' style={{text: "bold"}}>{item.title}</h5> </div>
          })
         }
      </div> */}

      <div className="row">
       
          {Datas.map((item, index) => {
            return (
              <Link to={"/" + item.to} className="btn text-start border-1 border-success card col-sm-12 col-md-4 col-lg-3 mx-md-2 mx-lg-4 px-0 my-sm-2 py-0">
                <img src={item.img} className="card-img-top" alt={item.title} style={{width : "auto"}} />
                <div className="card-body bg-success bg-gradient py-1" key={index}>
                  <h5 className="card-title text-white align-center">{index+1} / {item.title}</h5>
                </div>
              </Link>
            );
          })}
        </div>
  
    </div>
  );
};

export default Index;
