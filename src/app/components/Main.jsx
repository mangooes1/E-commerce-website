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
               "url(https://images.unsplash.com/photo-1509067917181-3ec8d8ef5170?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
              
               }}
    >
  
    <div > 
      <div className="container" id="home">
        <div className="row">
          <div className="col-lg-12 col-md-7 d-flex justify-content-center flex-column">
            <h1 className="head"
            style={{color:`#E4C59E`}}
            >
              Illuminate your style with
            </h1>
            <h1 className="mb-4" style={{color:`#E4C59E`}}>
              <Typewriter
                options={{
                  strings: [
                    "Our Lehngas",
                    "Our Elegant Dresses",
                    "Our Exqusite Designs",
                    "Stitch&Glow.",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p className="lead pe-5 me-5" style={{color:`#FFF5E0`}}>
            Experience the brilliance of fashion with us and let your style shine.
            </p>
            <div className="buttons">
              <button type="button" className="btn bg-black mt-4" >
              <a href="#features" style={{color:`#FFF5E0`}} >Shop Now</a>
              </button>
              <button
                type="button"
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
