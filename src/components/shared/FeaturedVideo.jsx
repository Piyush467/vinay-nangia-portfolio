import React from 'react'
import Heading from './Heading';

export default function FeaturedVideo({videos, title, isPage}) {
  const getEmbedUrl = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    
    if (match && match[2].length === 11) {
      return `https://www.youtube.com/embed/${match[2]}`;
    }
    return url;
  };

  return (
    <div className="w-full mx-auto md:px-4 py-8 -mt-12">
      <div className='w-fit mx-auto pb-8'>
        <Heading title={title || "Featured Videos"} />
      </div>
      <div className={`flex flex-wrap justify-center gap-6 md:gap-3 ${isPage ? "gap-6 md:gap-6" : "gap-6 md:gap-3"}`}>
        {videos.map((video) => (
          <div 
            key={video.id} 
            className="h-52 min-[400px]:h-44 w-full min-[400px]:aspect-video min-[400px]:w-auto rounded-md overflow-hidden border"
          >
            <iframe 
              className='h-full w-full'  
              loading="lazy"  
              src={getEmbedUrl(video.url)}
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"  
              allowFullScreen={true}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
