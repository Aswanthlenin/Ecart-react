import React, { useContext, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";


const Checkout = () => {
  const { cart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    country: "",
    phoneNumber: "",
    email: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order Submitted");
    navigate("/");
  };
  return (
    <>
      <Container>
        <Row>
          <Col md={6}>
            <h2>Shipping Address</h2>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  pattern="[A-Za-z]+"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  pattern="[A-Za-z0-9]+"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formCity">
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  pattern="[A-Za-z]+"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formState">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleInputChange}
                  pattern="[A-Za-z]+"
                  required
                />
              </Form.Group>

              <Form.Group controlId="formCountry">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  as="select"
                  name="country"
                  value={formData.country}
                  onChange={handleInputChange}
                  pattern="[A-Za-z]+"
                  required
                >
                  <option value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="phoneNumber">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}"
                  required
                />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>
              <Button type="submit" variant="primary" className="mt-3">
                Confirm Order
              </Button>
            </Form>
          </Col>
          <Col md={6}>
            <h2>Your Order</h2>
            {cart.length === 0 ? (
              <p>Your Cart is Empty</p>
            ) : (
              <div>
                {cart.map((product) => (
                  <div key={product.id}>
                    <img
                      src={product.image}
                      alt={product.title}
                      style={{ width: "50px" }}
                    />
                    <p>{product.title}</p>
                    <p>
                      ${product.price} X {product.quantity}
                    </p>
                  </div>
                ))}

                <h4>
                  {" "}
                  Total : $
                  {cart
                    .reduce(
                      (total, product) =>
                        total + product.price * product.quantity,
                      0
                    )
                    .toFixed(2)}
                </h4>
              </div>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
