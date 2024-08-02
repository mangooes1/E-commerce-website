
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function SingleNavbar() {
  const expand = "md"; // You can set this to any desired breakpoint

  return (
    <>
      <Navbar expand={expand}  bg="black" variant="black" className="py-2">
        <Container fluid>
          <Navbar.Brand href="#" style={{fontWeight:900, fontSize:30, color:`#E4C59E`}}>
            Stitch&Glow.
          </Navbar.Brand>
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
              <Nav
                className="justify-content-end flex-grow-1 pe-3 mt-2
            "
              >
                <Nav.Link href="#" style={{fontWeight:700, fontSize:18, color:`#E4C59E`}} >Home</Nav.Link>
                <Nav.Link href="#about"  style={{fontWeight:700, fontSize:18, color:`#E4C59E`}}>About Us</Nav.Link>

                <NavDropdown
                  title="Shop"
                  id={"offcanvasNavbarDropdown-expand-lg"}
                  style={{fontWeight:700, fontSize:18, color:`#E4C59E`}}
                >
                  <NavDropdown.Item href="#features">Lehnga</NavDropdown.Item>
                  <NavDropdown.Item href="#features">Saree</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#features">Others</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contact" style={{fontWeight:700, fontSize:18, color:`#E4C59E`}}>Contact Us</Nav.Link>
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
