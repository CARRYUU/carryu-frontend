import React from 'react'

const AboutUs = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    關於我們|About Us
                </p>
            </div>

            <p className='text-xl mt-20'>
                Tailwind CSS works by scanning all of your HTML files,
                JavaScript components, and any other templates for class names,
                generating the corresponding styles 
                and then writing them to a static CSS file.
            </p>

            <br />

            <p className='text-xl'>
                成都市，別稱「蓉城」、「錦官城」、「錦城」，簡稱「蓉」、「錦」，
                位於中國四川省中部，地處四川盆地西部的成都平原腹地，
                四川省省會、副省級市，國家中心城市。
                為中國西南地區物流、商貿、金融、科技、文化、教育中心及交通、通信樞紐
            </p>
        </div>
    </div>
  )
}

export default AboutUs