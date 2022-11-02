import React from "react";

const TEXT = {
  TITLE: "Stay in touch",
  DESCRIPTION:
    " Get the latest blogs, events, and more directly in your inbox.",
  BTN_LABEL: "FIND OUT MORE",
  PLACEHOLDER_1: "First Name",
  PLACEHOLDER_2: "Last Name",
  PLACEHOLDER_3: "Email",
};

export const Newsletter = () => {
  return (
    <article className="h-96" style={{ backgroundColor: "#3F93A5" }}>
      <section className="flex flex-col items-center justify-center mb-8 h-1/2">
        <h1 className="my-10 text-5xl font-bold text-white">{TEXT.TITLE}</h1>
        <p className="w-2/5 text-center text-white">{TEXT.DESCRIPTION}</p>
      </section>
      <section className="flex items-center justify-center mt-2 g2 h-11">
        <p className="w-3/6 h-12 px-10 py-2 mr-32 text-white border-2 border-white rounded font- medium bg-inherit bg-none">
          {TEXT.PLACEHOLDER_1} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;|
          &emsp;&emsp;{TEXT.PLACEHOLDER_2}{" "}
          &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp; | &emsp;&emsp;
          {TEXT.PLACEHOLDER_3} &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
        </p>
        <button
          style={{ left: " 1035px", backgroundColor: "#EDB331" }}
          type="button"
          className="absolute w-1/5 h-12 px-6 py-2 font-bold text-white rounded"
        >
          {TEXT.BTN_LABEL}
        </button>
      </section>
    </article>
  );
};
