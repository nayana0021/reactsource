import "./Content.css";
import { useState } from "react";
import Modal from "./Modal";

function Content5() {
  let articles = [
    { title: "React 개발환경 설정", regdate: "2023-08-01" },
    { title: "React 기본문법", regdate: "2023-08-02" },
    { title: "React props", regdate: "2023-08-03" },
    { title: "React state", regdate: "2023-08-04" },
  ];

  // 좋아요
  const [likes, setLikes] = useState([0, 0, 0, 0]);

  // 모달 상태 변화 관리
  // modal 변수에 false 값 부여(modal 값 변화시킬 때 setModal 사용해야 함)
  const [modal, setModal] = useState(false);

  // 사용자가 어떤 글을 선택했는가?
  const [target, setTarget] = useState(0);

  // input 변화 감지
  const [title, setTitle] = useState("");

  const onChange = (e) => {
    // text 입력 값 가져와서 title 에 대입
    // e.target.value;
    setTitle(e.target.value);
  };

  // 등록 버튼 클릭 시 articles 추가
  const [articleList, setArticle] = useState(articles);
  const onCreate = () => {
    // articles.push({title:"",regdate:""});

    // 작성날짜 구하기
    const todayString = new Date();
    const year = todayString.getFullYear();
    let month = todayString.getMonth() + 1;
    let day = todayString.getDate();

    month = month > 9 ? month : "0" + month;
    day = day > 9 ? day : "0" + day;
    const today = year + "-" + month + "-" + day;

    // 새로 작성한 글에 대해 객체 생성
    const article = { title: title, regdate: today };

    // useState 로 관리하는 변수 업데이트
    // articleList 추가
    setArticle([...articleList, article]);
    // 좋아요 기본 값 추가
    setLikes([...likes, 0]);
    // input text clear
    setTitle("");
  };

  // [1,0], [2,0], [2,1]
  const onCrease = (e) => {
    // likes 배열에 들어 있는 값을 개별요소로 꺼내서 새로운 배열 생성 - 원본과 달라야함
    const newLikes = [...likes];

    articles.map((article, idx) => {
      if (idx === Number(e.target.id)) {
        newLikes[idx] += 1;
      }
    });

    setLikes(newLikes);
  };

  const onDisplayModal = (e) => {
    // modal 값 변경 : true => false, false => true
    if (modal) {
      setModal(false);
    } else {
      setModal(true);
    }

    // 어느 글을 선택했는지 변경
    setTarget(e.target.id);
  };

  return (
    <div>
      <div className="top-nav">
        <h3>My React App</h3>
      </div>
      {articleList.map((article, idx) => {
        return (
          <div className="article" key={idx}>
            <h3 onClick={onDisplayModal} id={idx}>
              {article.title}
            </h3>
            <h3>
              <span onClick={onCrease} id={idx}>
                👍
              </span>
              {likes[idx]}
            </h3>
            <p>{article.regdate}</p>
          </div>
        );
      })}
      {/* 새글 작성 */}
      <div className="post">
        <input type="text" onChange={onChange} value={title} />
        <button type="button" onClick={onCreate}>
          등록
        </button>
      </div>

      {/* modal 값이 true 인 경우만 Modal 컴포넌트 보여주기 : if~else 사용불가 => 삼항연산자 사용 */}
      {modal ? <Modal choice={articles[target]} /> : null}
    </div>
  );
}

export default Content5;
