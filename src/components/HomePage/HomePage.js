import React from "react";
import Search from "../layout/Search";
import Footer from "../layout/Footer";
import Nav from "../layout/Nav";
import Card from "../layout/Card";
import Header from "../layout/Header";


const HomePage = () => {
  return (
    <div>
      
      <Header/>
      {/* <header className="flex backdrop-blur shadow-md py-2 w-full  sticky top-0 flex-wrap items-center bg-gradient-to-t from-primary to-primary/5 ">
      <h1 className="flex ml-2 text-2xl flex-none w-30">CarryU</h1>
      <Search />
      <Nav />
      
      </header> */}

      <body>
      
      <h1 className=" font-bold text-2xl m-6 text-primary text-left">
        熱門排行 | Popular Course
      </h1>
    
      {/* card */}
      <div className="flex snap-x scroll-pl-6">
        <Card/>
        <Card/>
      </div>

      <h1 className=" font-bold text-2xl m-6 text-primary text-left">
        推薦給你 | Recommended for you
      </h1>
      <Card/>

      </body>
    <Footer />
  </div>
  );
};

export default HomePage;
