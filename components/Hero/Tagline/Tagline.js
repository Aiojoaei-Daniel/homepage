import React from "react";

export const Tagline = () => {
  return (
    <div className="absolute w-1/2 left-60 top-72">
      <p className="w-3/5 px-2 py-1 mb-8 font-medium text-white bg-red-700">
        Call: 346-703-0051 or Email: resources@mosaicsofmercy.com
      </p>
      <p className="w-3/4 mb-8 text-5xl font-bold h-50">
        Helping families navigate mental health & addiction services.
      </p>
      <p className="w-3/5 mb-8 h-50">
        A united community with a compassionate mindset towards mental health
        and addiction recovery, mobilized to make a difference in their own
        lives and the lives of others.
      </p>
      <button
        style={{ backgroundColor: "#edb331" }}
        type="button"
        className="px-6 py-2 font-bold text-white rounded"
      >
        Get Resources
      </button>
    </div>
  );
};
