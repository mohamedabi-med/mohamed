"use client";
import React from "react";
import HeroParallax  from "../components/ui/hero-parallax";
const products = [
  {
    title: "Moonbeam",
    link: "https://kabylospizza.com/",
       thumbnail: "/projects/1.png",
  },
  {
    title: "Cursor",
    link: "https://kabylospizza.com/",
    thumbnail: "/projects/1683928616694.jpg",
  },
  {
    title: "Maktabaaty",
    link: "https://userogue.com",
    thumbnail: "/projects/6517924409278b6e78dbba33_0.c9a97a5c1858d23deed5.png",
  },

  {
    title: "Bulleyes",
       link: "https://bullseyeinspections.com/",
   thumbnail: "/projects/6517924409278b6e78dbba33_1.5727e83201f4d508ee8f.png",
  },
  {
    title: "Bulleyes",
        link: "https://bullseyeinspections.com/",
      thumbnail: "/projects/6517924409278b6e78dbba33_2.b7348cece11afb1c6da4.png",
  },
  {
    title: "Bulleyes",
    link: "https://bullseyeinspections.com/",
     thumbnail: "/projects/651792cc09278b6e78dbba4d_1.fe9c0399e1d547fd7fb3.png",
  },

  {
    title: "Pharma",
    link: "https://algochurn.com",
        thumbnail: "/projects/Screenshot 2024-02-28 063751.png",
  },
  {
    title: "Pharma",
    link: "https://ui.aceternity.com",
         thumbnail: "/projects/Screenshot 2024-02-28 063832.png",
  },
  {
    title: "LegendSecurityServices",
    link: "https://bullseyeinspections.com/",
         thumbnail: "/projects/Screenshot 2024-03-20 065416.png",
  },
  {
    title: "LegendSecurityServices",
      link: "https://legendsecurityservices.com/",
    thumbnail: "/projects/Screenshot 2024-03-20 065446.png",
  },
  {
    title: "LegendSecurityServices",
  link: "https://legendsecurityservices.com/",
       thumbnail: "/projects/Screenshot 2024-03-20 065507.png",
  },

  {
    title: "LegendSecurityServices",
    link: "https://legendsecurityservices.com/",
     thumbnail: "/projects/Screenshot 2024-03-20 065709.png",
  },
  {
    title: "LegendSecurityServices",
     link: "https://legendsecurityservices.com/",
     thumbnail: "/projects/Screenshot 2024-03-20 065745.png"
  },
  {
    title: "LegendSecurityServices",
  link: "https://legendsecurityservices.com/",
  thumbnail: "/projects/Screenshot 2024-03-20 065818.png"
  },
  {
    title: "LegendSecurityServices",
    link: "https://legendsecurityservices.com/",
  thumbnail: "/public/projects/Screenshot 2024-03-20 065709.png"
  },

];

const lastProjects = () =>{
  return (    <>
     
      <HeroParallax products={products} />
  
    </>)

}
 

export default lastProjects;