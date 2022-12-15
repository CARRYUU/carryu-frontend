import React from "react";
import Search from "../layout/Search";
import Footer from "../layout/Footer";
import Nav from "../layout/Nav";
import Card from "../layout/Card";
import Header from "../layout/Header";
import { Link } from "react-router-dom";


const HomePage = () => {
  return (
    <div>
      
      <Header/>
     

      <body>
      
      <h1 className=" font-bold text-2xl m-6 text-primary text-left">
        熱門排行 | Popular Course
      </h1>
    
      {/* card */}
      <div className="flex snap-x scroll-pl-6">
        <Card/>
        
      </div>

      <h1 className=" font-bold text-2xl m-6 text-primary text-left">
        推薦給你 | Recommended for you
      </h1>
      <div className="flex snap-x scroll-pl-6">
        <Card/>
        
      </div>

      </body>
    <Footer />
  </div>
  );
};

export default HomePage;
