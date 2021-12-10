import React from 'react'
import { LinkContainer} from 'react-router-bootstrap'
import {Navbar, Nav, Container, Form, Button, FormControl} from 'react-bootstrap'
import './Header.css';


const Header = () => {
  return (
    <Navbar bg="light" variant='light' expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand  >
            <h2 className="title">HC Store</h2> 
          </Navbar.Brand>
        </LinkContainer>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">

          <LinkContainer to='/'>
            <Nav.Link href="/">Home</Nav.Link>
          </LinkContainer>  
            
          <LinkContainer to='/women'>
            <Nav.Link>Women</Nav.Link>
          </LinkContainer>  

          <LinkContainer to='/men'>
            <Nav.Link>Men</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/accessories'>
            <Nav.Link>Accessories</Nav.Link>
          </LinkContainer>  

          {/* <LinkContainer to='/aboutus'>
            <Nav.Link>About Us</Nav.Link>
          </LinkContainer> */}
            
          <LinkContainer to='/cart'>
            <Nav.Link>
              <i className='fas fa-shopping-cart'></i>Cart
            </Nav.Link>
          </LinkContainer>
            
          <LinkContainer to='/login'>
            <Nav.Link>
              <i className='fas fa-user'></i>Sign In
            </Nav.Link>
          </LinkContainer>

          </Nav>
        </Navbar.Collapse>

        <Form className="d-flex">
          <FormControl
            type="search"
            placeholder="Search"
            className="mr-2"
            aria-label="Search"
          />
          <Button variant="outline-secondary" size='sm'>Search</Button>
        </Form>

      </Container>
    </Navbar>
  )
}

export default Header
