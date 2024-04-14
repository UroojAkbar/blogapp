import React from "react";

function About() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="sm:pl-12 pl-2">
        <div className="sm:text-7xl text-3xl pt-8">
          Everyone has <br /> a story to tell.
        </div>
        <div className="sm:pr-96 pr-0">
        <div className="mt-12 sm:text-xl text-sm sm:pr-96 pr-28">
          Medium is a home for human stories and ideas. Here, anyone can share
          insightful perspectives, useful knowledge, and life wisdom with the
          world—without building a mailing list or a following first. The
          internet is noisy and chaotic; Medium is quiet yet full of insight.
          It’s simple, beautiful, collaborative, and helps you find the right
          audience for whatever you have to say.
          <br />
          We believe that what you read and write matters. Words can divide or
          empower us, inspire or discourage us. In a world where the most
          sensational and surface-level stories often win, we’re building a
          system that rewards depth, nuance, and time well spent. A space for
          thoughtful conversation more than drive-by takes, and substance over
          packaging.
        </div>
        <div
          
          className="bg-white bg-opacity-20 mt-12 sm:text-xl text-sm sm:pr-96 pr-28"
        >
          Ultimately, our goal is to deepen our collective understanding of the
          world through the power of writing.
        </div>

        <div
          style={{
           
            paddingBottom: 100,
          }}
          className="mt-12 sm:text-xl text-sm sm:pr-96 pr-28 pb-24"
        >
          Over 100 million people connect and share their wisdom on Medium every
          month. Many are professional writers, but just as many aren’t —
          they’re CEOs, computer scientists, U.S. presidents, amateur novelists,
          and anyone burning with a story they need to get out into the world.
          They write about what they’re working on, what’s keeping them up at
          night, what they’ve lived through, and what they’ve learned that the
          rest of us might want to know too.
          <br />
          Instead of selling ads or selling your data, we’re supported by a
          growing community of
          <br />. Dive deeper into whatever matters to you. Find a post that
          helps you learn something new, or reconsider something familiar—and
          then
        </div>
        </div>
      </div>

      <div
        className="flex flex-row justify-between sm:h-28 h-16 items-center hover:bg-white hover:bg-opacity-10"
        style={{ borderColor: "white", borderTopWidth: 2 }}
      >
       
        <div className="sm:text-4xl text-2xl ">
          <text className="sm:pl-12 pl-2">Start reading</text>
        </div>
        <div className="sm:pr-10 pr-4 items-center">
          <svg
            width="50"
            height="18"
            viewBox="0 0 50 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.53 17.25C38.23 15.7567 38.9067 14.45 39.56 13.33C40.26 12.21 40.9367 11.2767 41.59 10.53H0.780001V7.59H41.59C40.9367 6.79667 40.26 5.84 39.56 4.72C38.9067 3.6 38.23 2.31666 37.53 0.869999H39.98C42.92 4.27667 46 6.79667 49.22 8.43V9.69C46 11.2767 42.92 13.7967 39.98 17.25H37.53Z"
              fill="white"
            />
          </svg>
        </div>
        
      </div>

       <div
        className="flex flex-row justify-between sm:h-28 h-16 items-center hover:bg-white hover:bg-opacity-10"
        style={{ borderColor: "white", borderTopWidth: 2 }}
      >
        <div className="sm:text-4xl text-2xl ">
          <text className="sm:pl-12 pl-2">Start writing</text>
        </div>
        <div className="sm:pr-10 pr-4 items-center">
          <svg
            width="50"
            height="18"
            viewBox="0 0 50 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.53 17.25C38.23 15.7567 38.9067 14.45 39.56 13.33C40.26 12.21 40.9367 11.2767 41.59 10.53H0.780001V7.59H41.59C40.9367 6.79667 40.26 5.84 39.56 4.72C38.9067 3.6 38.23 2.31666 37.53 0.869999H39.98C42.92 4.27667 46 6.79667 49.22 8.43V9.69C46 11.2767 42.92 13.7967 39.98 17.25H37.53Z"
              fill="white"
            />
          </svg>
        </div>
      </div>

      <div
        className="flex flex-row justify-between sm:h-28 h-16 items-center hover:bg-white hover:bg-opacity-10"
        style={{ borderColor: "white", borderTopWidth: 2 }}
      >
        <div className="sm:text-4xl text-2xl ">
          <text className="sm:pl-12 pl-2">Become a member</text>
        </div>
        <div className="sm:pr-10 pr-4 items-center">
          <svg
            width="50"
            height="18"
            viewBox="0 0 50 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M37.53 17.25C38.23 15.7567 38.9067 14.45 39.56 13.33C40.26 12.21 40.9367 11.2767 41.59 10.53H0.780001V7.59H41.59C40.9367 6.79667 40.26 5.84 39.56 4.72C38.9067 3.6 38.23 2.31666 37.53 0.869999H39.98C42.92 4.27667 46 6.79667 49.22 8.43V9.69C46 11.2767 42.92 13.7967 39.98 17.25H37.53Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default About;
