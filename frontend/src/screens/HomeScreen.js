import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Card, Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Meta from "../components/Meta";

const HomeScreen = () => {
  let navigate = useNavigate();

  async function goToShop() {
    navigate("/shop");
  }
  return (
    <>
      <Meta />
      <Container fluid className="homeScreenContainer">
        <Row>
          <Col className="home-col-1">
            <Card className="poster-1-card">
              <Card.Img
                src={require("../assets/alt-1.jpg")}
                variant="top"
                className="poster poster-1"
              />
            </Card>
          </Col>
          <Col className="home-col-main">
            <Card className="main-poster-card">
              <Card.Img
                src={require("../assets/main.png")}
                variant="top"
                className="poster main-poster"
              />
            </Card>
          </Col>
          <Col className="home-col-2">
            <Card className="poster-2-card">
              <Card.Img
                src={require("../assets/alt-2.png")}
                variant="top"
                className="poster poster-2"
              />
            </Card>
          </Col>
        </Row>

        <Row>
          <Col className="text-center py-3">
            <Button
              onClick={goToShop}
              variant="outline-primary"
              size="lg"
              className="goShop"
            >
              Go to Shop <i className="fas fa-long-arrow-alt-right"></i>
            </Button>{" "}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HomeScreen;
