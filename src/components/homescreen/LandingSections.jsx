import React from "react";
import MagazineSection from "../shared/MagazineSection";
import {
  master_speaks,
  smart_banking,
  upsc_cse,
  vinay_nangia,
  vinay_nangia_2,
  img_1,
  img_2,
  img_3,
  img_4,
  user,
  img_01,
  img_02,
  img_03,
  img_04,
  img_05,
  square_self,
  img_07,
  img_08,
  img_09,
  img_10,
  img_29,
  award_icon,
  img_14,
  img_16,
  img_18,
  img_19,
  img_001,
  img__0016,
  img_61,
  img_64,
  img_65,
  img_73,
} from "../../assets";
import should_u_do_phd from "../../assets/books/should-phd.jpg";
import img_104 from "../../assets/gallery/img_104.jpg";
import img_105 from "../../assets/gallery/img_105.jpg";
import img_106 from "../../assets/gallery/img_106.jpg";
import img_107 from "../../assets/gallery/img_107.jpg";
import img_108 from "../../assets/gallery/img_108.jpg";
import img_109 from "../../assets/gallery/img_109.jpg";
import img_110 from "../../assets/gallery/img_110.jpg";
import {
  Briefcase,
  CalendarDays,
  History,
  Icon,
  LucideMedal,
  Medal,
} from "lucide-react";
import { motion } from "framer-motion";
import NeedAssistant from "../shared/GetInTouch";
import Heading from "../shared/Heading";
import Testimonials from "../shared/Testimonials";
import FeaturedVideo from "../shared/FeaturedVideo";
import { Link } from "react-router-dom";
import { homeVideos } from "../../data/youtube";
import { containerVariants, itemVariants } from "../../lib/variants";
import {
  achievementData,
  consultancyProjects,
  researchProjects,
  carrerhighlights,
} from "../../data/listData";
import { blogs as originalBlogs } from "../../data/blogs";
import dayjs from "dayjs";

