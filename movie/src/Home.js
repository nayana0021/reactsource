import { Col, Container, Row } from "react-bootstrap";

function Home() {
  return (
    <>
      <Container className="my-3">
        <h2 className="border-bottom border-dark pb-2">현재 상영중</h2>
        <Row className="mt-3">
          <Col>
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87175/87175_320.jpg" alt="" class="img-fluid w-100" />
          </Col>
          <Col>
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87149/87149_320.jpg" alt="" class="img-fluid" />
          </Col>
          <Col>
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87046/87046_320.jpg" alt="" class="img-fluid" />
          </Col>
          <Col>
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87181/87181_320.jpg" alt="" class="img-fluid" />
          </Col>
          <Col>
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87136/87136_320.jpg" alt="" class="img-fluid" />
          </Col>
        </Row>
        <Row className="mt-3">
          <Col>
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87034/87034_320.jpg" alt="" class="img-fluid" />
          </Col>
          <Col>
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87154/87154_320.jpg" alt="" class="img-fluid" />
          </Col>
          <Col>
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87200/87200_320.jpg" alt="" class="img-fluid" />
          </Col>
          <Col>
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000087/87193/87193_320.jpg" alt="" class="img-fluid" />
          </Col>
          <Col>
            <img src="https://img.cgv.co.kr/Movie/Thumbnail/Poster/000086/86720/86720_320.jpg" alt="" class="img-fluid" />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
