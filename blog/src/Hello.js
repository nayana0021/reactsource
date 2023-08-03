function Hello({ name, color, isSpecial }) {
  console.log(name, color);
  // isSpecial 이 true 라면 *
  //              false 라면 null
  // return 안에서 if 문 안됨 => 삼항연산자는 가능 (function 안에서는 가능 리턴문 안에서만 불가능)
  return (
    <h1 style={{ color: color }}>
      {isSpecial ? <b>* </b> : null}
      안녕하세요 {name}
    </h1>
  );
}

// defaultProps : 기본값 설정
Hello.defaultProps = {
  name: "이름없음",
  color: "orange",
};

export default Hello;
