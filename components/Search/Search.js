import React from "react";

const TEXT = {
  TITLE: "Find a mental help resource.",
  DESCRIPTION:
    "  Search below to find a therapist, psychiatrist, treatment center,support group, or other resources that meet your needs.",
  BTN_LABEL: "Search",
  OPTION_1: "Depression",
  OPTION_2: "Adults (26 - 54)",
  OPTION_3: "Select Insurance:",
};

export const Search = () => {
  return (
    <article className="h-96" style={{ backgroundColor: "#3F93A5" }}>
      <section className="flex flex-col items-center text-white justify-centernter h-1/2">
        <h1 className="my-10 text-4xl font-bold">{TEXT.TITLE}</h1>
        <p className="w-2/5 text-center ">{TEXT.DESCRIPTION}</p>
      </section>
      <section className="flex flex-col items-center justify-center text-white group h-1/2">
        <div className="flex justify-between w-4/5 g1 h-11">
          <input
            defaultValue="Dallas"
            className="w-1/4 px-5 font-medium border-2 rounded bg-inherit bg-none"
          />
          <input
            defaultValue="75001"
            className="w-1/4 px-5 ml-2 font-medium border-2 rounded bg-inherit bg-none"
          />
          <select className="w-1/4 px-5 ml-2 font-medium border-2 rounded bg-inherit bg-none">
            <option>{TEXT.OPTION_1}</option>
          </select>
          <select className="w-1/4 px-5 ml-2 font-medium border-2 rounded bg-inherit bg-none">
            <option>{TEXT.OPTION_2}</option>
          </select>
        </div>
        <div className="flex justify-between w-4/5 mt-2 g2 h-11">
          <select
            data-placeholder="Select Insurance"
            className="w-4/5 px-5 font-medium border-2 rounded bg-inherit bg-none"
          >
            <option>{TEXT.OPTION_3}</option>
          </select>
          <button
            style={{ backgroundColor: "#edb331" }}
            type="button"
            className="w-1/5 px-6 py-2 ml-2 font-bold rounded"
          >
            {TEXT.BTN_LABEL}
          </button>
        </div>
      </section>
    </article>
  );
};
