import React from 'react'
import { DiCodeigniter } from "react-icons/di";
import { BsCurrencyDollar } from "react-icons/bs";
import Header from "../layout/Header";
import Title from "../layout/Title";
import Footer from "../layout/Footer";



const CourseInfo = (props) => {
    return (
        <div>
            <Header />

            <body>
                <Title pageTitle="課程資訊：" />

                
                <div>
                        <div className='float-left ml-40'>
                            {/* 圖片 */}
                            <img 
                            src={require("../image/class.jpg")} 
                            alt="課程圖片"
                            className=' max-w-md max-h-95  '
                            />
                        </div>
                </div>

                <div className=' mt-20 ml-40'>
                    {/* 類別 */}
                    <div className='text-left  mb-10 text-gray-500'>
                        <h1 className="category">{props.category}
                        類別:生活類&gt;笑話區
                        </h1>
                    
                    {/* 標題 */}
                    </div>
                        <div className='inline-block leading-3 '>
                            <div className='  text-4xl  font-bold text-black  text-left '>
                                <h2 className="category">{props.title}
                                三分鐘笑話速成班    
                                </h2>
                            </div>
                        </div>
                        
                        {/* 觀看人數符號 */}
                        <div class="inline-block text-red-600 h-4">
                            <DiCodeigniter size={21}
                            className='ml-1'/>
                        </div>

                        {/* 觀看人數 */}
                        <div class="inline-block">
                            <div className=' text-black py-1 max-w-md '>
                                <p className="students_count">{props.length}
                                1877
                                </p>
                            </div>
                        </div>

                        {/* 老師及助教 */}
                        <div className=' text-lg sm:text-2xl font-bold text-black leading-normal pt-3 mt-3'>
                            <p className="instructor">{props.username1}
                                老師:小蝸  
                            </p>
                        </div>

                        <div className=' text-lg sm:text-2xl font-bold text-black leading-normal pt-1 mt-3'>
                            <p className="instructor">{props.username2}
                                助教:小白
                            </p>
                        </div>

                        {/* 課程資訊 */}
                        <div className=' text-gray-500 py-4 max-w-md overflow-auto mt-3'>
                            <p className="description">{props.description}
                                想學會如何快速講出好聽又吸引人的笑話嗎？挑選這個課程就對了！主豆然豆其  
                            </p>
                        </div>

                        {/* 金錢符號 */}
                        <div class="inline-block text-amber-500 h-9 ">
                            <BsCurrencyDollar size={42}
                            className='ml-5 mt-0'/>
                        </div>

                        {/* 課程價錢 */}
                        <div class="inline-block ">
                            <div className='  text-black text-5xl pt-10  '>
                                <p className="price">{props.price}
                                1872
                                </p>
                            </div>
                        </div>

                        {/* 購買按鈕 */}
                        <div class="inline-block -mt-3 ">
                            <button className='group text-white bg-blue-900 hover:bg-blue-700 
                            focus:ring-blue-700 focus:outline-none focus:ring-4 font-bold 
                            rounded-full text-xl w-40 h-16 text-center ml-10  '>
                                Buy
                            </button>    
                        </div>
                    
                

                    

                </div>



            </body>

            <footer>
                <Footer />
            </footer>
        </div> 
        )
    }
    
export default CourseInfo