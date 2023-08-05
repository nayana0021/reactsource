import "./Main.css";
import { Container, Row, Col, Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";

import axios from "axios";

// 컴포넌트에서 이미지 삽입하기
// 1) public 폴더에 이미지 넣기
// 2) css 파일 따로 작성 후 url() => src 폴더에 이미지가 존재하는 경우

function Main(props) {
  // 넘어온 신발 데이터 가져오기
  const shoes = props.shoes;

  return (
    <>
      <div>
        <div className="main-bg"></div>
      </div>
      <Container fluid>
        <Row className="mx-3">
          {shoes.map((shoe) => (
            <Col className="mt-3" md={3} key={shoe.id}>
              <div>
                <img src={shoe.src} alt={shoe.alt} className="img-fluid d-block" />
                <div className="px-3 h6">
                  <p className="small">
                    <a href={"/detail/" + shoe.id}>{shoe.pname}</a>
                  </p>
                  <p className="small">색상 : {shoe.color}</p>
                  <p className="small">가격 : {shoe.price}</p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
        <Row className="mt-3 mx-3">
          <Button
            variant="outline-secondary"
            onClick={() => {
              let url = "https://nayana0021.github.io/product.json";
              axios
                .get(url)
                .then((response) => {
                  console.log(response.data);
                })
                .catch(() => {
                  console.log("오류 발생");
                });
            }}
          >
            더보기.....
          </Button>
        </Row>
      </Container>
    </>
  );
}

export default Main;
