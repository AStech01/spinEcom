
import React from "react";
import like from "../assets/Link (3).png";

const ProductCard = ({
  image,
  title,
  price,
  oldPrice,
  discount,
  rating,
  reviews,
  sold,
  total,
  height = "360px",
  tag, 
}) => {
  return (
    <div
      className="border border-[rgba(153,153,153,0.6)] bg-white rounded-md w-full flex flex-col p-4"
      style={{ height }}
    >
    
      <div className="flex justify-between items-center mb-4">
        <div className="text-[11px] font-semibold px-2 py-0.5 text-[#F1352B] border border-[#F1352B] rounded-full">
          0% Installment
        </div>
        <img src={like} alt="like-icon" className="w-6 h-6" />
      </div>

     
      <div className="flex-grow flex items-center justify-center mb-2">
        <img
          src={image}
          alt="Product"
          className="max-h-full max-w-full object-contain rounded-md"
        />
      </div>

     
      <div className="w-full">
      
        <div className="flex items-center gap-2 mb-1">
          {tag && (
            <span className="inline-block text-xs px-2 py-1 rounded border text-[#4B3EC4] border-[#4B3EC4] font-bold">
              {tag}
            </span>
          )}
          {discount && (
            <span className="inline-block text-xs px-2 py-1 rounded border text-[#F1352B] border-[#F1352B] font-bold">
              {discount}% OFF
            </span>
          )}
        </div>

    
        <h4 className="text-sm text-black font-semibold leading-snug mb-1">
          {title}
        </h4>

     
        <div className="flex items-center mb-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 mr-1 ${
                i < rating ? "text-[#009900]" : "text-[#CFCFCF]"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.386 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L3.611 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          ))}
          <span className="text-sm text-black">({reviews})</span>
        </div>

   
        <h3 className="text-xl text-[#F1352B] font-bold mb-1">
          ${price}{" "}
          <span className="line-through text-[#999999] text-base ml-2">
            ${oldPrice}
          </span>
        </h3>

      
        <div className="h-1 w-full bg-[#E5E8F3] rounded mb-1">
          <div
            className="h-1 bg-[#4B3EC4] rounded"
            style={{ width: `${(sold / total) * 100}%` }}
          ></div>
        </div>

     
        <h6 className="text-xs text-black">
          Sold: {sold} / {total}
        </h6>
      </div>
    </div>
  );
};

export default ProductCard;
