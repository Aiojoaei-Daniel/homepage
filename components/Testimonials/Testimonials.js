import React from "react";

export const Testimonials = () => {
  return (
    <div
      className="flex items-center justify-evenly"
      style={{ backgroundColor: "#3F93A5", height: "538px" }}
    >
      <div className="flex flex-col w-2/5 ml-40 g1">
        <h1 className="w-3/4 mb-16 text-5xl font-bold text-white">
          What people say about Mosaics of Mercy...
        </h1>
        <button
          type="button"
          className="w-2/5 px-6 py-2 text-sm font-semibold text-white rounded h-11"
          style={{ backgroundColor: "#EDB331" }}
        >
          READ TESTIMONIALS
        </button>
      </div>
      <div className="w-3/5 h-1/2 g2">
        <p className="w-2/3 mt-4 mb-10 italic text-white">
          “In the midst of the chaos that became my life; Mosaics of Mercy
          provided me with a refuge of calm. I am so very fortunate to have
          found Paige, who in turn brought Sherry, Amy and Alison into my life
          and Mosaics of Mercy. The work they do, the lives they touch, the hope
          they bring, is indescribable; it is just AMAZING! Not only did they
          support me with resources and rally to help me while I was trying to
          help a loved one; I have been fortunate enough to support them, “make
          hearts” and see the work they do behind the scenes. The commitment,
          passion and desire to make a difference and help break the stigma can
          truly be felt in every area of this charity!”
        </p>
        <p className="font-bold text-white ">
          Naetha, Parent in need of hope and navigation
        </p>
      </div>
    </div>
  );
};
