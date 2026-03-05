import { AlignLeft, X, ChevronDown, ChevronUp } from 'lucide-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../../assets'
import logo1 from '../../assets/self/logo1.jpg'
import logo2 from '../../assets/self/logo2.jpg'
import logo3 from '../../assets/self/logo3.jpg'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [isRecommendationsOpen, setIsRecommendationsOpen] = useState(false);

  const recommendationLinks = [
    'Academic Leaders',
    'Faculty Colleagues',
    'Academic Fraternity',
    'Scholars Abroad',
    'Students',
    'Civil Servants',
    'Business World',
    'Start-ups'
  ];

  const handleRecommendationClick = () => {
    setShowRecommendations(false);
  };

  return (
    <>
      <nav className='w-full h-14 bg-white shadow-sm flex items-center justify-between px-4 sticky top-0 z-50'>
          {/* Large screen */}
          <div className='flex items-center gap-4'>
            <img src={logo3} alt="" className='w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full object-cover'/>
            <h2 className='font-bold hidden md:block'>Vinay K Nangia</h2>
          </div>
          <div className='hidden gap-5 pr-8 md:flex items-center'>
              <Link to='/' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Home</Link>
              <Link to='/awards' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Awards</Link>
              
              <div 
                className='relative'
                onMouseEnter={() => setShowRecommendations(true)}
                onMouseLeave={() => setShowRecommendations(false)}
              >
                <span className='text-[15px] font-medium text-neutral-700 cursor-default'>
                  Recommendations
                </span>
                {/* Recommendations Drawer */}
                {showRecommendations && (
                  <div className='absolute top-full left-1/2 -translate-x-1/2 py-2 w-48 bg-white rounded-md shadow-lg border border-neutral-100'>
                    {recommendationLinks.map((link, index) => (
                      <Link
                        key={index}
                        to={`/recommendations/${link.toLowerCase().replace(/\s+/g, '-')}`}
                        className='block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 transition-colors duration-150'
                        onClick={handleRecommendationClick}
                      >
                        {link}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link to='/blogs' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Blogs</Link>
              <Link to='/videos' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Videos</Link>
              <Link to='/gallery' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Gallery</Link>
              {/* <Link to='/contact' className='text-[15px] font-medium text-neutral-700 hover:text-neutral-900'>Contact</Link> */}
          </div>
          {/* Small screen */}
          <div className='flex items-center justify-between w-full md:hidden'>
              <h2 className='font-bold'>Vinay K Nangia</h2>
              <div className='flex items-center gap-4'>
                  <button onClick={() => setIsOpen(!isOpen)}>
                      { <AlignLeft />}
                  </button>
              </div>
          </div>
      </nav>

      {/* Mobile Sidebar */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className='flex justify-between items-center h-14 w-full px-4'>
          <h2 className='font-bold'>Vinay K Nangia</h2>
          {isOpen && <X className='cursor-pointer' onClick={() => setIsOpen(false)} />}
        </div>
        <div className='flex flex-col p-8 gap-6 mt-4'>
            <Link to='/' className='text-lg hover:text-gray-600' onClick={() => setIsOpen(false)}>Home</Link>
            <Link to='/awards' className='text-lg hover:text-gray-600' onClick={() => setIsOpen(false)}>Awards</Link>
            
            {/* Recommendations Accordion */}
            <div>
              <div 
                onClick={() => setIsRecommendationsOpen(!isRecommendationsOpen)}
                className='flex items-center justify-between w-full text-lg hover:text-gray-600 cursor-pointer'
              >
                <span>Recommendations</span>
                <ChevronDown 
                  size={20} 
                  className={`transform transition-transform duration-300 ${
                    isRecommendationsOpen ? 'rotate-180' : 'rotate-0'
                  }`}
                />
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isRecommendationsOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className='ml-4 mt-2 flex flex-col gap-3'>
                  {recommendationLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={`/recommendations/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className='text-neutral-600 hover:text-neutral-900 transform transition-transform duration-200 hover:translate-x-2'
                      onClick={() => setIsOpen(false)}
                    >
                      {link}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to='/blogs' className='text-lg hover:text-gray-600' onClick={() => setIsOpen(false)}>Blogs</Link>
            <Link to='/gallery' className='text-lg hover:text-gray-600' onClick={() => setIsOpen(false)}>Gallery</Link>
            <Link to='/videos' className='text-lg hover:text-gray-600' onClick={() => setIsOpen(false)}>Videos</Link>
            {/* <Link to='/contact' className='text-lg hover:text-gray-600' onClick={() => setIsOpen(false)}>Contact</Link> */}
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  )
}
