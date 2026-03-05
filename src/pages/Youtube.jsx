import React from 'react'
import FeaturedVideo from '../components/shared/FeaturedVideo'
import { youtubeLinks } from '../data/youtube'
import Heading from '../components/shared/Heading'

export default function Youtube() {
  return (
    <div className='w-full mx-auto px-4 py-4 max-w-[1400px]'>
      <FeaturedVideo videos={youtubeLinks} title="Videos" isPage={true} />
    </div>
  )
}
