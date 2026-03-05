import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from 'react-router-dom'
import Blogs from './pages/Blogs'
import Awards from './pages/Awards'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import Navbar from './components/core/Navbar'
import Footer from './components/core/Footer'
import HomeLayout from './pages/HomeLayout'
// Import recommendation pages

import RecommendedOnce from './pages/recommendations/RecommendedOnce'
import RecommendationCategory from './pages/recommendations/RecommendationCategory'
import BlogPost from './components/BlogPost'
import Youtube from './pages/Youtube'

// Create the router configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div className='w-full min-h-screen flex flex-col'>
        <Navbar />
        <div className=''>
          <Outlet />
        </div>
        <Footer />
        <ScrollRestoration />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomeLayout />
      },
      {
        path: "/blogs",
        element: <Blogs />
      },
      {
        path: "/blogs/:blogId",
        element: <BlogPost />
      },
      {
        path: "/recommendations/:category",
        element: <RecommendationCategory />
      },
      {
        path: "/recommendations/:category/:slug",
        element: <RecommendedOnce />
      },
      {
        path: "/awards",
        element: <Awards />
      },
      {
        path: "/gallery",
        element: <Gallery />
      },
      {
        path: "/videos",
        element: <Youtube />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
