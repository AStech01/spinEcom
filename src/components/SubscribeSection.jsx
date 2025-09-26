import React from "react";
import { FaEnvelope } from "react-icons/fa";

const SubscribeSection = () => {
  return (
    <div className="bg-[#4B3EC4] w-full py-10 px-4 mt-5">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-white">
       
        <h3 className="text-lg  text-center md:text-left">
         <span className="font-bold">Subscribe</span>  & Get  <span className="text-[#41C2F2]">10% OFF</span> for First Order
        </h3>

       
        <div className="flex items-center bg-white rounded-md overflow-hidden w-full max-w-md">
          <div className="px-3">
            <FaEnvelope className="text-[#4B3EC4]" />
          </div>
          <input
            type="email"
            placeholder="Enter email address"
            className="flex-grow py-2 px-2 outline-none text-black placeholder-gray-500"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-5 py-2 h-full hover:bg-gray-800 transition"
          >
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
