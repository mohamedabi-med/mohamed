"use client"
import Image from "next/image";

import Landing from "./components/landing";
import Hero from "./components/hero";
import Blob from "./components/blob";
import Description from "./Description";
// import Spires from "./components/spires";
import Phone from "./components/phone";
import Learnen from "./components/learnen";
import ContactForm from "./form/page";
import Waves from "./components/waves";
import FloatingPhone from "./components/floatingPhone";
import Cards from "./components/cards";
import Word from "./components/Word";
import GlobeDemo from "./components/GlobeDemo";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { firebaseConfig } from "../firebaseConfig";

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// (Optional) Initialize Firebase Analytics
const analytics = getAnalytics(firebaseApp);

export default function Home() {
  return (
    <>
    
      <div className="container mx-auto">
        <Hero />
        <Landing />
        <Phone />
        <GlobeDemo/>
        <Word/>
        <Cards />
        <Learnen />
        <Description />
        <ContactForm />
        <Waves />
      </div>
    </>
  );
}
