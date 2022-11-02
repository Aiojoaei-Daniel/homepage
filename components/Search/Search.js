import React from "react";

export const Search = () => {
  return (
    <div className="h-96" style={{ backgroundColor: "#3F93A5" }}>
      <div className="flex flex-col items-center justify-center h-1/2">
        <p className="my-10 text-4xl font-bold text-white">
          Find a mental help resource.
        </p>
        <p className="w-2/5 text-center text-white">
          Search below to find a therapist, psychiatrist, treatment center,
          support group, or other resources that meet your needs.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center group h-1/2">
        <div className="flex justify-between w-4/5 g1 h-11">
          <input
            defaultValue="Dallas"
            className="w-1/4 px-5 font-medium text-white border-2 border-white rounded bg-inherit bg-none"
          />
          <input
            defaultValue="75001"
            className="w-1/4 px-5 ml-2 font-medium text-white border-2 border-white rounded bg-inherit bg-none"
          />
          <select className="w-1/4 px-5 ml-2 font-medium text-white border-2 border-white rounded bg-inherit bg-none">
            <option>Depression</option>
          </select>
          <select className="w-1/4 px-5 ml-2 font-medium text-white border-2 border-white rounded bg-inherit bg-none">
            <option>Adults (26 - 54)</option>
          </select>
        </div>
        <div className="flex justify-between w-4/5 mt-2 g2 h-11">
          <select
            data-placeholder="Select Insurance"
            className="w-4/5 px-5 font-medium text-white border-2 border-white rounded bg-inherit bg-none"
          >
            <option>Select Insurance: </option>
          </select>
          <button
            style={{ backgroundColor: "#edb331" }}
            type="button"
            className="w-1/5 px-6 py-2 ml-2 font-bold text-white rounded"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
