import React from "react";
import { ArrowIcon } from "./../ArrowIcon";

export const Story = () => {
  return (
    <div
      className="flex items-center bg-white justify-evenly"
      style={{ height: "493px" }}
    >
      <h1 className="w-2/6 text-4xl font-bold text-black">
        Our mission is to help members of our community navigate mental health
        and addiction recovery.
      </h1>
      <div className="w-1/4">
        <p>
          We were founded as a ministry and believe strongly that we are called
          to comfort others with the comfort that we ourselves have been given
          when facing our own struggles. However, we are not evangelical in
          nature. We meet everyone where they are on their own unique journey
          without judgement.{" "}
        </p>
        <button
          type="button"
          className="flex mt-10 font-bold rounded bg-none"
          style={{ color: "#edb331" }}
        >
          FIND OUT MORE
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};
