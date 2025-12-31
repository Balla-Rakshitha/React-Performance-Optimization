import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTodos } from "../api/todoService";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTodos()
      .then((res) => {
        setTodos(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <h3>Loading Todos...</h3>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>Todo List</h2>

      {todos.slice(0, 20).map((todo) => (
        <div key={todo.id} style={{ marginBottom: "10px" }}>
          <Link to={`/todo/${todo.id}`}>
            <strong>{todo.title}</strong>
          </Link>
          <p>Status: {todo.completed ? "Completed ✅" : "Pending ❌"}</p>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
