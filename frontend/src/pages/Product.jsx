 import React from 'react'
import { useContext } from 'react';
 import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { useState } from 'react';
import { useEffect } from 'react';
import { assets } from '../assets/assets';
import { RelatedProducts } from '../components/RelatedProducts';
 
 export const Product = () => {

   const {productId} = useParams();
   const {products,currency,addToCart} = useContext(ShopContext);
   const [productData,setProductData] = useState(false);
   const [image,setImage] = useState('')
   const [size,setSize] = useState('')


   const fetchProductData = async () => {
          
        products.map((item) => {
          if(item._id === productId){
            setProductData(item)
            setImage(item.image[0])
            
            return null;
          }
        })
   }


   useEffect(() => {
    fetchProductData();
   },[productId,products])
   


   return productData ? (
     <div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
       {/* -------------Product Data-------- */}
       <div className="flex gap-12 sm:gap-12 flex-col sm:flex-row">
         {/* -----------Product Images-------- */}
         <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
           <div className="flex sm:flex-col overflow-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full ">
             {productData.image.map((item, index) => (
               <img
                 onClick={() => setImage(item)}
                 src={item}
                 key={index}
                 className="w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer"
                 alt=""
               ></img>
             ))}
           </div>

           <div className="w-full sm:w-[80%] ">
             <img className="w-full h-auto" src={image} alt="" />
           </div>
         </div>

         {/* ------Product Info -------- */}
         <div className="flex-1">
           <h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
           <div className="flex items-center gap-1 mt-2">
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_icon} alt="" className="w-3 5" />
             <img src={assets.star_dull_icon} alt="" className="w-3 5" />
             <p className='pl-2'>(122)</p>
           </div>
           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
           <p className='mt-5 text-gray-500 md;w-4/5'>{productData.description}</p>
           <div className='flex flex-col gap-4 my-8'>
              <p>Select Size</p>
              <div className='flex gap-2'>
                {productData.sizes.map((item,index)=>(
                  <button onClick={()=>setSize(item)} className={`border py-2 px-4 bg-gray-100 ${item === size ? 'border-orange-500 ' : ''}`} key={index}>{item}</button>
                ))}
              </div>
            </div>
            <button onClick={()=>addToCart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
            <hr className='mt-8 w-4/5'/>
            <div className='text-sm text-gray-500 mt-5 flex flex-col gap-1'>
                   <p>100% Original product.</p>
                   <p>Cash on delivery is available on this product.</p>
                   <p>Easy return and exchange policy within 7 days.</p>

            </div>
         </div>


       </div>

        {/* ---------Description & Review Section-------- */}
        <div className='mt-20'>
          <div className='flex'>
            <p className='border px-5 py-3 text-sm font-bold'>Description</p>
            <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
          </div>
          <div className='flex flex-col gap-4 px-6 py-6 text-sm text-gray-500 border border-gray-100 rounded-md'>
            <p>An e-commerce website is an online platform that facilitates the buying and selling the product online and also it save you time and energy and also you buy any product with mimimum price and also have a better policy reated to return of product on you can retrun any product within 7 days after buying you no need to physically present like in local shop your returend product recieved by a man that is form e-commerce company side</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque praesentium rerum qui ex explicabo. Eveniet, veniam fugit, nesciunt ipsa modi delectus possimus nulla a quidem itaque odio, quibusdam dignissimos magnam!</p>
          </div>
        </div>

        {/* ---------Display related products------------- */}
        
         <RelatedProducts category={productData.category} subCategory={productData.subCategory}/>

     </div>
   ) : (
     <div className="opacity-0"> </div>
   );
 }
 