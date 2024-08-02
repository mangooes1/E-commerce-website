


// // components/Navbar.js

// import Link from 'next/link';
// import { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="bg-white p-4 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex items-center space-x-2">
//           {/* Logo */}
//           <div className="h-8 w-8 relative">
//             {/* <Image src="/logo.png" alt="Logo" layout="fill" objectFit="contain" /> */}
//           </div>
//           {/* Title */}
//           <div className="text-black text-xl font-bold">
//             <Link href="/" className="hover:text-rose-950">Stitch&Glow.</Link>
//           </div>
//         </div>
//         {/* Mobile Menu Button */}
//         <button 
//           onClick={toggleMenu} 
//           className="lg:hidden text-black focus:outline-none"
//         >
//           {/* <svg 
//             className="w-6 h-6" 
//             fill="none" 
//             stroke="currentColor" 
//             viewBox="0 0 24 24" 
//             xmlns="http://www.w3.org/2000/svg"
//           > */}
//           <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"> 
//           <path d="M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"/>
//           </svg>
//             {/* <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /> */}
        
//         </button>
//         {/* Desktop Menu */}
//         <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'}`}>
//           <a href="#features" className="text-black hover:underline">Store</a>
//           <a href="#social" className="text-black hover:underline">Social</a>
//           <a href="#about" className="text-black hover:underline">About</a>
//           <a href="#contact" className="text-black hover:underline">Contact</a>
//         </div>
//       </div>
//       {/* Mobile Menu */}
//       <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'} mt-4 space-y-2`}>
//         <a href="#features" className="block text-black hover:underline">Store</a>
//         <a href="#social" className="block text-black hover:underline">Social</a>
//         <a href="#about" className="block text-black hover:underline">About</a>
//         <a href="#contact" className="block text-black hover:underline">Contact</a>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

// import React from "react";
// import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
// // import {AcmeLogo} from "./AcmeLogo.jsx";

// export default function App() {
//   return (
//     <Navbar>
//       <NavbarBrand>
//         {/* <AcmeLogo /> */}
//         <p className="font-bold text-inherit">ACME</p>
//       </NavbarBrand>
//       <NavbarContent className="hidden sm:flex gap-4" justify="center">
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Features
//           </Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Customers
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="foreground" href="#">
//             Integrations
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem className="hidden lg:flex">
//           <Link href="#">Login</Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }

// work remaining on icon

import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function SingleNavbar() {
  const expand = 'md'; // You can set this to any desired breakpoint
  
  return (
    <Navbar expand={expand} className=" bg-black text-white ">
      <Container fluid>
        <Navbar.Brand href="#">Stitch&Glow.</Navbar.Brand>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-${expand}`}
          aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 mt-3
            ">
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#about">About Us</Nav.Link>
             
              <NavDropdown
                title="Shop"
                id={"offcanvasNavbarDropdown-expand-lg"}
              >
                <NavDropdown.Item href="#features">Lehnga</NavDropdown.Item>
                <NavDropdown.Item href="#features">
                  Saree
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#features">
                  Others
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex">
              {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> */}
              <Button  type="search" className="btn bg-black text-white mt-3">Search</Button>
            </Form>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

export default SingleNavbar;
