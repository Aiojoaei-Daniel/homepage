import React from "react";

const TEXT = {
  TITLE: "Talk to someone one-on-one!",
  DESCRIPTION:
    " You’ll be connected to a trained mental health navigator who can offer support and information about mental health services and resources in your area. (Open Monday - Friday 9 am. to 5 pm.)",
  BTN_LABEL: "FIND OUT MORE",
};

const SECTIONS = [
  {
    TITLE_ROW1: "Call Us",
    TITLE_ROW2: "346-703-0051",
    DESCRIPTION:
      "Non adipiscing nibh pretium aliquam accumsan tellus laoreet elementum. Dictum fermentum ac.",
    BTN_LABEL: "CALL NOW",
  },
  {
    TITLE_ROW1: "Resource",
    TITLE_ROW2: "Provider Application",
    DESCRIPTION:
      "Eu, vitae mauris nec, eget. Diam proin erat neque venenatis. Malesuada malesuada risus non, amet. Tellus amet sed.",
    BTN_LABEL: "APPLY NOW",
  },
];

export const Call = () => {
  return (
    <article
      className="bg-[url('/call-bg.png')] bg-center bg-cover flex flex-col justify-center items-center"
      style={{ height: "844px" }}
    >
      <section
        className="absolute w-2/4"
        style={{ top: "2050px", left: "190px" }}
      >
        <header>
          <h1 className="mb-6 text-5xl font-bold">{TEXT.TITLE}</h1>
        </header>
        <p className="w-10/12 text-lg">{TEXT.DESCRIPTION}</p>
      </section>
      <section className="absolute flex w-3/4" style={{ top: "2250px" }}>
        {SECTIONS.map((section) => (
          <section
            key={section.TITLE_ROW1}
            className="flex flex-col items-center justify-center w-2/5 p-10 mr-10 bg-white rounded-md shadow-lg h-96"
          >
            <h1 className="mb-3 text-3xl font-bold">{section.TITLE_ROW1}</h1>
            <h1 className="mb-5 text-3xl font-bold">{section.TITLE_ROW2}</h1>
            <p className="w-3/4 mb-10 text-center">{section.DESCRIPTION}</p>
            <button
              type="button"
              className="w-32 px-6 py-2 ml-2 text-sm font-semibold text-white rounded h-11 "
              style={{ backgroundColor: "#EDB331" }}
            >
              {section.BTN_LABEL}
            </button>
          </section>
        ))}
      </section>
    </article>
  );
};
