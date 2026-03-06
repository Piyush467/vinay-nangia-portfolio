import React from "react";
import Heading from "./Heading";
import eventImage from "../../assets/gallery/event-1.jpeg";

export default function MagazineSection() {
  return (
    <section className="w-full h-full flex flex-col">

      {/* Heading */}
      <div className="w-fit mx-auto">
        <Heading title="Featured In Media" />
      </div>

      {/* Magazine Card */}
      <div className="mt-8 max-w-4xl mx-auto">

        <a
          href="https://www.businesstalkz.com/2026/02/top-minds-in-academia-edition-05.html"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col md:flex-row bg-white border border-neutral-200 rounded-md overflow-hidden hover:shadow-lg transition duration-300"
        >

          {/* Left Image */}
          <div className="md:w-[320px] w-full overflow-hidden flex">
           <img
             src={eventImage}
             alt="Magazine Feature"
             className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-3 p-6 flex-1">

            <span className="text-xs font-semibold tracking-wide text-neutral-500">
              BUSINESS TALKZ MAGAZINE
            </span>

            <h3 className="text-xl font-bold text-neutral-800">
              Top Minds in Academia – Edition 05
            </h3>

            <p className="text-sm text-neutral-500 max-w-lg">
              Dr. Vinay Kumar Nangia featured in the prestigious
              Business Talkz Magazine under the special edition
              “Top Minds in Academia”.
            </p>

            <span className="text-sm font-medium text-neutral-800 underline">
              Read Full Article →
            </span>

          </div>

        </a>

      </div>

    </section>
  );
}