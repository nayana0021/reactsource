import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

// react-router-dom 에서 제공하는 링크 이동 방식 : Link, useNavigate()

function Home() {
  let navigate = useNavigate();

  return (
    <div>
      <h1>HOME</h1>
      <p>이곳은 HOME 입니다. 가장 먼저 보여지는 페이지입니다</p>
      <ul>
        <li>
          <a href="/about">about</a>
        </li>
        <li>
          <Link to="/about" className="btn btn-warning mt-3">
            ABOUT
          </Link>
        </li>
        <li>
          <Button variant="primary" onClick={() => navigate("/about")}>
            about 이동
          </Button>
        </li>
      </ul>
    </div>
  );
}

export default Home;
