import React from "react";
import Heading from "./Heading";
import eventImage from "../../assets/gallery/event-1.jpeg";

export default function MagazineSection() {
  return (
    <section className="w-full h-full flex flex-col">

      {/* Section Heading (same animation as other sections) */}
      <div className="w-fit mx-auto">
        <Heading title="Featured In Media" />
      </div>

      {/* Magazine Card */}
      <div className="flex flex-col md:flex-row gap-8 mt-8 items-center">

        {/* Left Image */}
        <div className="w-full md:w-[420px] aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200">
          <img
            src={eventImage}
            alt="Magazine Feature Event"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="flex flex-col gap-4">

          <span className="text-xs font-semibold tracking-wide text-neutral-500">
            BUSINESS TALKZ MAGAZINE
          </span>

          <h3 className="text-2xl font-bold text-neutral-800">
            Top Minds in Academia – Edition 05
          </h3>

          <p className="text-sm text-neutral-500 max-w-xl">
            Dr. Vinay Kumar Nangia was featured in the prestigious
            Business Talkz Magazine under the special edition
            “Top Minds in Academia”.
          </p>

          <a
            href="https://www.businesstalkz.com/2026/02/top-minds-in-academia-edition-05.html"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm w-fit bg-neutral-800 text-neutral-200 px-4 py-2 rounded-md
            hover:bg-neutral-200 hover:text-neutral-800 border border-neutral-800 transition"
          >
            Read Article
          </a>

        </div>
      </div>

    </section>
  );
}