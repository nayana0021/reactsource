import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { Navbar, Button, Container, Nav, NavDropdown, Table, Form } from "react-bootstrap";
import Error from "./Error";

// 앱에서 사용할 경로 지정
// http://localhost:3000/
// http://localhost:3000/about
// http://localhost:3000/member
// http://localhost:3000/member/login
// http://localhost:3000/member/register
let router = createBrowserRouter(
  [
    { path: "/", element: <Home />, errorElement: <Error /> },
    { path: "about", element: <About /> },
    // { path: "member", element: <Member /> },
    // { path: "member/login", element: <Login /> },
    // { path: "member/register", element: <Register /> },

    {
      path: "/member",
      element: <Member />,
      children: [
        { path: "login", element: <Login /> },
        { path: "register", element: <Register /> },
      ],
    },
  ],
  { basename: "/" }
);
function Main() {
  return (
    <>
      <NavMenu />
      <RouterProvider router={router} />
    </>
  );
}

// 메뉴 컴포넌트
function NavMenu() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">React-Router</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/member">Member</Nav.Link>
              <Nav.Link href="/member/login">Login</Nav.Link>
              <Nav.Link href="/member/register">Register</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

function Member() {
  const members = [
    { id: 1, username: "velocity", email: "velocity@gmail.com" },
    { id: 2, username: "eclipse", email: "eclipse@gmail.com" },
    { id: 3, username: "tiger", email: "tiger@gmail.com" },
  ];

  return (
    <div className="container mt-3">
      <h1>Member 페이지</h1>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>id</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {members.map((member) => {
            return (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.username}</td>
                <td>{member.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {/* 부모/자식 path 작성 시 자식 페이지를 보여주려면 <Outlet /> 자리에 자식 페이지를 보여줘 하는 것임 */}
      <Outlet />
    </div>
  );
}

function Login() {
  return (
    <div>
      <h3>Login</h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>userid</Form.Label>
          <Form.Control type="text" placeholder="userid" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
      </Form>
    </div>
  );
}

function Register() {
  return (
    <>
      <h3>회원가입</h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>userid</Form.Label>
          <Form.Control type="text" placeholder="userid" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
      </Form>
    </>
  );
}

export default Main;
