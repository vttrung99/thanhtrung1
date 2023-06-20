import React from 'react';
import { Container, Nav, Navbar, NavDropdown, FormControl, Button, Form } from 'react-bootstrap';
import { IoSearch, IoPersonOutline } from 'react-icons/io5';

function Navbars() {
  return (

      
    


      <Navbar bg="light" expand="lg" sticky="top">
      
      <Container>
        <Navbar.Brand href="#home"><h2>FASHION<span style={{color: 'red'}}>CUBE</span></h2></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Hành động</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Hành động khác</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Điều gì đó</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Liên kết tách rời</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Concact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            {/* <FormControl type="search" placeholder="Tìm kiếm" className="me-2" aria-label="Tìm kiếm" /> */}
            <Button  variant="outline-primary"><IoSearch style={{color :"black"}}  className="icon-spacing" /></Button>
          </Form>
          <Nav>
            <Nav.Link href="#profile">
              <IoPersonOutline className="icon-spacing" size={20} />
              <img
                src='https://img6.thuthuatphanmem.vn/uploads/2022/02/12/hinh-anh-cong-phuong-chat-luong-cao_050416276.jpg'
                alt="Profile"
                className="rounded-circle"
                height="30"
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default Navbars;
