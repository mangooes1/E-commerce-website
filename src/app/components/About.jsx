import React from "react";
import "../styles/template.css";
const About = () => {
  return (
    <div className="container mt-6" id="about">
      <div className="row">
        <div className="col-lg-6">
          <h3 className="text-gradient text-primary mb-0 mt-2">
            Read More About Us
          </h3>
          <h3>The most important</h3>
          <p>
            Welcome to Stitch & Glow, where we believe in the beauty of handmade
            fashion. We are committed to preserving traditional techniques while
            embracing modern design trends, resulting in a stunning fusion of
            the old and the new.
            <br />
            <br />
            Join us in celebrating the art of artisanal fashion.
          </p>
          <a href="javascript:;" className="text-primary icon-move-right">
            More about us
            <i
              className="fas fa-arrow-right text-sm ms-1"
              aria-hidden="true"
            ></i>
          </a>
        </div>
        <div className="col-lg-6 mt-lg-0 mt-5 ps-lg-0 ps-0">
          <div className="p-3 info-horizontal">
            <div className="icon icon-shape rounded-circle bg-gradient-primary shadow text-center">
              <i className="fas fa-ship opacity-10" aria-hidden="true"></i>
            </div>
            <div className="description ps-3">
              <p className="mb-0">
                Our journey began with a passion for blending traditional
                craftsmanship with contemporary style to create unique garments
                for unique individuals
              </p>
            </div>
          </div>

          <div className="p-3 info-horizontal">
            <div className="icon icon-shape rounded-circle bg-gradient-primary shadow text-center">
              <i className="fas fa-handshake opacity-10" aria-hidden="true"></i>
            </div>
            <div className="description ps-3">
              <p className="mb-0">
                {" "}
                We are committed to preserving traditional techniques while
                embracing modern design trends, resulting in a stunning fusion
                of the old and the new.{" "}
              </p>
            </div>
          </div>
          <div className="p-3 info-horizontal">
            <div className="icon icon-shape rounded-circle bg-gradient-primary shadow text-center">
              <i className="fas fa-hourglass opacity-10" aria-hidden="true"></i>
            </div>
            <div className="description ps-3">
              <p className="mb-0">
                {" "}
                We invite you to explore our collectin to find pieces that match
                your style, perfect for special occasions or enhancing your
                everyday wardrobe.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
