// pages/index.js or pages/index.tsx
"use client";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import Forms from "./components/Forms";
import Cards from "./components/Cards";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Query from "./components/Query";
import About from "./components/About";
import Footer  from "./components/Footer";
import ShoppingPage from "./components/ShoppingPage";



const page = () => {
  return (
    <>
      <Navbar />
      <Main />
      <Cards />
      <Features />
      <Contact />
      <Social />
      <Query />
      <About />
      <Footer />
      <ShoppingPage/>

    </>
  )
}

export default page;
