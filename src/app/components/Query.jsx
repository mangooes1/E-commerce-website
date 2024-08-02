import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";

function FlushExample() {
  return (
    <>
      <div className="text-center pb-4"  style={{backgroundColor:`#FFF5E0`}}>
        <h1>Frequently Asked Questions</h1>
        <p>Got a Question? No worries,We got you!!</p>
      </div>
      <Accordion defaultActiveKey="0" flush className="pl-20"  style={{backgroundColor:`#FFF5E0`}}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>How Do I Order?</Accordion.Header>
          <Accordion.Body>
            <p style={{ color: "#424769" }}>
            Ordering from Stitch&Glow is simple and convenient. We currently take orders through WhatsApp chat for a personalized experience. Just click on the 'Buy Now' button on our website, and you’ll be directed to a WhatsApp chat where our team will assist you with your purchase. Enjoy seamless and direct communication with us for all your fashion needs.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* 2nd */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            How much time did it take to receive an order?
          </Accordion.Header>
          <Accordion.Body>
            <p style={{ color: "#424769" }}>
            After placing your order, it typically takes 7 to 10 business days , depending on your location for your handmade garment to be crafted and delivered. We’ll keep you updated throughout the process to ensure a smooth and timely delivery."
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* 3rd */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            What payment methods do you accept?
          </Accordion.Header>
          <Accordion.Body>
            <p style={{ color: "#424769" }}>We accept Cash on Delivery (COD) and UPI payments to make your shopping experience easy and convenient.</p>
          </Accordion.Body>
        </Accordion.Item>

        {/* 4th */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            How do I find the right fit for me?
          </Accordion.Header>
          <Accordion.Body>
            <p style={{ color: "#424769" }}>
            Each product comes with a detailed guide chart in the product details section to help you find your perfect fit. For Customization of the product contact us on our whatsApp
              number.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        {/* 5th */}
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            What is our return and exchange policy?
          </Accordion.Header>
          <Accordion.Body>
            <p style={{ color: "#424769" }}>
            We want you to love your purchase from Stitch&Glow. If you're not completely satisfied, we accept returns and exchanges within 7 days of delivery. Items must be unworn, in original condition, and with all tags attached. Please contact our customer service team to initiate the process and receive further instructions.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default FlushExample;
