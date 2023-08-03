export default function Header(props) {
  return (
    <header>
      <h1>
        <a href="/" onClick={props.onClick}>
          {props.title}
        </a>
      </h1>
    </header>
  );
}
