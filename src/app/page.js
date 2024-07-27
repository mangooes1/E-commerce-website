// pages/index.js or pages/index.tsx
"use client";
import Navbar from "./components/Navbar";
// import Forms from "./components/Forms";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar/>
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-4xl text-white">Hi! Aditya</h1>
      </div>
      

    </div>
  );
}
