import { useState, useRef } from "react";
// useRef : 특정 DOM의 요소 선택, 스크롤바 위치, 포커스 설정 이런 작업을 필요로 할 때
//          리렌더링 할 때마다 요소를 찾는게 아니라 한번 찾아놓은 걸로 사용할 수 있게 함

function InputSample3() {
  const nameInput = useRef();

  const [inputs, setInputs] = useState({ name: "", nickname: "" });

  const { name, nickname } = inputs;
  const onChange = (e) => {
    // value 추출하기
    const { value, name } = e.target;
    // 추출된 변수로 값 변경
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const onReset = () => {
    setInputs({
      name: "",
      nickname: "",
    });

    // name 란에 focus 주기
    // nameInput.current : 해당 요소 가져옴
    nameInput.current.focus();
  };

  return (
    <>
      <div>
        <input type="text" name="name" placeholder="이름" onChange={onChange} value={name} ref={nameInput} />
      </div>
      <div>
        <input type="text" name="nickname" placeholder="닉네임" onChange={onChange} value={nickname} />
      </div>
      <button onClick={onReset}>초기화</button>
      <div>
        <b>
          입력값 {name}: {nickname}
        </b>
      </div>
    </>
  );
}

export default InputSample3;
