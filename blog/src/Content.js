import "./Content.css";

function Content() {
  return (
    <div>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      <article>
        <div className="article">
          <h3>React 개발환경 설정</h3>
          <p>2023-08-02</p>
        </div>
      </article>
      <article>
        <div className="article">
          <h3>React 기본문법</h3>
          <p>2023-08-02</p>
        </div>
      </article>
    </div>
  );
}

export default Content;
