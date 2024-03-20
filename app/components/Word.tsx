"use client";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import Link from "next/link";

const Word = () =>{
  return (
    <>  
    
    <h1 className=" text-primary-content  rounded-lg text-5xl transform-y-[10%] font-black grid place-content-center">Meet Our Team Members</h1>
           <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card text-center dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          Mohamed Abi
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
        >
          CEO AND FOUNDER
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4">
          <Image
            src="/me.png"
            height="1000"
            width="1000"
            className="h-100 w-full object-cover rounded-xl group-hover/card:shadow-xl"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-20">
          <CardItem
            translateZ={20}
            as={Link}
            href="form"
            target="__blank"
            className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
          >
            Join Us →
          </CardItem>
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
          >
            <Link href="form">Be A member Of Our Team</Link>
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
    </>
   
  );
}

export default Word;