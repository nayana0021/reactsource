import { useDispatch, useSelector } from "react-redux";
import { addCount, subCart, subTractCount } from "./../store";
import { Container, Table, Button, Stack } from "react-bootstrap";

function Cart() {
  const dispatch = useDispatch();

  // store 저장된 state 가져오기
  const user = useSelector((state) => {
    return state;
  });

  const carts = user.carts;

  return (
    <Container className="my-5">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>아이디</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {carts.map((cart, idx) => (
            <tr key={idx} className="align-middle">
              <td>{idx + 1}</td>
              <td>{cart.name}</td>
              <td>{cart.count}</td>
              <td>
                <Stack direction="horizontal" gap={2}>
                  <Button size="sm" variant="warning" onClick={() => dispatch(addCount(cart.id))}>
                    +
                  </Button>
                  <Button size="sm" variant="primary" onClick={() => dispatch(subTractCount(cart.id))}>
                    -
                  </Button>
                </Stack>
              </td>
              <td>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => {
                    if (window.confirm("해당 상품을 장바구니에서 삭제하시겠습니까?")) {
                      dispatch(subCart(cart.id));
                    }
                  }}
                >
                  X
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default Cart;
