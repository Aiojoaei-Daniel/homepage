import React from "react";
import { ArrowIcon } from "../../Icons/ArrowIcon";
import { WhiteArrowIcon } from "../../Icons/WhiteArrowIcon";

const TEXT = {
  TITLE: "We come prepared",
  DESCRIPTION: " Locate available options for your unique journey!",
  BTN_LABEL: "BROWSE ALL RESOURCES",
};

const ITEMS = [
  {
    TITLE: "Mental Health",
    BTN_LABEL: "VIEW MORE",
    BG_IMG: "bg-[url('/rs-bg1.png')]",
  },
  {
    TITLE: "Addiction",
    BTN_LABEL: "VIEW MORE",
    BG_IMG: "bg-[url('/rs-bg2.png')]",
  },
  {
    TITLE: "Crisis",
    BTN_LABEL: "VIEW MORE",
    BG_IMG: "bg-[url('/rs-bg3.png')]",
  },
];

export const Resources = () => {
  return (
    <article style={{ height: "672px", width: "1070px" }}>
      <header className="mb-10">
        <h1 className="mb-6 text-6xl font-bold text-center">{TEXT.TITLE}</h1>
        <p className="mb-6 text-center">{TEXT.DESCRIPTION}</p>
      </header>
      <div className="flex justify-center mb-10" style={{ height: "450px" }}>
        {ITEMS.map((item) => (
          <section
            style={{ width: "337px" }}
            className={`w-1/4 mr-6 flex flex-col text-white justify-end bg-center bg-cover  rounded-md ${item.BG_IMG}`}
          >
            <p className="mb-4 text-4xl font-bold text-center ">{item.TITLE}</p>
            <button className="flex items-center justify-center h-8 mb-6 text-xs font-semibold text-center ">
              {item.BTN_LABEL} <WhiteArrowIcon />
            </button>
          </section>
        ))}
      </div>
      <footer className="flex justify-center">
        <button
          type="button"
          className="flex mt-2 text-sm font-bold rounded bg-none"
          style={{ color: "#edb331" }}
        >
          {TEXT.BTN_LABEL}
          <ArrowIcon />
        </button>
      </footer>
    </article>
  );
};
