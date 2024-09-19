"use client";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  VerticalTimelineElement,
  VerticalTimeline,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      <main className="bg-[#003049] px-[4%] md:px-[12%] lg:px-[15%]">
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
              Each Project has a link to my GitHub code. Feel free to look at
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
                  <source src="Demo.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() =>
                      window.open(
                        "https://github.com/SatyaShodhaka/perfectpitch",
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
                  PerfectPitch
                </h3>
                <p className="mt-2 text-gray-200  text-[14px]">
                  AI-powered platform designed to provide tailored feedback,
                  script assistance, and a performance score for personalized
                  interview preparation.
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
                  <source src="olympic.mp4" type="video/mp4" />
                </video>

                <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                  <div
                    onClick={() =>
                      window.open(
                        "https://github.com/chaudharycoding/-Predictive-Analytics-for-Olympic-Medal-Counts-using-Machine-Learning-",
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
                  Olympic Medal Predictor
                </h3>
                <p className="mt-2 text-gray-200  text-[14px]">
                  Predictive analytics project designed to forecast Olympic
                  medal counts using historical data and machine learning
                  models.
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
                <p className="mt-2 text-gray-200 text-[14px]">
                  Web-based platform that is designed to help you store,
                  annotate and manage your LeetCode questions efficiently.
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
              date="March 2024 - April 2024"
              iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src="snapchat.png"
                    alt="psfdsa"
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
              }
              visible={true}
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  AR & VR Developer Extern
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  Snap Inc.
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Designed a soccer-themed AR lens incorporating Snap's Lens
                  Studio and 3D modeling, certified by Snap Inc.’s Head of
                  Entertainment.
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Launched a Snapchat lens inspired by Reebok and soccer,
                  compatible with iOS and Android, gathering views from 100+
                  countries.
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Conducted data-driven market research in sports and technology
                  using Tableau, and MySQL enhancing data visualization by 30%.
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#415A77", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(255, 255, 255)",
              }}
              date="May 2024 - July 2024"
              iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src="result.png"
                    alt="psfdsa"
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>
              }
              visible={true}
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  Data Science Intern
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  Neftwerk
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Designed and sorted data from CSVs to Attio dashboards to
                  improve client information accuracy and operational efficiency
                  by 60%.
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Leveraged Attio’s REST API to implement filtering and
                  pagination, optimizing data retrieval by 30% and enhancing
                  user experience.
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Structured app’s code and documentation on GitHub,
                  contributing to increased project workflows and easier team
                  collaboration.
                </li>
              </ul>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "#415A77", color: "#fff" }}
              contentArrowStyle={{
                borderRight: "7px solid  rgb(255, 255, 255)",
              }}
              date="Sep 2024 - present"
              iconStyle={{ background: "rgb(255, 255, 255)", color: "#fff" }}
              icon={
                <div className="flex justify-center items-center w-full h-full">
                  <img
                    src="lab.png"
                    alt="psfdsa"
                    className="w-[90%] h-[90%] object-contain"
                  />
                </div>
              }
              visible={true}
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  Personalizing LLM Research Fellow
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  Center for Intelligent Information Retrieval
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  TBD
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
                    src="UMass.png"
                    alt="psfdsa"
                    className="w-[80%] h-[80%] object-contain"
                  />
                </div>
              }
              visible={true}
            >
              <div>
                <h3 className="text-white text-[24px] font-bold">
                  Undergraduate ML Researcher{" "}
                </h3>
                <p
                  className="text-secondary text-[16px] font-semibold"
                  style={{ margin: 0 }}
                >
                  University of Massachusetts Amherst
                </p>
              </div>

              <ul className="mt-5 list-disc ml-5 space-y-2">
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Optimized a CNN for ASL recognition, achieving a 97% F1 score
                  through data augmentation and additional convolutional layers.
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Utilized ResNet pre-trained models to enhance accuracy to 98%
                  and reduce overfitting, improving generalization on unseen
                  data.
                </li>
                <li className="text-white-100 text-[14px] l-1 tracking-wider">
                  Enhanced model robustness in Keras with batch normalization,
                  and the Image Data Generator for consistent validation
                  performance.
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
