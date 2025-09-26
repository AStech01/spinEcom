import React from "react";
import one from '../assets/8012bd492e326035bc994cb0fb99eb88b79fa1bd.png'
import two from '../assets/head_2.png.png'
import three from '../assets/head_3.png.png'
import four from '../assets/head_4.png.png'
import five from '../assets/head_5.png.png'

const Gallery = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="max-w-5xl px-5 mx-auto  ">
    
        <div className="flex flex-wrap -m-1 md:-m-2">

      
          <div className="flex w-full flex-wrap mb-2">

            
            <div className="relative p-1 md:p-2 w-full md:w-[70%] h-64 md:h-[400px]">
              <img
                alt="EKO 40 Android TV"
                className="w-full h-full object-cover object-center block rounded-xl"
                src={one}
              />
              <div className="absolute inset-0 flex flex-col justify-center items-start text-white ml-4 md:ml-[60px]">
                <h3 className="inter-one text-2xl font-bold leading-[1.2]">
                  EKO 40 <br /> Android <br /> TV
                </h3>
                <p className="inter-p text-xs font-medium mt-1">
                  Smart Full HD <br /> Android TV with <br /> Google Assistant
                </p>
                <button className="mt-4 bg-[#4B3EC4] text-white text-xs px-4 py-2 rounded-full">
                  Shop Now
                </button>
              </div>
            </div>

            
            <div className="w-full md:w-[30%] p-1 md:p-2 h-64 md:h-[400px]">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
                <img
                  alt="Humidifying Fan"
                  src={two}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-0 left-0 w-full h-full p-4 text-white rounded-t-xl bg-gradient-to-b from-black/60 to-transparent">
                  <div className="text-center">
                    <h2 className="text-lg font-semibold">Humidifying Fan</h2>
                    <p className="text-[10px]">From $299</p>
                  </div>
                  <button className="absolute bottom-[40px] left-1/2 transform -translate-x-1/2 bg-[#4B3EC4] text-white text-xs px-4 py-2 rounded-full shadow-md hover:bg-[#372bb5] transition">
                    Discover Now
                  </button>
                </div>
              </div>
            </div>

          </div>

      
          <div className="flex w-full flex-wrap">

           
            <div className="w-full md:w-1/2 p-1 md:p-2 h-64 md:h-auto">
              <div className="relative w-full h-full rounded-xl overflow-hidden shadow-sm">
                <img
                  alt="iPad Mini 2022"
                  src={three}
                  className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute top-0 left-0 text-black p-4 flex flex-col justify-end rounded-xl h-full">
                  <div>
                    <h5 className="text-[25px] font-semibold mb-1">iPad mini <br /> 2022</h5>
                    <p className="text-[10px] mb-2 text-[#666666]">Mega Power in mini size</p>
                    <button className="bg-[#212529] text-white text-xs px-4 py-2 rounded-full hover:bg-[#372bb5] transition">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

           
            <div className="w-1/2 md:w-1/4 p-1 md:p-2 h-48 md:h-auto">
              <div className="relative w-full h-full">
                <img
                  alt="Air Purifier"
                  className="w-full h-full object-cover object-center block rounded-xl"
                  src={four}
                />
                <div className="absolute top-0 left-0 pt-5 text-white p-2 w-full">
                  <h6 className="text-[16px] font-semibold pl-4 leading-[1.2]">Air <br /> Purifier</h6>
                  <p className="text-xs pl-4 text-[#999999] leading-5">from <span className="text-[#B9F34F] "><br />$169</span></p>
                </div>
              </div>
            </div>

        
            <div className="w-1/2 md:w-1/4 p-1 md:p-2 h-48 md:h-auto">
              <div className="relative w-full h-full">
                <img
                  alt="Washing Machine"
                  className="w-full h-full object-cover object-center block rounded-xl"
                  src={five}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-3 text-white">
                  <div>
                    <h6 className="text-[10px] font-medium mb-1">Washing Machine</h6>
                    <p className="text-[20px] leading-5">Anatico <br /> Max 2</p>
                  </div>
                  <div>
                    <button className="bg-white text-black text-xs px-4 py-2 rounded-full">
                      Shop Now
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Gallery;
