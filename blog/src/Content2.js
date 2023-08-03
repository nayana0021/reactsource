import "./Content.css";
import { useState } from "react";

function Content2() {
  // let flag = true;
  const [flag, setflag] = useState(true);
  let posts = null;
  if (flag) {
    posts = (
      <article>
        <div className="article">
          <h3>React 개발환경 설정</h3>
          <p>2023-08-02</p>
        </div>
      </article>
    );
  } else {
    posts = (
      <article>
        <div className="article">
          <h3>React 기본문법</h3>
          <p>2023-08-02</p>
        </div>
      </article>
    );
  }

  return (
    <div>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      <article>{posts}</article>
      <button
        onClick={() => {
          // flag 값 변경 false로 변경
          // flag = flag ? false : true;
          setflag(!flag);
          console.log(flag);
        }}
      >
        클릭하세요
      </button>
    </div>
  );
}

export default Content2;
