import React from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        
        <div>
          <img src={assets.logo} className="mb-5 w-32" alt="" />
          <p className="w-full md:w-3/2 text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem
            corrupti nobis, porro deleniti nihil eligendi ea qui sapiente illo
            cupiditate facere amet dolore blanditiis quos quidem. Eveniet
            provident placeat ab.
          </p>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <Link to="/">
              {" "}
              <li>Home</li>
            </Link>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-1 text-gray-600">
            <li>+1-213-456-7890</li>
            <li>contact@forever.com</li>
          </ul>
        </div>



      </div>

      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2025@ forever.com - All Right Reserved</p>
      </div>

    </div>
  );
}
