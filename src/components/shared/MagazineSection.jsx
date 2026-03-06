import Heading from "./Heading";
import eventImage from "../../assets/gallery/event-1.jpeg";
import topIcons from "../../assets/gallery/img-61.jpeg";

export default function MagazineSection() {
  return (
    <section className="w-full h-full flex flex-col">

      {/* Heading */}
      <div className="w-fit mx-auto">
        <Heading title="Featured In Media" />
      </div>

      {/* Grid */}
      <div className="mt-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card 1 */}
        <a
          href="https://www.businesstalkz.com/2026/02/top-minds-in-academia-edition-05.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
        >

          {/* Image */}
          <div className="w-[40%] overflow-hidden">
            <img
              src={eventImage}
              alt="Top Minds in Academia"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-3 p-6 w-[60%]">

            <span className="text-xs font-semibold tracking-wide text-neutral-500">
              BUSINESS TALKZ MAGAZINE
            </span>

            <h3 className="text-lg font-bold text-neutral-800">
              Top Minds in Academia – Edition 05
            </h3>

            <p className="text-sm text-neutral-500">
              Dr. Vinay Kumar Nangia featured in the prestigious Business
              Talkz Magazine under the special edition “Top Minds in Academia”.
            </p>

            <span className="text-sm font-medium text-neutral-800 underline">
              Read Article →
            </span>

          </div>

        </a>


        {/* Card 2 */}
        <a
          href="https://www.businesstalkz.com/2025/03/top-icons-of-india-magazine-edition-140.html"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex bg-white border border-neutral-200 rounded-lg overflow-hidden hover:shadow-xl transition duration-300"
        >

          {/* Image */}
          <div className="w-[40%] overflow-hidden">
            <img
              src={topIcons}
              alt="Top Icons of India"
              className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center gap-3 p-6 w-[60%]">

            <span className="text-xs font-semibold tracking-wide text-neutral-500">
              BUSINESS TALKZ MAGAZINE
            </span>

            <h3 className="text-lg font-bold text-neutral-800">
              Top Icons of India – Edition 140
            </h3>

            <p className="text-sm text-neutral-500">
              Dr. Vinay Kumar Nangia recognized among the distinguished
              personalities featured in Business Talkz Magazine’s
              “Top Icons of India”.
            </p>

            <span className="text-sm font-medium text-neutral-800 underline">
              Read Article →
            </span>

          </div>

        </a>

      </div>

    </section>
  );
}