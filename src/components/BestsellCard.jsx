import React from "react";
import like from "../assets/Link (3).png";

const BestsellCard = ({
  tag,
  discount,
  imageUrl,
  title,
  reviews = 0,
  rating = 0,
  price,
  offerPrice,
  index,
}) => {
  const showInstallmentBadge = index !== 0 && index !== 3;


  const getTagStyles = (tagText) => {
    const normalizedTag = tagText?.toLowerCase() || "";

    if (normalizedTag === "top rated") {
      return "bg-[#009900] text-white";
    }
    if (normalizedTag === "best seller") {
      return "bg-[#4B3EC4] text-white";
    }
    if (normalizedTag === "15% off") {
      return "bg-[#F1352B] text-white";
    }
 
    return "bg-[#41C2F2] text-white"; 
  };

  return (
    <article
      className="border border-[rgba(153,153,153,0.6)] bg-white rounded-md p-4 flex flex-col mt-5"
      style={{ height: 420 }}
      aria-label={`Product: ${title}`}
    >
      {/* Top bar */}
      <header className="flex justify-between items-center mb-4 flex-shrink-0">
        {showInstallmentBadge ? (
          <div className="text-[11px] font-semibold px-2 py-0.5 text-[#F1352B] border border-[#F1352B] rounded-full select-none">
            0% Installment
          </div>
        ) : (
          <div style={{ width: "80px" }}></div>
        )}
        <img src={like} alt="Like icon" className="w-6 h-6" />
      </header>

    
      <div className="flex-grow flex items-center justify-center mb-4 min-h-[150px]">
        <img
          src={imageUrl}
          alt={title}
          className="max-h-[200px] w-auto max-w-full object-contain rounded-md"
          loading="lazy"
        />
      </div>


      <section className="w-full flex flex-col ">
   
        <div className="flex flex-wrap gap-2 mb-2 flex-shrink-0">
          {tag && (
            <span
              className={`text-xs px-2 py-1 rounded-xl border font-bold select-none ${getTagStyles(
                tag
              )}`}
            >
              {tag}
            </span>
          )}
          {discount && (
            <span className={`text-xs px-2 py-1 rounded-xl border font-bold select-none ${getTagStyles(discount)}`}>
              {discount}
            </span>
          )}
        </div>


        <h4
          className="text-sm text-black font-semibold leading-snug mb-2 truncate"
          title={title}
          style={{ minHeight: "2.5rem" }}
        >
          {title}
        </h4>

      
        <div
          className="flex items-center mb-3 flex-shrink-0"
          aria-label={`Rating: ${rating} out of 5`}
          role="img"
        >
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 mr-1 ${
                i < rating ? "text-[#009900]" : "text-[#CFCFCF]"
              }`}
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.974a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.386 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.386 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.974a1 1 0 00-.364-1.118L3.611 9.4c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.974z" />
            </svg>
          ))}
          <span className="text-sm text-black select-none">({reviews})</span>
        </div>

        {/* Price */}
        <h3 className="text-xl text-[#F1352B] font-bold mt-auto">
          ${offerPrice.toFixed(2)}
          {price && (
            <span className="line-through text-[#999999] text-base ml-2">
              ${price.toFixed(2)}
            </span>
          )}
        </h3>
      </section>
    </article>
  );
};

export default BestsellCard;
