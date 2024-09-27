import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./product.css";
import { CartContext } from "../context/CartContext";
const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };
    fetchProduct();
  }, [id]);

  const handleAddTocart = () => {
    addToCart(product);
  };
  if (!product) return <p>Loading .....</p>;
  return (
    <>
      <Container className="product_display">
        <Row>
          <Col md={6} className="product_img">
            <img
              src={product.image}
              alt={product.title}
              className="product_img"
            />
          </Col>
          <Col md={6}>
            <h2>{product.title}</h2>
            <h4>{product.price}</h4>
            <p>{product.description}</p>
            <Button variant="primary" onClick={handleAddTocart}>
              Add to Cart
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductDetails;
