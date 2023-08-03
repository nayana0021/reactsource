import "./Modal.css";

function Modal(props) {
  // 어떤 속성값들이 넘어왔는가?
  console.log(props.choice);
  const choiceArticle = props.choice;

  return (
    <div className="modal">
      <h4>{choiceArticle.title}</h4>
      <p>{choiceArticle.regdate}</p>
      <p>상세내용</p>
    </div>
  );
}

export default Modal;
