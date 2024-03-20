"use client";

import React, { useEffect, useState } from "react";
import  InfiniteMovingCards from "../components/ui/infinite-moving-cards";
import Image from 'next/image';
import { EvervaultCard, Icon } from "../components/ui/evervault-card";
import Link from "next/link";
 const  InfiniteMovingCardsDemo =()=> {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const Software = () => {
  return (
    <>
        <h1 className="text-5xl font-black text-center position relative mb-8">Software Development</h1>
      <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-sm mx-auto p-4 relative h-[30rem]">
        <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
        <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

        <EvervaultCard text="Software Developement" />

        <h2 className="dark:text-white text-black mt-4 text-sm font-light">
          <ul className="list-disc ml-5">
              <li>Website Development</li>
              <li>Mobile Applications</li>
              <li>Visual Identity</li>
            </ul>
        </h2>
        <Link href="form">
          <p className="text-sm border font-light dark:border-white/[0.2] border-black/[0.2] rounded-full mt-4 text-black dark:text-white px-2 py-0.5">
            Book Your Cource
        </p>
        </Link>
      </div>
       <h1 className="text-5xl font-black text-center position relative mb-8">ٌReview Us</h1>
       <Link href="review">
          <InfiniteMovingCardsDemo/>
        </Link>
    </>
  );
};

export default Software;

