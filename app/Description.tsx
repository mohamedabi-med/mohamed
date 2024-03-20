"use client"
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation'
const Description = () => {
  return (
    <>
      <h1 className="text-5xl font-black text-center position relative">Our Services</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">

        <div className="mb-8">
          <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure>
              <img src="website.jpg" alt="Website Development" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold mb-4">Software Development</h2>
              <ul className="list-disc ml-5">
                <li>Website Development</li>
                <li>Mobile Applications</li>
                <li>Visual Identity</li>
              </ul>
              <div className="card-actions justify-end">
                <Link className="btn btn-primary" href="software"> 
                    Details
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure>
              <img src="graphic.jpg" alt="Graphic Design" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold mb-4">Graphic Design</h2>
              <ul className="list-disc ml-5">
                <li>Logo Design</li>
                <li>Branding</li>
                <li>Print & Digital Designs</li>
              </ul>
              <div className="card-actions justify-end">
                <Link href="/graphic"> {/* Corrected the path */}
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card bg-base-100 shadow-xl rounded-lg overflow-hidden transition-transform transform hover:scale-105">
            <figure>
              <img src="images.jpeg" alt="Computer Science Courses" className="w-full h-64 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-lg font-bold mb-4">Computer Science Courses</h2>
              <ul className="list-disc ml-5">
                <li>Introduction To Computer Science</li>
                <li>Web Development</li>
                <li>Mobile Application Development</li>
                <li>Software Engineering</li>
              </ul>
              <div className="card-actions justify-end">
                <Link href="/cources"> {/* Corrected the path */}
                  <button className="btn btn-primary">Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Description;


