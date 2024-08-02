
"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Cards from "./components/Cards";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Query from "./components/Query";
import About from "./components/About";
import Footer  from "./components/Footer";



const page = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Cards />
      <Features />
      <Social />
      <Query />
      <About />
      <Contact />
      <Footer />
 
    </>
  )
}

export default page;
