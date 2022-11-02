import React from "react";
import { ArrowIcon } from "../../Icons/ArrowIcon";

const TEXT = {
  TITLE: "If nothing changes, nothing changes",
  DESCRIPTION:
    "“If you could kick the person in the pants responsible for most of your trouble, you wouldn’t sit for a month.” ~ Theodore Roosevelt",
  DATE: "MARCH 28, 2022",
  BTN_LABEL: "READ MORE",
};

export const Blog = () => {
  return (
    <article
      className="flex justify-end mt-20"
      style={{ height: "490px", width: "1070px" }}
    >
      <section
        className="absolute w-2/6"
        style={{
          width: "445px",
          height: "353px",
          left: "250px",
          top: "4250px",
        }}
      >
        <time className="pl-4 text-xs font-bold text-red-600">{TEXT.DATE}</time>
        <h1 className="w-11/12 p-2 pl-4 mt-4 mb-10 text-4xl font-extrabold bg-white ">
          {TEXT.TITLE}
        </h1>
        <p className="w-3/4 mb-10">{TEXT.DESCRIPTION}</p>
        <button
          type="button"
          className="flex mt-2 text-sm font-bold rounded bg-none"
          style={{ color: "#edb331" }}
        >
          {TEXT.BTN_LABEL}
          <ArrowIcon />
        </button>
      </section>
      <figure className="h-full w-4/6 bg-[url('/blog-bg.png')] bg-center bg-cover"></figure>
    </article>
  );
};
