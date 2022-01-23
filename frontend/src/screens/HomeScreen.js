import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const HomeScreen = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <Image src={require("../assets/alt-1.jpg")} alt="alt1-poster" />
          </Col>
          <Col>
            <Image src={require("../assets/main.png")} alt="main-poster" />
          </Col>
          <Col>
            <Image src={require("../assets/alt-2.png")} alt="alt2-poster" />
          </Col>
        </Row>
        <Row>
          <Col className="text-center py-3">
            <Button variant="outline-primary" size="lg" className="buyNowBtn">
              Go to Shop <i class="fas fa-long-arrow-alt-right"></i>
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
