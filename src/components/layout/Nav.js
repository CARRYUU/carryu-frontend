import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Challenge from "../Challenge/Challenge";
import Cart from "../Cart/Cart";
import CourseInfo from "../CourseInfo/CourseInfo";
import Course from "../Course/Course";

const Nav = () => {
  return (
    <nav className="flex  flex-end  justify-around flex-[2_1_400px] w-32 items-center">
      <ul className="text-mainBlue font-semibold flex flex-end flex-auto w-40 justify-around text-center">
        <li className="px-0.1 w-30 ">
          <Link to="/about">關於我們|About us</Link>
        </li>
        <li className="px-0.1 w-30 ">
          <Link to="/challenge">我要挑戰|Chellnge</Link>
        </li>
      </ul>

      <Link to="/Member">
        <img src={require("../../icon/iconMember.png")} className="p-2"></img>
      </Link>
      <Link to="/Cart">
        <img src={require("../../icon/iconCart.png")} className="p-2"></img>
      </Link>
      <Link to="/Course">
        <img
          src={require("../../icon/iconGlobe.png")}
          className="p-2 mr-4"
        ></img>
      </Link>

      <Routes>
        <Route element={<Challenge />} path="/challenge" />
        <Route element={<Cart />} path="/Cart" />
        <Route element={<CourseInfo />} path="/Member" />
        <Route element={<Course/>} path="/Course"/>
      </Routes>
    </nav>
  );
};

export default Nav;
