import React from 'react';
import Image from 'next/image';
import Link from "next/link";

export default function Page() {
  return (
    <main>
      <div className="flex bg-white-100 text-gray-600 flex-col py-6 p-10">
        {/* Intro Section */}
        <section id="Home">
          <div className="flex flex-col gap-4 h-full md:flex-row">
            <div className="flex rounded-xl flex-col justify-center order-2 md:order-1 gap-4 bg-gray-50 px-6 py-10 md:w-1/2 md:px-12">
              <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
                <strong>Hi, I'm Alec.</strong></p>
              <p>I'm a <strong>Software Quality Engineer</strong> currently based in Lake Tahoe. I love diving into complex issues and finding ways to improve the product and customer experience. My goal is to continue growing my technical knowledge while delivering software solutions that people love.
              </p>
              <p>When I'm not behind the keyboard, you'll find me hiking, snowboarding, trying different foods, or exploring new places.
              </p>
            </div>
            <div className="flex flex-col items-center justify-center rounded-xl order-1 md:order-2 bg-gray-50 md:w-1/2 md:h-auto">
              <div
                className="relative flex items-center justify-center w-full h-full"
                style={{
                  padding: '20px', // Padding between the image and the gray background
                }}
              >
                {/* Aspect Ratio Wrapper */}
                <div className="w-[95%] relative">
                  <Image
                    src="/riflepeak.jpeg"
                    width={1600}
                    height={1200}
                    alt="Screenshots of the dashboard project showing desktop version"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Background Section */}
        <section id="Background" className="mt-10 bg-gray-50 p-10 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">Background</h2>
          <p className="mt-2 text-lg leading-relaxed">
            Working at a fast-paced startup, I've worn many hats and taken full ownership to consistently deliver stellar results.
          </p>

          {/* RL Desc. */}
          <div className="mt-10 text-gray-600 text-xl leading-relaxed">
            <span className='flex flex-row gap-1'>
              <strong>Ridgeline Apps
              </strong>
              <Image
                src="/Ridgeline.png"
                width={30}
                height={30}
                style={{ objectFit: "contain" }}
                alt="LinkedIn Icon"
              />
            </span>
            <p className='text-lg'>
              Vertically integrated financial software for asset management firms.
            </p>
          </div>

          {/* QEII */}
          <p className='md:px-4 text-lg leading-relaxed mt-4'>
            <strong>Quality Engineer II</strong>, February 2024 - Present
          </p>
          <p className='leading-relaxed md:px-4 md:mt-0 mt-2'>
          Expanded my responsibilities to become the sole QE for the newly formed Client Portal team, working cross-functionally and owning all quality assurance processes. I introduced a new UI load testing framework to the company that helped multiple teams identify and resolve performance bottlenecks. Additionally, I served as the resident demo voice for Client Portal, showcasing our new product to numerous prospective customers.          </p>

          {/* QEI */}
          <p className='md:px-4 text-lg  leading-relaxed mt-6'>
            <strong>Quality Engineer I</strong>, February 2023 - February 2024
          </p>
          <p className='leading-relaxed md:px-4 md:mt-0 mt-2'>
          Joined Ridgeline full-time as the sole QE supporting the Revenue Management team, where I owned all test plans and developed comprehensive test automation suites. I quickly became the team's go-to product expert, and used this knowledge to lead efforts in troubleshooting customer issues. I also managed service deployments and feature flag flips, using my expertise to build a deployment framework that was later adopted by other teams.          </p>

          {/* QA Intern */}
          <p className='md:px-4 text-lg leading-relaxed mt-6'>
            <strong>QA Engineer Intern</strong>, June 2022 - August 2022
          </p>
          <p className='leading-relaxed md:px-4 text md:mt-0 mt-2'>
            Created manual test plans, developed UI and API test automation, and collaborated with Product Managers and Software Engineers to deliver top-notch features using Agile methods. I was also given the intern award for "Most Majestic Beard", but have since shaved.
          </p>

          {/* HP  Desc. */}
          <div className="mt-10 text-gray-600 text-xl leading-relaxed">
            <span className='flex flex-row gap-2'>
              <strong>HP Inc
              </strong>
              <Image
                src="/hp.png"
                width={30}
                height={30}
                style={{ objectFit: "contain" }}
                alt="HP Icon"
              />
            </span>
            <p className='text-lg'>
              Tech giant renowned for its laptops, desktops, and printers.
            </p>
          </div>

          {/* Data Analyst Intern */}
          <p className='md:px-4 text-lg leading-relaxed mt-4'>
            <strong>Data Analyst Intern</strong>, June 2020 - August 2021
          </p>
          <p className='leading-relaxed md:px-4 md:mt-0 mt-2'>
            Dove into large datasets and applied data-driven insights to improve HP's Amazon listing strategy. I must have done okay, because they extended the internship through the school year and into August 2021.
          </p>

          <div className="mt-10 text-gray-600 text-xl leading-relaxed">
            <span className='flex flex-row gap-2'>
              <strong> University of California, Los Angeles
              </strong>
              <Image
                src="/ucla.png"
                width={40}
                height={40}
                style={{ objectFit: "contain" }}
                alt="UCLA Icon"
              />
            </span>
            <p className='text-lg'>
              The #1 public university in the US.
            </p>
          </div>
          <p className='md:px-4 text-lg leading-relaxed mt-4'>
            <strong>B.A. Economics, Minor in Statistics</strong>, September 2018 - December 2022
          </p>
          <p className='leading-relaxed md:px-4 md:mt-0 mt-2'>
          Tackled a diverse curriculum of theoretical and mathematical economics, statistics, and a variety of liberal arts courses. I also made the most of UCLA's #1 ranking in best college food. Go Bruins!
          </p>
        </section>

        <section id="Projects" className="mt-10 bg-gray-50 p-10 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">Projects</h2>
          <p className="mt-2 text-lg leading-relaxed">
            Click to interact</p>

          <div className="flex flex-col md:flex-row justify-center py-4 gap-4">

            {/* Personal Website */}
            <div className="bg-gray-200 rounded-xl p-4 max-w-md w-full flex flex-col justify-center items-center hover:scale-95 transition-transform duration-200 ease-in-out">
              <Link
                href="#Projects"
              >
              <p className="px-4 md:text-lg leading-relaxed text-center">
                <strong>Personal Website</strong>
              </p>
              <p className="leading-relaxed px-4 text text-center">
                This website you're on is a way for me to share more about myself beyond my resume and offer a glimpse into who I am on a more personal level.
              </p>
              <div>
                <ul className='flex flex-row flex-wrap justify-center items-center gap-2 mt-2'>
                  <li className='bg-gray-300  rounded-xl px-2 py-1'>TypeScript</li>
                  <li className='bg-gray-300  rounded-xl px-2 py-1'>React</li>
                  <li className='bg-gray-300  rounded-xl px-2 py-1'>Tailwind</li>
                  <li className='bg-gray-300  rounded-xl px-2 py-1'>Next.js</li>
                  <li className='bg-gray-300  rounded-xl px-2 py-1'>Vercel</li>
                </ul>
              </div>
            </Link>
          </div>

            {/* Replit Agent */}
            <div className="bg-gray-200 rounded-xl p-4 max-w-md w-full flex flex-col justify-center items-center hover:scale-95 transition-transform duration-200 ease-in-out">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://bay-area-sports-trivia-challenge-Alecabdul.replit.app"
              >
                <p className="px-4 md:text-lg leading-relaxed text-center">
                  <strong>Bay Area Sports Trivia</strong>
                </p>
                <p className="leading-relaxed px-4 text text-center">
                  A game that tests the user's knowledge of Bay Area sports, which even a lifelong fan like me finds difficult.
                </p>
                <div>
                  <ul className='flex flex-row flex-wrap justify-center items-center gap-2 mt-2'>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>Replit Agent</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>JavaScript</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>Python</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>Flask</li>
                  </ul>
                </div>
              </Link>
            </div>

            {/* Maps */}
            <div className="bg-gray-200 rounded-xl p-4 max-w-md w-full flex flex-col justify-center items-center hover:scale-95 transition-transform duration-200 ease-in-out">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://the-spots-Alecabdul.replit.app"
              >
                <p className="px-4 md:text-lg leading-relaxed text-center">
                  <strong>The Spots</strong>
                </p>
                <p className="leading-relaxed px-4 text text-center">
                  My favorite places on Earth, pinned with descriptions using Google Maps.
                </p>
                <div>
                  <ul className='flex flex-row flex-wrap justify-center items-center gap-2 mt-2'>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>Google Maps API</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>TypeScript</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>React</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>Tailwind</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>Next.js</li>
                  </ul>
                </div>
              </Link>
            </div>

                        {/* Weather */}
            <div className="bg-gray-200 rounded-xl p-4 max-w-md w-full flex flex-col justify-center items-center hover:scale-95 transition-transform duration-200 ease-in-out">
              <Link
                rel="noopener noreferrer"
                target="_blank"
                href="https://weather-app-Alecabdul.replit.app"
              >
                <p className="px-4 md:text-lg leading-relaxed text-center">
                  <strong>Weather Dashboard</strong>
                </p>
                <p className="leading-relaxed px-4 text text-center">
                  Simultaneously view real-time weather for any city in the world.
                </p>
                <div>
                  <ul className='flex flex-row flex-wrap justify-center items-center gap-2 mt-2'>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>OpenWeatherMap API</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>TypeScript</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>React</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>Tailwind</li>
                    <li className='bg-gray-300  rounded-xl px-2 py-1'>Next.js</li>
                  </ul>
                </div>
              </Link>
            </div>
          </div>
        </section>


        <section id="Facts" className="mt-10 bg-gray-50 p-10 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">Fun Facts</h2>
          <p className="mt-2 text-lg leading-relaxed">
            For when I can't think of one on the spot</p>
          <ul className='flex flex-col list-disc mt-4 gap-2 leading-relaxed px-4'>
            <li>I'm from Oakland, CA</li>
            <li>I'm a native Spanish speaker</li>
            <li>I've traveled to over 20 countries</li>
            <li>I'm an Eagle Scout and am prepared for anything</li>
            <li>I lived in Florence for several months and ate my weight in pistachio gelato</li>
            <li>I love attending music festivals and have been to some of the biggest</li>
          </ul>
        </section>

      </div >
    </main >
  );
}
