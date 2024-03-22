"use client"
import React from 'react';
import './anim.css';
import Link from "next/link";
import  TextGenerateEffect  from "./ui/text-generate-effect";
const words = `From a small WordPress task emerged a wealth of experience, shaping my skills and passion for web development.
`;
const Courses = () => {
  return (
    <>
    <h1 className="text-5xl font-bold translate-y-[8px] text-center">+44 international Freelance  Projects  !</h1> 
    <div className="ag-format-container">
      <div className="ag-courses_box">
        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              USA
            </div>

            <div className="ag-courses-item_date-box">
              +
              <span className="ag-courses-item_date">
                15
              </span>
            </div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              CANADA
            </div>

            <div className="ag-courses-item_date-box">
              +
              <span className="ag-courses-item_date">
                4
              </span>
            </div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              FRANCE
            </div>

            <div className="ag-courses-item_date-box">
              +
              <span className="ag-courses-item_date">
                2
              </span>
            </div>
          </a>
        </div>

        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              ALGERIA
            </div>

            <div className="ag-courses-item_date-box">
              +
              <span className="ag-courses-item_date">
                20
              </span>
            </div>
          </a>
        </div>
        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              TUNISIE
            </div>

            <div className="ag-courses-item_date-box">
              +
              <span className="ag-courses-item_date">
                1
              </span>
            </div>
          </a>
        </div>
        <div className="ag-courses_item">
          <a href="#" className="ag-courses-item_link">
            <div className="ag-courses-item_bg"></div>

            <div className="ag-courses-item_title">
              MAROC
            </div>

            <div className="ag-courses-item_date-box">
             +
              <span className="ag-courses-item_date">
                2
              </span>
            </div>
          </a>
        </div>
      </div>
      <div>
        <h1 className="text-5xl font-bold translate-y-[8px] text-center">Importante Clients !</h1> 
       <video autoPlay loop muted className="h-full w-full rounded-lg">
        <source src="AMAZON.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <div className="hero-content flex flex-col lg:flex-row-reverse justify-center items-center px-4 md:px-8 lg:ml-7">
          <div className="mb-8 lg:mb-0 lg:mr-12">
             <figure><img src="amazon.png" alt="Album"/></figure>
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-4xl  md:text-5xl lg:text-6xl  bg-base-100 text-base-content font-bold mb-4">Texas Houston Amazon Office  was Our Client in 2023!</h1>
            <div className="text-lg md:text-xl lg:text-2xl py-4 md:py-6 bg-base-100 text-base-content lg:py-8"><TextGenerateEffect words={words} /></div>
            <Link href="lastProjects">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">Hire Us</button>
            </Link>
          </div>
        </div>
      </div>
      </div>
      </div>
       
    </>
  );
};

export default Courses;
