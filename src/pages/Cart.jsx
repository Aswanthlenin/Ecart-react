import React, { useContext } from "react";
import { Container, Row, Col, Button, ListGroup ,Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
const Cart = () => {
  const { cart, removeFromCart , incrementQuantity, decrementQuantity , getTotalItems} = useContext(CartContext);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
  const navigate = useNavigate();

  const proceedToCheckOut = () => {
    navigate("/checkout");
  };


  return (
    <Container className="py-3">
      <Row>
        <Col md={8}>
          <h2>Your Cart</h2>
          {cart.length === 0 ? (
            <div>Cart is Empty</div>
          ) : (
            <ListGroup variant="flush">
              {cart.map((product) => (
                <ListGroup.Item key={product.id}>
                  <Row>
                    <Col md={3}>
                      <img
                        src={product.image}
                        alt={product.title}
                        className="img-fluid rounded"
                      />
                    </Col>
                    <Col md={3}>
                      <Link to={`/product/${product.id}`}>
                        {product.title}
                      </Link>
                    </Col>
                    <Col md={2}>
                    <Badge bg="dark">${product.price}</Badge>
                    </Col>
                    <Col md={2}>
                    <Badge bg="secondary" onClick={()=> decrementQuantity(product.id)}>-</Badge> <Badge bg="dark">{product.quantity}</Badge> <Badge bg="secondary" onClick={()=>incrementQuantity(product.id)}>+</Badge>
                    </Col>
                    <Col md={2}>
                      <Button
                        variant="danger"
                        onClick={() => removeFromCart(product.id)}
                      >
                        Remove
                      </Button>

                    </Col>
                  </Row>
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
        </Col>
        <Col md={4}>
          <h2>Subtotal : {getTotalItems()} Items</h2>
          <h3> Total : ${totalPrice}</h3>
          <Button onClick={proceedToCheckOut} variant="primary">
            Proceed to Checkout
          </Button>
        </Col>
        <Link to={"/"}>
          <Button variant="primary">Back To Home</Button>
        </Link>
      </Row>
    </Container>
  );
};

export default Cart;
