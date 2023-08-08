import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import Footer from "./Footer";
import { Outlet, useNavigate } from "react-router-dom";

function Main() {
  return (
    <>
      <Top />
      <Menu />
      <Outlet />
      <Footer />
    </>
  );
}

function Top() {
  const navigate = useNavigate();
  return (
    <Container className="my-2" fluid>
      <Row className="text-center">
        <Col>
          <Navbar.Brand
            href="#"
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
            <img src="/logo-no-background.png" alt="" className="d-inline-block" width="200" height="124" />
          </Navbar.Brand>
        </Col>
      </Row>
    </Container>
  );
}

function Menu() {
  const navigate = useNavigate();
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="전체카테고리" id="basic-nav-dropdown">
              <NavDropdown.Item
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/runningshoes");
                }}
              >
                운동화
              </NavDropdown.Item>
              <NavDropdown.Item href="">구두</NavDropdown.Item>
              <NavDropdown.Item href="">부츠/워커</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">SPECIAL</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/runningshoes");
              }}
            >
              운동화
            </Nav.Link>
            <Nav.Link href="">구두</Nav.Link>
            <Nav.Link href="/event/one">이벤트</Nav.Link>
            <Nav.Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                navigate("/cart");
              }}
            >
              <span class="material-symbols-outlined">shopping_cart</span>
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control type="search" placeholder="Search" className="me-2" />
            <Button variant="success">Search</Button>
          </Form>
          <div className="mx-3 text-white">님 반갑습니다</div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Main;
