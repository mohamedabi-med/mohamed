import Image from "next/image";

import Landing from "./components/landing";
import Hero from "./components/hero";
import Blob from "./components/blob";
import Description from "./Description";
import Spires from "./components/spires";
import Phone from "./components/phone";
import Learnen from "./components/learnen";
import Form from "./components/form";
import Waves from "./components/waves";
import FloatingPhone from "./components/floatingPhone";
import Cards from "./components/cards";

export default function Home() {
  return (
    <>
    
      <div className="container mx-auto">
        <Hero />
        <Landing />
        <Phone />
        <Cards />
        <Learnen />
        <Description />
        <Form />
        <Waves />
      </div>
    </>
  );
}
