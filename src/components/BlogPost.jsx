import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { vinay_nangia } from "../assets";
import { blogs } from "../data/blogs";

// Use ES module syntax to extend dayjs
dayjs.extend(customParseFormat);

export default function BlogPost() {
  const { blogId } = useParams();
  // Find current blog and its index
  const currentBlogIndex = blogs.findIndex((blog) => blog.slug === blogId);
  const blog = blogs[currentBlogIndex];

  // Get previous and next blog
  const prevBlog = currentBlogIndex > 0 ? blogs[currentBlogIndex - 1] : null;
  const nextBlog =
    currentBlogIndex < blogs.length - 1 ? blogs[currentBlogIndex + 1] : null;

  // Get 3 suggested blogs (excluding current blog)
  const suggestedBlogs = blogs
    .filter((b) => b.slug !== blogId)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  // Handle case when blog is not found
  if (!blog) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Blog post not found</h1>
      </div>
    );
  }

  const renderContent = (block) => {
    switch (block.type) {
      case "paragraph":
        // New function to convert URLs in text to clickable links
        const convertUrlsToLinks = (text) => {
          const urlRegex = /(https?:\/\/[^\s]+)|(www\.[^\s]+)/g;
          const parts = text.split(urlRegex);

          return parts.map((part, i) => {
            if (part && (part.startsWith("http") || part.startsWith("www."))) {
              const url = part.startsWith("www.") ? `http://${part}` : part;
              return (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800"
                >
                  {part}
                </a>
              );
            }
            return part;
          });
        };

        return (
          <p className="my-4 text-gray-700">
            {convertUrlsToLinks(block.content)}
          </p>
        );
      case "heading":
        const HeadingTag = `h${block.level || 2}`; // default to h2 if no level is specified
        return (
          <HeadingTag
            className={`my-6 font-semibold text-gray-800 ${
              block.level === 1
                ? "text-3xl"
                : block.level === 2
                ? "text-2xl"
                : "text-xl"
            }`}
          >
            {block.content}
          </HeadingTag>
        );

      case "list":
        return (
          <ul className="list-disc ml-6 my-4">
            {block.content.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        );

      case "image":
        return (
          <figure className="my-6">
            <img
              src={block.content.src}
              alt={block.content.alt}
              className="rounded-lg w-full"
            />
            {block.content.caption && (
              <figcaption className="text-center text-sm text-gray-500 mt-2">
                {block.content.caption}
              </figcaption>
            )}
          </figure>
        );

      case "code":
        return (
          <pre className="bg-gray-100 p-4 rounded-lg my-4 overflow-x-auto">
            <code>{block.content}</code>
          </pre>
        );

      case "quote":
        return (
          <blockquote className="border-l-4 border-gray-300 pl-4 my-4 italic">
            {block.content}
          </blockquote>
        );

      default:
        return null;
    }
  };

  const formatDate = (dateString) => {
    // Try parsing with different formats
    const formats = ["DD-MM-YY", "DD-MM-YYYY"];
    let parsedDate;

    for (const format of formats) {
      parsedDate = dayjs(dateString, format);
      if (parsedDate.isValid()) {
        return parsedDate.format("dddd, DD MMMM YYYY");
      }
    }

    // If no format matches, return original string
    return dateString;
  };

  return (
    <article className="max-w-3xl mx-auto px-4 py-16">
      <div className="flex items-start flex-col text-gray-500 mb-8">
        <p className="text-xl font-bold mb-1">
          <span className="text-neutral-800">Author:</span> {blog.author}
        </p>
        <time className="mr-auto px-4 sm:pr-16 pl-4 py-2 text-gray-200 text-sm font-semibold sm:text-lg bg-neutral-800 rounded-r-lg uppercase">
          {formatDate(blog.date)}
        </time>
      </div>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      {blog.content.map((block, index) => (
        <div key={index} className="text-justify">
          {renderContent(block)}
        </div>
      ))}
      <div className="bg-neutral-100 text-white flex justify-between items-center p-4 rounded-lg mt-8">
        <div className="flex font-extrabold text-black gap-2 ">
          <img
            src={vinay_nangia}
            alt={blog.author}
            className="w-12 h-12 rounded-full"
          />
          <p className="flex flex-col font-extrabold text-black ">
            <span className="text-neutral-500">By</span>
            <span>Prof. Vinay Nangia</span>
          </p>
        </div>
      </div>

      {/* Navigation section */}
      <div className="flex justify-between flex-col md:flex-row items-center my-8 border-t border-b border-gray-200 py-4 gap-2">
        {prevBlog ? (
          <Link
            to={`/blogs/${prevBlog.slug}`}
            className="flex items-center text-gray-600 hover:text-gray-900 p-4 bg-slate-200 rounded-lg text-sm w-full h-full"
          >
            <span className="mr-2">←</span>
            <span>{prevBlog.title}</span>
          </Link>
        ) : (
          <div />
        )}

        {nextBlog ? (
          <Link
            to={`/blogs/${nextBlog.slug}`}
            className="flex items-center text-gray-600 hover:text-gray-900 p-4 bg-slate-200 rounded-lg text-sm w-full h-full"
          >
            <span>{nextBlog.title}</span>
            <span className="ml-2">→</span>
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Suggested blogs section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Suggested Posts</h2>
        <div className="grid grid-cols-1  gap-4">
          {suggestedBlogs.map((suggestedBlog) => (
            <Link
              key={suggestedBlog.slug}
              to={`/blogs/${suggestedBlog.slug}`}
              className="block p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow"
            >
              <h3 className="font-semibold text-lg">{suggestedBlog.title}</h3>
              <p className="text-sm text-gray-500 mt-2">
                {dayjs(suggestedBlog.date, ["DD-MM-YY", "DD-MM-YYYY"]).format(
                  "DD MMM YYYY"
                )}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </article>
  );
}
