import "./Content.css";
import { useState } from "react";
// Content3.js 다른 방법
function Content4() {
  // 좋아요
  const [likes, setLikes] = useState([0, 0]);
  // [1,0], [2,0], [2,1]
  const onCrease = (e) => {
    // likes 배열에 들어 있는 값을 개별요소로 꺼내서 새로운 배열 생성 - 원본과 달라야함
    const newLikes = [...likes];

    if (e.target.id == 1) {
      newLikes[0] += 1;
    } else {
      newLikes[1] += 1;
    }
    setLikes(newLikes);
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
            <span onClick={onCrease} id="1">
              👍
            </span>
            {likes[0]}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
      <article>
        <div className="article">
          <h3>
            React 기본문법
            <span onClick={onCrease} id="2">
              👍
            </span>
            {likes[1]}
          </h3>
          <p>2023-08-02</p>
        </div>
      </article>
    </div>
  );
}

export default Content4;
