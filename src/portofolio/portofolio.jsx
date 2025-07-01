import React from "react";
import Dss from "./dss.PNG";
import ShareBook from "./shareurbook.PNG";
import DialogHening from "./dialoghening.jpg";
import ShareBookRe from "./subredesain.PNG";
import Ut from "./utreal.PNG";

function portofolio() {
  return (
    <section className="p-4 lg:p-20 dark:text-gray-100">
      <div className="text-black font-bold text-4xl mb-10">
        <h2>Portofolio</h2>
      </div>
      <div className="container mx-auto space-y-12">
        <div className="border border-black flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src={Ut}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">
              Check This Out
            </span>
            <h3 className="text-3xl font-bold">Salut Wijaya Boja</h3>
            <p className="my-6 dark:text-gray-400 text-justify">
              I have successfully implemented the design I created in Figma and
              then sliced it into the website UI. I built this website using
              Laravel with React JS and Tailwind. In this project, I implemented
              SEO and Webpack for file management.
            </p>
            <a
              href="https://share-ur-book.netlify.app/"
              className="relative inline-block px-4 py-2 font-medium group w-fit mx-auto"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                Show Project >
              </span>
            </a>
          </div>
        </div>
        >
        <div className="flex flex-col border border-black overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src={Dss}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">
              Check This Out
            </span>
            <h3 className="text-3xl font-bold">Moora Laptop DSS</h3>
            <p className="my-6 dark:text-gray-400 text-justify">
              I developed the best laptop purchase decision support system
              website using Laravel, and Bootsrap Framework with Uideck.
              Successfully slicing from the Landing Page and Admin page.
              Successfully deployed and implemented web performance testing with
              Lightroom.
            </p>
            <a
              href="https://laptopdss.my.id/"
              className="relative inline-block px-4 py-2 font-medium group w-fit mx-auto"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                Show Project >
              </span>
            </a>
          </div>
        </div>
        <div className="border border-black flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse">
          <img
            src={ShareBook}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">
              Check This Out
            </span>
            <h3 className="text-3xl font-bold">Share Ur Book</h3>
            <p className="my-6 dark:text-gray-400 text-justify">
              Share Ur Book is a project that I worked on during the Independent
              Study programme as a Front End Developer at Dicoding. in making
              this project I managed to do slicing from the Figma design that I
              had made, then I also applied it in making web performance faster
              by testing using Lightroom. Applying the PWA and Mobile First
              Approach features, successfully fetching book data API data and
              doing deployment with CI / CD.
            </p>
            <a
              href="https://share-ur-book.netlify.app/"
              className="relative inline-block px-4 py-2 font-medium group w-fit mx-auto"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                Show Project >
              </span>
            </a>
          </div>
        </div>
        <div className="border border-black flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row">
          <img
            src={DialogHening}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">
              Check This Out
            </span>
            <h3 className="text-3xl font-bold">Dialog Hening</h3>
            <p className="my-6 dark:text-gray-400 text-justify">
              Hening Dialogue is a project that I work on in exploring my design
              skills for website creation, in working on this project I designed
              the UI with Adobe XD and managed to do slicing using Bootsrap.
            </p>
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group w-fit mx-auto"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                Show Project >
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden rounded-md shadow-sm lg:flex-row-reverse border border-black">
          <img
            src={ShareBookRe}
            alt=""
            className="h-80 dark:bg-gray-500 aspect-video"
          />
          <div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-900">
            <span className="text-xs uppercase dark:text-gray-400">
              Check This Out
            </span>
            <h3 className="text-3xl font-bold">Share Ur Book Figma Redesign</h3>
            <p className="my-6 dark:text-gray-400 text-justify">
              This project is a figma redesign of the previous share ur book
              project, some design components and colours have been updated with
              a simpler and more user-friendly look.
            </p>
            <a
              href="#_"
              className="relative inline-block px-4 py-2 font-medium group w-fit mx-auto"
            >
              <span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
              <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
              <span class="relative text-black group-hover:text-white">
                Show Project >
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default portofolio;
