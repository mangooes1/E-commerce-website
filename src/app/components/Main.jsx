'use client'
import React from "react";
import "../styles/template.css";
import Typewriter from "typewriter-effect";
// import Link from "next/link";
import Image from "next/image";

const PageHeader = () => {

  return (
    <div className="page-header min-vh-90"
     style={{backgroundImage:
               "url(https://images.pexels.com/photos/27155549/pexels-photo-27155549/free-photo-of-smiling-women-in-traditional-clothing-sitting-with-wax-candle.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)",
              
               }}
    >
  
    <div > 
      <div className="container" id="home">
        <div className="row">
          <div className="col-lg-12 col-md-7 d-flex justify-content-center flex-column">
            <h1 className="head"
           style={{color:`#F4DFC8`}}
            >
              Illuminate your style with
            </h1>
            <h1 className="mb-4"  style={{color:`#D4D7DD`}}>
              <Typewriter 
                options={{
                  strings: [
                    "Our Lehngas",
                    "Our Elegant Dresses",
                    "Our Exqusite Designs",
                    "Stitch&Glow",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="lead pe-5 me-5"  style={{color:`#F4DFC8`}} >
            Experience the brilliance of fashion with us and let your style shine.
            </p>
            <div className="buttons">
              <button type="button" className="btn mt-4 mr-2"  style={{ backgroundColor: " #1A1110",border:"1px solid #1B1B1B" }} >
              <a href="/shop" style={{color:`#FFF5E0`}} >Shop Now</a>
              </button>
              <button
                type="button"
                style={{ backgroundColor: "#000" }}
                className="btn text-primary shadow-none mt-4"
              >
              <a href="#contact"style={{color:`#FFF5E0`}}  >Contact us</a>
              
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default PageHeader;