export default function LandingSections() {
  const formatDate = (dateString) => {
    // Try parsing with different formats
    const formats = ["DD-MM-YY", "DD-MM-YYYY"];
    let parsedDate;

    for (const format of formats) {
      parsedDate = dayjs(dateString, format);
      if (parsedDate.isValid()) {
        return parsedDate.format("DD MMM YYYY");
      }
    }
    return dateString;
  };
  const blogs = [...originalBlogs]
    .filter((b) => b.id !== "99" && b.id !== "101") // Exclude blogs with id "99" and "101"
    .sort(
      (a, b) =>
        dayjs(b.date, "DD-MM-YY").valueOf() - dayjs(a.date, "DD-MM-YY").valueOf()
    );
  return (
    <main className="w-full h-full flex  flex-col max-w-[1400px] mx-auto lg:px-8 px-4 space-y-16">
      <section className="w-full h-full flex flex-col">
        <article className="w-full h-full flex flex-col ">
          <section className="flex flex-col lg:flex-row h-full w-full relative gap-16">
            <div className="hidden lg:flex flex-col h-[80%] min-h-[300px] lg:min-h-[400px] pt-8 lg:pt-0 lg:max-h-[300px] aspect-[4/3] lg:min-w-[300px]  lg:pr-16 ml-8 pb-8 flex-1 overflow-hidden relative">
              <img
                src={vinay_nangia_2}
                alt="vinay_nangia2"
                className="w-full h-full object-cover rounded-3xl "
              />
              {/* <div className="hidden lg:flex flex-col h-8 w-52 bg-white absolute top-12 -left-4 -rotate-45"></div> */}
            </div>
            <div className="flex flex-col lg:max-w-2xl gap-4 ">
              <p className="text-sm font-medium  text-neutral-500 lg:leading-6 leading-normal text-justify">
                A distinguished alumnus of Banaras Hindu University, Dr. Nangia has served in senior and top-level roles across government, public, and private sectors, both in India and internationally. His professional journey includes rural, semi-urban, and metropolitan postings, complemented by international assignments in Singapore, Nigeria, and beyond. He has travelled extensively across all five continents for business, training, cultural familiarization, and pleasure.
              </p>
              
              <div>
                <p className="text-sm font-semibold text-neutral-700 mb-2">Dr. Nangia's career milestones include serving as:</p>
                <ul className="space-y-2 ml-5">
                  <li className="text-sm font-medium text-neutral-500 leading-6">
                    <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                    Head of Department at IIT Roorkee (three times)
                  </li>
                  <li className="text-sm font-medium text-neutral-500 leading-6">
                    <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                    Managing Director and CEO of an investment and finance company in Mumbai
                  </li>
                  <li className="text-sm font-medium text-neutral-500 leading-6">
                    <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                    Senior Vice President at the Essar Group in Mumbai
                  </li>
                  <li className="text-sm font-medium text-neutral-500 leading-6">
                    <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                    Group Director of a leading business and industrial house in Lagos, Nigeria
                  </li>
                  <li className="text-sm font-medium text-neutral-500 leading-6">
                    <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                    International banker based in Singapore
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex lg:hidden flex-col h-[80%] min-h-[300px] lg:min-h-[400px] pt-8 lg:pt-0 lg:max-h-[400px] aspect-[4/3] lg:min-w-[400px]  lg:px-8 pb-8 flex-1 overflow-hidden relative">
              <img
                src={vinay_nangia_2}
                alt="vinay_nangia2"
                className="w-full h-full object-cover rounded-3xl "
              />
              {/* <div className="hidden lg:flex flex-col h-8 w-52 bg-white absolute top-12 -left-4 -rotate-45"></div> */}
            </div>
          </section>
          
          <p className="text-sm font-medium  text-neutral-500 lg:leading-6 leading-normal text-justify">
            Dr. Nangia is an esteemed member of several academic and professional boards and has published numerous articles in refereed national and international journals. Seven scholars have successfully completed their doctoral research under his mentorship. He is also a Ph.D. thesis examiner for premier institutions, including IITs.
          </p>
          
          <div className="mt-4">
            <p className="text-sm font-semibold text-neutral-700 mb-3">As an author, Dr. Nangia has penned four influential books:</p>
            <ul className="space-y-2 ml-5">
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                <span className="italic">"Masters Speak: Management Education in India"</span> (Bloomsbury India, 2014)
              </li>
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                <span className="italic">"Smart Banking – An Introduction"</span> (2016), driven by insights into information technology and its impact on banking.
              </li>
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                <span className="italic">"Mastering the UPSC CSE Personality Test"</span> (2025)
              </li>
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                <span className="italic">"Should you do a PhD"</span> (2025)
              </li>
            </ul>
          </div>
          
          <div className="mt-4">
            <p className="text-sm font-semibold text-neutral-700 mb-2">His accolades include:</p>
            <ul className="space-y-2 ml-5">
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                Glory of India Award (2017)
              </li>
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                Lifetime Achievement in Business Education Award (2015)
              </li>
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                Best Citizen Award (2015)
              </li>
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                Shiksha Ratan Puruskar (2014)
              </li>
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                Best Professor in General Management by Dewang Mehta Business School Award (2013)
              </li>
            </ul>
          </div>
          
          <div className="mt-4">
            <p className="text-sm font-semibold text-neutral-700 mb-3">Dr. Nangia has held prestigious academic positions, including:</p>
            <ul className="space-y-2 ml-5">
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                Professor at IIT Roorkee (1998–2018), including serving as an Emeritus Fellow.
              </li>
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                Emeritus Professor at NSUT Dwarka, where he played a pivotal role in establishing innovative programs like the MBA in Innovation, Entrepreneurship, and Venture Development.
              </li>
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                Distinguished Professor at BML Munjal University and Visiting Distinguished Professor at SRM-AP University.
              </li>
              <li className="text-sm font-medium text-neutral-500 leading-6">
                <span className="inline-block w-1.5 h-1.5 bg-neutral-700 rounded-full mr-3 -ml-5"></span>
                Currently, Professor of Eminence at Guru Nanak Dev University, Amritsar, Punjab and teaching M. Tech. students at IIT Roorkee.
              </li>
            </ul>
          </div>
          
          <p className="text-sm font-medium  text-neutral-500 lg:leading-6 leading-normal mt-4 text-justify">
            Renowned for his engaging and insightful talks, Dr. Nangia is a sought-after speaker for academic institutions. He delivers lectures on Education, Leadership, Career Advancement, and Faculty Development. He regularly conducts workshops on Entrepreneurship, Startups, Resume Building, and Interview Skills for students and young professionals.
          </p>
          
          <p className="text-sm font-medium  text-neutral-500 lg:leading-6 leading-normal text-justify">
            An inspiring leader, mentor, and educator, Dr. Nangia continues to motivate and guide students, scholars, educators, and executives, bringing his rich experience across industry, academia, consulting, and the startup ecosystem.
          </p>
        </article>
      </section>

      {/* start of Achievements Section */}
      <section className="w-full h-full flex flex-col -mt-12 lg:mt-0">
        <div className="w-fit mx-auto  ">
          <Heading title="Career Highlights" />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full h-full flex flex-col mt-8 space-y-8"
        >
          {carrerhighlights.slice(0, 10).map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="w-full h-full flex flex-col"
            >
              <div className="flex items-center gap-4">
                {/* <img
                  src={award_icon}
                  alt="medal"
                  className="w-6 h-6 p-1 rounded-md bg-neutral-700 text-white"
                /> */}
                <span className="w-8 h-8 flex items-center justify-center p-1 text-black text-lg">
                  ✔️
                </span>
                <div className="w-32 h-1 bg-neutral-700 rounded-md flex flex-col gap-4" />
              </div>
              <h3 className="text-lg text-neutral-800 font-semibold pl-10">
                {item.title}
              </h3>
              <p className="text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal">
                {item.description}
              </p>
            </motion.article>
          ))}
          <p className="text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal">
            <Link
              to="/awards"
              className="text-sm rounded-md bg-black mr-2 py-1 px-2 w-fit font-medium text-neutral-200"
            >
              Explore{" "}
            </Link>
            More Awards and Achievements...
          </p>
        </motion.div>
      </section>
      {/* end of Achievements Section */}

      <Testimonials />

      {/* consultancy projects */}
      <section className="w-full h-full flex flex-col">
        <div className="w-fit mx-auto ">
          <Heading title="Consultancy Projects" />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full h-full flex flex-col mt-8 space-y-8"
        >
          {consultancyProjects.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              className="w-full h-full flex flex-col space-y-6"
            >
              {/* Category Heading */}
              <div className="flex items-center gap-4">
                {/* <span className="w-8 h-8 flex items-center justify-center p-1 rounded-md border border-gray-400 text-lg">{category.icon}</span> */}
                <span className="w-8 h-8 flex items-center justify-center p-1 rounded-md text-lg">
                  {category.icon}
                </span>
                <h2 className="text-lg font-bold text-neutral-800">
                  {category.category}
                </h2>
                <div className="w-32 h-1 bg-neutral-700 rounded-md" />
              </div>

              {/* Project List */}
              {category.projects.map((project, projIndex) => (
                <motion.article
                  key={projIndex}
                  variants={itemVariants}
                  className="w-full h-full flex flex-col pl-10"
                >
                  <div className="flex items-center gap-2">
                    {/* <Briefcase className="w-6 h-6 p-1 rounded-md bg-neutral-700 text-white" /> */}
                    <span className="w-8 h-8 flex items-center justify-center rounded-md text-xl">
                      •
                    </span>
                    <h3 className="text-md font-semibold text-neutral-700">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal">
                    {project.description}
                  </p>
                </motion.article>
              ))}
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* end of consultancy projects */}

      {/* start of research projects */}
      <section className="w-full h-full flex flex-col">
        <div className="w-fit mx-auto ">
          <Heading title="Sponsored Research Projects" />
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full h-full flex flex-col mt-8 space-y-8"
        >
          {researchProjects.map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className="w-full h-full flex flex-col"
            >
              <div className="flex items-center gap-2">
                <span className="w-8 h-8 flex items-center justify-center p-1 rounded-md text-lg">
                  {item.icon}
                </span>
                <h3 className="text-lg font-semibold text-neutral-800">
                  {item.heading}
                </h3>
              </div>
              <p className="text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal">
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </section>
      {/* end of research projects */}
{/* start of Books Section */}
      <section className="w-full h-full flex flex-col py-6 bg-white">
        <div className="w-fit mx-auto pb-6">
          <Heading title="Books By Dr. Vinay Kumar Nangia" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
          
          {/* BOOK 1: Should you do a P.H.D? */}
          <div className="flex flex-col items-center group">
            <a 
              href="https://www.amazon.in/Reflective-Decision-Making-Frameworks-Experiences-Aspirants/dp/9354693229/ref=sr_1_1?crid=KDADH5N5EFMA&dib=eyJ2IjoiMSJ9.Kh2hl5CnABhZQnRgw0SbaeFP79DAWN7apKunwV1JKDU9gwiz22azKfBOS5upQI-t1ECy9eulYc4_QhMCd6FC3qxkGTVkSVJ9MWeH3UQ7QaBlxoCs8k3PpoP7hHYoeQEzVxVwoUHslPH0PIAa88RMwBrczPILRVK10tgzEgRjsfsD5ShQSFHMvL6zZOXlWAoKbKdCSkxn4G4zPC-KCbIiVA.TyQK9jzr_2-F7UU4vWDFYmaQ7jxzjCO8oVwNyPBF40M&dib_tag=se&keywords=should+you+do+a+phd&qid=1765122996&sprefix=%2Caps%2C229&sr=8-1" 
              className="flex flex-col items-center w-full h-full"
            >
              {/* Title Area: Added lg:mb-1 to reduce space on laptop */}
              <div className="min-h-[3rem] flex items-end justify-center mb-2 lg:mb-1">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 text-center hover:text-blue-700 transition-colors">
                  Should you do a P.H.D?
                </h3>
              </div>
              
              {/* Image Container: Reduced lg:h to 250px for a tighter fit */}
              <div className="w-full flex justify-center h-[200px] md:h-[250px] lg:h-[250px]">
                <img
                  src={should_u_do_phd}
                  alt="should u do phd"
                  className="h-full w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          </div>

          {/* BOOK 2: Mastering the UPSC CSE Personality Test */}
          <div className="flex flex-col items-center group">
            <a href="https://amzn.in/d/dNnktRB" className="flex flex-col items-center w-full h-full">
              <div className="min-h-[3rem] flex items-end justify-center mb-2 lg:mb-1">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 text-center hover:text-blue-700 transition-colors">
                  Mastering the UPSC CSE
                </h3>
              </div>
              
              <div className="w-full flex justify-center h-[200px] md:h-[250px] lg:h-[250px]">
                <img
                  src={upsc_cse}
                  alt="upsc_cse"
                  className="h-full w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </a>
          </div>

          {/* BOOK 3: Masters Speak: Management Education in India */}
          <div className="flex flex-col items-center group">
             <div className="flex flex-col items-center w-full h-full cursor-pointer">
              <div className="min-h-[3rem] flex items-end justify-center mb-2 lg:mb-1">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 text-center hover:text-blue-700 transition-colors">
                  Masters Speak
                </h3>
              </div>
              
              <div className="w-full flex justify-center h-[200px] md:h-[250px] lg:h-[250px]">
                <img
                  src={master_speaks}
                  alt="master_speaks"
                  className="h-full w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* BOOK 4: Smart Banking – An Introduction */}
          <div className="flex flex-col items-center group">
             <div className="flex flex-col items-center w-full h-full cursor-pointer">
              <div className="min-h-[3rem] flex items-end justify-center mb-2 lg:mb-0">
                <h3 className="text-xl md:text-2xl font-bold text-neutral-800 text-center hover:text-blue-700 transition-colors">
                  Smart Banking
                </h3>
              </div>
              
              <div className="w-full flex justify-center h-[190px] md:h-[240px] lg:h-[240px]">
                <img
                  src={smart_banking}
                  alt="smart_banking"
                  className="h-full w-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
      {/* end of Books Section */}

      {/* start of Blog Section */}
      <section className=" w-full h-full flex flex-col min-[930px]:flex-row  gap-8">
        <div className="flex flex-1 flex-col gap-4 -mt-24">
          <h3 className="text-4xl font-bold text-neutral-800 ">
            {" "}
            <span className="text-neutral-500">Blogs By </span> <br />
            Dr. Vinay Kumar Nangia
          </h3>
          <Link
            to={`/blogs/${blogs[0].slug}`}
            className="h-72 min-[600px]:h-60 xl:h-72 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6"
          >
            <div className="flex gap-1 items-center self-end">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-neutral-500">
                  Vinay Nangia
                </p>
                <p className="text-sm font-medium flex items-center gap-1 text-neutral-500">
                  <CalendarDays className="w-3 h-3 -mt-0.5" />
                  <span className="text-xs font-medium text-neutral-500">
                    {formatDate(blogs[0].date)}
                  </span>
                </p>
              </div>
              <div className="w-16 h-16 border-8 rounded-full border-neutral-100  flex items-center justify-center">
                <img
                  src={square_self}
                  alt="blog_image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>

            <div>
              <h2 className="text-2xl sm:text-2xl md:text-xl xl:text-2xl font-bold pb-4 text-neutral-800">
                <Link
                  to={`/blogs/${blogs[0].slug}`}
                  className="hover:underline line-clamp-2 min-[930px]:line-clamp-1"
                >
                  {blogs[0].title}
                </Link>
              </h2>
              <p className="text-sm  font-medium text-neutral-500  min-[930px]: line-clamp-4  xl:line-clamp-5">
                {blogs[0].content[0].content}
              </p>
            </div>
          </Link>
          <Link
            to="/blogs"
            className="text-sm hidden min-[930px]:flex font-medium h-24 w-full bg-neutral-800 rounded-md  items-center justify-center text-neutral-200 
            hover:text-neutral-800 hover:bg-neutral-200 border border-neutral-800 hover:border-neutral-800 transition-all duration-300"
          >
            Explore More Blogs
          </Link>
        </div>
        <div className="flex flex-1 flex-col gap-8">
          <Link
            to={`/blogs/${blogs[1].slug}`}
            className="h-72 min-[600px]:h-60 xl:h-72 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6"
          >
            <div className="flex gap-1 items-center self-end">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-neutral-500">
                  Vinay Nangia
                </p>
                <p className="text-sm font-medium flex items-center gap-1 text-neutral-500">
                  <CalendarDays className="w-3 h-3 -mt-0.5" />
                  <span className="text-xs font-medium text-neutral-500">
                    {formatDate(blogs[1].date)}
                  </span>
                </p>
              </div>
              <div className="w-16 h-16 border-8 rounded-full border-neutral-100  flex items-center justify-center">
                <img
                  src={square_self}
                  alt="blog_image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-2xl md:text-xl xl:text-2xl font-bold pb-4 text-neutral-800 line-clamp-1">
                <Link
                  to={`/blogs/${blogs[1].slug}`}
                  className="hover:underline line-clamp-2 min-[930px]:line-clamp-1"
                >
                  {blogs[1].title}
                </Link>
              </h2>
              <p className="text-sm  font-medium text-neutral-500 line-clamp-4">
                {blogs[1].content[0].content}
              </p>
            </div>
          </Link>
          <Link
            to={`/blogs/${blogs[2].slug}`}
            className="h-72 min-[600px]:h-60 xl:h-72 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6"
          >
            <div className="flex gap-1 items-center self-end">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-neutral-500">
                  Vinay Nangia
                </p>
                <p className="text-sm font-medium flex items-center gap-1 text-neutral-500">
                  <CalendarDays className="w-3 h-3 -mt-0.5" />
                  <span className="text-xs font-medium text-neutral-500">
                    {formatDate(blogs[2].date)}
                  </span>
                </p>
              </div>
              <div className="w-16 h-16 border-8 rounded-full border-neutral-100  flex items-center justify-center">
                <img
                  src={square_self}
                  alt="blog_image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-2xl md:text-xl xl:text-2xl font-bold pb-4 text-neutral-800 ">
                <Link
                  to={`/blogs/${blogs[2].slug}`}
                  className="hover:underline line-clamp-2 min-[930px]:line-clamp-1"
                >
                  {blogs[2].title}
                </Link>
              </h2>
              <p className="text-sm  font-medium text-neutral-500  min-[930px]: line-clamp-4  xl:line-clamp-5">
                {blogs[2].content[0].content}
              </p>
            </div>
          </Link>
        </div>
        <div className=" flex-1 flex  min-[930px]:hidden min-[1075px]:flex flex-col gap-8">
          <Link
            to={`/blogs/${blogs[3].slug}`}
            className="h-72 min-[600px]:h-60 xl:h-72 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6"
          >
            <div className="flex gap-1 items-center self-end">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-neutral-500">
                  Vinay Nangia
                </p>
                <p className="text-sm font-medium flex items-center gap-1 text-neutral-500">
                  <CalendarDays className="w-3 h-3 -mt-0.5" />
                  <span className="text-xs font-medium text-neutral-500">
                    {formatDate(blogs[3].date)}
                  </span>
                </p>
              </div>
              <div className="w-16 h-16 border-8 rounded-full border-neutral-100  flex items-center justify-center">
                <img
                  src={square_self}
                  alt="blog_image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-2xl md:text-xl xl:text-2xl font-bold pb-4 text-neutral-800">
                <Link
                  to={`/blogs/${blogs[3].slug}`}
                  className="hover:underline line-clamp-2 min-[930px]:line-clamp-1"
                >
                  {blogs[3].title}
                </Link>
              </h2>
              <p className="text-sm  font-medium text-neutral-500 line-clamp-4">
                {blogs[3].content[0].content}
              </p>
            </div>
          </Link>
          <Link
            to={`/blogs/${blogs[4].slug}`}
            className="h-72 min-[600px]:h-60 xl:h-72 aspect-[4/3] overflow-hidden rounded-md shrink-0 bg-slate-200 relative flex flex-col justify-between py-4 px-6"
          >
            <div className="flex gap-1 items-center self-end">
              <div className="flex flex-col items-start gap-1">
                <p className="text-sm font-medium text-neutral-500">
                  Vinay Nangia
                </p>
                <p className="text-sm font-medium flex items-center gap-1 text-neutral-500">
                  <CalendarDays className="w-3 h-3 -mt-0.5" />
                  <span className="text-xs font-medium text-neutral-500">
                    {formatDate(blogs[4].date)}
                  </span>
                </p>
              </div>
              <div className="w-16 h-16 border-8 rounded-full border-neutral-100  flex items-center justify-center">
                <img
                  src={square_self}
                  alt="blog_image"
                  className="rounded-full object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-2xl sm:text-2xl md:text-xl xl:text-2xl font-bold pb-4 max-w-xl text-neutral-800">
                <Link
                  to={`/blogs/${blogs[4].slug}`}
                  className="hover:underline line-clamp-2 min-[930px]:line-clamp-1"
                >
                  {blogs[4].title}
                </Link>
              </h2>
              <p className="text-sm  font-medium text-neutral-500  min-[930px]: line-clamp-4  xl:line-clamp-5">
                {blogs[4].content[0].content}
              </p>
            </div>
          </Link>
          <Link
            to="/blogs"
            className="text-sm flex min-[930px]:hidden font-medium h-24 w-full bg-neutral-800 rounded-md  items-center justify-center text-neutral-200 
            hover:text-neutral-800 hover:bg-neutral-200 border border-neutral-800 hover:border-neutral-800 transition-all duration-300"
          >
            Explore More Blogs
          </Link>
        </div>
      </section>
      {/* end of Blog Section */}
      {/* Magazine Section */}
      <MagazineSection />

      {/* start of Scroll Gallery */}
      <section className="w-full h-full flex flex-col">
        <div className="w-fit mx-auto -mt-6 md:pt-8 ">
          <Heading title="Gallery" />
        </div>
        <div className="relative overflow-hidden py-8 max-w-[100vw]">
          <motion.div
            className="flex gap-8 overflow-hidden"
            style={{
              width: "max-content",
              animation: "scroll 45s linear infinite",
            }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {/* First set of images */}
            <div className="flex gap-8 overflow-hidden">
              {[
                img_61,
                img_01,
                img_02,
                img_03,
                img_73,
                img_110,
                img_108,
                img_107,
                img_65,
                img_64,
                img_29,
                img_04,
                img_05,
                img_07,
                img_08,
                img_09,
                img_10,
                img_14,
                img_16,
                img_18,
                img_19,
                img_001,
                img__0016,
              ].map((img, index) => (
                <motion.div
                  key={index}
                  className="md:w-[400px] w-[300px] aspect-[4/3] overflow-hidden rounded-md shrink-0 group"
                >
                  <motion.img
                    src={img}
                    alt={`gallery-image-${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="flex gap-8 overflow-hidden">
              {[
                img_61,
                img_01,
                img_02,
                img_03,
                img_73,
                img_110,
                img_108,
                img_107,
                img_65,
                img_64,
                img_29,
                img_04,
                img_05,
                img_07,
                img_08,
                img_09,
                img_10,
                img_14,
                img_16,
                img_18,
                img_19,
                img_001,
                img__0016,
              ].map((img, index) => (
                <motion.div
                  key={index}
                  className="md:w-[400px] w-[300px] aspect-[4/3] overflow-hidden rounded-md shrink-0 group"
                >
                  <motion.img
                    src={img}
                    alt={`gallery-image-${index + 5}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      {/* end of Scroll Gallery */}

      {/* featured video */}
      <div className="-mt-32">
        <FeaturedVideo videos={homeVideos} />

      </div>
      {/* end of featured video */}

      {/* need assistant */}
      {/* <NeedAssistant /> */}
      {/* end of need assistant */}
    </main>
  );
}
