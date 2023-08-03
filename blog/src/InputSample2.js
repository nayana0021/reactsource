import { useState } from "react";

function InputSample2() {
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
  };

  return (
    <>
      <div>
        <input type="text" name="name" placeholder="이름" onChange={onChange} />
      </div>
      <div>
        <input type="text" name="nickname" placeholder="닉네임" onChange={onChange} />
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

export default InputSample2;
