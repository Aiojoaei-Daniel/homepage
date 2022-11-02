import React from "react";
import { Logo } from "../Logo";
import { FooterLogos } from "./../FooterLogos";

export const Footer = () => {
  return (
    <div style={{ height: "600px" }}>
      <main
        style={{ height: "450px", backgroundColor: "white" }}
        className="flex justify-center"
      >
        <div className="flex flex-col w-1/5 ml-10 mt-28 g1" style={{}}>
          <h1 className="mb-4 font-bold">About</h1>
          <p className="mb-1">About Us</p>
          <p className="mb-1">Meet the Staff</p>
          <p className="mb-1">Meet our Founders</p>
          <p className="mb-1">Board of Directors</p>
          <p className="mb-1">Newsroom</p>
          <p className="mb-1">Testimonials</p>
          <p className="mb-1">Blog</p>
        </div>
        <div className="flex flex-col w-1/5 mt-28 g1" style={{}}>
          <h1 className="mb-4 font-bold">Education</h1>
          <p className="mb-1">Literature</p>
          <p className="mb-1">Podcast</p>
          <p className="mb-1">Videos</p>
          <p className="mb-1">Speaking</p>
          <p className="mb-1">Education Tool</p>
        </div>
        <div className="flex flex-col w-1/5 g1 mt-28" style={{}}>
          <h1 className="mb-4 font-bold">Resources</h1>
          <p className="mb-1">Mental Health</p>
          <p className="mb-1">Addiction</p>
          <p className="mb-1">Crisis</p>
          <p className="mb-1">Literature</p>
          <p className="mb-1">Counselors</p>
          <p className="mb-1">Eating Disorder</p>
          <p className="mb-1">Veteran / First Responder</p>
          <p className="mb-1">Community Services</p>
        </div>
        <div className="flex flex-col w-1/5 g1 mt-28" style={{}}>
          <h1 className="mb-4 font-bold">Get Involved</h1>
          <p className="mb-1">Fundraising</p>
          <p className="mb-1">Special Events</p>
          <p className="mb-1">Admin / Marketing</p>
          <p className="mb-1">Creative</p>
          <p className="mb-1">Careers</p>
          <p className="mb-1">Task Force</p>
        </div>
      </main>
      <footer
        className="flex"
        style={{ height: "150px", backgroundColor: "#F0F0EF" }}
      >
        <div className="mt-10 ml-44">
          <Logo />
        </div>
        <div className="flex flex-col justify-center w-1/2 ml-10">
          <p>
            33114 Forest West Street | Magnolia, TX 77354 | Phone: (346)
            703-0051
          </p>
          <p className="mt-2 text-xs">
            Copyright © 2022 Mosaics of Mercy | Website by <b>TRUTH WEB</b>
          </p>
        </div>
        <div className="flex items-center w-2/12 ml-20 logos">
          <FooterLogos />
        </div>
      </footer>
    </div>
  );
};
