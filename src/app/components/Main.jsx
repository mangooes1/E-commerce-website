'use client'
import React from "react";
import "../styles/template.css";
import Typewriter from "typewriter-effect";
// import Link from "next/link";
import { useRouter } from 'next/navigation'

const PageHeader = () => {

  const router = useRouter();
  return (
    <div className="page-header min-vh-100" style={{backgroundImage:
              "url(https://demos.creative-tim.com/soft-ui-design-system/assets/img/curved-images/curved11.jpg)",}}>
    <div > 
      <div className="oblique position-absolute top-0 h-100 d-md-block d-none">
      {/* 2nd image */}
        {/* <div
          className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6"
          style={{
            // backgroundImage:
            //   "url(https://i0.wp.com/backgroundabstract.com/wp-content/uploads/edd/2022/02/distressed-grunge-with-diagonal-ink-stripe-background_1409-1373-e1656067454674.jpg?fit=826%2C496&ssl=1)",
          
          }}
        ></div> */}
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
            <h1 className="text-gradient text-primary">
              Illuminate your style with
            </h1>
            <h1 className="mb-4">
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
            <p className="lead pe-5 me-5">
            Experience the brilliance of fashion with us and let your style shine.
            </p>
            <div className="buttons">
              <button type="button" className="btn bg-gradient-primary mt-4" >
             Shop Now
              </button>
              <button
                type="button"
                className="btn text-primary shadow-none mt-4"
              >
                Contact us
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
