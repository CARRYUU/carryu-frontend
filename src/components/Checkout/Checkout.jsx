import React from "react";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ShopList from "../Cart/ShopList";
import TotalPrice from "../Cart/TotalPrice";

const Checkout = (props) => {
  return (
    <div>
      <Header />
      <body className="flex ">
        <div className="w-32 flex-initial "></div>
        <div className=" flex m-0  text-left flex-wrap">
          <div className="flex-col">
            <h1 className="font-bold text-3xl mb-10  m-5">Checkout</h1>
            <div>
              <h3 className="font-bold text-xl m-5">Payment method</h3>
              <></>
            </div>
            <h3 className="font-bold text-xl m-5">Order detail</h3>
            <hr className="mx-5 my-4 h-0.5 bg-gray-100" />

            <ShopList
              imageUri={require("../../image/4.JPG")}
              title="山岳攝影"
              badge1="相機"
              badge2="photoshop"
              price="400"
            />
          </div>
          <div>
            <TotalPrice />
          </div>
        </div>
      </body>
      <Footer />
    </div>
  );
};

export default Checkout;
