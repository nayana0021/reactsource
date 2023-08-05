// 메뉴 컴포넌트
import { Nav, Navbar, Container } from "react-bootstrap";

function Menu() {
  return (
    <>
      <Navbar expand="lg" bg="danger" variant="dark">
        <Container>
          <Navbar.Brand href="/">React-Movie</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/movie">영화</Nav.Link>
              <Nav.Link href="/theaters">극장</Nav.Link>
              <Nav.Link href="/ticket">예매</Nav.Link>
              <Nav.Link href="/store">스토어</Nav.Link>
              <Nav.Link href="/event">이벤트</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Menu;
