import React from "react";

export const Resources = () => {
  return (
    <div style={{ height: "672px", width: "1070px" }}>
      <header className="mb-10">
        <h1 className="mb-6 text-6xl font-bold text-center">
          We come prepared
        </h1>
        <p className="mb-6 text-center">
          Locate available options for your unique journey!
        </p>
      </header>
      <body className="flex justify-center mb-10" style={{ height: "450px" }}>
        <div
          style={{ width: "337px" }}
          className="w-1/4 bg-[url('/rs-bg1.png')] mr-6 flex flex-col justify-end bg-center bg-cover  rounded-md"
        >
          <p className="mb-4 text-4xl font-bold text-center text-white">
            Mental Health
          </p>
          <p className="mb-6 text-xs font-semibold text-center text-white">
            VIEW MORE
          </p>
        </div>
        <div
          style={{ width: "337px" }}
          className=" bg-[url('/rs-bg2.png')] flex mr-6 flex-col justify-end bg-center bg-cover rounded-md"
        >
          <p className="mb-4 text-4xl font-bold text-center text-white">
            Addiction
          </p>
          <p className="mb-6 text-xs font-semibold text-center text-white">
            VIEW MORE
          </p>
        </div>
        <div
          style={{ width: "337px" }}
          className="w-1/4 bg-[url('/rs-bg3.png')] flex flex-col justify-end bg-center bg-cover rounded-md"
        >
          <p className="mb-4 text-4xl font-bold text-center text-white">
            Crisis
          </p>
          <p className="mb-6 text-xs font-semibold text-center text-white">
            VIEW MORE
          </p>
        </div>
      </body>
      <footer className="flex justify-center">
        <button>BROWSE ALL RESOURCES</button>
      </footer>
    </div>
  );
};
