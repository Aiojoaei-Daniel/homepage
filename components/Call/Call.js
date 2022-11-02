import React from "react";

export const Call = () => {
  return (
    <div
      className="bg-[url('/call-bg.png')] bg-center bg-cover flex flex-col justify-center items-center"
      style={{ height: "844px" }}
    >
      <div
        className="absolute w-2/4 g1"
        style={{ top: "1850px", left: "185px" }}
      >
        <h1 className="mb-6 text-5xl font-bold">Talk to someone one-on-one!</h1>
        <p className="w-10/12 text-lg">
          You’ll be connected to a trained mental health navigator who can offer
          support and information about mental health services and resources in
          your area. (Open Monday - Friday 9 am. to 5 pm.)
        </p>
      </div>
      <div className="absolute flex w-3/4 g2" style={{ top: "2050px" }}>
        <div className="flex flex-col items-center justify-center w-2/5 p-10 mr-10 bg-white rounded-md shadow-lg h-96">
          <h1 className="mb-3 text-3xl font-bold">Call Us</h1>
          <h1 className="mb-5 text-3xl font-bold">346-703-0051</h1>
          <p className="w-3/4 mb-10 text-center">
            Non adipiscing nibh pretium aliquam accumsan tellus laoreet
            elementum. Dictum fermentum ac.
          </p>
          <button
            type="button"
            className="w-32 px-6 py-2 ml-2 text-sm font-semibold text-white rounded h-11 "
            style={{ backgroundColor: "#EDB331" }}
          >
            CALL NOW
          </button>
        </div>
        <div className="flex flex-col items-center justify-center w-2/5 p-10 mr-5 bg-white rounded-md shadow-lg h-96">
          <h1 className="mb-3 text-3xl font-bold">Resource</h1>
          <h1 className="mb-5 text-3xl font-bold">Provider Application</h1>
          <p className="w-4/5 mb-10 text-center">
            Eu, vitae mauris nec, eget. Diam proin erat neque venenatis.
            Malesuada malesuada risus non, amet. Tellus amet sed.
          </p>
          <button
            type="button"
            className="w-32 px-6 py-2 ml-2 text-sm font-semibold text-white rounded h-11 "
            style={{ backgroundColor: "#EDB331" }}
          >
            APPLY NOW
          </button>
        </div>
      </div>
    </div>
  );
};
