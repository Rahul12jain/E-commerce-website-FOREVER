 import React from 'react'
 
 export const NewsletterBox = () => {

    const onSubmitHandler = (event) => {
        event.preventDefault();

    }
   return (
     <div className='text-center'>
        <p className='text-2xl font-medium text-gray-800'>Subscribe now & get 20% off</p>
        <p className='text-gray-300 mt-3'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, deserunt natus pariatur ipsum accusamus reiciendis modi id quae suscipit aperiam voluptas, tempora quasi, iste nam necessitatibus nesciunt praesentium facilis incidunt.
        </p> 
        <form onSubmit={onSubmitHandler} className='w-full sm:1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE</button>
        </form>
     </div>
   )
 }
 