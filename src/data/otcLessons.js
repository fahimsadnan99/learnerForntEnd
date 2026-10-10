// Lesson list for the course index page. Order here is the lesson number.
import candleInformation from "../assets/img/otc/candleInformation1.jpg";
import strongCandle from "../assets/img/otc/strongCandle2.jpg";
import weakCandle from "../assets/img/otc/weakCandle3.jpg";
import symmetrical from "../assets/img/otc/SYMMETRICAL4.jpg";
import orderFlow from "../assets/img/otc/OrderFlw5.jpg";
import disOrderFlow from "../assets/img/otc/DISORDER6.jpg";
import normalMarket from "../assets/img/otc/NormalMarket8.jpg";
import pressureMarket from "../assets/img/otc/pressureMarket7.jpg";
import weakMarket from "../assets/img/otc/weakMarket9.jpg";
import trend from "../assets/img/otc/trend10.jpg";
import openArea from "../assets/img/otc/openArea11.jpg";
import normalReflection from "../assets/img/otc/NormalReflection12.jpg";
import pressureReflection from "../assets/img/otc/Pressure Reflection13.jpg";
import weakReflection from "../assets/img/otc/WeakREflect14.jpg";
import directionalizom from "../assets/img/otc/directionlizom15.jpg";
import marketStrength from "../assets/img/otc/othersPHOTO/MarketStrength.jpg";
import trapAbsent from "../assets/img/otc/TrapSent.jpg";
import trapOne from "../assets/img/otc/TrapOne.jpg";
import trapTwo from "../assets/img/otc/TrapTwo.jpg";
import trapThree from "../assets/img/otc/TrapThree.jpg";
import trapFour from "../assets/img/otc/TrapFour.jpg";
import trapFive from "../assets/img/otc/TrapFive.jpg";
import trapSix from "../assets/img/otc/TrapSix.jpg";
import trapSeven from "../assets/img/otc/TrapSeven.jpg";
import miniZone from "../assets/img/otc/Minizone.jpg";
import pressureGenerate from "../assets/img/otc/PressureGenerate.jpg";
import influence from "../assets/img/otc/Influence.jpg";
import liquidity from "../assets/img/otc/Liquidity.jpg";
import liquidityHunt from "../assets/img/otc/LiquidityHunt.jpg";
import sellSideLiquidity from "../assets/img/otc/SellSide.jpg";
import buySideLiquidity from "../assets/img/otc/buySide.jpg";
import Demand from "../assets/img/otc/Demand.jpg";
import Supply from "../assets/img/otc/Supply.jpg";
import AreaFillUp from "../assets/img/otc/AreaFillUp.jpg";
import FiveSecConfirmation from "../assets/img/otc/5Sec.jpg";
import OptimalPressure from "../assets/img/otc/Optimal.jpg";

export const otcLessons = [
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
    {
      img: trapAbsent,
      title: "ট্রেপ এবসেন্ট",
      to: "trapAbsent"
    },
    {
      img: trapOne,
      title: "ট্রেপ ১",
      to: "trapOne"
    },
    {
      img: trapTwo,
      title: "ট্রেপ ২",
      to: "trapTwo"
    },
    {
      img: trapThree,
      title: "ট্রেপ ৩",
      to: "trapThree"
    },
    {
      img: trapFour,
      title: "ট্রেপ ৪",
      to: "trapFour"
    },
    {
      img: trapFive,
      title: "ট্রেপ ৫",
      to: "trapFive"
    },
    {
      img: trapSix,
      title: "ট্রেপ ৬",
      to: "trapSix"
    },
    {
      img: trapSeven,
      title: "ট্রেপ ৭",
      to: "trapSeven"
    },
    {
      img: miniZone,
      title: "মিনিজোন",
      to: "miniZone"
    },
    {
      img: influence,
      title: "ইনফ্লুএন্স এবং হিনস্ট",
      to: "influence&Hints"
    },
    {
      img: liquidity,
      title: "লিকুইডিটী",
      to: "liquidity"
    },
    {
      img: liquidityHunt,
      title: "লিকুইডিটী হান্ট",
      to: "liquidityHunt"
    },
    {
      img: sellSideLiquidity,
      title: "এস এস লিকুইডিটী",
      to: "sellSideLiquidity"
    },
    {
      img: buySideLiquidity,
      title: "বি এস লিকুইডিটী",
      to: "buySideLiquidity"
    },
    {
      img: pressureGenerate,
      title: "প্রেসার জেনারেট",
      to: "pressureGenerate"
    },
    {
      img: Demand,
      title: "মেজরমেন্ট ও ডীমান্ড এরিয়া",
      to: "measurement&DemandArea"
    },
    {
      img: Supply,
      title: "মেজরমেন্ট ও স্প্লাই এরিয়া",
      to: "measurement&SupplyArea"
    },
    {
      img: AreaFillUp,
      title: "এরিয়া ফিলাপ",
      to: "areaFillUp"
    },
    {
      img: FiveSecConfirmation,
      title: "৫ সেকেন্ড কনফার্মেশন",
      to: "fiveSecConfirmation"
    },
    {
      img: OptimalPressure,
      title: "ওপ্টিমাল প্রেসার",
      to: "optimalPressure"
    },
    
];
