import React from 'react';
import w_1 from '../assets/Link → prod1.png.png';
import w_2 from '../assets/Link → prod2.png.png';
import w_3 from '../assets/Link → prod3.png.png';
import w_4 from '../assets/Link → prod4.png.png';
import w_5 from '../assets/Link → prod5.png.png';
import w_6 from '../assets/Link → prod6.png.png';
import w_7 from '../assets/Link → prod7.png.png';
import ProductCard from '../components/ProductCard';

const WeeksDeal = () => {
  return (
    <div className="container mx-auto max-w-5xl rounded-2xl mt-4 bg-[#EBEEF6]  px-6 sm:px-6 lg:px-0">

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 px-1 sm:px-5 pt-4">
        <h3 className="font-bold text-2xl">Best Weekly Deals</h3>
        <button className="bg-[#F1352B] text-white px-5 py-2 text-xs rounded-full whitespace-nowrap">
          Expires in:
          <span className="text-sm"> -132 d</span> :
          <span className="text-sm"> -9 h</span> :
          <span className="text-sm"> -35 m</span> :
          <span className="text-sm"> -45 s</span>
        </button>
      </div>


      <div className="flex flex-col lg:flex-row gap-4 justify-center items-start mx-auto mt-6 max-w-[1000px]">

    
        <div className="flex flex-col gap-4 w-full sm:w-[200px]">
          <ProductCard
            image={w_1}
            title="Air Purifier with True HEPA H14 Filter"
            price={489}
            oldPrice={619}
            discount={15}
            rating={4}
            reviews={5}
            sold={24}
            total={80}
          />
          <ProductCard
            image={w_2}
            title="Smart Vacuum Cleaner Pro Max"
            price={299}
            oldPrice={399}
            discount={20}
            rating={5}
            reviews={12}
            sold={40}
            total={100}
          />
        </div>

    
        <div className="w-full sm:w-[350px]">
          <ProductCard
            image={w_3}
            title="Smart Vacuum Cleaner Pro Max"
            price={299}
            oldPrice={399}
            discount={20}
            rating={5}
            reviews={12}
            sold={40}
            total={100}
            height="722px"
          />
        </div>

       
        <div className="grid grid-cols-2 gap-4 w-full sm:w-[440px]">

          <div className="flex flex-col gap-4">
            <ProductCard
              image={w_4}
              title="Smart Vacuum Cleaner Pro Max"
              price={299}
              oldPrice={399}
              discount={20}
              rating={5}
              reviews={12}
              sold={40}
              total={100}
            />
            <ProductCard
              image={w_5}
              title="Smart Vacuum Cleaner Pro Max"
              price={299}
              oldPrice={399}
              discount={20}
              rating={5}
              reviews={12}
              sold={40}
              total={100}
            />
          </div>

          <div className="flex flex-col gap-4">
            <ProductCard
              image={w_6}
              title="Smart Vacuum Cleaner Pro Max"
              price={299}
              oldPrice={399}
              discount={20}
              rating={5}
              reviews={12}
              sold={40}
              total={100}
              tag="Top Rated"
            />
            <ProductCard
              image={w_7}
              title="Smart Vacuum Cleaner Pro Max"
              price={299}
              oldPrice={399}
              discount={20}
              rating={5}
              reviews={12}
              sold={40}
              total={100}
              tag="Best Seller"
            />
          </div>

        </div>
      </div>

      <div className="flex justify-center mt-6 pb-4">
        <button className='text-xs bg-white text-black rounded-full px-5 py-2 font-bold'>
          See All Products (63)
        </button>
      </div>
    </div>
  );
};

export default WeeksDeal;
