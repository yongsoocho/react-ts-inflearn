import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");

  return (
    <div className="App">
      <div style={{ boxSizing: "border-box", padding: "32px" }}>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
          }}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            style={{ marginRight: "16px" }}
          />
          <button type="submit">추가</button>
        </form>
      </div>
    </div>
  );
}

export default App;
