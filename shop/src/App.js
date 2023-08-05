import "./App.css";

import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import data from "./data";
import Main from "./Main";
import Footer from "./Footer";
import Error from "./Error";
import Detail from "./pages/Detail";
import Event from "./pages/Event";
import One from "./pages/One";
import Two from "./pages/Two";

function App() {
  // 신발 데이터 관리
  const [shoes, setShoes] = useState(data);

  // 경로 설정
  let router = createBrowserRouter(
    [
      { path: "/", element: <Main shoes={shoes} />, errorElement: <Error /> },
      { path: "/detail/:id", element: <Detail shoes={shoes} /> },
      { path: "/runningshoes", element: <RunningShoes /> },
      {
        path: "/event",
        element: <Event />,
        children: [
          { path: "one", element: <One /> },
          { path: "two", element: <Two /> },
        ],
      },
    ],
    { basename: "/" }
  );

  return (
    <div className="App">
      <Top />
      <Menu />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

function RunningShoes() {
  return (
    <div>
      <h1>Runningshoes</h1>
    </div>
  );
}

function Top() {
  return (
    <Container className="my-2" fluid>
      <Row className="text-center">
        <Col>
          <Navbar.Brand href="/">
            <img src="/logo-no-background.png" alt="" className="d-inline-block" width="200" height="124" />
          </Navbar.Brand>
        </Col>
      </Row>
    </Container>
  );
}

function Menu() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="전체카테고리" id="basic-nav-dropdown">
              <NavDropdown.Item href="/runningshoes">운동화</NavDropdown.Item>
              <NavDropdown.Item href="">구두</NavDropdown.Item>
              <NavDropdown.Item href="">부츠/워커</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">SPECIAL</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/runningshoes">운동화</Nav.Link>
            <Nav.Link href="">구두</Nav.Link>
            <Nav.Link href="/event/one">이벤트</Nav.Link>
            <Nav.Link href="">
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

export default App;
