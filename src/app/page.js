// pages/index.js or pages/index.tsx
"use client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import Forms from "./components/Forms";
import Cards from "./components/Cards";
import Features from "./components/Features";
import Contact from "./components/Contact";
import Social from "./components/Social";
import Query from "./components/Query";
import About from "./components/About";
import SignUp from "./components/SignUp";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Main/>
      <Cards/>
      <Social />
      <Features />
      <Query/>
      <Contact />
      <About />
      <SignUp />
   


      {/* <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl text-white">Hi! Aditya</h1>
      </div> */}


    </div>
  );
}
