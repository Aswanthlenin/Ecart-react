import React from "react";
import "../pages/product.css";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
    <Card className="h-100">
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title className="card-title">{product.title}</Card.Title>
        {/* <Card.Text>${product.price}</Card.Text> */}
        <Link to={`/product/${product.id}`}>
          <Button variant="primary">View Details</Button>
        </Link>
      </Card.Body>
    </Card>
    </Link>
  );
};

export default ProductCard;
