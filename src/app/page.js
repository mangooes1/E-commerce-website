"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Footer from "./components/Footer";

const page = () => {
  return (
    <>
      <div>
        <Navbar />
        <Main />
        <Features />
        <Social />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default page;
