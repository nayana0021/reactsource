import { useEffect, useState } from "react";

// useEffect : 컴포넌트 라이프 사이클을 이용한 작업 필요시
// 라이프 사이클 : 1) 컴포넌트 마운트 : 컴포넌트가 처음에 보여지는 시점
//              2)       언마운트 : 컴포넌트가 제거되는 시점
//              3)       업데이트 : useState()

// 화면에 업데이트가 되어야 하는 상황이 발생하면 기존 화면 제거(언마운트)
// 변경된 화면 보여주기(마운트)
function Life() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    console.log("마운트 시");

    // 함수등록 :1초가 지나면 안녕 alert 창 띄우기
    const timeout = setTimeout(() => {
      alert("안녕");
    }, 1000);

    return () => {
      console.log("언마운트 시");
      // 등록했던 함수 제거
      clearTimeout(timeout);
    };
  }, []); // [flag, count] : flag or count 변수 중에서 하나라도 변경이 일어난다면 useEffect 처음부터 다시 해줘 의미.. / 비어있으면 처음 한번만 실행됨

  return (
    <>
      <div>컴포넌트 라이프 사이클 : {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        버튼클릭
      </button>
    </>
  );
}

export default Life;
