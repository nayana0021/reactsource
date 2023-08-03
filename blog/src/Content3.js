import "./Content.css";
import { useState } from "react";

function Content() {
  // 첫번째 좋아요
  const [count1, setCount1] = useState(0);
  // 두번째 좋아요
  const [count2, setCount2] = useState(0);

  const onCrease1 = () => {
    setCount1((count) => count + 1);
  };

  const onCrease2 = () => {
    setCount2((count) => count + 1);
  };

  return (
    <div>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      <article>
        <div className="article">
          <h3>
            React 개발환경 설정
            <span onClick={onCrease1}>👍</span> {count1}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
      <article>
        <div className="article">
          <h3>
            React 기본문법
            <span onClick={onCrease2}>👍</span> {count2}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
    </div>
  );
}

export default Content;
