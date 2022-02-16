import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FaqScreen = () => {
  return (
    <>
      <h1>FAQ</h1>
      <Container>
        <Row className="mt-5">
          <Col sm={4} className="title">
            Shoes
          </Col>
          <Col sm={8}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Is your stock authentic?</Accordion.Header>
                <Accordion.Body>
                  We carry out various checks on each shoe that we buy, using
                  the likes of UV lights to check stitching for example and
                  other appropriate checks based on the shoe and how we can
                  validate its authenticity. We can even provide the receipt for
                  the shoe if you wish.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>I don't have my size?</Accordion.Header>
                <Accordion.Body>
                  If you see a shoe in stock that you like but we don't have
                  your size,{" "}
                  <a
                    className="link"
                    href="https://www.instagram.com/sneakerssznco/"
                  >
                    send us a DM
                  </a>{" "}
                  and give us 1-24 hours to find your shoe and we'll be in touch
                  with a price. Please be patient as some shoes may take longer
                  to source than others. More information about sourcing on our{" "}
                  <a
                    className="link"
                    href="https://www.instagram.com/stories/highlights/17935936708935434/"
                  >
                    instagram highlights
                  </a>
                  .
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className="section">
          <Col sm={4} className="title">
            Shipping
          </Col>
          <Col sm={8}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Do you ship worldwide?</Accordion.Header>
                <Accordion.Body>
                  At the moment we only ship to the UK but we're looking into
                  being able to ship world-wide eventually.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Is the shipping cost included in the price?
                </Accordion.Header>
                <Accordion.Body>
                  You as a customer choose your service of shipping. <br />
                  - First Class Delivery: £5 <br />
                  - Second Class Delivery: £3 <br />
                  - Special Delivery: £8 <br />
                  We aim to dispatch all orders within 2-3 days after the order
                  has been placed.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  When will my shoes be shipped?
                </Accordion.Header>
                <Accordion.Body>
                  Depending on when your order has been dispatched and delivery
                  type you should receive your shoes in the next 1-2 days after
                  dispatch.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  How will my shoes be shipped?
                </Accordion.Header>
                <Accordion.Body>
                  All orders are securely double packaged to prevent damage and
                  will be sent through Royal Mail. Any damanges or inconvenience
                  after shipping is out of our hands. In future, we aim to use
                  more eco-friendly materials to package our orders.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  I have a problem with my delivery
                </Accordion.Header>
                <Accordion.Body>
                  As soon as the package is shipped, it is unfortunately out of
                  our hands. However, you should have all the information you
                  need such the tracking number to contact Royal Mail for a
                  status on your package and resolve the issue with them.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Can I track my order?</Accordion.Header>
                <Accordion.Body>
                  After your order has been shipped, proof of postage and a
                  tracking will be provided to the buyer.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className="section">
          <Col sm={4} className="title">
            Orders
          </Col>
          <Col sm={8}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What payments do you accept?
                </Accordion.Header>
                <Accordion.Body>
                  - Bank Transfer <br />
                  - PayPal F&amp;F <br />
                  - PayPal G&amp;S (+4% fee) <br />
                  We always recommend first time buyers to purchase via PayPal
                  G&amp;S for buyer safety. After trust has been established, we
                  are more than happy to take any other form of payment to
                  ensure the best of experiences.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Can I cancel my order?</Accordion.Header>
                <Accordion.Body>
                  If the item has already been shipped and you've paid for it,
                  then unfortunately no. However, you can cancel your order if
                  you have put a shoe on hold to buy.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  How and when will I be contacted about my order
                </Accordion.Header>
                <Accordion.Body>
                  We aim to always keep you updated on the status of your order.
                  Once we have packaged and shipped your order, we will
                  immediately notify you and send you it's tracking number.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className="section">
          <Col sm={4} className="title">
            Returns
          </Col>
          <Col sm={8}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is your returns policy?
                </Accordion.Header>
                <Accordion.Body>
                  Returns and refunds are NOT accepted UNLESS the problem is our
                  fault. If the item has any wear and tear on it (more than when
                  they were sold) then you are not eligible for a refund. Most
                  importantly, no refund or return if the item does not fit.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>My item is damaged</Accordion.Header>
                <Accordion.Body>
                  Any damage after shipping is out of our hands.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
        <Row className="section">
          <Col sm={4} className="title">
            Contact
          </Col>
          <Col sm={8}>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>How can I contact you?</Accordion.Header>
                <Accordion.Body>
                  We are most active through our{" "}
                  <a
                    className="link"
                    href="https://www.instagram.com/sneakerssznco/"
                  >
                    Instagram page
                  </a>
                  , but you can also drop us an{" "}
                  <a className="link" href="mailto:sneakerssznco@gmail.com">
                    email
                  </a>{" "}
                  if you wish.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>What is your response time?</Accordion.Header>
                <Accordion.Body>
                  We always aim to reply as soon as possible. We target within
                  an hour of receiving your message. But please keep in mind
                  that there may be response delays during busy times.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default FaqScreen;
