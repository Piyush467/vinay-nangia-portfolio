import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { img_1 } from '../../assets'
import { recommendationsData } from '../../data/recommendations'

export default function RecommendedOnce() {
  const { slug } = useParams()
  const location = useLocation()
  
  const category = location.pathname.split('/')[2]
  
  const recommendation = recommendationsData[category]?.find(
    item => item.slug === slug
  )

  if (!recommendation) {
    return <div>Recommendation not found</div>
  }

  return (
    <main className='w-full h-full py-12 md:py-24'>
      <div className='max-w-7xl px-4 mx-auto gap-6 items-center '>
        <div className=' w-40 h-40 rounded-full  mx-auto overflow-hidden shadow-xl '>
          <img src={recommendation.image} alt={recommendation.name} className='w-full h-full object-cover' />
        </div>

        
        <section className='flex flex-col items-center justify-center gap-3 '>
        <div className='flex flex-col items-center justify-center gap-1 '>
        <h1 className='text-3xl font-bold text-center' >{recommendation.name}</h1>
            <p className='pl-1 text-neutral-600 text-sm text-center'>{recommendation.designation}</p>
            <p className='pl-1 text-neutral-600 text-sm text-center'>{recommendation.company}</p>
        </div>
        <div className='flex flex-col gap-1 mt-1 items-center justify-center'>
        <p className='font-bold text-black text-lg text-center'>{recommendation.title}</p>
          <p className='text-neutral-800 font-medium md:text-base text-sm text-center'>
          {recommendation.description}
        </p>

        </div>
        
        </section>
      </div>
    </main>
  )
} 