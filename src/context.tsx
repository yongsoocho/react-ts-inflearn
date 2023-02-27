import React, { useState } from "react";

type ContextProps = {
  children: React.ReactNode;
};

type Todo = {
  todo: string;
  color: string;
};

interface IContext {
  todoList: Array<Todo>;
  setTodoList: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}

const TodoContext = React.createContext<IContext>({
  todoList: [],
  setTodoList: () => [],
});

const TodoProvider = ({ children }: ContextProps) => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  return (
    <TodoContext.Provider value={{ todoList, setTodoList }}>
      {children}
    </TodoContext.Provider>
  );
};

export { TodoContext, TodoProvider };
