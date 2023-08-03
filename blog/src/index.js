import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import App from "./App";
import App2 from "./App2";
import App3 from "./App3";
import Content2 from "./Content2";
import Animal from "./Animal";
import Content from "./Content3";
import Content4 from "./Content4";
import InputSample from "./InputSample";
import InputSample2 from "./InputSample2";
import Content5 from "./Content5";

// import Content from "./Content";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Content /> */}
    {/* <App /> */}
    {/* <App2 /> */}
    {/* <App3></App3> */}
    {/* <Content2></Content2> */}
    {/* <Animal></Animal> */}
    {/* <Content4 /> */}
    {/* <InputSample /> */}
    {/* <InputSample2 /> */}
    <Content5 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
