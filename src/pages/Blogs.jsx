import React from 'react'
import { blogs } from '../data/blogs'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs';
import Heading from '../components/shared/Heading';
export default function Blogs() {
  const formatDate = (dateString) => {
    const formats = ['DD-MM-YY', 'DD-MM-YYYY'];
    let parsedDate;
    
    for (const format of formats) {
      parsedDate = dayjs(dateString, format);
      if (parsedDate.isValid()) {
        return parsedDate.format('DD MMM YYYY');
      }
    }
    
    return dateString;
  };

  return (
    <main className="min-h-screen px-4 py-12 max-w-7xl mx-auto">
      <div className="w-fit mx-auto pb-8">
        <Heading title="Blogs" />
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] md:grid-cols-[repeat(auto-fit,minmax(340px,1fr))]  gap-6">
       {
        blogs
          .slice() // Creat`e a shallow copy to avoid mutating the original array
          .sort((a, b) => b.id - a.id) // Sort in descending order
          .map((blog) => (
            <Link to={`/blogs/${blog.slug}`} className="tcard w-full aspect-video" key={blog.id}>
              <div className="tcard__title line-clamp-2"> {blog.title} </div>
              <div className="tcard__content line-clamp-4 space-y-1"> 
                <p>{blog.content[0]?.content}</p>
                <p>{blog.content[1]?.content}</p>
              </div>
              <div className="tcard__date">
                {formatDate(blog.date)}
              </div>
            </Link>
          ))
       }
      </div>
    </main>
  );
}
