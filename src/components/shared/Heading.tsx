import React from 'react'

export default function Heading({title}:{title:string}) {
  return (
    <div className=' h-full flex flex-col relative group w-fit mb-4'>
    <div className='w-16 h-1 absolute top-0 left-0 flex bg-black rounded-md flex-col gap-4 group-hover:w-32 transition-all duration-300' />
    <h2 className='md:text-4xl text-2xl font-bold my-2'>{title}</h2>
    <div className='w-16 h-1 flex absolute bottom-0 right-0 bg-black rounded-md flex-col gap-4 group-hover:w-32 transition-all duration-300' />
  </div>
  )
}
