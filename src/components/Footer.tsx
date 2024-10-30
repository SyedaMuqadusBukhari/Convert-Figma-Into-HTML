import React from 'react'
import { FaFacebookF } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="pt-8 pb-16 bg-[#CFA6A61C]">
      <div className="flex md:text-3xl justify-center md:space-x-10 space-x-4 text-[30px] ">
        <div className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]">
          <FaFacebookF />
        </div>
        <div  className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]">
        <FaSquareInstagram />
        </div>
        <div  className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]">
          <FaTwitter />
        </div>
        <div  className="hover:scale-125 duration-200 cursor-pointer text-[#21243D]">
          <FaLinkedinIn />
        </div>
      </div>
      <p className="text-center sm:text-[22px] leading-8 text-sm font-semibold pt-6">
        Copyright 2020 All rights reserved
      </p>
    </div>
  )
}

export default Footer