import React from 'react'

export default function ExploreButton({text, href, target}) {
  return (
    <a
    target={target}
  className="group relative inline-flex overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
  href={href}
>

  <span
    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-gradient-to-r from-black via-black to-black"
  ></span>

  <span
    className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950  px-2 md:px-8 py-2 text-[10px] lg:text-sm font-medium backdrop-blur-3xl transition-all duration-300 group-hover:bg-slate-950/90"
  >
    {/* <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="mr-2 h-5 w-5 text-white transition-transform duration-300 group-hover:-translate-x-1"
    >
      <path
        d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg> */}

    <span
      className="relative bg-gradient-to-r from-white via-white to-white bg-clip-text text-transparent font-semibold"
    >
      {text}
    </span>

    <svg
      stroke="currentColor"
      viewBox="0 0 24 24"
      fill="none"
      className="ml-2 h-3 md:h-5 w-3 md:w-5 text-white transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M13 5l7 7-7 7M5 5l7 7-7 7"
        stroke-width="2"
        stroke-linejoin="round"
        stroke-linecap="round"
      ></path>
    </svg>
  </span>
</a>

  )
}
