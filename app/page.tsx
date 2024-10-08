"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Link from "next/link";

export default function Home() {
  /* blue is #2d545e // green is #357960 // dark blue is #12343b */
  return (
    <div>
      <main className="bg-[#2d545e] px-[4%] md:px-[12%] lg:px-[15%]">
        <section>
          <nav className="pt-10 pb-2 flex flex-wrap flex-col sm:flex-row justify-between items-center">
            <h1 className="text-white font-black md:text-[40px] sm:text-[30px] xs:text-[30px] text-[20px]">
              Omer Karimi
            </h1>
            <ul className="flex flex-wrap items-center justify-center mt-2 sm:mt-0">
              <Link className=" ml-3 md:ml- text-white" href="#Experience">
                Experience
              </Link>
              <Link className=" ml-3 md:ml- text-white" href="#Projects">
                Projects
              </Link>
              <Link className=" ml-3 md:ml-5 text-white" href="#Contact">
                Contact
              </Link>

              <button className="text-[#C0D6DF] outline outline-2 outline-white hover:bg-[#415A77] hover-text: rounded px-2 py-1 ml-5 md:ml-8 mb-2 mt-2 sm:mt-0">
                <a href="Omer Karimi Resume.pdf" target="_blank">
                  Resume{" "}
                </a>
              </button>
            </ul>
          </nav>
          <hr className="h-0.5 border-t-0 bg-gray-300 opacity-100" />

          <div className="pb-10">
            <p className="text-base py-4 leading-8 text-white">
              Hey! My name is Omer Karimi, a computer science major at
              University of Massachusetts, Amherst. I particularly love working
              with backend, databases, and the wide field of data sciences.
            </p>
            <p className="text-base py-4 leading-8 text-white">
              Currently, I'm working on a range of personal projects, the latest
              being Thinkerly, a productivity enhancing application written in
              React-Native. This app was to focus on teaching myself how to do
              cross-platform mobile development while implementing persistant
              storage with SQLite. Before this, I collaborated with other
              developers to create LeetBank, a web application to storing,
              annotating, and categorizing LeetCode questions. This project was
              written in React and deployed on Vercel. In the future, I look
              forward to working on more data science heavy projects to garner a
              wide range of skills.
            </p>
            <p className="text-base py-4 leading-8 text-white">
              Additionally, I'm a huge fan of reading books, currently reading
              Fyodor Dostoevsky's 'The Brothers Karamazov'.
            </p>
          </div>
        </section>

        <section id="Projects">
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Projects
          </h3>
          <div className="w-full flex">
            <p className="mt-3 text-white text-[17px] leading-[30px]">
              Each project has a link to my GitHub code. Feel free to look at
              the quick video demos or check out my code.
            </p>
          </div>
          <div className="flex flex-col lg:flex-row mt-10 justify-center mb-10">
            <div
              className="bg-[#415A77] p-5 rounded-2xl
     sm:w-[400px] min-w-[350px]  w-full mb-4"
            >
              <div className="relative w-full h-[240px]">
                <video
                  className="w-full h-full object-cover
          rounded-2xl"
                  autoPlay
                  loop
                  muted
                >
                  <source src="leetbank.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() =>
                      window.open(
                        "https://github.com/rahmanMian/LeetBank",
                        "_blank",
                      )
                    }
                    className="black-gradient w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer"
                  >
                    <img
                      src="github.png"
                      alt="github"
                      className="bg-black rounded-full flex items-center justify-center text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">LeetBank</h3>
                <p className="mt-2 text-gray-200  text-[14px]">
                  Web-based platform that is designed to help you store,
                  annotate and manage your LeetCode questions efficiently.
                </p>
              </div>
            </div>

            <div
              className="bg-[#415A77] p-5 rounded-2xl
     sm:w-[400px] min-w-[350px] w-full lg:mr-8 lg:ml-8 mb-4"
            >
              <div className="relative w-full h-[240px]">
                <video
                  className="w-full h-full object-cover
          rounded-2xl"
                  autoPlay
                  loop
                  muted
                >
                  <source src="thinkerlyDemo.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() =>
                      window.open(
                        "https://github.com/itsKia2/Thinkerly",
                        "_blank",
                      )
                    }
                    className="black-gradient w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer"
                  >
                    <img
                      src="github.png"
                      alt="github"
                      className="bg-black rounded-full flex items-center justify-center text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  Thinkerly: Productivity Enhancement Mobile App
                </h3>
                <p className="mt-2 text-gray-200  text-[14px]">
                  Cross-Platform iOS/Android mobile app to increase productivity
                  through targeted focusing methods.
                </p>
              </div>
            </div>

            <div
              className="bg-[#415A77] p-5 rounded-2xl
     sm:w-[400px] min-w-[350px] w-full mb-4 "
            >
              <div className="relative w-full h-[240px]">
                <video
                  className="w-full h-full object-cover
          rounded-2xl"
                  autoPlay
                  loop
                  muted
                >
                  <source src="leetbank.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() =>
                      window.open(
                        "https://github.com/itsKia2/okarimi.com",
                        "_blank",
                      )
                    }
                    className="black-gradient w-10 h-10 rounded-full flex justify-center
            items-center cursor-pointer"
                  >
                    <img
                      src="github.png"
                      alt="github"
                      className="bg-black rounded-full flex items-center justify-center text-white"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">
                  okarimi.net
                </h3>
                <p className="mt-2 text-gray-200 text-[14px]">
                  My open-source portfolio website code itself!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="Experience">
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Experience
          </h3>
          <VerticalTimeline>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#415A77", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "8px solid  rgb(255, 255, 255)",
              }}
              date="August 2022 - Present"
              iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src="UMass.png"
                    alt="UMass Logo"
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
              }
              visible={true}
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  Office Assistant
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  Office of Faculty Development, UMass Amherst
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Engineered Python script to automate data reports and reveal
                  trend analysis across campus. It saved 27 hours of manual work
                  quarterly.
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Designed and distributed 150+ campus-wide Qualtrics surveys
                  annually for 2,000+ faculty, contributing to data collection
                  and event management.
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Improved office efficiency overall by 25% through migrating to
                  cloud tools such as monday.com
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#415A77", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(255, 255, 255)",
              }}
              date="April 2023 - Present"
              iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src="pso.png"
                    alt="psfdsa"
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>
              }
              visible={true}
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">Secretary</h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  Pakistani Student Organization
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Directed the planning and execution of large-scale cultural
                  awareness events. These events attracted 500+ multi-cultural
                  attendees
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Led outreach and marketing efforts to other organizations;
                  boosted member count by 34%
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#415A77", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(255, 255, 255)",
              }}
              date="May 2023 - July 2023"
              iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src="walmart.png"
                    alt="psfdsa"
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>
              }
              visible={true}
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  Front-End Associate
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  Walmart
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Utilized POS systems to process $7,000+ reliably and daily
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Ensured consistent customer satisfaction in fast-paced
                  environment
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#415A77", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid rgb(255, 255, 255)",
              }}
              date="June 2024 - Aug 2024"
              iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src="haque.png"
                    alt="psfdsa"
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
              }
              visible={true}
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  Technology Instructor / Intern
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  Haque Academy
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Taught coding logic and core game development principles to
                  kids aged 6-8 via Scratch, resulting in interactive projects
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Utilized project-based learning to teach user interface
                  design, fostering problem-solving and creative thinking
                </li>
              </ul>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </section>

        <section id="Contact">
          <hr className="mt-20 h-0.5 border-t-0 bg-gray-300 opacity-100" />
          <div className="py-10 text-5xl flex items-center justify-center align-items-center gap-10 sm:gap-16 text-gray-600">
            <p className="text-base py-4 leading-8 text-white">
              <a href="mailto:okarimi@umass.edu">okarimi@umass.edu</a>
            </p>
            <a
              href="https://github.com/itsKia2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillGithub className="hover:fill-white -500" />
            </a>
            <a
              href="https://www.linkedin.com/in/okarimi/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin className="hover:fill-white -500" />
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
