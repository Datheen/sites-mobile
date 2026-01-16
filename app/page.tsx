import Image from "next/image";

import Hero from "./sections/Hero";
import Header from "./components/Header";
import Sobre from "./sections/Sobre";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    
      <Header/>
      <Hero/>
      <Sobre />
      <Footer/>
    </>
  );
}
