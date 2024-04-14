

import React from "react";
import { Link } from 'react-router-dom';

const FirstCom = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <div className="flex flex-col items-center justify-center sm:flex-row">
        <div className="text-center">
          <h1 className="text-6xl font-bold">
            <span className="text-9xl font-bold">S</span>tay Curious
          </h1>
          <p className="text-2xl mt-8 sm:text-center sm:pl-0 pl-12 text-left font-bold">
            Discover stories, thinking, and expertise from <br/> writers on any topic.
          </p>
          <Link to='/articles'>
            <button className="bg-indigo-600 mt-12 rounded-xl w-56 h-12 font-bold text-lg text-white">
              Explore Articles
            </button>
          </Link>
        </div>
        <img
          className="max-w-full h-auto"
          src="https://s3-alpha-sig.figma.com/img/6b7a/f0c2/2bb7a6cceb5f0ea5fb695058e224d05a?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nmQCLMdlhCBnY~UjVio1CERAS90Z-TO250O8lWzH0ZAWgjkGyTuIEjkDz9ZVR13KeBbTsWxvM3Ctc~4kzMqFahLBN0610GHQA6iLcLG9MorQ86a2FVOLGErcaaI63jhRc2jguWI8U5DXXC6pABCUROGYfnsPvUpH70YQn1-t8~tn5FMcyvzsQ8AxLhOiHZNPbA2mBEiE490jX3yzL4xYzZMrsvS695HpOAtlP4JKJZuNfjNa1Um9x6cQxMpzi0M9mNPdem8sDh3yMa93cFLtBUBXOpUcv1fYadD~CY6licNNJblPF0qI7Be0bFbc0gCbgpqvoncwOb2ehRUBZziH1g__"
          alt="..."
        />
      </div>

      <div className="text-center font-bold text-3xl mt-52">
        Trending on BlogDev
      </div>

      <div className="flex flex-wrap justify-center mt-8">
        {/* First Card */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
          <div className="relative pl-6 text-lg">
            Alex Klein in UX Collective
            <br />
            <span className="font-bold">
              Prompts should be designed — not <br />
              engineered
            </span>
            <br />
            Apr 2, 2024 - 6 min read
            <div className="absolute top-0 left-0">01</div>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
          <div className="relative pl-6 text-lg">
            Alex Klein in UX Collective
            <br />
            <span className="font-bold">
              Prompts should be designed — not <br />
              engineered
            </span>
            <br />
            Apr 2, 2024 - 6 min read
            <div className="absolute top-0 left-0">01</div>
          </div>
        </div>
        
      </div>



      <div className="flex flex-wrap justify-center mt-8">
        {/* First Card */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
          <div className="relative pl-6 text-lg">
            Alex Klein in UX Collective
            <br />
            <span className="font-bold">
              Prompts should be designed — not <br />
              engineered
            </span>
            <br />
            Apr 2, 2024 - 6 min read
            <div className="absolute top-0 left-0">01</div>
          </div>
        </div>

        {/* Second Card */}
        <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-4">
          <div className="relative pl-6 text-lg">
            Alex Klein in UX Collective
            <br />
            <span className="font-bold">
              Prompts should be designed — not <br />
              engineered
            </span>
            <br />
            Apr 2, 2024 - 6 min read
            <div className="absolute top-0 left-0">01</div>
          </div>
        </div>
        
      </div>

      {/* Second Section */}
      <div className="flex justify-center mt-16 sm:flex-row flex-col">
        <img
          className="sm:w-2/5 w-3/4 h-auto rounded-lg sm:ml-0 ml-8 sm:mb-0 mb-4 "
          src="https://s3-alpha-sig.figma.com/img/96d1/5db6/c347b0e5dd4a8c92db55c4d8a1d623d4?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=e8MG4ZPpKF7jIRnF~iRkoZauoHl9LLUT-Nx9Vx8tnoP-jkZ34eNcGEN5-O-FPv4wyc7blfM37cBwuiwP7S6cxwYst2xDhuUbmJ1yqBv~0x40vNFEgM5Di2Zjed4s04q6yH5uNnxY9Txf7WnPfrC0TkdAHHTL8i9VAz-e7qyqTjL2cVuMJ4w1XQSxbo5rUztcCGhz14MJd3h-41P-xa6Huo2xPMVFr0vJxfft0TjczM5IZCcIe1ld-s4ebIOoznS9Ml-RNTUO0kVJ-kBRylgauhgPLUc3UQrlctS5EeufOXGO7vP2rAsWAZFdsoxYEC8G0j8jCRjv30I2pUyMK7yPqg__"
          alt="..."
        />
        <div className="flex flex-col ml-8">
          <h2 className="text-4xl font-bold">
            Short And Informative Blogs
          </h2>
          <p className="text-2xl mt-8 font-bold">
            Discover stories, thinking, and expertise from <br /> writers on any topic.
          </p>
          <Link to='/articles'>
            <button className="bg-indigo-600 mt-12 rounded-xl w-56 h-12 font-bold text-lg text-white">
              Explore Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-40 flex justify-center">
        <svg width="1200" height="2" viewBox="0 0 1200 2" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 1L1200 1.0001" stroke="#CCCCCC"/>
        </svg>
      </div>
    </div>
  );
};

export default FirstCom;

