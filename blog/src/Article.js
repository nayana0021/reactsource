function Article(props) {
  return (
    <article>
      <h2 style={{ color: props.color }}>Welcome</h2>
      Hello, {props.name}
    </article>
  );
}

export default Article;
