import React from "react";
import "../styles/template.css";
const Cards = () => {
  return (
    <div className="container pt-6"  style={{backgroundColor:`#FFF5E0`}}>
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <div className="card card-blog card-plain">
            <div className="position-relative">
              <a className="d-block blur-shadow-image">
                <img
                  src="https://i.pinimg.com/originals/1f/d4/e3/1fd4e347fce68c07bbcdc6dfe826513f.jpg"
                  alt="img-blur-shadow"
                  className="img-fluid shadow border-radius-lg"
                />
              </a>
            </div>
            <div className="card-body px-0 pt-4">
              <p className="text-black font-weight-bold text-sm text-uppercase">
                HandMade
              </p>
              <a href="javascript:;">
                <h4>
                  Precision in Every Stitch: Crafting unique style with Care
                </h4>
              </a>
              <p>
                Our handmade Western clothing collection combines the best of
                traditional craftsmanship and contemporary style. Each garment
                is carefully crafted by skilled artisans, ensuring attention to
                detail and exceptional quality.From classic to stylish, our
                collection offers a range of designs that reflect both timeless
                elegance and modern trends. Embrace the uniqueness of handmade
                fashion and discover pieces that are as individual as you are.
              </p>
              <button type="button" className="btn bg-black text-white mt-3">
                Read more
              </button>
            </div>
          </div>
        </div>
        <div className="col-lg-8 mx-auto text-center mt-5">
          <div className="card card-blog card-plain">
            <div className="position-relative">
              <a className="d-block blur-shadow-image">
                <img
                  src="https://i.pinimg.com/originals/25/00/1d/25001d1ae8f1e4c0fc003543d12bf81d.jpg"
                  alt="img-blur-shadow"
                  className="img-fluid shadow border-radius-lg"
                />
              </a>
            </div>
            <div className="card-body px-0 pt-4">
              <p className="text-gradient text-warning text-gradient font-weight-bold text-sm text-uppercase">
                Music
              </p>
              <a href="javascript:;">
                <h4>
                  Timeless Traditions: Made Perfectly for Every Celebration
                </h4>
              </a>
              <p>
                Our garments celebrate artistry, with intricate designs and
                luxurious fabrics that embody the elegance and grace of fashion.
                Whether it's a wedding, festival, or family gathering, each
                piece is thoughtfully designed to make you look and feel your
                best. Embrace the beauty of timeless traditions and create
                unforgettable memories with attire that honors the past while
                embracing the present."
              </p>
              <button type="button" className="btn bg-black text-white mt-3">
                Read more
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
