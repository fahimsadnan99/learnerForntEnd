import React from "react";
import candleInformation from "../../assets/img/otc/candleInformation1.jpg";
import CandleIdentification from "../../assets/img/PriceAction/CandleInfo.jpg"
import AllLevels from "../../assets/img/PriceAction/AllLeves.jpg"
import SupportAndResistance from "../../assets/img/PriceAction/Support&Resistance.jpg"
import Trend from "../../assets/img/otc/trend10.jpg"
import PriceAction from  "../../assets/img/PriceAction/PriceAction.jpg"




import { Link } from "react-router-dom";


const Index = () => {
  const Datas = [
    {
      img: PriceAction,
      title: "প্রাইস একসন কি?",
      to: "priceAction1"
      
    },
    {
      img: candleInformation,
      title: "কেন্ডেল ইনফরমেশন বা তথ্য",
      to: "candleInformation"
      
    },
    {
      img: CandleIdentification,
      title: "কেন্ডেল আইডেন্টীফিকেসন",
      to: "candleIdentification"
      
    },
    {
      img: AllLevels,
      title: "অল লেভেলস",
      to: "allLevels"
      
    },
    {
      img: SupportAndResistance,
      title: "সাপোট এন্ড রেজিস্টেন্স",
      to: "support&Ressistance"
      
    },
    {
      img: Trend,
      title: "ট্রেন্ড",
      to: "trend"
      
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
              <Link to={"/" + item.to} className="btn text-start border-1 border-success card col-sm-12 col-md-4 col-lg-3 mx-md-2 mx-lg-4 px-0 my-sm-2 py-0 my-2">
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
