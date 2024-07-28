// pages/index.js or pages/index.tsx
"use client";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
// import Forms from "./components/Forms";
import Cards from "./components/Cards";
import Features from "./components/Features";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Main/>
      <Cards/>
      <Features />
      <Contact />


      {/* <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl text-white">Hi! Aditya</h1>
      </div> */}


    </div>
  );
}
