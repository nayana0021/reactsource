import { useState } from "react";

function Animal() {
  // 상태변화 관리 변수 ==> useState()
  // btn : true, false
  // src : "./img/bambi.png", "./img/dog1.jpg"
  // button 이 클릭되면 button : false, src : "./img/dog1.jpg"
  // button 이 클릭되면 button : true, src : "./img/bambi.png"

  const [btn, setBtn] = useState(true);
  const [src, setSrc] = useState("../img/bambi.png");

  const onToggle = () => {
    if (btn) {
      setBtn(false);
      setSrc("../img/dog1.jpg");
    } else {
      setBtn(true);
      setSrc("../img/bambi.png");
    }
  };

  return (
    <>
      <img src={src} alt="" />
      <div>
        <button onClick={onToggle}>사진 변경</button>
      </div>
    </>
  );
}

export default Animal;
