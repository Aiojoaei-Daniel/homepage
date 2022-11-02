import React from "react";
import { Logo } from "../Icons/Logo";
import { FooterLogos } from "../Icons/FooterLogos";

const NAVIGATION_BTNS = [
  {
    TITLE: "About",
    OPTIONS: [
      "About Us",
      "Meet the Staff",
      "Meet our Founders",
      "Board of Directors",
      "Newsroom",
      "Testimonials",
      "Blog",
    ],
  },
  {
    TITLE: "Education",
    OPTIONS: ["Literature", "Podcast", "Videos", "Speaking", "Education Tool"],
  },
  {
    TITLE: "Resources",
    OPTIONS: [
      "Mental Health",
      "Addiction",
      "Crisis",
      "Literature",
      "Counselors",
      "Eating Disorder",
      "Veteran / First Responder",
      "Community Services",
    ],
  },
  {
    TITLE: "Get Involved",
    OPTIONS: [
      "Fundraising",
      "Special Events",
      "Admin / Marketing",
      "Creative",
      "Careers",
      "Task Force",
    ],
  },
];

const FOOTER_TEXT = {
  ROW_1: "33114 Forest West Street | Magnolia, TX 77354 | Phone: (346)703-0051",
  ROW_2: "Copyright © 2022 Mosaics of Mercy | Website by ",
  ROW_2_BOLD: "TRUTH WEB",
};

export const Footer = () => {
  return (
    <footer style={{ height: "600px" }}>
      <nav
        style={{ height: "450px", backgroundColor: "white" }}
        className="flex justify-center"
      >
        {NAVIGATION_BTNS.map((item) => (
          <section
            key={item.TITLE}
            className="flex flex-col w-1/5 ml-10 mt-28 g1"
            style={{}}
          >
            <h1 className="mb-4 font-bold cursor-pointer">{item.TITLE}</h1>
            {item.OPTIONS.map((option) => (
              <p key={item} className="mb-1 cursor-pointer">
                {option}
              </p>
            ))}
          </section>
        ))}
      </nav>
      <div
        className="flex"
        style={{ height: "150px", backgroundColor: "#F0F0EF" }}
      >
        <figure className="mt-10 ml-44">
          <Logo />
        </figure>
        <section className="flex flex-col justify-center w-1/2 ml-10">
          <p>{FOOTER_TEXT.ROW_1}</p>
          <p className="mt-2 text-xs">
            {FOOTER_TEXT.ROW_2} <b>{FOOTER_TEXT.ROW_2_BOLD}</b>
          </p>
        </section>
        <figure className="flex items-center w-2/12 ml-20 logos">
          <FooterLogos />
        </figure>
      </div>
    </footer>
  );
};
