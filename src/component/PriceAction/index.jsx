import React from "react";
import candleInformation from "../../assets/img/otc/candleInformation1.jpg";
import CandleIdentification from "../../assets/img/PriceAction/CandleInfo.jpg"
import AllLevels from "../../assets/img/PriceAction/AllLeves.jpg"
import SupportAndResistance from "../../assets/img/PriceAction/Support&Resistance.jpg"
import Trend from "../../assets/img/otc/trend10.jpg"
import PriceAction from  "../../assets/img/PriceAction/PriceAction.jpg"
import Scl from "../../assets/img/PriceAction/SCL.jpg"
import Dcl from "../../assets/img/PriceAction/Dcl.jpg"
import Tcl from "../../assets/img/PriceAction/Tcl.jpg"
import OpenArea from "../../assets/img/PriceAction/Target.jpg"
import InternalStructure from "../../assets/img/PriceAction/Is.jpg"
import Zone from "../../assets/img/PriceAction/Zone.jpg"
import Chart1 from "../../assets/img/PriceAction/Chart1.jpg"
import Chart2 from "../../assets/img/PriceAction/Chart2.jpg"
import RoundNumber from "../../assets/img/PriceAction/RN.png"
import Reaction from "../../assets/img/PriceAction/CR.jpg"
import Analysis from "../../assets/img/PriceAction/analysis.jpg"
import fiveSec from "../../assets/img/otc/5Sec.jpg"





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
      to: "support&Resistance"
      
    },
    {
      img: Scl,
      title: "SCL",
      to: "scl"
      
    },
    {
      img: Dcl,
      title: "DCL",
      to: "dcl"
      
    },
    {
      img: Tcl,
      title: "TCL",
      to: "tcl"
      
    },
    {
      img: Trend,
      title: "ট্রেন্ড",
      to: "trend"
      
    },
    {
      img: OpenArea,
      title: "টার্গেট",
      to: "openArea"
      
    },
    {
      img: InternalStructure,
      title: "ইন্টারনাল স্ট্রাকচার",
      to: "internalStructure"
      
    },
    {
      img: Zone,
      title: "জোন",
      to: "zone"
      
    },
    {
      img: Chart1,
      title: "চার্ট-১",
      to: "chart1"
      
    },
    {
      img: Chart2,
      title: "চার্ট-২",
      to: "chart2"
      
    },
    {
      img: RoundNumber,
      title: "রাউন্ড নাম্বার",
      to: "roundNumber"
      
    },
    {
      img: Reaction,
      title: "রিয়েকসন",
      to: "reaction"
      
    },
    {
      img: fiveSec,
      title: "ফাইভ সেকেন্ড কনফারমেসন",
      to: "fiveSecConfirmation"
      
    },
    {
      img: Analysis,
      title: "এনালাইসিস",
      to: "analysis"
      
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
