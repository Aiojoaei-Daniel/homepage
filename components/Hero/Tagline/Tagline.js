import React from "react";

const TEXT = {
  CONTACT: "Call: 346-703-0051 or Email: resources@mosaicsofmercy.com",
  TITLE: "Helping families navigate mental health & addiction services.",
  DESCRIPTION:
    "A united community with a compassionate mindset towards mental healthand addiction recovery, mobilized to make a difference in their own lives and the lives of others.",
};

const BTN_LABEL = "Get Resources";

export const Tagline = () => {
  return (
    <section className="absolute w-1/2 left-60 top-72">
      <p className="w-3/5 px-2 py-1 mb-8 font-medium text-white bg-red-700">
        {TEXT.CONTACT}
      </p>
      <h1 className="w-3/4 mb-8 text-5xl font-bold h-50">{TEXT.TITLE}</h1>
      <p className="w-3/5 mb-8 h-50">{TEXT.DESCRIPTION}</p>
      <button
        style={{ backgroundColor: "#edb331" }}
        type="button"
        className="px-6 py-2 font-bold text-white rounded"
      >
        {BTN_LABEL}
      </button>
    </section>
  );
};
