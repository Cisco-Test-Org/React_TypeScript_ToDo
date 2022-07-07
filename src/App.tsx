import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import TODO_LIST from "./db/TodoList";
import Todo from "./model/Todo";


const App = () => {

  const [todoList, setTodoList] = useState(TODO_LIST)

  const addNewTodo = (todo: string) => {
    const todoItem = new Todo(todo)
    setTodoList(prevData => {
      return [...prevData, todoItem]
    })
  }

  const clearAll = () => {
    setTodoList([])
  }

  return (
    <div className="container">
      <h1 className="fw-bold text-primary mt-3">Todo List</h1>
      <AddTodo onAddNewItem={addNewTodo} onClearData={clearAll}/>
      <TodoList list={todoList} />
    </div>
  );
}

export default App;
