import { useParams } from "react-router-dom";
import { Container, Row, Col, Table, Form, Button, Alert } from "react-bootstrap";
import { useEffect, useState } from "react";

function Detail(props) {
  const shoes = props.shoes;
  console.log("shoes", shoes);

  // 특별할인 블럭 보여주기
  const [discount, setDiscount] = useState(
    <Col>
      <Alert variant="danger">해당 상품을 3초 이내에 구입 시 특별할인 10%</Alert>
    </Col>
  );

  useEffect(() => {
    // console.log("마운트 시");
    // 마운트 시 실행할 구문

    let timeout = setTimeout(() => {
      // 3초가 지나면 특별할인 블럭 제거
      setDiscount(null); //discount=null
    }, 3000);

    return () => {
      //   console.log("언 마운트 시");
      // 언마운트 시 실행 구문
      clearTimeout(timeout);
    };
  }, []); // [discount] : discount 라는 변수에 변화가 일어나면 언마운트/마운트. 계속 시킬게 아니라면 [] 비우면 된다 -> 화면만 바꿔줌

  // 주소줄에 넘어오는 아이디 가져오기
  const { id } = useParams();
  //   console.log("id", id);
  // id 가 없는 상태라면 컴파일 에러 화면 발생
  // shoes 배열에 id가 존재하느냐? 확인 후 쓰기
  let product = shoes.find((shoe) => shoe.id === parseInt(id));
  let result = undefined;
  if (!product) {
    result = <Row>잘못된 요청입니다</Row>;
  } else {
    result = (
      <>
        <Row>{discount}</Row>
        <Row className="mt-3">
          <Col>
            <img src={product.src} alt={product.src} />
          </Col>
          <Col className="align-self-center">
            <Table>
              <tbody>
                <tr>
                  <td>제품명</td>
                  <td>
                    <b>{product.pname}</b>
                  </td>
                </tr>
                <tr>
                  <td>색상</td>
                  <td>
                    <b>{product.color}</b>
                  </td>
                </tr>
                <tr>
                  <td>가격</td>
                  <td>
                    <b>{product.price}</b>
                  </td>
                </tr>
                <tr>
                  <td>구매수량</td>
                  <td>
                    <Form.Control placeholder="수량" name="amount" value="" />
                  </td>
                </tr>
              </tbody>
            </Table>
            <Button variant="primary" size="lg">
              구매하기
            </Button>
          </Col>
        </Row>
      </>
    );
  }

  return <Container>{result}</Container>;
}

export default Detail;
