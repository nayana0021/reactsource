import { useState, memo } from "react";

function Counter2() {
  const [counter, setCounter] = useState(0);
  //   let counter = 0;

  const increase = () => {
    // counter += 1;
    setCounter(counter + 1);
    console.log(counter);
  };

  const decrease = () => {
    // counter -= 1;
    setCounter(counter - 1);
    console.log(counter);
  };

  return (
    <>
      <h1>{counter}</h1>
      <button onClick={increase}>+1</button>
      <button onClick={decrease}>-1</button>
      <Child />
    </>
  );
}

// memo() : 함수 실행결과 기억하기 (재랜더링해도 다시 호출되지 않음)
let Child = memo(function () {
  console.log("부모가 렌더링 될 때 자식도 렌더링 됨");
  return <div>자식 컴포넌트</div>;
});

export default Counter2;
