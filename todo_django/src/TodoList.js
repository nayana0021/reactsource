import { useEffect, useState } from "react";
import axios from "axios";

function TodoList() {
  // 장고에서 받아온 todo list 담을 변수
  const [todolist, setTodo] = useState([]);

  // 장고서버에서 todo 가져오기
  useEffect(() => {
    // 컴포넌트가 로드된 후 실행해야 할 작업
    axios.get("http://127.0.0.1:8000/todo/").then((response) => {
      console.log(response.data);
      if (response.data) setTodo(response.data);
    });
  }, []);

  return (
    <div className="container">
      <h3>ToDo</h3>
      <div class="row my-3">
        <div class="col-auto mr-auto">
          <a href="" class="btn btn-success">
            <i class="bi-plus"></i>Add ToDo
          </a>
        </div>
        <div class="col-auto">
          <a href="{% url 'done_list' %}" class="btn btn-primary">
            완료한 ToDo 목록
          </a>
        </div>
      </div>
      <table class="table">
        <tbody>
          {todolist.map((todo) => (
            <tr key={todo.id}>
              <th class="align-middle">
                <a href="">{todo.title}</a>
                {todo.important ? <span class="badge text-bg-danger">!</span> : ""}
              </th>
              <td class="text-right">
                <a href="" class="btn btn-danger">
                  완료
                </a>
                <a href="" class="btn btn-outline-primary">
                  수정
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
