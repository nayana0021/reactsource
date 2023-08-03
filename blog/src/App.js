import Header from "./Header";
import Navigator from "./Navigator";
import Article from "./Article";
import Hello from "./Hello";
import Props from "./Props";

function App() {
  const topics = [
    { id: 1, title: "html", body: "html이란" },
    { id: 2, title: "css", body: "css 란" },
    { id: 3, title: "javascript", body: "javascript란" },
  ];

  const changeMode = () => alert("Header 클릭");

  return (
    <div>
      <Header title="WEB 구성요소" onClick={changeMode} />
      <Navigator topics={topics} onChangeMode={(id) => alert(id)} />
      <Article name="react" color="red" />
      <Hello name="홍길동" color="blue" />
      <Hello color="blue" />
      <Hello />
      <Props value="THIS IS PROPS" />
    </div>
  );
}

export default App;
