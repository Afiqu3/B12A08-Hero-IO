import React from "react";
import downloadImg from "../../assets/download.png";
import starImg from "../../assets/star.png";

const App = ({ app }) => {
  const { image, title, downloads, ratingAvg } = app;
  return (
    <div className="card bg-base-100 shadow-sm p-4 hover:-translate-y-1 hover:ring-1 hover:hover:ring-[#804BEB] cursor-pointer">
      <figure>
        <img className="w-[285px] h-[285px]" src={image} alt="Shoes" />
      </figure>
      <div className="mt-4">
        <h3 className="text-xl font-medium">{title}</h3>
      </div>
      <div className="mt-4 flex justify-between items-center">
        <button className="py-1.5 px-2.5 bg-[#F1F5E8] text-[#00d390] flex items-center rounded gap-2">
          <img className="w-4 h-4" src={downloadImg} alt="" />
          {downloads}
        </button>
        <button className="py-1.5 px-2.5 bg-[#FFF0E1] text-[#FF8811] flex items-center rounded gap-2">
          <img className="w-4 h-4" src={starImg} alt="" />
          {ratingAvg}
        </button>
      </div>
    </div>
  );
};

export default App;
