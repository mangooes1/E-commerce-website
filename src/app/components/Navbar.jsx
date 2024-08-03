// import React from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import Offcanvas from "react-bootstrap/Offcanvas";
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstrap.min.css";

// const CustomTitle = () => (
//   <span style={{ fontWeight: 700, fontSize: 18, color: "#E4C59E" }}>
//     Shop
//   </span>
// );

// function SingleNavbar() {
//   const expand = "md"; // You can set this to any desired breakpoint

//   return (
//     <>
//       <Navbar expand={expand} bg="black" variant="dark" className="py-2">
//         <Container fluid>
//           <Navbar.Brand
//             href="#"
//             style={{ fontWeight: 900, fontSize: 30, color: "#E4C59E" }}
//           >
//             Stitch&Glow.
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//           <Navbar.Offcanvas
//             id={`offcanvasNavbar-expand-${expand}`}
//             aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//             placement="end"
//           >
//             <Offcanvas.Header closeButton>
//               <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                 Offcanvas
//               </Offcanvas.Title>
//             </Offcanvas.Header>
//             <Offcanvas.Body>
//               <Nav className="justify-content-end flex-grow-1 pe-3 mt-2">
//                 <Nav.Link
//                   href="#"
//                   style={{ fontWeight: 700, fontSize: 18, color: "#E4C59E" }}
//                 >
//                   Home
//                 </Nav.Link>
//                 <Nav.Link
//                   href="#about"
//                   style={{ fontWeight: 700, fontSize: 18, color: "#E4C59E" }}
//                 >
//                   About Us
//                 </Nav.Link>

//                 <NavDropdown
//                   title={<CustomTitle />}
//                   id="offcanvasNavbarDropdown-expand-lg"
//                 >
//                   <NavDropdown.Item href="#features">Lehnga</NavDropdown.Item>
//                   <NavDropdown.Item href="#features">Saree</NavDropdown.Item>
//                   {/* <NavDropdown.Divider /> */}
//                   <NavDropdown.Item href="#features">Others</NavDropdown.Item>
//                 </NavDropdown>

//                 <Nav.Link
//                   href="#contact"
//                   style={{ fontWeight: 700, fontSize: 18, color: "#E4C59E" }}
//                 >
//                   Contact Us
//                 </Nav.Link>
//               </Nav>
//               <Form className="d-flex">
//                 {/* <Form.Control
//                 type="search"
//                 placeholder="Search"
//                 className="me-2"
//                 aria-label="Search"
//               /> */}
//               </Form>
//             </Offcanvas.Body>
//           </Navbar.Offcanvas>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default SingleNavbar;

import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faPhone, faShoppingCart, faBars } from '@fortawesome/free-solid-svg-icons';
import "bootstrap/dist/css/bootstrap.min.css";

// Ensure the Font Awesome library is configured
import '../lib/fortawesome';

const CustomTitle = () => (
  <span style={{ fontWeight: 700, fontSize: 18, color: "#E4C59E" }}>
    <FontAwesomeIcon icon={faBars} style={{ marginRight: 8 }} />
    Shop

  </span>
);

function SingleNavbar() {
  const expand = "md"; // You can set this to any desired breakpoint

  return (
    <>
      <Navbar expand={expand} bg="black" variant="dark" className="py-2">
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{ fontWeight: 900, fontSize: 30, color: "#E4C59E" }}
          >
            Stitch&Glow.
          </Navbar.Brand>
          <center>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} >
              <FontAwesomeIcon icon={faBars} style={{ marginRight: 8 }} />
            </Navbar.Toggle></center>


          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
              Stitch&Glow.              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 mt-2">
                <Nav.Link
                  href="#"
                  style={{ fontWeight: 700, fontSize: 18, color: "#E4C59E" }}
                >
                  <FontAwesomeIcon icon={faHome} style={{ marginRight: 8 }} />
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#about"
                  style={{ fontWeight: 700, fontSize: 18, color: "#E4C59E" }}
                >
                  <FontAwesomeIcon icon={faInfoCircle} style={{ marginRight: 8 }} />
                  About Us
                </Nav.Link>

                <NavDropdown
                  title={<CustomTitle />}
                  id="offcanvasNavbarDropdown-expand-lg"
                >
                  <NavDropdown.Item href="#features">Lehnga</NavDropdown.Item>
                  <NavDropdown.Item href="#features">Saree</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#features">Others</NavDropdown.Item>
                </NavDropdown>

                <Nav.Link
                  href="#contact"
                  style={{ fontWeight: 700, fontSize: 18, color: "#E4C59E" }}
                >
                  <FontAwesomeIcon icon={faPhone} style={{ marginRight: 8 }} />
                  Contact Us
                </Nav.Link>
              </Nav>
              <Form className="d-flex">
                {/* <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              /> */}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default SingleNavbar;

