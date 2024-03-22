"use client"
import React, { useState } from 'react';

import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import Hero from '../components/hero';
import Word from '../components/Word';
import Courses from '../components/cards';


const Aboutus = () => {
  

  return (
       <div className="container mx-auto bg-base-200 text-base-content">
         <Hero />
         <Word />
         <Courses/>
      </div>
  )
}



export default Aboutus;
