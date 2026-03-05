import React from 'react'
import {motion} from 'framer-motion'
import Heading from '../components/shared/Heading'
import { Medal } from 'lucide-react';
import { containerVariants, itemVariants } from '../lib/variants';
import {award_01, award_02, award_03, award_icon, img_4} from '../assets'
import { achievementData, awards } from '../data/listData';
import { Link } from 'react-router-dom';
export default function Awards() {
 
  return (
    <div className='w-[86.5%] mx-auto min-h-full py-12 items-start flex-col flex '>
      <div className='w-fit mx-auto  '>
          <Heading title='Awards' />
      </div>
       {/* start of Awards Section */}
       <section className='w-full h-full items-center flex gap-8 flex-col lg:flex-row flex-[1.5]'>
     

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className='w-full h-full flex flex-col mt-8 space-y-8'
        >
          {awards.map((item, index) => (
            <motion.article
              key={index}
              variants={itemVariants}
              className='w-full h-full flex flex-col'
            >
              <div className='flex items-center gap-4'>
                <span className='w-8 h-8 flex items-center justify-center p-1 rounded-md text-lg'>
                  {item.icon}
                </span>
                <div className='w-32 h-1 bg-neutral-700 rounded-md' />
              </div>
              <p className='text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal'>
                {item.description}
              </p>
            </motion.article>
          ))}
        </motion.div>

        <div className='lg:h-[80%] lg:w-[80%] h-full w-full rounded-xl overflow-hidden bg-slate-900'>
          <img src={img_4} alt="award" className='w-full h-full object-cover object-center'/>
        </div>
       
      </section>
      {/* end of Awards Section */}
     

         {/* start of Achievements Section */}
         <section className='w-full h-full flex flex-col mt-12'>
          <div className='w-fit mx-auto pt-8 '>
            <Heading title='Achievements' />
          </div>
          <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="w-full h-full flex flex-col mt-8 space-y-12"
      >
        {Object.entries(achievementData).map(([key, category], categoryIndex) => (
          <motion.div
            key={key}
            variants={itemVariants}
            className="w-full space-y-6"
          >
            <h2 className="text-xl font-bold text-neutral-800">
              {category.title}
            </h2>
            
            {category.items.map((item, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                className="w-full h-full flex flex-col"
              >
                <div className="flex items-center gap-2">
                  {/* <img
                    src={award_icon}
                    alt="medal"
                    className="w-6 h-6 p-1 rounded-md bg-neutral-700 text-white"
                  /> */}
                  <span className="w-8 h-8 flex items-center justify-center rounded-md text-xl">
                      •
                  </span>
                  <div className="w-32 h-1 bg-neutral-700 rounded-md flex flex-col gap-4" />
                </div>
                <p className="text-sm text-neutral-700 font-medium pl-10 lg:leading-6 leading-normal">
                  {item}
                </p>
              </motion.article>
            ))}
          </motion.div>
        ))}
      </motion.div>
        <div className='h-full mt-10 w-full rounded-xl overflow-hidden flex gap-4'>
        <img src={award_03} alt="award" className='h-80 lg:block hidden w-auto object-contain object-center rounded-xl'/>
          <img src={award_01} alt="award" className='h-80 w-auto object-cover object-center rounded-xl'/>
          <img src={award_02} alt="award" className='w-auto h-80 md:block hidden object-cover object-center rounded-xl'/>
        
        </div>
       
      </section>

      {/* end of Achievements Section */}

    </div>
  )
} 