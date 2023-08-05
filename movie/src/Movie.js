import { Button, Col, Container, Row, Table } from "react-bootstrap";

function Movie(props) {
  // 구조 분해 할당(나눠받을거라는 의미)
  const { getMovie, movies } = props;

  // 어제 날짜 구하기
  const today = new Date();
  const yesterdayString = new Date(today.setDate(today.getDate() - 1));

  const year = yesterdayString.getFullYear();
  let month = yesterdayString.getMonth() + 1;
  let date = yesterdayString.getDate();

  month = month > 9 ? month : "0" + month;
  date = date > 9 ? date : "0" + date;
  const yesterday = year + "-" + month + "-" + date;

  // 도착한 1~10 정보 화면에 보여주기
  let displayData = null;
  if (movies) {
    displayData = (
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr className="text-center">
            <th>순위</th>
            <th>증감</th>
            <th>영화명</th>
            <th>개봉일</th>
            <th>관객수</th>
            <th>누적관객수</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, idx) => (
            <tr key={idx}>
              <td className="text-center">{movie.rank}</td>
              <td className="text-center">{movie.rankInten}</td>
              <td>{movie.movieNm}</td>
              <td className="text-center">{movie.openDt}</td>
              <td className="text-end">{movie.audiCnt}</td>
              <td className="text-end">{movie.audiAcc}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  } else {
    displayData = <h1>데이터가 없습니다.</h1>;
  }

  return (
    <div>
      <Container className="mt-5">
        <Row>
          <Col xs={10}>
            <Button className="mb-2" variant="outline-primary" onClick={getMovie}>
              영화 순위 가져오기
            </Button>
          </Col>
          <Col>
            <input type="date" className="form-control" value={yesterday} />
          </Col>
        </Row>
        {displayData}
      </Container>
    </div>
  );
}

export default Movie;
