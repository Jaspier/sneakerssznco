import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Product = ({ product }) => {
  return (
    <Card className="my-3 p-3 rounded productCard">
      <Link to={`/product/${product._id}`}>
        <Card.Img
          src={product.image}
          variant="top"
          className="productCardImg"
        />
      </Link>
      <Card.Body>
        <Link to={`/product/${product._id}`} className="productNameLink">
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="h3" className="price">
          £{product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
