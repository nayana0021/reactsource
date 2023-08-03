import Hello from "./Hello";
import Wrapper from "./Wrapper";

function App2() {
  return (
    <div>
      <Wrapper>
        <Hello name="홍길동" color="blue" isSpecial={true} />
        <Hello color="blue" isSpecial />
      </Wrapper>
    </div>
  );
}

export default App2;
