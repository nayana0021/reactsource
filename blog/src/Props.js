function Props(props) {
  // 넘겨받은 값 수정 가능? - 직접 수정이 안됨
  // Cannot assign to read only property 'value'
  //   props.value += " from App.js";

  // 새로운 변수 선언 후 변경
  let props_value = props.value + " from App.js";
  return <div>{props_value}</div>;
}

export default Props;
