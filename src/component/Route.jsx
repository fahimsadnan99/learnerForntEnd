import { createBrowserRouter } from "react-router-dom";
import Home from "./Home/index"
import App from "../App"
import PriceAction from "../component/PriceAction/index"
import OTC  from "../component/OTC/Index"
import MindSet from "../component/Psychology/index"
//OTC Market COMPONENT
import CandleInformation from "../component/OTC/CandleInfo"
import StrongCandle from "../component/OTC/Strong Candle"
import WeakCandle from "../component/OTC/WeakCandle"
import Symmetrical from "../component/OTC/Symmetrical"
import OrderFlow from "../component/OTC/OrderFlow"
import DisorderFlow from "../component/OTC/DisorderFlow"
import NormalMarket from "../component/OTC/NormalMarket"
import PressureMarket from "../component/OTC/PressureMarket"
import WeakMarket from "../component/OTC/WeakMarket"
import MarketStrength from "../component/OTC/MarketStrength"
import Trend from "../component/OTC/Trend"
import OpenArea from "../component/OTC/OpernArea"
import StrongReflection  from "../component/OTC/StrongReflection"
import PressureReflection from "../component/OTC/PressureReflection"
import WeakReflection  from "../component/OTC/WeakReflection"
import Directionalizom from "../component/OTC/Directionalizom"
import TrapAbsent from "../component/OTC/TrapAbsent"
import TrapOne from "../component/OTC/TrapOne"
import TrapTwo from "../component/OTC/TrapTwo"
import TrapThree from "../component/OTC/TrapThree"
import TrapFour from "../component/OTC/TrapFour"
import TrapFive from "../component/OTC/TrapFive"
import TrapSix from "../component/OTC/TrapSix"
import TrapSeven from "../component/OTC/TrapSeven"
import MiniZone from "../component/OTC/MiniZone"
import Influence from "../component/OTC/Influence&Hints"
import Liquidity from "../component/OTC/Liquidity"
import LiquidityHunt from "../component/OTC/LiquidityHunt"
import SellSideLiquidity from "../component/OTC/SellSideLiquidity"
import BuySideLiquidity from "../component/OTC/BuySideLiquidity"
import PressureGenerate from "../component/OTC/PressureGenerate"
import DemandArea from "../component/OTC/DemandArea"
import SupplyArea from "../component/OTC/SupplyArea"
import AreaFillUp from "../component/OTC/AreaFillUp"
import FiveSecondConfirmation from "../component/OTC/5Sec"
import OptimalPressure from "../component/OTC/OptimalPressure"
////////////////////////Price Action//////////////////////////////////
import WhatIsPriceAction from "../component/PriceAction/PriceAction"
import CandleIdentification from "../component/PriceAction/CandleIdentification"
import AllLevels from "../component/PriceAction/AllLevels"
import Scl from "../component/PriceAction/Scl"
import Dcl from "../component/PriceAction/Dcl"
import SupportAndResistance  from "../component/PriceAction/Support&Resistance"
import Tcl from "../component/PriceAction/Tcl"
import InternalStructure from "../component/PriceAction/InternalStructure"
import Zone from "../component/PriceAction/Zone"
import Chart1 from "../component/PriceAction/Chart1"
import Chart2 from "../component/PriceAction/Chart2"
import RoundNumber from "../component/PriceAction/RoundNumber"
import CandleReaction from "../component/PriceAction/Reaction"
import PriceActionAnalysis from "../component/PriceAction/Analisis"


/////USER SECTION//////


import SignupForm from "./User/Signup.jsx";
import Login from "./User/Login.jsx";







