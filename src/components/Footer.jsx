import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import "../App.css";
const Footer = () => {
  const titleProj = document.title;
  return (
    <footer className='footer'>
      <Container fluid>
        <Row className='bg-primary text-white p-4'>
          <Col className='mx-12'>
              <p>{titleProj}</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer