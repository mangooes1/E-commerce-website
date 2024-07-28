import React from "react";
import "../styles/template.css";

const Features = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-lg-4 mb-lg-0 mb-4">
          <a href="#">
            <div className="card card-background move-on-hover mb-4">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/glass-wall.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Campus 6</h4>
                <p>
                  Website visitors today demand a frictionless user
                  experience.
                </p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="card card-background move-on-hover">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/vr.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Virtual Office</h4>
                <p>
                  If you’re more passionate about founding a business than the
                  business itself, you can fall into a ten-year trap. Better to
                  stay emotionally unattached and select the best opportunity
                  that arises. Applies to relationships too.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 mb-lg-0 mb-4">
          <a href="#">
            <div className="card card-background move-on-hover mb-4">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/books.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Cozy Spots</h4>
                <p>
                  If you’re more passionate about founding a business than the
                  business itself, you can fall into a ten-year trap. Better to
                  stay emotionally unattached and select the best opportunity
                  that arises. Applies to relationships too.
                </p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="card card-background move-on-hover">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/team-members.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Co-working Spaces</h4>
                <p>
                  Smart money is just dumb money that’s been through a crash.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4">
          <a href="#">
            <div className="card card-background move-on-hover mb-4">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/window-desk.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Home Office</h4>
                <p>
                  Website visitors today demand a frictionless user experience
                  — especially when using search. Because of the high
                  standards.
                </p>
              </div>
            </div>
          </a>

          <a href="#">
            <div className="card card-background move-on-hover">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/imac.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Private Space</h4>
                <p>
                  Technology is not only the thing that moves the human race
                  forward, but it’s the only thing that ever has. Without
                  technology, we’re just monkeys playing in the dirt.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
