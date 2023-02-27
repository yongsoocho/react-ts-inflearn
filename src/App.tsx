import React, { useState } from "react";
import "./App.css";
import Card from "./Card";

type Todo = {
  todo: string;
  color: string;
};

function App(): React.ReactElement<{}> {
  const [todo, setTodo] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <div className="App">
      <div style={{ boxSizing: "border-box", padding: "32px" }}>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();

            setTodoList((oldTodoList) => [
              ...oldTodoList,
              {
                todo,
                color: "#" + Math.floor(Math.random() * 16700000).toString(16),
              },
            ]);
            setTodo(() => "");
          }}
        >
          <input
            value={todo}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setTodo(e.target.value)
            }
            style={{ marginRight: "16px" }}
          />
          <button type="submit">추가</button>
        </form>
      </div>

      <div
        style={{
          position: "relative",
          boxSizing: "border-box",
          padding: "24px",
        }}
      >
        {todoList.map(({ todo, color }) => (
          <Card todo={todo} randomColor={color} key={todo} />
        ))}
      </div>
    </div>
  );
}

export default App;
