
import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-5" style={{ backgroundColor: "#EEEDEB" }} >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 text-center md:text-left">
          {/* Logo */}
          <div>
            <h2 className="text-lg font-semibold tracking-wide"  style={{ color: "#181C14" }}>STITCH&GLOW</h2>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-lg font-semibold mb-2">CUSTOMER CARE</h3>
            <ul>
              <li>
                <a href="/about" className="hover:text-black">Shipping Policy &gt;</a>
              </li>
              <li>
                <a href="/about" className="hover:text-black">Returns Policy &gt;</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black">Contact Us &gt;</a>
              </li>
              <li>
                <a href="/about" className="hover:text-black">About Us &gt;</a>
              </li>
            </ul>
          </div>

          {/* Visit Our Store */}
          <div>
            <h3 className="text-lg font-semibold mb-2"  style={{ color: "#181C14" }}>VISIT OUR STORE</h3>
            <p  style={{ color: "#181C14" }}>
            Shop no.J- 15, j block,Sarafa bazar <br />
            Laxmi Nagar,Delhi 110092
            </p>
          </div>

          {/* Stay Connected */}
          <div>
            <h3 className="text-lg font-semibold mb-2"  style={{ color: "#181C14" }}>STAY CONNECTED</h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="#" aria-label="Instagram" className="hover:text-white">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" aria-label="Facebook" className="hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" aria-label="Pinterest" className="hover:text-white">
                <i className="fab fa-pinterest-p"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-4  pt-4 text-center md:text-left" style={{ backgroundColor: "#000",paddingBottom :'10px'}} >
          <p> Nishita © <a href="/" className="text" style={{ color: "#D4D7DD" }} >STITCH&GLOW</a></p>
        </div>
      </div>

   
    </footer>
  );
};

export default Footer;
