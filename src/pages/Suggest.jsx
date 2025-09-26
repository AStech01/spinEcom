import React, { useState } from "react";
import { FaFire } from "react-icons/fa";
import { BsLightningChargeFill } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";
import SuggestCard from "../components/SuggestCard";

const Suggest = ({ productseggest = [] }) => {

  const [activeFilter, setActiveFilter] = useState("recommend");


  const filters = [
    {
      id: "recommend",
      label: (
        <>
          <FaFire className="inline mr-1" /> Recommend For You
        </>
      ),
      filterFn: (product) => true,
    },
    {
      id: "bestSeller",
      label: (
        <>
          <BsLightningChargeFill className="inline mr-1" /> Top Best Seller
        </>
      ),
      filterFn: (product) => product.discount === "BEST SELLER",
    },
    {
      id: "topRated",
      label: (
        <>
          <IoMdStar className="inline mr-1" /> Top Rated
        </>
      ),
      filterFn: (product) => product.rating >= 4,
    },
    {
      id: "70off",
      label: "70% OFF",
      filterFn: (product) => {
        if (!product.price || !product.offerPrice) return false;
        const discountPercent =
          ((product.price - product.offerPrice) / product.price) * 100;
        return discountPercent >= 70;
      },
    },
    {
      id: "50off",
      label: "50% OFF",
      filterFn: (product) => {
        if (!product.price || !product.offerPrice) return false;
        const discountPercent =
          ((product.price - product.offerPrice) / product.price) * 100;
        return discountPercent >= 50 && discountPercent < 70;
      },
    },
  ];


  const currentFilter = filters.find((f) => f.id === activeFilter);


  const filteredProducts = currentFilter
    ? productseggest.filter(currentFilter.filterFn).slice(0, 10)
    : productseggest.slice(0, 10);

  return (
    <div className="relative max-w-5xl rounded-2xl mt-4 bg-[#EBEEF6] mx-auto px-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 pt-8">
        <h2 className="text-2xl font-bold">Suggest Today</h2>
        <button className="text-black font-medium text-[10px] hover:underline">
          VIEW ALL &gt;
        </button>
      </div>


      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => setActiveFilter(id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors flex items-center ${
              activeFilter === id
                ? "bg-[#4B3EC4] text-white text-xs"
                : "bg-white text-black hover:bg-[#4B3EC4] text-xs"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

     
      {filteredProducts.length === 0 ? (
        <p className="p-4 text-center w-full text-gray-600">
          No products found in this category.
        </p>
      ) : (
        <div className="overflow-x-auto pb-4">
          <div
            className="grid gap-4
              grid-flow-col auto-cols-[minmax(200px,1fr)]
              lg:grid-flow-row lg:grid-cols-5 lg:auto-cols-auto"
            aria-label="Suggested products list"
            role="region"
          >
            {filteredProducts.map((product, index) => (
              <SuggestCard key={product.title + index} {...product} index={index} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Suggest;
