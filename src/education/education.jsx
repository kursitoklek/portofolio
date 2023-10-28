import React from "react";

function education() {
  return (
    <div className="mx-10">
      {/* <hr class="h-px my-6 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
      <h2 className="font-bold text-3xl font-sans mt-4">Education</h2>
      <div className="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-10">
        <div className="max-w-xl mb-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-10">
          <p className="text-base text-gray-700 md:text-lg">
            Here is the result of my education in{" "}
            <b>Dian Nuswantoro University</b> in Semarang
          </p>
        </div>
        <div className="grid gap-8 row-gap-5 mb-8 md:row-gap-8 lg:grid-cols-4 sm:grid-cols-2">
          <div className="duration-300 transform bg-white border-l-4 border-black hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 border-black rounded-r shadow-sm">
              <h6 className="mb-2 font-semibold leading-5">
                Bachelor of Computer Science | 2019-2023
              </h6>
              <p className="text-sm text-gray-900 text-justify">
                Successfully graduated on time with an informatics engineering
                program with a GPA of 3.73
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-black hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm border-black">
              <h6 className="mb-2 font-semibold leading-5">
                Completed Certification Scheme of Web Developer
              </h6>
              <p className="text-sm text-gray-900 text-justify">
                Successfully completed web developer certification by creating
                an online store using the PHP Codeigniter framework.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-black hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm border-black">
              <h6 className="mb-2 font-semibold leading-5">
                Completed "Studi Independen" Kampus Merdeka Program
              </h6>
              <p className="text-sm text-gray-900 text-justify">
                Successfully completed the "Independent Study" program with a
                path as a Front End Developer Expert with the final project
                Share Ur Book by implementing PWA, Automation Testing, Web
                Performance with Lightroom, and CI/CD Deployment.
              </p>
            </div>
          </div>
          <div className="duration-300 transform bg-white border-l-4 border-black hover:-translate-y-2">
            <div className="h-full p-5 border border-l-0 rounded-r shadow-sm border-black">
              <h6 className="mb-2 font-semibold leading-5">
                Completed FGA Program for IT Fundamental
              </h6>
              <p className="text-sm text-gray-900 text-justify">
                Completed the Fresh Graduate Academy program held by Kominfo
                with the IT Fundamental path with a focus on IT Fundamentals,
                Virtual Box, basic network basics and operating systems and
                computer hardware.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default education;
