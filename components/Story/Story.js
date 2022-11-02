import React from "react";
import { ArrowIcon } from "../Icons/ArrowIcon";

const TEXT = {
  TITLE:
    "Our mission is to help members of our community navigate mental health and addiction recovery.",
  DESCRIPTION:
    " We were founded as a ministry and believe strongly that we are called to comfort others with the comfort that we ourselves have been given when facing our own struggles. However, we are not evangelical in nature. We meet everyone where they are on their own unique journey without judgement.",
  BTN_LABEL: "FIND OUT MORE",
};

export const Story = () => {
  return (
    <article
      className="flex items-center bg-white justify-evenly"
      style={{ height: "493px" }}
    >
      <header className="w-2/6 text-4xl font-bold text-black">
        <h1>{TEXT.TITLE}</h1>
      </header>
      <section className="w-1/4">
        <p>{TEXT.DESCRIPTION}</p>
        <button
          type="button"
          className="flex mt-10 font-bold rounded bg-none"
          style={{ color: "#edb331" }}
        >
          {TEXT.BTN_LABEL}
          <ArrowIcon />
        </button>
      </section>
    </article>
  );
};
