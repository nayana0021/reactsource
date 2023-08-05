import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Error from "./Error";
import Movie from "./Movie";
import axios from "axios";
import { useState } from "react";

function App() {
  const [movies, setMovies] = useState(null);

  // 전일자 영화 순위 가져오기
  const getMovie = () => {
    // fetch("정보 가져올 주소",{})
    // .then(데이터가 잘 왔는지 여부, 적절한 타입으로 리턴)
    // .then(데이터 파싱하고 화면에 보여주기)
    // .catch(데이터가 도착하지 않았을 때 처리)

    let url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20230803";
    axios
      .get(url)
      .then((response) => {
        // console.log(response.data);
        // 1~10 영화 가져오기
        const dailyBoxOfficeList = response.data.boxOfficeResult.dailyBoxOfficeList;
        console.log(dailyBoxOfficeList);
        // movies 변수에 1~10 위 데이터가 담기게 됨
        setMovies(dailyBoxOfficeList);
      })
      .catch(() => console.log("오류"));
  };

  // 경로 생성
  let router = createBrowserRouter(
    [
      { path: "/", element: <Home />, errorElement: <Error /> },
      { path: "/movie", element: <Movie getMovie={getMovie} movies={movies} /> },
      {
        path: "/theaters",
        element: (
          <div className="container mt-3">
            <h1>극장</h1>
          </div>
        ),
      },
      {
        path: "/ticket",
        element: (
          <div className="container mt-3">
            <h1>예매</h1>
          </div>
        ),
      },
      {
        path: "/store",
        element: (
          <div className="container mt-3">
            <h1>스토어</h1>
          </div>
        ),
      },
      {
        path: "/event",
        element: (
          <div className="container mt-3">
            <h1>이벤트</h1>
          </div>
        ),
      },
    ],
    { basename: "/" }
  );

  return (
    <div>
      <Menu />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
