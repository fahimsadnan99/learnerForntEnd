import React from "react";
import priceAction from "../../assets/img/priceAction.jpg";
import OTC from "../../assets/img/otc.jpg";
import PSY from "../../assets/img/psy.jpg";
import MoneyManagement from "../../assets/img/MoneyManagement.jpg";
import "../../App.css";
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container">
     
      <div className="row homePageElimentWrapper">
        <Link
          to={"../PriceAction"}
          className="col-md-3 col-sm-12 my-2 my-md-0   mx-md-4 btn cursor-pointer"
        >
          <img
            src={priceAction}
            alt="priceAction"
            className="img-fluid rounded"
          />
        </Link>
        <Link
          to={"../MasterClass"}
          className="col-md-3 col-sm-12 my-2 my-md-0   mx-md-4 btn cursor-pointer"
        >
          <img src={OTC} alt="OTC" className="img-fluid rounded " />
        </Link>
        <Link
          to={"../Psychology"}
          className="col-md-3 col-sm-12 my-3 my-md-0   mx-md-4  btn cursor-pointer"
        >
          <img src={PSY} alt="PSYCHOLOGY" className="img-fluid rounded" />
        </Link>
        <Link
          to={"../MoneyManagement"}
          className="col-md-3 col-sm-12 my-3 my-md-0   mx-md-4  btn cursor-pointer"
        >
          <img
            src={MoneyManagement}
            alt="MoneyManagement"
            className="img-fluid rounded"
          />
        </Link>
      </div>
    </div>
  );
};
export default index;
