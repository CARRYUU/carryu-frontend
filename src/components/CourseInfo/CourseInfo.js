import React from 'react'
import classImage from '../image/class.jpg';
import { AiOutlineShoppingCart } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
import { BsCurrencyDollar } from "react-icons/bs";


const CourseInfo = () => {
  return (
    <div
        name ="classinformation"
        className='h-screen w-full bg-gradient-to-b from-black
        to-gray-800'
    >    
    
        <div className='static max-w-screen-lg mx-auto flex flex-col 
        items-center justify-center h-full  md:flex-row scroll-py-3'>
            
            <div className='flex flex-col  space-y-2 justify-center h-full md:w-2/3 '>
                <ls className='static text-xs sm:text-sm  font-bold text-white leading-normal pt-8 '>
                    類別: 生活類  
                </ls>
                <div className='space-x-2 ' >
                    <div className='inline-block leading-3 '>
                        <h2 className=' static max-w-md text-4xl  font-bold text-white  text-left '>
                        三分鐘笑話速成班    
                        </h2>
                    </div>
                    <div class="inline-block text-red-600 h-4">
                        <DiCodeigniter size={21}
                        className='ml-1'/>
                    </div>
                    <div class="inline-block">
                        <p className=' static text-white py-1 max-w-md '>
                        1877
                        </p>
                    </div>
            </div>
                
                <ls className='static text-lg sm:text-2xl font-bold text-white leading-normal pt-3'>
                    老師:小蝸  
                </ls>
                <ls className='static text-lg sm:text-2xl font-bold text-white leading-normal pt-1'>
                    助教:小白
                </ls>
                <p className=' static text-gray-500 py-4 max-w-md overflow-auto'>
                    想學會如何快速講出好聽又吸引人的笑話嗎？挑選這個課程就對了！主豆然豆其  
                </p>

                

                <div className='space-x-2' >

                    <div class="inline-block text-amber-500 h-7">
                        <BsCurrencyDollar size={40}
                        className='ml-2'/>
                    </div>
                    <div class="inline-block">
                        <p className=' static text-white text-3xl max-w-md  '>
                        1872
                        </p>
                    </div>
                    <div class="inline-block ">
                        <button className='group text-white w-fit px-3 py-2 my-2 
                        flex items-center rounded-md bg-gradient-to-r
                        from-cyan-500 to-blue-500 cursor-pointer ml-20'>
                            Buy
                        <span className='group-hover:scale-125 duration-200 '>
                            <AiOutlineShoppingCart size={21}
                            className='ml-2'/>
                        </span>
                    </button>    
                </div>  
                             
            </div>


                 
        </div>
            <div>
                <img src={classImage} 
                alt="product profile"
                className='rounded-2xl mx-auto h-auto w-2/3  overflow-visible'
                />
            </div>

        </div>
    </div>
  )
}

export default CourseInfo