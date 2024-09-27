import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";
import "../App.css";
import "./product.css";
import ProductCard from "../components/ProductCard";
import { CartContext } from "../context/CartContext";
const Home = () => {
  const { searchTerm } = useContext(CartContext);
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const productPerPage = 10;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        const shuffleProduct = data.sort(() => 0.5 - Math.random());
        setProducts(shuffleProduct);
        setProducts(data);
        setFilteredProducts(data);
      });
  }, []);

  useEffect(() => {
    if (searchTerm.length > 3) {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(
        products.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }
  }, [searchTerm, products]);

  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProduct = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  //Calculate total number of pages
  const totalPages = Math.ceil(filteredProducts.length / productPerPage);
  const paginate = (pagenumber) => setCurrentPage(pagenumber);
  return (
    <>
      <Container>
        <Row>
  
          {currentProduct.length > 0 ? (
            currentProduct.map((product) => (
              <Col key={product.id} sm={12} md={6} lg={3} className="mb-4">
                <ProductCard product={product} />
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center mt-5">No Result Found</p>
            </Col>
          )}
        </Row>
        {products.length > productPerPage && (
          <Row className="justify-content-center mt-3">
            <Pagination>
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => paginate(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </Row>
        )}
      </Container>
    </>
  );
};

export default Home;
