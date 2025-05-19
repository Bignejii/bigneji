import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './NavbarComponent.css'; 
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function NavbarComponent() {
  const moveTo = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleSignOut = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    moveTo('/login');
  };

  const Category = (category) => {
    moveTo(`/products?category=${category}`);
  };

  return (
    <Navbar bg="transparent" expand="lg" className="position-fixed w-100 navbar-custom">
      <Container className="d-flex justify-content-between align-items-center">
        {/* Left Section: Links */}
        <Nav className="d-flex gap-4">
          <Nav.Link href="/" className="text-white">Home</Nav.Link>
          <Nav.Link onClick={() => Category('sports')} className="text-white">Sports</Nav.Link>
          <Nav.Link onClick={() => Category('rare')} className="text-white">Rare</Nav.Link>
          <Nav.Link onClick={() => Category('luxury')} className="text-white">Luxury</Nav.Link>
          <Nav.Link onClick={() => Category('bike')} className="text-white">Bike</Nav.Link>
          <Nav.Link onClick={() => Category('')} className="text-white">All Products</Nav.Link>
        </Nav>

        {/* Right Section: Utility Links */}
        <Nav className="d-flex gap-4 align-items-center">
          <Nav.Link href="/profile" className="text-white">
            <i className="bi bi-person"></i>
          </Nav.Link>
          <Nav.Link href="/search" className="text-white">
            <i className="bi bi-search"></i>
          </Nav.Link>
          {isLoggedIn ? (
            <>
              <Nav.Link onClick={handleSignOut} className="text-white">Sign Out</Nav.Link>
              <Nav.Link onClick={() => moveTo('/manage-products')} className="text-white">Manage Products</Nav.Link>
            </>
          ) : (
            <Nav.Link onClick={() => moveTo('/login')} className="text-white">Login</Nav.Link>
          )}
        </Nav>
      </Container>
      <hr className="navbar-divider" />
    </Navbar>
  );
}

export default NavbarComponent;