export const Route = createBrowserRouter([
    {
        path : "/",
        element : <App></App>,
        children : [
            {
            path : "/",
            element : <Home></Home>
        },
        {
            path : "/priceAction",
            element : <PriceAction></PriceAction>
        },
        {
            path : "/MasterClass",
            element : <OTC></OTC>
        },
        {
            path : "/psychology",
            element : <MindSet></MindSet>
        },

  //OTC ALL LOGIC AND PATH START FROM HEAR
        {
            path : "/candleInformation",
            element : <CandleInformation></CandleInformation>
        },
        {
            path : "/strongCandle",
            element : <StrongCandle></StrongCandle>
        },
        {
            path : "/weakCandle",
            element : <WeakCandle></WeakCandle>
        },
        {
            path : "/symmetrical",
            element : <Symmetrical></Symmetrical>
        },
        {
            path : "/orderFlow",
            element : <OrderFlow></OrderFlow>
        },
        {
            path : "/disorderFlow",
            element : <DisorderFlow></DisorderFlow>
        },
        {
            path : "/normalMarket",
            element : <NormalMarket></NormalMarket>
        },
        {
            path : "/pressureMarket",
            element : <PressureMarket></PressureMarket>
        },
        {
            path : "/weakMarket",
            element : <WeakMarket></WeakMarket>
        },
        {
            path : "/marketStrength",
            element : <MarketStrength></MarketStrength>
        },
        {
            path : "/trend",
            element : <Trend></Trend>
        },
        {
            path : "/openArea",
            element : <OpenArea></OpenArea>
        },
        {
            path : "/strongReflection",
            element : <StrongReflection></StrongReflection>
        },
        {
            path : "/pressureReflection",
            element : <PressureReflection></PressureReflection>
        },
        {
            path : "/weakReflection",
            element : <WeakReflection></WeakReflection>
        },
        {
            path : "/directionalizom",
            element : <Directionalizom></Directionalizom>
        },
        {
            path : "/trapAbsent",
            element : <TrapAbsent></TrapAbsent>
        },
        {
            path : "/trapOne",
            element : <TrapOne></TrapOne>
        },
        {
            path : "/trapTwo",
            element : <TrapTwo></TrapTwo>
        },
        {
            path : "/trapThree",
            element : <TrapThree></TrapThree>
        },
        {
            path : "/trapFour",
            element : <TrapFour></TrapFour>
        },
        {
            path : "/trapFive",
            element : <TrapFive></TrapFive>
        },
        {
            path : "/trapSix",
            element : <TrapSix></TrapSix>
        },
        {
            path : "/trapSeven",
            element : <TrapSeven></TrapSeven>
        },
        {
            path : "/miniZone",
            element : <MiniZone></MiniZone>
        },
        {
            path : "/influence&Hints",
            element : <Influence></Influence>
        },
        {
            path : "/liquidity",
            element : <Liquidity></Liquidity>
        },
        {
            path : "/liquidityHunt",
            element : <LiquidityHunt></LiquidityHunt>
        },
        {
            path : "/sellSideLiquidity",
            element : <SellSideLiquidity></SellSideLiquidity>
        },
        {
            path : "/buySideLiquidity",
            element : <BuySideLiquidity></BuySideLiquidity>
        },
        {
            path : "/pressureGenerate",
            element : <PressureGenerate></PressureGenerate>
        },
        {
            path : "/measurement&DemandArea",
            element : <DemandArea></DemandArea>
        },
        {
            path : "/measurement&SupplyArea",
            element : <SupplyArea></SupplyArea>
        },
        {
            path : "/areaFillUp",
            element : <AreaFillUp></AreaFillUp>
        },
        {
            path : "/fiveSecConfirmation",
            element : <FiveSecondConfirmation></FiveSecondConfirmation>
        },
        {
            path : "/optimalPressure",
            element : <OptimalPressure></OptimalPressure>
        },
 ////////////////////////PRICE ACTION////////////////////////////////
 {
    path : "/priceAction1",
    element : <WhatIsPriceAction></WhatIsPriceAction>
},{
    path : "/candleIdentification",
    element : <CandleIdentification></CandleIdentification>
},
{
    path : "/allLevels",
    element : <AllLevels></AllLevels>
},
{
    path : "/scl",
    element : <Scl></Scl>
},
{
    path : "/dcl",
    element : <Dcl></Dcl>
},
{
    path : "/tcl",
    element : <Tcl></Tcl>
},
{
    path : "/support&Resistance",
    element : <SupportAndResistance></SupportAndResistance>
},
{
    path : "/internalStructure",
    element : <InternalStructure></InternalStructure>
},
{
    path : "/zone",
    element : <Zone></Zone>
},
{
    path : "/chart1",
    element : <Chart1></Chart1>
},
{
    path : "/chart2",
    element : <Chart2></Chart2>
},
{
    path : "/roundNumber",
    element : <RoundNumber></RoundNumber>
},
{
    path : "/reaction",
    element : <CandleReaction></CandleReaction>
},
{
    path : "/analysis",
    element : <PriceActionAnalysis></PriceActionAnalysis>
},

/////USER SECTION//////
{
    path : "/SignupForm",
    element : <SignupForm></SignupForm>
},
{
    path : "/LoginForm",
    element : <Login></Login>
},



    ]
    }
])