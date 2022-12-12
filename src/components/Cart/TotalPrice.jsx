import React from "react";
import Button from "../layout/Button";

const TotalPrice = (props) =>{
    return(
        <div>
            <div id="TotalPrice" className="flex-col m-4 flex-none text-left">
            <h3 className="font-bold text-m text-gray-500">Total:</h3>
            <h3 className="font-bold text-2xl  my-5 ">{props.TotalPrice}NT$680</h3>
            <Button buttonName="Checkout" />
          </div>
        </div>
    )
}

export default TotalPrice;