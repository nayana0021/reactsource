function Wrapper({ children }) {
  const style = {
    border: "2px solid black",
    padding: "20px",
  };
  return <div style={style}>{children}</div>;
}

export default Wrapper;
