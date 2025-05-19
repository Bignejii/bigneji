import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'; 
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function NavbarComponent() {
  const moveTo = useNavigate();

  const Category = (category) => {
    moveTo(`/products?category=${category}`);
  };

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand href="/">NejiShop</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown title="Products" id="products-dropdown">
              <NavDropdown.Item onClick={() => Category('sports')}>Sports</NavDropdown.Item>
              <NavDropdown.Item onClick={() => Category('rare')}>Rare</NavDropdown.Item>
              <NavDropdown.Item onClick={() => Category('luxury')}>Luxury</NavDropdown.Item>
              <NavDropdown.Item onClick={() => Category('bike')}>Bike</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={() => Category('')}>All Products</NavDropdown.Item>
            </NavDropdown>

          </Nav>

          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search products"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
