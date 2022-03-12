import React from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
  NavItem
} from "react-bootstrap";


function NavBar() {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">Movie App</Navbar.Brand>
          <Navbar.Toggle id="navmenu" aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={Link} to="/">Home</Nav.Link>

              <NavDropdown title="Movies" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/moviesgenre/28">Action</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/12">Adventure</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/16">Animation</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/35">Comedy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/80">Crime</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/18">Drama</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/10751">Family</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/14">Fantasy</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/36">History</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/27">Horror</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/10402">Music</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/9648">Mystery</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/10749">Romance</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/878">Science Fiction</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/10770">Tv Movie</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/53">Thriller</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/10752">War</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/moviesgenre/37">Western</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/actor">Actors</Nav.Link>
              <Nav.Link href="#action2">Bookmarks</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;



