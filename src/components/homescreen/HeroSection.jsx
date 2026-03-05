import React from 'react'
import { vinay_nangia, x_twitter } from '../../assets'
import { Facebook, Github, Linkedin, Twitter } from 'lucide-react'
import ExploreButton from '../shared/ExploreButton'
import { Link } from 'react-router-dom'
export default function HeroSection() {

  return (
    <main className='h-full lg:h-fit w-full pb-12 lg:pb-0 lg:pt-8 flex gap-12 lg:flex-row overflow-x-hidden  flex-col max-w-[1400px] mx-auto lg:px-8 px-4 -mb-10 lg:mb-4'>
      <section className=' flex-1 h-full  w-full  flex flex-col items-start justify-center  lg:pr-0 '>
        <article className='flex flex-col gap-1 mt-8 md:mt-0'>
          {/* <span className='text-sm w-fit font-bold bg-neutral-900 text-neutral-100 rounded-md px-8 py-0.5'>About</span> */}
          <div className='relative mt-4'>
            {/* <div className=' absolute -top-[90px] left-28 hidden md:flex md:left-[84%] -rotate-12 md:-top-11 w-16 h-16 z-50 '>
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="85" viewBox="0 0 110 152" fill="none">
                <path d="M105.183 3.34766C111.516 43.8477 100.083 124.848 3.68311 124.848M3.68311 124.848L28.6831 88.3477M3.68311 124.848L34.6831 149.348" stroke="#424242" stroke-width="5" stroke-linecap="round" />
              </svg>
            </div> */}
            <h1 className='text-3xl -ml-1 md:text-5xl font-extrabold mb-2'>
            <span className='text-neutral-900'>
            Dr. 
              </span>
              <br className='block min-[375px]:hidden'/> 
              
              {" "}Vinay Kumar Nangia
              </h1>
          </div>

          <p className='text-sm font-medium  text-justify text-neutral-500 lg:max-w-2xl leading-6'>
          Dr. Vinay Kumar Nangia is a highly accomplished professional with multi-faceted expertise spanning Banking, Finance, General Management, Education, and Institution Building. His illustrious career, spanning over five decades, reflects a rare blend of academic brilliance, entrepreneurial vision, and leadership excellence.

          </p>
          <p className='text-sm font-medium  text-justify text-neutral-500 lg:max-w-2xl leading-6 mt-2'>
          Dr. Nangia's achievements include raising and deploying financial resources in India and abroad, setting up new ventures domestically, and spearheading an industrial project overseas. In the banking sector, he has gained comprehensive experience in commercial banking, merchant banking, investment banking, trade finance, project finance, and training. His contributions to education are equally remarkable, having been instrumental in designing and establishing MBA and MCA programs at IIT Roorkee and later initiating BBA and MBA programs at NSUT, Dwarka, New Delhi.

          </p>
        </article>
        {/* <div className='mt-8 flex  gap-8'>
          <ExploreButton text="Explore More" href='/awards' />
          <ExploreButton text="View CV" target='_blank' href='https://vinaynangia.com/wp-content/uploads/2020/06/CV-Prof.-V.K-Nangia-04022020.pdf' />
        </div> */}
      </section>
      <section className='h-full relative  flex flex-col   justify-center'>
        <div className='h-fit  flex items-center  lg:gap-16 justify-end -mt-4'>
          <div className='h-[300px] lg:h-[400px] border rounded-[160px] mx-auto w-[210px]  lg:w-[280px] overflow-hidden'>
            <img src={vinay_nangia} alt="vinay nangia" className='object-contain mt-2 scale-105' />
          </div>
          <div className='flex flex-col items-center gap-4 absolute lg:relative top-0 -right-8 md:right-0'>
            
            <div className='flex items-center gap-4 cursor-pointer border border-black rounded-md p-0.5 '>
              <Link to='https://www.linkedin.com/in/prof-vinay-nangia-760a6360?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' target='_blank'><Linkedin className='w-4 h-4' /></Link>
            </div>
            <div className='flex items-center gap-4 cursor-pointer border border-black rounded-md p-0.5 '>
              <Link to='https://www.facebook.com/vinay.nangia.98?mibextid=ZbWKwL' target='_blank'><Facebook className='w-4 h-4' /></Link>
            </div>
            <div className='lg:h-40 h-16 w-0.5 rounded-md ml-0.5 bg-black' />
            <h1 className='text-sm font-bold rotate-[270deg] py-7'>Vinay Nangia</h1>
          </div>
        </div>
        {/* <div className=' gap-2 items-center hidden lg:flex  absolute bottom-24 -left-24'>
          <p className='text-sm font-medium text-neutral-500'>
            Banking Professional
          </p>
          <div className='h-0.5 w-8 rounded-md ml-0.5 bg-neutral-500' />
          <p className='text-sm font-medium text-neutral-500'>
            Educationist
          </p>
          <div className='h-0.5 w-8 rounded-md ml-0.5 bg-neutral-500' />
          <p className='text-sm font-medium text-neutral-500'>
            and More.
          </p>
        </div> */}
      </section>
    </main>
  )
}
