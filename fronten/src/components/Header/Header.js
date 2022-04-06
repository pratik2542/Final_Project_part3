import React from 'react'
import { 
   Container,
   Form,
   FormControl,
   Nav,
   Navbar,
   NavDropdown,
} from 'react-bootstrap';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
  <Container>
    <Navbar.Brand>
      <Link to='/'>Note Saver</Link>t</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
          <nav className='m-auto'>
          <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        /></Form>
          </nav>
        <Nav.Link href="#action1">
          <Link to='/mynotes'>My notes</Link></Nav.Link>
        
        <NavDropdown title="Prit Patel" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">My Profile</NavDropdown.Item>
         
          <NavDropdown.Divider />
          <NavDropdown.Item href="/">
            Logout
          </NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
      
        
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default Header