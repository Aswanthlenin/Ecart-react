import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
  Badge,
} from "react-bootstrap";
import { CartDash } from "react-bootstrap-icons";
import "../App.css";
import { CartContext } from "../context/CartContext";

const Header = () => {
  const { searchTerm, setSearchTerm,  getTotalItems} = useContext(CartContext);
  return (
    <Navbar bg="light" expand="lg" className="bg-body-tertiary header-section">
      <Container>
        <Navbar.Brand as={Link} to="/">
          React E-Comm
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="me-auto d-flex">
            <FormControl
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search Products"
              className="mr-sm-2"
            />

            <Button variant="outline-success" type="submit">
              Search
            </Button>
          </Form>
          <Nav>
            <Nav.Link as={Link} to="/cart">
              <CartDash color="royalblue" size={32} />
              <Badge variant="light">{getTotalItems()}</Badge>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
