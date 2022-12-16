import React from 'react'

const AboutUs = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full '>
            <div className='pb-8'>
                <p className="capitalize inline-block text-6xl font-bold relative cursor-pointer 
                transition-all duration-500 before:content-[''] before:absolute 
                before:-bottom-2 before:left-0 before:w-0 before:h-1.5 
                before:rounded-full before:opacity-0 before:transition-all 
                before:duration-500 before:bg-gradient-to-r before:from-gray-600 
                before:via-slate-400 before:to-zinc-500 hover:before:w-full 
                hover:before:opacity-100">
                    關於我們|About Us
                </p>
            </div>
 
            <p className='text-xl mt-10 px-20 leading-8 tracking-wider text-left break-words'>
                Tailwind CSS works by scanning all of your HTML files,
                JavaScript components, and any other templates for class names,
                generating the corresponding styles 
                and then writing them to a static CSS file.
            </p>

            <br />

            <p className='text-xl px-20 leading-8 tracking-wider text-left break-words'>
                成都市，別稱「蓉城」、「錦官城」、「錦城」，簡稱「蓉」、「錦」，
                位於中國四川省中部，地處四川盆地西部的成都平原腹地，
                四川省省會、副省級市，國家中心城市。
                為中國西南地區物流、商貿、金融、科技、文化、教育中心及交通、通信樞紐。
            </p>
        </div>
    </div>
  )
}

export default AboutUs