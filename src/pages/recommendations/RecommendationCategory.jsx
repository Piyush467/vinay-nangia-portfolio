import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { img_1 } from '../../assets'
import { recommendationsData } from '../../data/recommendations'

const categoryTitles = {
  "academic-leaders": "Academic Leaders",
  "faculty-colleagues": "Faculty Colleagues",
  "academic-fraternity": "Academic Fraternity",
  "scholars-abroad": "Scholars Abroad",
  "students": "Students",
  "civil-servants": "Civil Servants",
  "business-world": "Business World",
  "start-ups": "Startups"
}

export default function RecommendationCategory() {
    const { category } = useParams()
    const recommendations = recommendationsData[category]
    const title = categoryTitles[category]
    
    if (!recommendations) {
      return <div>Category not found</div>
    }

    return (
      <main className='w-full h-full p-4'>
        <div className='h-full mx-auto flex flex-col items-center justify-center w-fit'>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <div className='font-semibold text-neutral-500'>Recommendations</div>
        </div>
        <section className='grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] mt-12 gap-12 max-w-7xl mx-auto my-auto'>
          {recommendations.map((item, index) => (
            <Link 
              to={`/recommendations/${category}/${item.slug}`}
              key={index} 
              className='w-full h-full flex flex-col gap-2'
            >
              <article className='w-fit mx-auto h-full flex flex-col gap-2 '>
                <div className='w-full h-full overflow-hidden  rounded-xl min-h-[300px] max-h-[300px] shadow-xl'>
                  <img src={item.image} alt={item.name} className='w-full h-full object-cover rounded-xl' />
                </div>
                <div className='flex flex-col gap-1'>
                  <h1 className='text-xl font-bold'>{item.name}</h1>
                  <div className='flex flex-col'>
                    <p className='text-sm text-neutral-500'>{item.designation}</p>
                    <p className='text-sm text-neutral-500'>{item.company}</p>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </section>

        <section className='flex justify-center items-center gap-10 flex-wrap max-w-7xl mx-auto p-8 mt-24 bg-neutral-100 rounded-xl'>
          {Object.entries(categoryTitles).map(([key, value]) => (
            <Link key={key} to={`/recommendations/${key}`} className='text-black'>
              {value}
            </Link>
          ))}
        </section>
      </main>
    )
} 