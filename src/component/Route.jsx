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
            path : "/otc",
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
    ]
    }
])