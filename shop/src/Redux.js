import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Table } from "react-bootstrap";
import { changeAge, changeName } from "./store/userSlice";
export default function Redux() {
  // store.js 사용하기
  let user = useSelector((state) => {
    // state 에는 모든 reducer 이 들어와 있음
    return state;
  });

  //user 라는 변수에 담았기 때문에 사용하려면 user 라는 변수로 접근한다
  console.log(user);
  console.log(user.user);
  console.log(user.stock);

  let carts = user.carts;
  const dispatch = useDispatch();

  return (
    <Container className="mt-5">
      <h3>
        {user.user.name} : {user.user.age} 장바구니 -{" "}
        <Button size="sm" onClick={() => dispatch(changeName())}>
          이름변경
        </Button>
        <Button size="sm" onClick={() => dispatch(changeAge(100))}>
          나이변경
        </Button>
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>아이디</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
          </tr>
        </thead>
        <tbody>
          {/* 괄호로하면 리턴문 생략하고 쓴다 */}
          {/* {carts.map((cart, idx) => (
            <tr>
              <td>{cart.id}</td>
              <td>{cart.name}</td>
              <td>{cart.count}</td>
              <td>
                <Button size="sm">변경</Button>
              </td>
            </tr>
          ))} */}
          {/* 중괄호로 시작하게되면 반드시 리턴으로 해줘야함 */}
          {carts.map((cart, idx) => {
            return (
              <tr>
                <td>{cart.id}</td>
                <td>{cart.name}</td>
                <td>{cart.count}</td>
                <td>
                  <Button size="sm">변경</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
}
