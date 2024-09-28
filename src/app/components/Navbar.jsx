import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Form from "react-bootstrap/Form";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faInfoCircle,
  faPhone,
  faShoppingCart,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "../lib/fortawesome";

function SingleNavbar() {
  const expand = "md"; // You can set this to any desired breakpoint

  return (
    <>
      <Navbar
        expand={expand}
        className="py-2"
        style={{ backgroundColor: "#000" }}
      >
        <Container fluid>
          <Navbar.Brand
            href="#"
            style={{ fontWeight: 900, fontSize: 30, color: "#D4D7DD" }}
          >
            Stitch&Glow.
          </Navbar.Brand>
          <center>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}>
              <FontAwesomeIcon icon={faBars} style={{ marginRight: 8 }} />
            </Navbar.Toggle>
          </center>

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Stitch&Glow{" "}
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3 mt-2">
                <Nav.Link
                  href="/"
                  style={{ fontWeight: 700, fontSize: 18, color: "#D4D7DD" }}
                >
                  Home
                </Nav.Link>
                <Nav.Link
                  href="#collection"
                  style={{ fontWeight: 700, fontSize: 18, color: "#D4D7DD" }}
                >
                  Collection
                </Nav.Link>
                <Nav.Link
                  href="/location"
                  style={{ fontWeight: 700, fontSize: 18, color: "#D4D7DD" }}
                >
                  Visit Us
                </Nav.Link>
                <Nav.Link
                  href="/about"
                  style={{ fontWeight: 700, fontSize: 18, color: "#D4D7DD" }}
                >
                  Customer Care
                </Nav.Link>

                <Nav.Link
                  href="#contact"
                  style={{ fontWeight: 700, fontSize: 18, color: "#D4D7DD" }}
                >
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
