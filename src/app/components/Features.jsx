import React from "react";
import "../styles/template.css";
import Link from "next/link";

const Features = () => {
  return (
    <div className="container" id="features">
      <div className="row mt-5">
        <div className="col-lg-4 mb-lg-0 mb-4">
          <a href="/ShoppingPage">
            <div className="card card-background move-on-hover mb-4">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/originals/0c/97/26/0c97268ed1e4eb821ec58b7db652a732.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Lehnga</h4>
                <p>
                Step into elegance with our stunning Indian lehengas, where tradition meets modern style.
                </p>
              </div>
            </div>
          </a>

          <a href="/ShoppingPage">
            <div className="card card-background move-on-hover">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/originals/e8/1e/6c/e81e6c50d75e66ea14ce4ea00029ce44.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Suits</h4>
                <p>
                Redefine your style with our tailored suits, expertly crafted to offer a perfect fusion of classic elegance and modern flair.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4 mb-lg-0 mb-4">
          <a href="/ShoppingPage">
            <div className="card card-background move-on-hover mb-4">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/originals/a6/a9/b7/a6a9b72e56a641bf777192d87e1820f5.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Saree</h4>
                <p>
                Elevate your style with our exquisite sarees, expertly crafted to blend traditional charm with modern elegance. Perfect for any occasion, each piece is a testament to timeless beauty and sophistication.
                </p>
              </div>
            </div>
          </a>

          <a href="/ShoppingPage">
            <div className="card card-background move-on-hover">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/originals/4b/6c/0d/4b6c0dd347a2ed2d0b0ee0ef9b74bb01.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Western</h4>
                <p>
                Explore our collection of Western clothes, offering chic designs and contemporary styles that redefine fashion, perfect for expressing your unique style and confidence.
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-lg-4">
          <a href="/ShoppingPage">
            <div className="card card-background move-on-hover mb-4">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/originals/a8/6a/fc/a86afc225ba2b7a8f7f2685764f0e22c.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Sharara</h4>
                <p>
                Make a statement with our stunning sharara dresses, where traditional charm meets contemporary style, creating a unique and elegant look for every celebration.
                </p>
              </div>
            </div>
          </a>

          <a href="#shop">
            <div className="card card-background move-on-hover">
              <div
                className="full-background"
                style={{
                  backgroundImage:
                    "url('https://i.pinimg.com/originals/61/32/78/613278db5538a99c53daeafc88967859.jpg')",
                }}
              ></div>
              <div className="card-body pt-12">
                <h4 className="text-white">Indo-Western</h4>
                <p>
                Unleash your style with our Indo-Western dresses, seamlessly blending traditional charm and contemporary design for a stunning, unique look
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
