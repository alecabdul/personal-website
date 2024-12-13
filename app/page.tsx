import React from 'react';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { roboto } from './ui/fonts';
import Image from 'next/image';
import { DocumentTextIcon, AtSymbolIcon } from '@heroicons/react/24/outline';


export default function Page() {
  return (
    <main className="flex bg-white-100 text-gray-600 flex-col py-6 p-10">
      {/* Intro Section */}
      <section>
        {/* <div className='relative gap-6'>
          <Link
            href="/Alec_Abdul-Rahim_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-10 right-6 flex items-center gap-2 rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
          >
            <span >Résumé</span> <DocumentTextIcon className='w-7 h-7' />
          </Link>
        </div> */}
        <div className="flex flex-col gap-4 min-h-screen md:flex-row">
          <div className="flex rounded-xl flex-col justify-center gap-4 bg-gray-50 px-6 py-10 md:w-2/5 md:px-12">
            <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <strong>Hi, I'm Alec.</strong></p>
            <p>I'm a <strong>Software Quality Engineer</strong> currently based in Lake Tahoe. My goal is to keep growing my technical knowledge while collaborating with teams to deliver solutions that people love.
            </p>
            <p> When I'm not behind the keyboard, you'll find me hiking, snowboarding, trying new food, or exploring new places.</p>
            <p> This website is built in effort to improve my <strong>React</strong> and <strong>Next.js</strong> skills, so it is a WIP.
            </p>
            {/* <p> Feel free to contact or follow me:
            </p>  
            <span className='flex flex-row gap-4'>
              <Link
                href="mailto:alecabdul99@gmail.com"
                className="flex items-center gap-3 self-start rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
              >
                <Image
                  src="/email.png"
                  width={40}
                  height={40}
                  alt="Mail Icon"
                />
              </Link>
              <Link
                href="https://www.linkedin.com/in/alec-abdul-rahim-6812ba183/"
                className="flex flex-row items-center gap-3 self-start rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
              >
                <Image
                  src="/linkedin.png"
                  width={40}
                  height={40}
                  alt="LinkedIn Icon"
                />
              </Link>
              <Link
                href="https://www.instagram.com/rahimthedream_/"
                className="flex items-center gap-3 self-start rounded-xl bg-blue-500 px-4 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
              >
                <Image
                  src="/instagram.png"
                  width={40}
                  height={40}
                  alt="LinkedIn Icon"
                />
              </Link>
            </span> */}
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl bg-gray-50 md:w-3/5 md:h-auto">
            <div
              className="relativeflex items-center justify-center"
              style={{
                padding: '12px', // Padding between the image and the gray background
              }}
            >
              <Image
                src="/riflepeak.jpeg"
                layout="intrinsic"
                width={800}
                height={600}
                alt="Screenshots of the dashboard project showing desktop version"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* New Experience Section */}
      <section className="mt-10 bg-gray-50 p-10 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">Experience</h2>
        <p className="mt-4 text-xl leading-relaxed">
          In my career so far, I've worn many hats and taken a lot of ownership, which has given me great opportunity to develop a variety of skills - project management, technical, and leadership skills.</p>

        {/* RL Desc. */}
        <div className="mt-10 text-gray-600 md:text-xl leading-relaxed">
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
          <p>
            Vertically integrated financial software for asset management firms.
          </p>
        </div>

        {/* QEII */}
        <p className='px-4 md:text-lg  leading-relaxed mt-6'>
          <strong>Quality Engineer II</strong>, February 2024 - Present
        </p>
        <p className='leading-relaxed px-4'>
          Expanded responsibilities to be sole QE for the newly formed Client Portal team, introducing new challenges for Ridgeline where maintaining performance quality was mission-critical. I owned the entire quality assurance process, from product ideation to go-live, and continue to ensure its success today.
        </p>

        {/* QEI */}
        <p className='px-4 md:text-lg  leading-relaxed mt-6'>
          <strong>Quality Engineer I</strong>, February 2023 - February 2024
        </p>
        <p className='leading-relaxed px-4'>
          Joined full-time at Ridgeline as the sole QE supporting the Revenue Management team. Developed comprehensive test automation suites, executed test plans, and managed code deployments.
        </p>

        {/* QA Intern */}
        <p className='px-4 md:text-lg leading-relaxed mt-6'>
          <strong>QA Engineer Intern</strong>, June 2022 - August 2022
        </p>
        <p className='leading-relaxed px-4 text'>
          Created manual test plans, developed UI and API test automation, and collaborated with Product Managers and Software Engineers to deliver top-notch features in an AGILE fashion.
        </p>

        {/* HP  Desc. */}
        <div className="mt-12 text-gray-600 md:text-xl leading-relaxed">
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
          <p>
            Tech giant renowned for its laptops, desktops, and printers.
          </p>
        </div>

        {/* Data Analyst Intern */}
        <p className='px-4 md:text-lg leading-relaxed mt-6'>
          <strong>Data Analyst Intern</strong>, June 2020 - August 2021
        </p>
        <p className='leading-relaxed px-4'>
          Dove into large datasets and applied data-driven insights to improve HP's Amazon listing strategy for the Omnichannel Strategy team. The internship was extended through the school year and into August 2021.
        </p>
      </section>

      {/* New Education Section */}
      <section className="mt-10 bg-gray-50 p-10 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">Education</h2>
        <p className="mt-4 text-gray-600 text-xl leading-relaxed">
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
        </p>
        <p className='text-lg'>
          B.A. Economics, Minor in Statistics
        </p>
        <p className='text-lg'>
          September 2018 - December 2022
        </p>
        <p className='list-disc mt-4 leading-relaxed px-4'>
          Attended the <strong>#1</strong> public university in the US, where I pursed a diverse academic curriculum through theoretical and mathematical economics, statistics, and a variety of liberal arts courses. Also studied abroad in Florence in the Fall of 2021.       </p>
      </section>

      {/* Fun Section
      <section className="mt-10 bg-gray-50 p-10 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 md:text-3xl">Some things I've done</h2>
        <p className="mt-4 text-gray-600 text-xl leading-relaxed">
          <span className='flex flex-row gap-2'>
            <strong> Coming soon...
            </strong>
          </span>
        </p>
        <p className='text-lg'>
          B.A. Economics, Minor in Statistics
        </p>
        <p className='text-lg'>
          September 2018 - December 2022
        </p>
        <p className='list-disc mt-4 leading-relaxed px-4'>
          I had the privilege of attending the <strong>#1</strong> public university in the US, where I pursued a diverse academic track through theoretical and mathematical economics, statistics, and a variety of liberal arts courses. I also studied abroad in Florence in the Fall of 2021.
        </p>
      </section> */}
    </main>
  );
}
