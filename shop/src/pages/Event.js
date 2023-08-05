import { Outlet, Link } from "react-router-dom";
import { Stack, Badge } from "react-bootstrap";

function Event() {
  return (
    <div className="mt-5">
      <Stack direction="horizontal" gap={3}>
        <h1 className="mx-3">오늘의 이벤트</h1>
        <h4>
          <Stack direction="horizontal" gap={3}>
            <Link to="/event/one">
              <Badge bg="primary">회원가입</Badge>
            </Link>
            <Link to="/event/two">
              <Badge bg="danger">생일쿠폰</Badge>
            </Link>
          </Stack>
        </h4>
      </Stack>
      <Outlet />
    </div>
  );
}

export default Event;
