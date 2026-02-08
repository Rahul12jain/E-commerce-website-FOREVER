 import React from 'react'
 import {assets} from '../assets/assets'
 export const Hero = () => {
   return (
     <div className="flex flex-col sm:flex-row border border-gray-400">
       {/* hero left side */}

       <div className="w-full sm:1/2 flex items-center justify-center py-10 sm::py-0">
         <div className="text[#414141] ">
           <div className="flex items-center gap-2">
             <p className="w-8 ma:w-11 h-[2px] bg-[#414141]"></p>
             <p className="font-medium text-sm md:text-base">OUR BESTSELLER</p>
           </div>
           <h1 className="prata-regular text-3x1 sm:py-3 lg:text-sx1 leading-relaxed">
             Latest Arrivals
           </h1>
           <div className="flex item-center gap-2">
             <p className="font-semibold text-sm md:text-base">SHOP NOW</p>
             <p className="w-8 ma:w-11 h-[2px] bg-[#414141]"></p>
           </div>
         </div>
       </div>

       {/* Hero Right Side    */}
       <img className="w-full sm:w-1/2" src={assets.hero_img} alt="" />
     </div>
   );
 }
 